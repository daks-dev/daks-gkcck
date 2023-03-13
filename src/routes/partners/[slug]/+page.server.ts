import { error } from '@sveltejs/kit';
import { getOrders, getPartner, getPartners } from '$lib/shared/sql/sqlite3';

// export const prerender = 'auto';

import type { PageServerLoad } from './$types';
export const load: PageServerLoad = ({ params }) => {
  if (/^\d\d\d$/.test(params.slug)) {
    const id = Number(params.slug);
    const partner = getPartner(id);
    if (partner) {
      const partners = getPartners();
      const idx = partners.reduce((res, el, idx) => {
        if (el.id === id) res = idx;
        return res;
      }, 0);
      const next = partners[idx < partners.length -1 ? idx + 1 : 0];
      const prev = partners[idx > 0 ? idx - 1 : partners.length -1];
      // const projects = getOrders(partner.id);
      // DB.prepare('UPDATE partners SET projects = ? WHERE id = ?').run(orders.length, partner.id)
      return {
        partner,
        next: {
          id: next.id,
          name: next.name
        },
        prev: {
          id: prev.id,
          name: prev.name
        },
        projects: getOrders(partner.id)
      };
    }
    throw error(404, 'Not found [data]');
  }
  throw error(404, 'Not found');
};
