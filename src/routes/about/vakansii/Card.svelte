<script lang="ts">
  import classNames from 'classnames'

  let className: any = undefined;
  export { className as class };

export let title: string;
</script>

<div
  class={classNames(
    'w-full max-w-xs p-4 mx-auto',
    'flex flex-col',
    'rounded-md border-2',
    className
  )}>
  <h4 class="mb-4 sm:h-12 text-accent text-center">
    {title}
  </h4>
  <slot />
</div>
