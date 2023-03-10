<script lang="ts">
  import classNames from 'classnames';
  import { onMount } from 'svelte';
  import { YandexMetrikaHit, Icon, Figure } from 'daks-svelte';
  import { ProjectsList } from '$lib/components';
  import { sources as logotypes } from '$lib/content/partners/images';

  import type { PageData } from './$types';
  export let data: PageData;

  let innerWidth: number;
  $: aside = innerWidth >= 768;

  const { partner, projects } = data;
  const { id, name, email, telephone, address, url, title, description } = partner;

  onMount(() => document?.lazyload.update());
</script>

<svelte:window bind:innerWidth />

<YandexMetrikaHit
  title="ГК ССК • {title || name}"
  description={description || `ГК ССК : ${title || name}`} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">{name}</h1>
  </header>

  <div class={classNames(aside && 'content', 'flex -md:flex-col justify-between gap-8')}>
    <div class={classNames(aside ? 'grow' : 'content', 'space-y-4')}>
      <Figure
        class="mb-8"
        custom={{ image: 'border border-slate-400 drop-shadow' }}
        data={logotypes[id - 1]} />
      <div class="flex gap-4 items-center">
        <Icon
          class="w-8 h-8 text-cyan-700"
          icon="ic:outline-location-on">
          адрес
        </Icon>
        {@html address || '&mdash;'}
      </div>
      <div class="flex gap-4 items-center">
        <Icon
          class="w-8 h-8 text-cyan-700"
          icon="ic:round-phone-android">
          телефон
        </Icon>
        {@html telephone || '&mdash;'}
      </div>
      <div class="flex gap-4 items-center">
        <Icon
          class="w-8 h-8 text-cyan-700"
          icon="ic:round-alternate-email">
          электронная почта
        </Icon>
        {@html email || '&mdash;'}
      </div>
      <div class="flex gap-4 items-center">
        <Icon
          class="w-8 h-8 text-cyan-700"
          icon="ic:round-link">
          сайт
        </Icon>
        {@html url || '&mdash;'}
      </div>
    </div>

    {#if projects.length}
      <aside class={classNames(aside && 'w-80 max-w-xs -mt-14')}>
        <ProjectsList
          {projects}
          {aside} />
      </aside>
    {/if}
  </div>
</main>
