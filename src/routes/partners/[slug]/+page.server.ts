import { error } from '@sveltejs/kit';
import { getOrders, getPartner } from '$lib/shared/sql/sqlite3';

// export const prerender = 'auto';

import type { PageServerLoad } from './$types';
export const load: PageServerLoad = ({ params }) => {
  if (/^\d\d\d$/.test(params.slug)) {
    const partner = getPartner(Number(params.slug));
    if (partner) {
        const projects = getOrders(partner.id);
        // DB.prepare('UPDATE partners SET projects = ? WHERE id = ?').run(orders.length, partner.id)
      return {
        partner,
        projects
      };
    }
    else throw error(404, 'Not found [data]');
  }
  throw error(404, 'Not found');
};
