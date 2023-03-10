export const images = async () => [
(await import('./041.jpg?w=1280&h=720&webp')).default,
(await import('./042.jpg?w=1280&h=720&webp')).default
];
export const thumbnails = async () => [
(await import('./041.jpg?w=320&h=180&webp')).default,
(await import('./042.jpg?w=320&h=180&webp')).default
];