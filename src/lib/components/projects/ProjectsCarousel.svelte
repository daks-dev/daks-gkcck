<script lang="ts">
  import { BROWSER } from 'esm-env';
  import classNames from 'classnames';
  import { onMount } from 'svelte';
  import { Async, CarouselKit } from 'daks-svelte';
  import { screens } from '$lib/content/portfolio/images.async';

  let className: any = undefined;
  export { className as class };
  export let custom: any = {};
  custom = Object.assign(
    {
      caption: 'absolute right-1 bottom-1 left-1 text-white',
      progress: 'bottom-full'
    },
    custom
  );

  export let projects: Project[];

  export let show = (x: number) =>
    (x < 480 && 1) || (x < 640 && 2) || (x < 1024 && 3) || (x < 1536 && 4) || 5;
  export let ratio = 16 / 9;

  const getter = async () => {
    const images = await screens();
    return {
      dataset: projects.map((el) => ({
        ...images[el.id - 1],
        description: el.name
      }))
    };
  };

  let render = false;
  onMount(() => (render = BROWSER));
</script>

{#if render}
  <Async
    let:value
    {getter}>
    <CarouselKit
      {...value}
      class={classNames(className)}
      {custom}
      {show}
      {ratio}
      {...$$restProps} />
  </Async>
{/if}
