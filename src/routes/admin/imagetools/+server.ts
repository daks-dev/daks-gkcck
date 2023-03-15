import { DEV } from 'esm-env';
import { json } from '@sveltejs/kit';
import { imagetools } from 'daks-svelte/server';

const variants = imagetools.variants();
const data: any = {};

if (DEV) {
  imagetools.generate.index('lib/content/portfolio', variants.gallery, 1);
  data.portfolio = imagetools.generate.entry('lib/content/portfolio', {
    images: 'w=1280&h=720&webp',
    thumbnails: 'w=320&h=180&webp'
  });
  data.permissions = imagetools.generate('lib/content/permissions', variants.sources);
  data.partners = imagetools.generate('lib/content/partners', {
    sources: 'w=320&background=white&webp',
    squares: 'w=320&h=320&fit=contain&background=white&webp'
  });
}

export const prerender = false;

export const GET = async () => json(data);
