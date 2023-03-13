import { error } from '@sveltejs/kit';
import { getPartner, getProject, getProjects } from '$lib/shared/sql/sqlite3';

// export const prerender = 'auto';

import type { PageServerLoad } from './$types';
export const load: PageServerLoad = ({ params }) => {
  if (/^\d\d\d$/.test(params.slug)) {
    const id = Number(params.slug);
    const project = getProject(id);
    if (project) {
      const projects = getProjects();
      const idx = projects.reduce((res, el, idx) => {
        if (el.id === id) res = idx;
        return res;
      }, 0);
      const next = projects[idx < projects.length -1 ? idx + 1 : 0];
      const prev = projects[idx > 0 ? idx - 1 : projects.length -1];
      const customer = project.customer && getPartner(project.customer)
      return {
        project,
        next: {
          id: next.id,
          name: next.name
        },
        prev: {
          id: prev.id,
          name: prev.name
        },
        customer: customer && {
          id: customer.id,
          name: customer.name
        }
      };
    }
    throw error(404, 'Not found [data]');
  }
  throw error(404, 'Not found');
};
