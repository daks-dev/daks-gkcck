<script lang="ts">
  import { Figure } from 'daks-svelte';
  import { Sign } from '$lib/components';
  import { sources as logotypes } from '$lib/content/partners/images';

  import microdata from '$configs/microdata';
  const { logo } = microdata.organization;

  export let project: Project;
  export let customer: undefined | 0 | Partner;
  const {
    address,
    area,
    area_term,
    area_unit,
    units,
    units_term,
    scope,
    scope_term,
    activities,
    note
  } = project;
</script>

<div
  class="
    flex flex-col gap-4 md:gap-8">
  <dl class="flex flex-col gap-y-4">
    {#if address}
      <div class="flex flex-wrap gap-x-2">
        <dt class="font-semibold text-slate-500">Адрес:</dt>
        <dd class="flex grow">{address}</dd>
      </div>
    {/if}
    {#if area}
      <div class="flex gap-x-2 whitespace-nowrap">
        <dt class="font-semibold text-slate-500">
          {area_term || 'Общая площадь'}:
        </dt>
        <dd>
          {area.toLocaleString()}
          {@html area_unit || 'м<sup>2</sup>'}
        </dd>
      </div>
    {/if}
    {#if units}
      <div class="flex gap-x-2">
        <dt class="font-semibold text-slate-500">
          {units_term || 'Корпусов'}:
        </dt>
        <dd>{units}</dd>
      </div>
    {/if}
    {#if scope}
      <div class="flex gap-x-2">
        <dt class="font-semibold text-slate-500 whitespace-nowrap">
          {scope_term || 'Этажность'}:
        </dt>
        <dd>{scope}</dd>
      </div>
    {/if}
    {#if activities}
      <div class="flex flex-wrap gap-x-2">
        <dt class="font-semibold text-slate-500">Виды работ:</dt>
        <dd class="accent">{activities}</dd>
      </div>
    {/if}
    {#if note}
      <div>{note}</div>
    {/if}
  </dl>

  {#if customer}
    <a
      class="relative w-fit group hover:drop-shadow-md"
      href="/partners/{customer.id.toString().padStart(3, '0')}">
      <Sign
        class="top-0 left-full ml-1"
        link />
      <Figure
        class="hidden md:flex "
        custom={{ image: 'border border-slate-400 drop-shadow' }}
        data={logotypes[customer.id - 1]} />
      <h2 class="md:hidden font-semibold text-slate-500">
        {customer.name}
      </h2>
    </a>
  {:else}
    <img
      class="h-24 sm:h-32 md:h-40 w-auto max-w-none drop-shadow--deep"
      src={logo}
      alt="" />
  {/if}
</div>
