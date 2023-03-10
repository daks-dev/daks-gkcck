export const dataset = async () => [
(await import('./001.png?webp')).default,
(await import('./002.png?webp')).default,
(await import('./003.png?webp')).default,
(await import('./004.png?webp')).default
];