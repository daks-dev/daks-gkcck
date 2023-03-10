import { getProjects } from '$lib/shared/sql/sqlite3';

import type { PageServerLoad } from './$types';
export const load: PageServerLoad = () => ({
  porfolio: getProjects()
 });
