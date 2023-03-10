export const images = async () => [
(await import('./050.jpg?w=1280&h=720&webp')).default,
(await import('./051.jpg?w=1280&h=720&webp')).default
];
export const thumbnails = async () => [
(await import('./050.jpg?w=320&h=180&webp')).default,
(await import('./051.jpg?w=320&h=180&webp')).default
];