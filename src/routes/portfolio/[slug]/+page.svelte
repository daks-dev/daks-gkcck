<script lang="ts">
  import { YandexMetrikaHit, Figure, LightboxKit, YandexMap } from 'daks-svelte';
  import { Sign } from '$lib/components';
  import { sources as logotypes } from '$lib/content/partners/images';

  import microdata from '$configs/microdata';
  const { logo } = microdata.organization;

  import type { PageData } from './$types';
  export let data: PageData;
  const { project, customer, images, thumbnails } = data;
  const {
    name,
    address,
    area,
    area_term,
    area_unit,
    units,
    units_term,
    scope,
    scope_term,
    activities,
    location,
    note,
    title,
    description
  } = project;

  const geometry = location.split(', ').map((x: string) => Number(x));

  const geomap = {
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
  class="mb-0 min-h-screen"
  itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">{name}</h1>
  </header>

  <div
    class="
      wrapper mb-8
      flex -md:flex-col justify-around gap-8">
    <div class="flex flex-col gap-4 md:gap-8">
      <dl class="flex flex-col gap-y-4">
        {#if address}
          <div class="flex gap-x-2">
            <dt class="font-semibold text-slate-500">Адрес:</dt>
            <dd class="flex grow">{address}</dd>
          </div>
        {/if}
        {#if area}
          <div class="flex gap-x-2">
            <dt class="font-semibold text-slate-500">
              {area_term || 'Общая площадь'}:
            </dt>
            <dd>
              {area.toLocaleString()}
              {@html area_unit || 'м<sup>2</sup>'}
            </dd>
          </div>
        {/if}
        {#if units}
          <div class="flex gap-x-2">
            <dt class="font-semibold text-slate-500">
              {units_term || 'Корпусов'}:
            </dt>
            <dd>{units}</dd>
          </div>
        {/if}
        {#if scope}
          <div class="flex gap-x-2">
            <dt class="font-semibold text-slate-500">{scope_term || 'Этажность'}:</dt>
            <dd>{scope}</dd>
          </div>
        {/if}
        {#if activities}
          <div class="flex gap-x-2">
            <dt class="font-semibold text-slate-500">Виды работ:</dt>
            <dd class="accent">{activities}</dd>
          </div>
        {/if}
        {#if note}
          <div>{note}</div>
        {/if}
      </dl>

      {#if customer}
        <a
          class="relative w-fit group hover:drop-shadow-md"
          href="/partners/{customer.id.toString().padStart(3, '0')}">
          <Sign class="absolute z-10 left-full top-0 ml-1" />
          <Figure
            class="hidden md:flex "
            custom={{ image: 'border border-slate-400 drop-shadow' }}
            data={logotypes[customer.id - 1]} />
          <h2
            class="md:hidden text-cyan-700 dark:text-cyan-700">
            {customer.name}
          </h2>
        </a>
      {:else}
        <img
          class="h-24 sm:h-32 md:h-40 w-auto max-w-none drop-shadow--deep"
          src={logo}
          alt="" />
      {/if}
    </div>

    <LightboxKit
      class="flex-col items-center gap-8"
      custom={{ overlay: 'overflow--offset' }}
      options={{ behaviour: 'loop' }}
      {images}
      {thumbnails}
      rounded
      shadow
      scale />
  </div>

  <YandexMap
    class="mt-auto w-full h-[40vmax] lg:h-[40vh] border-t-4 border-slate-200 dark:border-slate-800"
    data={geomap} />
</main>
