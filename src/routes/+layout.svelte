<script lang="ts">
  import { BROWSER } from 'esm-env';
  import {
    lazyload,
    Footer,
    NavbarKit,
    RouteTransition,
    ScreenBlock,
    YandexMetrikaInit
  } from 'daks-svelte';

  import '../app.css';
  import '$iconify';

  import type { PageData } from './$types';
  export let data: PageData;

  import { app, nav } from '$configs';

  if (BROWSER) {
    if (
      localStorage.getItem('color-theme') === 'dark'
      // || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      // localStorage.setItem('color-theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    document.lazyload ??= lazyload();
  }
</script>

<svelte:head>
  <meta
    name="theme-color"
    content={app.themeColor} />
  <meta
    name="msapplication-TileColor"
    content={app.tileColor} />
  <meta
    name="application-name"
    content={app.shortName} />
  <meta
    name="apple-mobile-web-app-title"
    content={app.shortName} />
</svelte:head>

<RouteTransition
  referesh={data.referesh}
  mode={1}
  class="flex flex-col grow">
  <slot />
</RouteTransition>

<!-- class="-lg:snap-end" -->
<Footer {...nav.footer} />

<NavbarKit
  {...nav.navbar}
  centered />

<ScreenBlock />

<YandexMetrikaInit />
