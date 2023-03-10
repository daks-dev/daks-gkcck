<script lang="ts">
  import { DEV } from 'esm-env';
  import { Icon } from 'daks-svelte';

  //import type { PageData } from './$types';
  //export let data: PageData;

  let waiting = false;
  let imageset: any = {};

  const images = async () => {
    waiting = true;
    const response = await fetch('/admin/images', {
      method: 'GET',
      headers: {
        accept: 'application/json'
      },
      body: undefined
    });
    if (response.ok) {
      imageset = await response.json();
    } else alert('Ошибка HTTP: ' + response.status);
    setTimeout(() => (waiting = false), 300);
  };

  const portfolio = async () => {
    waiting = true;
    const response = await fetch('/admin/portfolio', {
      method: 'GET'
    });
    if (response.ok) {
      // imageset = await response.json();
    } else alert('Ошибка HTTP: ' + response.status);
    setTimeout(() => (waiting = false), 300);
  };
</script>

<svelte:head>
  <meta
    name="robots"
    content="noindex, follow" />
  <title>DAKS • Admin</title>
</svelte:head>

<main>
  <header class="content flex items-center gap-8">
    <h1 class="title grow">Admin</h1>
    <a
      rel="noreferrer nofollow"
      class="w-24 sm:w-32 hover:scale-110
             transition-all duration-300 ease-in-out"
      href="https://github.com/daks-dev/daks.git"
      target="_blank">
      <img
        class="w-full h-auto"
        src="/icons/github.svg"
        alt="GitHUB" />
    </a>
  </header>

  <div class="content flex justify-start gap-16 items-center">
    <a
      class="button px-3 py-2 mx-2 border-2 rounded text-xl"
      class:disabled={waiting}
      href="/admin/iconify">
      Iconify
    </a>

    {#if DEV}
      <button
        on:click|preventDefault={images}
        type="button"
        class="button px-3 py-2 mx-2 border-2 rounded text-xl"
        disabled={waiting}>
        Images
      </button>
      <button
        on:click|preventDefault={portfolio}
        type="button"
        class="button px-3 py-2 mx-2 border-2 rounded text-xl"
        disabled={waiting}>
        Portfolio
      </button>
      {#if waiting}
        <Icon
          icon="svg-spinners:180-ring-with-bg"
          class="w-8 h-8" />
      {/if}
    {/if}
  </div>

  {#if !waiting}
    <div class="content flex justify-start gap-8">
      {#each Object.keys(imageset) as key}
        <div class="flex flex-col">
          <b class="font-mono text-xl text-slate-500">{key}</b>
          {#each imageset[key] as el}
            <span>{el}</span>
          {/each}
        </div>
      {/each}
    </div>
  {/if}
</main>
