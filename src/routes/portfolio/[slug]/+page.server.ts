import { error } from '@sveltejs/kit';
import { getProject, getPartner } from '$lib/shared/sql/sqlite3';

// export const prerender = 'auto';

import type { PageServerLoad } from './$types';
export const load: PageServerLoad = ({ params }) => {
  if (/^\d\d\d$/.test(params.slug)) {
    try {
      const project = getProject(Number(params.slug));
      return {
        project,
        customer: project.customer && getPartner(project.customer)
      };
    } catch {
      throw error(404, 'Not found [data]');
    }
  }
  throw error(404, 'Not found');
};
