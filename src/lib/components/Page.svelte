<script lang="ts">
  import {
    YandexMetrikaHit,
    ImagePlaceholder,
    Skeleton,
    TextPlaceholder,
    TestimonialPlaceholder
  } from 'daks-svelte';

  export let title: string;
  export let description: string;
  export let name = title;
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">{name}</h1>
  </header>

  <div class="content placeholders">
    <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mb-12">
      <ImagePlaceholder />
      <TextPlaceholder />
      <Skeleton />
      <ImagePlaceholder class="-scale-x-100" />
      <TextPlaceholder />
      <Skeleton />
      <TextPlaceholder class="lg:-scale-x-100 lg:order-last" />
      <Skeleton class="lg:-scale-x-100 lg:mr-auto" />
    </div>
    <TestimonialPlaceholder class="max-w-xl mx-auto" />
  </div>
</main>
