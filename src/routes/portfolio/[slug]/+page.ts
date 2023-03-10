import { error } from '@sveltejs/kit';

export const prerender = 'auto';

import type { PageLoad } from './$types';
export const load: PageLoad = async ({ /*parent,*/ data, params }) => {
  if (/^\d\d\d$/.test(params.slug)) {
    try {
      // await parent();
      // const { project, customer } = data
      const promise = await import(`../../../lib/content/portfolio/${params.slug}/images.ts`);
      const images = promise.images;
      const thumbnails = promise.thumbnails;
      return {
        ...data,
        images,
        thumbnails
      };
    } catch {
      throw error(404, 'Not found [images]');
    }
  }
  throw error(404, 'Not found');
};
