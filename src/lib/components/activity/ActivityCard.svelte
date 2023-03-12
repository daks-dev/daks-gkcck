<script lang="ts">
  import classNames from 'classnames';
  import { Icon } from 'daks-svelte';
  import { Sign } from '$lib/components';

  let className: any = 'max-w-xs';
  export { className as class };

  export let href: undefined | string = undefined;

  export let size: number | string = '3.5em';
  export let animate = ''; // 'animate-pulse hover:animation-paused';
</script>

<svelte:element
  this={href ? 'a' : 'div'}
  class={classNames(
    'relative group p-4',
    'flex flex-col gap-4',
    'rounded border border-current shadow',
    animate,
    className
  )}
  {href}>
  <Sign
  class="top-1 left-1"
  link
  small />
  <slot name="title" />
  <div class="grow">
    <slot />
  </div>
  <div class="flex items-center gap-5 text-slate-400">
    <Icon
      icon="ic:round-account-circle"
      {size} />
    <div class="grow opacity-50">
      <div class="h-2.5 w-3/4 rounded-full bg-current mb-2.5" />
      <div class="h-2 w-full rounded-full bg-current" />
    </div>
  </div>
  <span class="sr-only">loading...</span>
</svelte:element>
