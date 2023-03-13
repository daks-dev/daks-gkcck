<script lang="ts">
  import { onMount } from 'svelte';
  import { Contacts, Lightbox, Sign, YandexMap, YandexMetrikaHit } from 'daks-svelte';
  import image from '$lib/assets/images/contacts.webp?webp';
  import thumbnail from '$lib/assets/images/contacts.webp?w=320&webp';

  import microdata from '$configs/microdata';

  const data = {
    locations: [
      {
        geometry: [55.771174, 37.60589],
        properties: {
          iconContent: '<strong class="tracking-wider">ГК «ССК»</strong>',
          balloonContentHeader: 'Группа Компаний «ССК»',
          balloonContentBody: '<img class=mx-auto src=/images/ymap.webp width=192 height=192 />',
          balloonContentFooter:
            '<div class=text-center>время работы: 9 <sup>00</sup> -- 19 <sup>00</sup></div>'
        },
        options: {
          preset: 'islands#nightStretchyIcon'
        }
      }
    ],
    state: {
      center: [55.771174, 37.60589],
      zoom: 17,
      behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch'],
      controls: ['zoomControl', 'fullscreenControl']
    }
  };

  const title = 'ГК ССК • Контакты';
  const description = 'Контакты группы компаний «ССК»';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="justify-between gap-8 min-h-screen -md:mb-0"
  itemprop="mainContentOfPage">
  <header class="content mb-0">
    <h1 class="title">Контакты</h1>
  </header>

  <div class="content flex flex-w items-center gap-8">
    <Contacts
      class="py-4 h-fit"
      {microdata} />

    <Lightbox
      class="relative group -sm:hidden md:shrink-0"
      custom={{ overlay: 'overflow-offset' }}
      title="ССК"
      description="Группа компаний">
      <svelte:fragment slot="thumbnail">
        <Sign
          class="top-2 left-5"
          icon="ic:round-zoom-out-map"
          dark />
        <img
          class="
            mx-3
            rounded-md drop-shadow-md
            hover:drop-shadow-deep hover:scale-105
            transition duration-300 ease-in-out"
          src={thumbnail.src}
          alt="" />
      </svelte:fragment>
      <img
        src={image.src}
        alt="" />
    </Lightbox>
  </div>

  <div class="md:content">
    <YandexMap
      class="
        h-[40vmax] border-t-4 border-slate-400
        md:h-auto md:aspect-[5/2] md:border-4"
      {data} />
  </div>
</main>
