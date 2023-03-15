<script lang="ts">
  import { BROWSER } from 'esm-env';
  import {
    lazyload,
    AppHead,
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

  if (BROWSER) document.lazyload ??= lazyload();
</script>

<AppHead {app} />

<RouteTransition
  class="flex flex-col grow"
  referesh={data.referesh}
  mode={1}>
  <slot />
</RouteTransition>

<!-- class="-lg:snap-end" -->
<Footer {...nav.footer} />

<NavbarKit
  {...nav.navbar}
  centered />

<ScreenBlock />

<YandexMetrikaInit />
