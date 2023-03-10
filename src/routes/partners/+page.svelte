<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit, Figure, Gallery } from 'daks-svelte';
  import { squares as images } from '$lib/content/partners/images';

  import type { PageData } from './$types';
  export let data: PageData;
  const { partners } = data;

  const title = 'ГК ССК • Партнёры';
  const description = 'Партнёры группы компаний «ССК»';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Партнёры</h1>
  </header>

  <div class="wrapper flex flex-wrap gap-2 justify-center">
    {#each partners as { id, name, projects, hidden }}
      {@const image = images[id - 1]}
      {@const data = { ...image, subtitle: projects ? `${projects}` : undefined }}
      {#if !hidden}
        <a
          class="group"
          href={`/partners/${id.toString().padStart(3, '0')}`}>
          <Figure
            class="drop-shadow hover:drop-shadow-md"
            custom={{
              caption: `
              absolute bottom-1 left-1 py-1 px-2 w-8 h-8 
              flex flex-col justify-center items-center
              rounded text-white bg-gray-700/30`
            }}
            {data} />
        </a>
      {/if}
    {/each}
  </div>
</main>
