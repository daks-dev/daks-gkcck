<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit } from 'daks-svelte';
  import {
    ActivityCard,
    HomeHeader,
    PartnersCarousel,
    ProjectsCarousel,
    YandexMap
  } from '$lib/components';

  import type { PageData } from './$types';
  export let data: PageData;
  const { projects, partners } = data;

  import { nav } from '$configs';
  const activity = Object.values(nav.navbar.links).find((el) => el.href === '/activity');

  const title = 'ГК ССК • Современные Стандарты Качества';
  const description = 'Группа компаний «ССК»: cовременные cтандарты rачества';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="relative min-h-screen"
  itemprop="mainContentOfPage">
  <HomeHeader />

  <ProjectsCarousel
    {projects}
    duration={15000}
    controls="play move"
    progress
    stream
    grayscale
    check />

  {#if activity?.links?.length}
    <section
      class="
        wrapper pt-12 lg:pt-16
        flex flex-wrap justify-around gap-y-8 gap-x-2">
      <h2 class="w-full">Направления нашей деятельности</h2>
      {#each activity.links as { href, label }}
        <ActivityCard
          class="w-72 aspect-square hover:bg-slate-500/25"
          href="/activity{href}">
          <h4
            slot="title"
            class="accent h-12 text-center">
            {@html label}
          </h4>
        </ActivityCard>
      {/each}
    </section>
  {/if}

  <YandexMap
    class="
      hidden sm:block
      w-full mx-auto max-w-xl aspect-video mt-16
      lg:absolute lg:top-[5vh] lg:right-[10vw] 2xl:top-[10vh] 2xl:right-[15vw]
      lg:max-w-md lg:aspect-4/3
      lg:drop-shadow--accent lg:hover:drop-shadow-md
      overflow-hidden
      border-4 border-slate-400 
      lg:rounded-lg lg:border"
    {projects} />

  <section class="wrapper pt-12 lg:pt-16">
    <h2 class="mb-8">О нас</h2>
    <div class="flex -md:flex-wrap justify-center gap-8">
      <PartnersCarousel
        class="
          shrink-0 w-80 h-fit
          order-1 md:order-none
          rounded border overflow-hidden"
        {partners}
        controls=""
        duration={500}
        delay={5000}
        stream />
      <div class="readable text-justify">
        <p>
          <strong>Группа компаний «ССК»</strong> создана в 2000 году. Она включает в себя динамично развивающиеся
          компании, работающие в сфере строительства и реализующие амбициозные и уникальные проекты.
        </p>
        <p>
          Сегодня <strong>ГК ССК</strong> является одним из лидеров в строительной отрасли и осуществляет
          следующие функции: технического заказчика, строительный контроль, проектирование, а так же
          лабораторные испытания на базе собственной строительной лаборатории.
        </p>
        <p>
          Наличие штата квалифицированных специалистов практически всех основных строительных
          специальностей позволяет работать с объектами разной степени сложности.
          <b>ГК&nbsp;«ССК»</b> по праву гордится широким портфолио выполненных работ и положительными
          рекомендациями клиентов &mdash; государственных и частных заказчиков работ и услуг в сфере
          строительства.
        </p>
      </div>
    </div>
  </section>
</main>
