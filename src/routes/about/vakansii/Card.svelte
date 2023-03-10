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
  <h4 class="accent sm:h-12 mb-4 text-center">
    {title}
  </h4>
  <slot />
</div>
