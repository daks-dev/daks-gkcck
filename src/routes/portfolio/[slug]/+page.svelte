<script lang="ts">
  import { LightboxKit, YandexMetrikaHit, YandexMap } from 'daks-svelte';
  import List from '$lib/components/list/List.svelte';
  // import Aside from './Aside.svelte';
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

  <List
    base="/portfolio"
    {next}
    {prev} />

  <div
    class="
      content mb-12
      flex -md:flex-col justify-around gap-8">
    <Data
      {project}
      {customer} />

    <!--Aside
      {images}
      {thumbnails} /-->

    <LightboxKit
      tag="aside"
      class="flex flex-col items-center gap-8 min-w-fit"
      custom={{ overlay: 'overflow-offset' }}
      options={{ behaviour: 'loop' }}
      {images}
      {thumbnails}
      sign
      centered
      rounded
      shadow
      scale />
  </div>

  <div class="md:content">
    <YandexMap
      class="overflow-hidden
        h-[40vmax] border-t-4 border-slate-400
        md:h-auto md:aspect-[5/2] md:border-4"
      data={geodata} />
  </div>
</main>
