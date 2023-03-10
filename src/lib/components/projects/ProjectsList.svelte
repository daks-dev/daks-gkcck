<script lang="ts">
  import classNames from 'classnames';
  import { blur, fade } from 'svelte/transition';
  import { sineIn, sineOut } from 'svelte/easing';
  import { afterUpdate } from 'svelte';
  import { Icon, Figure } from 'daks-svelte';
  import { squares as images } from '$lib/content/portfolio/images';

  export let projects: Project[];
  export let aside = false;

  const transition = {
    in: { duration: 300, delay: 100, amount: 5, easing: sineIn },
    out: { duration: 200, easing: sineOut }
  };

  let mode = true;

  afterUpdate(() => document?.lazyload.update());
</script>

<div class={classNames(aside || 'content', 'mb-4 flex justify-between items-center')}>
  <span class="p-2">[{projects.length}]</span>
  <button
    on:click={() => (mode = !mode)}
    class="
      p-2
      rounded hover:bg-gray-300 dark:hover:bg-gray-700"
    type="button">
    <Icon
      icon="ic:round-{mode ? 'format-list-bulleted' : 'apps'}"
      size="1.5em" />
  </button>
</div>

{#if mode}
  <div
    in:blur={transition.in}
    out:fade={transition.out}
    class={classNames(aside || 'wrapper', 'flex flex-wrap justify-center gap-8')}>
    {#each projects as { id, name, address }}
      {@const image = images[id - 1]}
      {@const data = { ...image, title: name, description: address }}
      <a
        class="group"
        href={`/portfolio/${id.toString().padStart(3, '0')}`}>
        <Figure
          class="
            overflow-hidden
            rounded border border-slate-400
            drop-shadow--deep group-hover:drop-shadow--hard
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
{:else}
  <div
    in:blur={transition.in}
    out:fade={transition.out}
    class={classNames(aside || 'content', 'flex flex-col')}>
    {#each projects as { id, name, address, area, area_unit }, idx}
      <a
        class={classNames(
          'px-2 py-4',
          aside
            ? 'grid grid-cols-[32px_minmax(0,_1fr)]'
            : 'grid grid-cols-[32px_minmax(0,_1fr)_96px] md:grid-cols-[32px_256px_minmax(0,_1fr)_96px]',
          'items-center',
          'odd:bg-slate-400/25 dark:even:bg-slate-700/25',
          'hover:bg-slate-400 dark:hover:bg-slate-700'
        )}
        href={`/portfolio/${id.toString().padStart(3, '0')}`}>
        <small>{idx + 1}</small>
        <span class={classNames('accent', aside || '-xs:col-span-2')}>{name}</span>
        {#if !aside}
          <small class="-md:hidden">{address}</small>
          <span class="-xs:hidden text-right">
            {Number(area).toLocaleString()}
            {@html area_unit || 'м<sup>2</sup>'}
          </span>
        {/if}
      </a>
    {/each}
  </div>
{/if}
