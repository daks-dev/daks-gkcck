export const images = async () => [
(await import('./030.jpg?w=1280&h=720&webp')).default,
(await import('./031.jpg?w=1280&h=720&webp')).default,
(await import('./032.jpg?w=1280&h=720&webp')).default
];
export const thumbnails = async () => [
(await import('./030.jpg?w=320&h=180&webp')).default,
(await import('./031.jpg?w=320&h=180&webp')).default,
(await import('./032.jpg?w=320&h=180&webp')).default
];