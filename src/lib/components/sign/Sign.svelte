<script lang="ts">
  import classNames from 'classnames';
  import { Icon } from 'daks-svelte';

  export let icon = 'mdi:link-variant';

  let className: any = undefined;
  export { className as class };
</script>

<Icon
  class={classNames(
    'absolute z-10',
    'w-7 h-7 lg:w-8 lg:h-8 p-1',
    'rounded-full bg-neutral-100/70',
    'text-sky-700 dark:text-sky-400',
    'opacity-70 group-hover:opacity-100',
    'group-hover:mt-1 group-hover:animate-bounce',
    className
  )}
  {icon} />
