import { Nav } from 'daks-svelte';
import type { NavSite } from 'daks-svelte/types';

const config: NavSite = {
  navbar: {
    links: [
      {
        href: '/about',
        label: 'О нас',
        links: [
          {
            href: '/permissions',
            base: '',
            label: 'Допуски'
          },
          {
            href: '/vakansii',
            label: 'Вакансии'
          }
        ]
      },
      {
        href: '/activity',
        label: 'Деятельность',
        links: [
          {
            href: '/technical-customer',
            label: 'Технический заказчик'
          },
          {
            href: '/construction-control',
            label: 'Строительный контроль'
          },
          {
            href: '/engineering',
            label: 'Проектирование'
          },
          {
            href: '/laboratory-support',
            label: 'Лабораторное сопровождение'
          }
        ]
      },
      {
        href: '/portfolio',
        label: 'Портфолио'
      },
      {
        href: '/partners',
        label: 'Партнеры'
      },
      {
        href: '/contacts',
        label: 'Контакты'
      }
    ]
  },
  footer: {
    copylink: {
      href: '/',
      label: 'ГК&nbsp;ССК'
    },
    links: [
      {
        href: '/privacy',
        label: 'Конфиденциальность'
      },
      {
        href: '/admin',
        label: 'ic:outline-settings',
        disallow: true
      }
    ]
  }
};

export const map = [
  ...Nav.map(config.navbar.links),
  ...Nav.map(config.footer.links ?? []),
  ...(config.allow ?? [])
].filter((el, idx, arr) => arr.indexOf(el) === idx);

export default config;
