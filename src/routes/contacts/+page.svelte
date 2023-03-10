<script lang="ts">
  import { YandexMetrikaHit, Contacts, YandexMap } from 'daks-svelte';

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
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="justify-between min-h-screen mb-0"
  itemprop="mainContentOfPage">
  <header class="content mb-0">
    <h1 class="title">Контакты</h1>
  </header>

  <Contacts
    class="py-4"
    {microdata} />

  <YandexMap {data} />
</main>
