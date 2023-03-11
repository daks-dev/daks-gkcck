<script lang="ts">
  import classNames from 'classnames';
  import { Icon } from 'daks-svelte';

  export let icon = 'mdi:link-variant';

  let className: any = undefined;
  export { className as class };
</script>

<Icon
  class={classNames(
    'w-5 h-5 lg:w-6 lg:h-6',
    'text-sky-700 dark:text-sky-400',
    'opacity-50 group-hover:opacity-100',
    'group-hover:mt-1 group-hover:animate-bounce',
    className
  )}
  {icon} />
