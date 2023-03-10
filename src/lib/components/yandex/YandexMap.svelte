<script lang="ts">
  import { BROWSER } from 'esm-env';
  import classNames from 'classnames';
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import { sineIn } from 'svelte/easing';
  import { YandexMap } from 'daks-svelte';

  let className: any = undefined;
  export { className as class };

  export let faded = false;
  const animate = faded ? fade : fly;
  const options = faded
    ? {
        duration: 700,
        easing: sineIn
      }
    : {
        x: 512,
        duration: 700,
        delay: 700,
        easing: sineIn
      };

  export let tag = 'div';

  export let projects: Project[];
  export let center = [55.727154, 37.593857];
  export let zoom: (x?: number) => number = () => 9.2;

  const footer = (el: Project) => {
    let res;
    if (el.activities || el.area) {
      res = el.activities ? `<div>${el.activities}</div>` : '';
      if (el.area)
        res = `${res}<div>${el.area_term || 'Общая площадь'}: ${el.area.toLocaleString()} ${
          el.area_unit || 'м<sup>2</sup>'
        }</div>`;
    }
    return res;
  };

  const data = {
    locations: projects.map((el, idx) => ({
      geometry: el.geodata.split(', ').map((x: string) => Number(x)),
      properties: {
        iconContent: idx + 1, // `<small><b>${idx + 1}</b>. ${el.name}</small>`,
        balloonContentHeader: `${el.name} <sup class="font-normal">(${idx + 1})</sup>`,
        balloonContentBody: el.address,
        balloonContentFooter: footer(el)
      },
      options: {
        preset: 'islands#nightStretchyIcon'
      }
    })),
    state: {
      center,
      zoom: zoom(),
      behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch'],
      controls: ['zoomControl', 'fullscreenControl']
    },
    options: {
      suppressMapOpenBlock: true,
      avoidFractionalZoom: false
    }
  };

  let render = false;
  onMount(() => (render = BROWSER));
</script>

{#if render}
  <section
    in:animate={options}
    class={classNames(className)}>
    <YandexMap
      class="ymaps--left-copyright w-full h-full"
      {data}
      {tag} />
  </section>
{/if}
