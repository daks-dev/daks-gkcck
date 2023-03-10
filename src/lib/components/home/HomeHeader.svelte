<script lang="ts">
  import { BROWSER } from 'esm-env';
  import { onMount } from 'svelte';
  import { blur } from 'svelte/transition';
  import { sineIn } from 'svelte/easing';
  import { Icon } from 'daks-svelte';

  const getter = async () => ({
    srcset: (await import('$lib/assets/images/bg/home.webp?w=640;1024;1440&webp&srcset')).default,
    fallback: (await import('$lib/assets/images/bg/home.webp?w=1440&webp')).default
  });

  import microdata from '$configs/microdata';
  const { logo, email, telephone } = microdata.organization;
  const tel = telephone.replace(/\s/g, '').toString();

  const button = `
    relative
    py-4 px-5
    rounded-full border border-gray-400
    text-cyan-600 bg-gray-200/50
    dark:text-slate-400 dark:bg-gray-800/50
    shadow-md shadow-slate-500/50`;

  const handlePoster = () => localStorage.setItem('poster', (poster = !poster).toString());

  let poster: boolean;
  let render: boolean;
  onMount(() => {
    render = BROWSER;
    BROWSER && (poster = localStorage.getItem('poster') === 'true');
  });
</script>

<header class="relative min-h-screen--navbar mb-0 bg--pattern">
  {#if render && poster}
    {#await getter() then { srcset, fallback }}
      <img
        in:blur={{
          amount: 5,
          duration: 700,
          delay: 100,
          easing: sineIn
        }}
        class="
          absolute top-0 left-0 w-full h-full max-h-full
          object-cover object-top lg:object-center
          grayscale dark:invert dark:opacity-20
          transition duration-500 ease-in-out"
        {srcset}
        src={fallback.src}
        alt=""
        decoding="async"
        loading="lazy" />
    {/await}
  {/if}

  <img
    class="
        absolute top-[4vh] left-[4vw] lg:left-[7vw] xl:left-[12vw] 3xl:left-[7vw]
        h-[15vh] lg:h-[12.5vh]
        drop-shadow-deep"
    src={logo}
    alt=""
    itemprop="logo" />

  <div
    class="
        xs:hidden
        w-full pt-[33vh]
        flex flex-row justify-center gap-8 items-center">
    <a
      class={button}
      href="tel://{telephone.replace(/[\s-()]/g, '')}"
      itemprop="telephone">
      <Icon
        icon="ic:round-phone-in-talk"
        size="4em" />
    </a>
    <a
      class={button}
      href="mailto:{email}"
      itemprop="email">
      <Icon
        icon="ic:round-mail-outline"
        size="4em" />
    </a>
  </div>

  <h1
    class="
        absolute bottom-[7vh] left-[7vw] lg:bottom-[10vh] 2xl:left-[12vw]
        flex flex-col gap-4
        font-black tracking-wider text-shadow--home
        text-gray-700 dark:text-neutral-300
        text-4xl xs:text-5xl sm:text-6xl lg:text-7xl">
    <span class="first-letter:text-brand">??????????????????????</span>
    <span class="first-letter:text-brand">??????????????????</span>
    <span class="first-letter:text-brand">????????????????</span>
  </h1>

  <a
    class="
      hidden md:flex gap-1 items-center
      absolute bottom-[10vh] right-[7vw] 2xl:right-[12vw] 3xl:right-[7vw]
      font-mono font-black tracking-tighter
      text-3xl text-slate-600 dark:text-neutral-400
      drop-shadow-deep
      transition duration-300 ease-in-out"
    href="tel://{telephone.replace(/[\s-()]/g, '')}"
    itemprop="telephone">
    <span>{tel.substring(0, 7)}</span>
    <span class="text-brand">{tel.substring(7)}</span>
  </a>

  {#if BROWSER}
    <button
      on:click={handlePoster}
      class="
        absolute bottom-[4vh] right-[4vw] lg:right-[3vw] 2xl:right-[2vw]
        drop-shadow-deep opacity-50 hover:opacity-100
        transition duration-300"
      class:rotate-45={!poster}
      type="button">
      <Icon
        icon="ic:round-close"
        size="2em" />
    </button>
  {/if}
</header>
