<script lang="ts">
  import { afterNavigate, goto } from '$app/navigation';
  import { Icon } from 'daks-svelte';

  import { routeTransitionMode } from 'daks-svelte/stores';
  const modeDefault = $routeTransitionMode;

  export let base: string;
  export let next: { id: number; name: string };
  export let prev: { id: number; name: string };

  const list = (forward = true) => {
    if ($routeTransitionMode) $routeTransitionMode = forward ? 2 : 1;
    goto(`${base}/${(forward ? next : prev).id.toString().padStart(3, '0')}`);
  };

  afterNavigate(() => ($routeTransitionMode = modeDefault));
</script>

<div class="content lg:my-1 flex gap-8 text-accent">
  <button
    on:click|preventDefault={() => list(false)}
    class="p-2 hover:text-sky-600 hover:drop-shadow-deep"
    title={prev.name}
    type="button">
    <Icon
      class="w-8 h-8"
      icon="ic:round-forward"
      hFlip />
  </button>
  <button
    on:click|preventDefault={() => list()}
    class="p-2 hover:text-sky-600 hover:drop-shadow-deep"
    title={next.name}
    type="button">
    <Icon
      class="w-8 h-8"
      icon="ic:round-forward" />
  </button>
</div>
