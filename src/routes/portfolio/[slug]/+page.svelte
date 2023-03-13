<script lang="ts">
  import { Icon, YandexMetrikaHit, YandexMap } from 'daks-svelte';
  import Aside from './Aside.svelte';
  import Data from './Data.svelte';

  import type { PageData } from './$types';
  export let data: PageData;
  const { project, next, prev, customer, images, thumbnails } = data;
  const { name, location, title, description } = project;

  const geometry = location.split(', ').map((x: string) => Number(x));

  const geodata = {
    locations: [
      {
        geometry,
        properties: {
          iconContent: `<strong class="truncate">${name}</strong>`
        },
        options: {
          preset: 'islands#nightStretchyIcon'
        }
      }
    ],
    state: {
      center: geometry,
      zoom: 16,
      behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch'],
      controls: ['zoomControl', 'fullscreenControl']
    },
    options: {
      suppressMapOpenBlock: true
    }
  };
</script>

<YandexMetrikaHit
  title="ГК ССК • {title || name}"
  description={description || `ГК ССК : ${title || name}`} />

<main
  class="-md:mb-0"
  itemprop="mainContentOfPage">
  <header class="content mb-1">
    <h1 class="title">{name}</h1>
  </header>

  <div
    class="content flex gap-16 text-accent">
    <a
      class="py-2 hover:text-sky-600 hover:drop-shadow-deep"
      href="/portfolio/{prev.id.toString().padStart(3, '0')}"
      title={prev.name}>
      <Icon
        class="w-8 h-8 shrink-0"
        icon="ic:round-forward"
        hFlip />
    </a>
    <a
      class="py-2 hover:text-sky-600 hover:drop-shadow-deep"
      href="/portfolio/{next.id.toString().padStart(3, '0')}"
      title={next.name}>
      <Icon
        class="w-8 h-8 shrink-0"
        icon="ic:round-forward" />
      </a>
  </div>

  <div
    class="
      content mb-12
      flex -md:flex-col justify-around gap-8">
    <Data
      {project}
      {customer} />

    <Aside
      {images}
      {thumbnails} />
  </div>

  <div class="md:content">
    <YandexMap
      class="overflow-hidden
        h-[40vmax] border-t-4 border-slate-400
        md:h-auto md:aspect-[5/2] md:border-4"
      data={geodata} />
  </div>
</main>
