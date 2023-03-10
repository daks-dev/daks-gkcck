<script lang="ts">
  import { page } from '$app/stores';

  let online = typeof navigator !== 'undefined' ? navigator.onLine : true;
</script>

<svelte:head>
  <title>{$page.status}</title>
  <meta
    name="description"
    content="Ошибка в работе приложения" />
</svelte:head>

<main class="grow justify-center">
  {#if online}
    <h1
      class="
        content
        font-mono font-bold
        text-[35vh] leading-none text-slate-500 dark:text-slate-500">
      {$page.status}
    </h1>

    <div
      class="
        content 
        px-12 py-8
        text-xl bg-rose-600 text-gray-200 rounded">
      {#if $page.error?.message}
        {$page.error.message}
      {:else}
        Обнаружена ошибка {$page.status}
      {/if}
    </div>

    <!--
    {#if $page.status >= 500}
      {#if dev && $page.error?.stack}
        <pre>{$page.error.stack}</pre>
      {:else}
        <p>Please try reloading the page.</p>
      {/if}
    {/if}
    -->
  {:else}
    <h1
      class="
        content
        text-4xl leading-loose">
      Похоже отсутствует подключение к интернету
    </h1>

    <div class="content">
      Перегрузите страницу при восстановлении соединения.
    </div>
  {/if}
</main>
