import { DEV } from 'esm-env';
import { addCollection } from '@iconify/svelte/offline';

import bundles from './bundles.json';
bundles.forEach((bundle: any) => addCollection(bundle));

const custom: string[] = [
  // 'svelte-logo',
  'blocks-scale'
];

// import './custom/svelte-logo';
import './custom/blocks-scale';

export default custom;

DEV && console.debug('CSR iconify');
