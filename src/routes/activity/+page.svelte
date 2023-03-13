<script lang="ts">
  import { YandexMetrikaHit } from 'daks-svelte';
  import { ActivityCard, ProjectsCarousel } from '$lib/components';

  import { nav } from '$configs';
  const activity = Object.values(nav.navbar.links).find((el) => el.href === '/activity');

  import type { PageData } from './$types';
  export let data: PageData;
  const { projects } = data;

  export let show = (x: number) => (x < 480 && 1) || (x < 640 && 2) || 3;

  const title = 'ГК ССК • Направления деятельности';
  const description = 'Направления деятельности группы компаний «ССК»';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Направления деятельности</h1>
  </header>

  {#if activity?.links?.length}
    <div
      class="
        content mb-8
        flex flex-wrap justify-around gap-8">
      {#each activity.links as { href, label }}
        <ActivityCard
          class="
            w-96 aspect-video drop-shadow-deep
            hover:drop-shadow-md hover:bg-slate-300/25"
          href="/activity{href}">
          <h4
            slot="title"
            class="h-12 text-accent text-center">
            {@html label}
          </h4>
        </ActivityCard>
      {/each}
    </div>
  {/if}

  <ProjectsCarousel
    class="
      content
      rounded-md overflow-hidden
      drop-shadow-md hover:drop-shadow-none"
    custom={{
      progress: 'top-0'
    }}
    {projects}
    {show}
    duration={15000}
    controls="play move wheel"
    progress
    stream
    check />
</main>
