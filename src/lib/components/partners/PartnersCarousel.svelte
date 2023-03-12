<script lang="ts">
  import { BROWSER } from 'esm-env';
  import classNames from 'classnames';
  import { onMount } from 'svelte';
  import { Async, CarouselKit } from 'daks-svelte';
  import { squares } from '$lib/content/partners/images.async';

  let className: any = undefined;
  export { className as class };

  export let partners: Partner[];

  export let show: number | ((x: number) => number) = 1;
  export let ratio = 1;

  const getter = async () => {
    const images = await squares();
    return {
      dataset: partners.reduce((res, el) => {
        el.hidden ||
          res.push({
            ...images[el.id - 1]
            // title: el.name
          });
        return res;
      }, Array(0))
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
      {show}
      {ratio}
      {...$$restProps} />
  </Async>
{:else}
  <slot />
{/if}
