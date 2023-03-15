import { json } from '@sveltejs/kit';
import { building } from '$app/environment';
import { iconset } from 'daks-svelte/server';

export const prerender = false;

export const GET = async () => json(building ? null : await iconset());
