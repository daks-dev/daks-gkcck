<script lang="ts">
  import { DEV } from 'esm-env';
  import { AppHead, Icon, SvelteKit } from 'daks-svelte';

  let waiting = false;
  let data: any;

  const imagetools = async () => {
    waiting = true;
    const response = await fetch('/admin/imagetools');
    if (response.ok) {
      data = await response.json();
    } else alert('Ошибка HTTP: ' + response.status);
    setTimeout(() => (waiting = false), 300);
  };

  const sqlite = async () => {
    waiting = true;
    const response = await fetch('/admin/sqlite');
    if (response.ok) {
      data = await response.json();
    } else alert('Ошибка HTTP: ' + response.status);
    setTimeout(() => (waiting = false), 300);
  };

  const robots = 'noindex, follow';
  const title = 'ГК ССК • Admin';
</script>

<AppHead
  {robots}
  {title} />

<main>
  <header class="content flex items-center gap-8 mb-4">
    {#if DEV}
      <h1 class="title grow">Admin</h1>
    {:else}
      <div class=" grow">
        <h1 class="title mb-4">SvelteKit</h1>
        <h4 class="font-semibold text-gray-400">tailwindcss</h4>
      </div>
    {/if}
    <a
      rel="noreferrer nofollow"
      class="
        w-24 sm:w-32 drop-shadow-md hover:drop-shadow-deep hover:scale-105
        transition duration-300 ease-in-out"
      href="https://github.com/daks-dev/daks-skm"
      target="_blank">
      <img
        class="w-full h-auto"
        src="/icons/github.svg"
        alt="GitHUB"
        decoding="async"
        loading="lazy" />
    </a>
  </header>

  {#if DEV}
    <div class="content flex">
      <div class="flex flex-col gap-8 text-2xl pr-8 border-r-2">
        <a
          class="button max-w-full rounded border"
          class:disabled={waiting}
          href="/admin/iconify">
          Iconify
        </a>
        <button
          on:click|preventDefault={imagetools}
          class="button max-w-full rounded border"
          type="button"
          disabled={waiting}>
          Imagetools
        </button>
        <button
          on:click|preventDefault={sqlite}
          class="button max-w-full rounded border"
          type="button"
          disabled={waiting}>
          SQLite
        </button>
      </div>
      <div class="flex grow gap-8">
        {#if waiting}
          <Icon
            icon="svg-spinners:180-ring-with-bg"
            class="w-20 h-20 mx-auto self-center" />
        {:else if data}
          {#each Object.keys(data) as key}
            <div class="flex flex-col">
              <b class="font-mono text-xl text-slate-500">{key}</b>
              {#each data[key] as el}
                <span>{el}</span>
              {/each}
            </div>
          {/each}
        {:else}
          <Icon
            icon="ic:round-close"
            class="w-20 h-20 mx-auto self-center" />
        {/if}
      </div>
    </div>
  {:else}
    <SvelteKit class="content items-center" />
  {/if}
</main>
