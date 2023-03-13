<script lang="ts">
  import {
    Figure,
    LightboxList,
    LightboxModal,
    LightboxThumbnail
  } from 'daks-svelte';
  import { Sign } from '$lib/components';
  import type { DataImage } from 'daks-svelte/types';

  export let images: DataImage[];
  export let thumbnails: DataImage[];
</script>

<LightboxList
  tag="aside"
  class="flex flex-wrap justify-end gap-8 grow"
  custom={{ overlay: 'overflow--offset' }}
  options={{ behaviour: 'loop' }}
  loader={() => document?.lazyload.update()}>
  <svelte:fragment slot="thumbnail">
    {#each thumbnails as data, idx}
      <LightboxThumbnail class="relative group h-fit">
        <Sign
          class="top-2 left-2"
          icon="ic:round-zoom-out-map"
          dark />
          <!--
          shadow-md hover:shadow-lg shadow-slate-700 dark:shadow-slate-400
          hover:shadow-slate-800 dark:hover:shadow-slate-500
          -->
        <Figure
          class="flex flex-col items-center"
          custom={{
            image: `
              rounded drop-shadow-md
              hover:drop-shadow-deep hover:scale-105
              transition duration-500 ease-in-out`,
            caption: 'flex flex-col mt-2 pt-2'
           }}
           {data} />
        <link
          rel="image"
          href={images[idx].src} />
        <link
          rel="thumbnailUrl"
          href={thumbnails[idx].src} />
      </LightboxThumbnail>
    {/each}
  </svelte:fragment>
  {#each images as { src, width, height, title, subtitle, description }, idx}
    <LightboxModal
      {title}
      {subtitle}
      {description}>
      <img
        class="bg-no-repeat bg-center bg-1/10 bg-loading"
        {src}
        {width}
        {height}
        alt=""
        decoding="async"
        loading="lazy" />
    </LightboxModal>
  {/each}
</LightboxList>
