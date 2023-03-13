<script lang="ts">
  import { onMount } from 'svelte';
  import { Figure, Icon, YandexMetrikaHit } from 'daks-svelte';
  import { ProjectsList } from '$lib/components';
  import { sources as logotypes } from '$lib/content/partners/images';

  import type { PageData } from './$types';
  export let data: PageData;

  const { partner, next, prev, projects } = data;
  const {
    id,
    name,
    email,
    telephone,
    address,
    url,
    title,
    description,
    center,
    zoom
  } = partner;

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  title="ГК ССК • {title || name}"
  description={description || `ГК ССК : ${title || name}`} />

<main itemprop="mainContentOfPage">
  <header class="content mb-1">
    <h1 class="title">{name}</h1>
  </header>

  <div
    class="content mb-2 flex gap-16 text-accent">
    <a
      class="p-2 hover:text-sky-600 hover:drop-shadow-deep"
      href="/partners/{prev.id.toString().padStart(3, '0')}"
      title={prev.name}>
      <Icon
        class="w-8 h-8"
        icon="ic:round-forward"
        hFlip />
    </a>
    <a
      class="p-2 hover:text-sky-600 hover:drop-shadow-deep"
      href="/partners/{next.id.toString().padStart(3, '0')}"
      title={next.name}>
      <Icon
        class="w-8 h-8"
        icon="ic:round-forward" />
    </a>
  </div>

  <div class="content flex -sm:flex-col gap-8">
    <Figure
      class="shrink-0"
      custom={{ image: 'border border-slate-400 drop-shadow' }}
      data={logotypes[id - 1]} />
    <div class="space-y-4">
      <div class="flex gap-4 items-center">
        <Icon
          class="shrink-0 w-8 h-8 text-cyan-700"
          icon="ic:outline-location-on">
          адрес
        </Icon>
        {@html address || '&mdash;'}
      </div>
      <div class="flex gap-4 items-center">
        <Icon
          class="shrink-0 w-8 h-8 text-cyan-700"
          icon="ic:round-phone-android">
          телефон
        </Icon>
        {@html telephone || '&mdash;'}
      </div>
      <div class="flex gap-4 items-center">
        <Icon
          class="shrink-0 w-8 h-8 text-cyan-700"
          icon="ic:round-alternate-email">
          электронная почта
        </Icon>
        {@html email || '&mdash;'}
      </div>
      <div class="flex gap-4 items-center">
        <Icon
          class="shrink-0 w-8 h-8 text-cyan-700"
          icon="ic:round-link">
          сайт
        </Icon>
        {@html url || '&mdash;'}
      </div>
    </div>
  </div>

  {#if projects.length}
    <hr class="content my-8" />
    <ProjectsList
      {projects}
      zoom={zoom || undefined}
      center={center || undefined} />
  {/if}
</main>
