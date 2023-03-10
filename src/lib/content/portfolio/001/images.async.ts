export const images = async () => [
(await import('./001.jpg?w=1280&h=720&webp')).default,
(await import('./002.jpg?w=1280&h=720&webp')).default,
(await import('./003.jpg?w=1280&h=720&webp')).default
];
export const thumbnails = async () => [
(await import('./001.jpg?w=320&h=180&webp')).default,
(await import('./002.jpg?w=320&h=180&webp')).default,
(await import('./003.jpg?w=320&h=180&webp')).default
];