<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit, Figure, audio } from 'daks-svelte';
  import image from '$lib/content/images/team.jpg?w=320&webp';
  import Card from './Card.svelte';

  const title = 'ГК ССК • Вакансии';
  const description = 'Вакансии группы компаний «ССК»';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Вакансии</h1>
  </header>

  <div class="content readable">
    <p class="text-justify">
      В <strong>Группе компаний ССК</strong> работают люди самых разных специальностей: инженеры,
      руководители проектов, проектировщики, сметчики, лаборанты, геодезисты и т.д. Каждый из них
      является высококвалифицированным специалистом в своей сфере. Большая команда единомышленников
      которая работает, применяя
      <em
        class="
          w-full mt-2
          flex justify-center gap-1 sm:gap-2 lg:ga-4 2xl:gap-8
          not-italic xs:text-lg sm:text-xl sm:tracking-wider lg:tracking-widest">
        <span class="first-letter:text-rose-700">Современные</span>
        <span class="first-letter:text-rose-700">Стандарты</span>
        <span class="first-letter:text-rose-700">Качества</span>
      </em>
    </p>

    <h2 class="mt-5 mb-7 accent text-xl">
      Наша Компания заинтересована в талантливых, ответственных и способных работать в команде
      сотрудников!
    </h2>

    <div class="flex sm:justify-around gap-4 mb-16">
      <div>
        <h4 class="mb-1">Работа в ГК ССК это:</h4>
        <ul class="ml-2">
          <li><span style="font-size: 17px;">Успешная карьера</span></li>
          <li><span style="font-size: 17px;">Стабильность</span></li>
          <li><span style="font-size: 17px;">Социальные гарантии</span></li>
          <li><span style="font-size: 17px;">Достойная зарплата</span></li>
          <li>
            <span style="font-size: 17px;">Возможность профессионального роста и развития</span>
          </li>
        </ul>
      </div>

      <Figure
        class="hidden sm:flex"
        custom={{ image: 'h-full object-cover' }}
        data={image} />
    </div>

    <h2 class="mb-8 text-center">
      Открытые вакансии на данный момент:
    </h2>

    <div class="grid grid-cols-none sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card title="Технический заказчик">
        <ul>
          <li>Инженер строительного контроля (бакалавр)</li>
          <li>Инженер ПТО (BIM/ТИМ)</li>
          <li>Инженер строительного контроля (ОВ/ВК, ЭОМ/СС)</li>
        </ul>
      </Card>
      <Card title="Комплексное проектирование">
        <ul>
          <li>Архитектор</li>
          <li>Инженер-конструктор</li>
          <li>Инженер &mdash; проектировщик (ОВИК, ВК, ЭОМ, СС)</li>
        </ul>
      </Card>
      <Card class="-lg:col-span-full" title="Строительная лаборатория">
        <ul>
          <li>Инженер — лаборант</li>
          <li>Техник</li>
          <li>Инженер — геодезист</li>
        </ul>
      </Card>
    </div>
  </div>

  <button
    on:click={() => audio.beep(250, 100, 50)}
    class="
      button
      my-8 mx-auto
      rounded-md border border-slate-500 hover:border-rose-700
      bg-slate-300 dark:bg-slate-600
      text-xl uppercase"
    type="button">
    Отправить заявку
  </button>
</main>
