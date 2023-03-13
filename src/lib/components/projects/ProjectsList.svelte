<script lang="ts">
  import { blur, fade } from 'svelte/transition';
  import { sineIn, sineOut } from 'svelte/easing';
  import { beforeUpdate, afterUpdate } from 'svelte';
  import { scroll, Icon, Figure } from 'daks-svelte';
  import { Sign, YandexMap } from '$lib/components';
  import { squares as images } from '$lib/content/portfolio/images';

  export let projects: Project[];
  export let mode = 0;

  export let center: undefined | string = undefined;
  export let zoom = 10;
  // (x: number) => (x < 768 && 10) || (x < 1024 && 10.3) || (x < 1280 && 10) || 10.3;

  let innerWidth: number;
  $: mapper = innerWidth >= 640;

  const transition = {
    in: { duration: 300, delay: 100, amount: 5, easing: sineIn },
    out: { duration: 200, easing: sineOut }
  };

  beforeUpdate(() => mode === 2 && (mode = mapper ? 2 : 0));
  afterUpdate(() => {
    mode || document?.lazyload.update();
    mode === 2 && setTimeout(() => scroll.toObj('#ymap', { offset: -96, duration: 2100 }), 700);
  });
</script>

<svelte:window bind:innerWidth />

<div
  class="
    content mb-4 overflow-hidden
    flex items-center gap-4">
  <span class="p-1.5 mr-auto">[{projects.length}]</span>
  <button
    on:click={() => (mode = 0)}
    class="
      p-1.5 rounded
      hover:bg-gray-300 dark:hover:bg-gray-700
      disabled:text-cyan-600 dark:disabled:text-cyan-700"
    type="button"
    disabled={!mode || undefined}>
    <Icon
      icon="ic:round-apps"
      size="1.5em" />
  </button>
  <button
    on:click={() => (mode = 1)}
    class="
      p-1.5 rounded
      hover:bg-gray-300 dark:hover:bg-gray-700
      disabled:text-cyan-600 dark:disabled:text-cyan-700"
    type="button"
    disabled={mode === 1 || undefined}>
    <Icon
      icon="ic:round-format-list-bulleted"
      size="1.5em" />
  </button>
  <button
    on:click={() => (mode = 2)}
    class="
      hidden sm:block
      p-1.5 rounded
      hover:bg-gray-300 dark:hover:bg-gray-700
      disabled:text-cyan-600 dark:disabled:text-cyan-700"
    type="button"
    disabled={mode === 2 || undefined}>
    <Icon
      icon="ic:round-map"
      size="1.5em" />
  </button>
</div>

{#if !mode}
  <div
    in:blur={transition.in}
    out:fade={transition.out}
    class="
      wrapper
      flex flex-wrap justify-center gap-8">
    {#each projects as { id, name, address }}
      {@const image = images[id - 1]}
      {@const data = { ...image, title: name, description: address }}
      <a
        class="relative group"
        href={`/portfolio/${id.toString().padStart(3, '0')}`}>
        <Sign
          class="top-2 left-2"
          link
          dark />
        <Figure
          class="
            overflow-hidden
            rounded border border-slate-400
            drop-shadow-deep group-hover:drop-shadow-md
            transition duration-300 ease-in-out
            pointer-events-none"
          custom={{
            image: 'grayscale group-hover:grayscale-0 transition duration-300 ease-in-out',
            caption: `
              absolute bottom-0 left-0 w-full p-2 h-20 overflow-hidden
              flex flex-col justify-start
              text-ellipsis text-white bg-gray-700/70
              group-hover:opacity-0
              transition-opacity duration-1000 ease-in-out`
          }}
          {data} />
      </a>
    {/each}
  </div>
{:else if mode === 1}
  <div
    in:blur={transition.in}
    out:fade={transition.out}
    class="
      content
      flex flex-col">
    {#each projects as { id, name, address, area, area_unit }, idx}
      <a
        class="
          group px-2 py-4
          grid grid-cols-[32px_minmax(0,_1fr)_96px] md:grid-cols-[32px_256px_minmax(0,_1fr)_96px] items-center
          odd:bg-slate-400/25 dark:even:bg-slate-700/25
          hover:bg-slate-400 dark:hover:bg-slate-700 hover:drop-shadow-md"
        href={`/portfolio/${id.toString().padStart(3, '0')}`}>
        <small>{idx + 1}</small>
        <span
          class="-xs:col-span-2
            text-cyan-700 dark:text-cyan-600 group-hover:text-sky-700">
          {name}
        </span>
        <small class="-md:hidden">{address}</small>
        <span class="-xs:hidden text-right">
          {Number(area).toLocaleString()}
          {@html area_unit || 'м<sup>2</sup>'}
        </span>
      </a>
    {/each}
  </div>
{:else}
  <div class="wrapper hidden sm:block">
    <YandexMap
      class="
        w-full aspect-square lg:aspect-video
        border-4 border-slate-400"
      {projects}
      {center}
      {zoom} />
  </div>
{/if}
