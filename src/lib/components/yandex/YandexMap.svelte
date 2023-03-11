<script lang="ts">
  import { BROWSER } from 'esm-env';
  import classNames from 'classnames';
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import { sineIn } from 'svelte/easing';
  import { YandexMap } from 'daks-svelte';

  let className: any = undefined;
  export { className as class };

  // export let grayscale = false;
  // export let sepia = false;

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
  export let center = '55.727154, 37.593857';
  export let zoom = 9.2;

  const body = (el: Project) => {
    let res = '---';
    if (el.address || el.activities || el.area || el.note) {
      res = '<div class="flex flex-col pt-0.5">';
      if (el.address) res = `${res}<span>${el.address}</span>`;
      if (el.area) {
        res = `${res}<span>${(el.area_term || 'Общая площадь').toLocaleLowerCase()}: `;
        res = `${res}${el.area.toLocaleString()} ${el.area_unit || 'м<sup>2</sup>'}</span>`;
      }
      if (el.note) res = `${res}<small>${el.note}</small>`;
      if (el.activities) res = `${res}<small>[ ${el.activities} ]</small>`;
      res = `${res}</div>`;
    }
    return res;
  };

  const footer = (el: Project) => {
    const href = `href="/portfolio/${el.id.toString().padStart(3, '0')}"`;
    return `<a class="py-0.5 text-sky-700" ${href}>подробнее...</a>`;
  };

  const data = {
    locations: projects.map((el, idx) => ({
      geometry: el.location.split(', ').map((x: string) => Number(x)),
      properties: {
        iconContent: idx + 1,
        balloonContentHeader: `${el.name} <sup class="font-normal">(${idx + 1})</sup>`,
        balloonContentBody: body(el),
        balloonContentFooter: footer(el)
      },
      options: {
        preset: 'islands#nightStretchyIcon'
      }
    })),
    state: {
      center: center.split(', ').map((x: string) => Number(x)),
      zoom,
      behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch'],
      controls: ['zoomControl', 'fullscreenControl']
    },
    options: {
      // avoidFractionalZoom: false,
      suppressMapOpenBlock: true
    }
  };

  let render = false;
  onMount(() => (render = BROWSER));
</script>

{#if render}
  <svelte:element
    this={tag}
    in:animate={options}
    class={classNames(className)}>
    <YandexMap
      class={classNames(
        'ymaps--left-copyright w-full h-full'
        // grayscale && 'grayscale hover:grayscale-0'
        // sepia && 'sepia hover:sepia-0'
      )}
      {data} />
  </svelte:element>
{/if}
