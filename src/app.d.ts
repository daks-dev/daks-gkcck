// See https://kit.svelte.dev/docs/types#app
declare namespace App {
  // interface Error {}
  // interface Locals {}
  // interface PageData {}
  // interface Platform {}
}

interface Project {
  id: number;
  name: string;
  address: string;
  area: number;
  area_term?: string;
  area_unit?: string;
  units?: number;
  units_term?: string;
  scope?: string;
  scope_term?: string;
  activities?: string;
  geodata: string;
  note?: string;
  title?: string;
  description?: string;
  customer?: number;
  priority?: number;
  hidden?: boolean;
}

interface Partner {
  id: number;
  name: string;
  email?: string;
  telephone?: string;
  address?: string;
  url?: string;
  title?: string;
  description?: string;
  projects?: number;
  priority?: number;
  hidden?: boolean;
}

interface Vacancy {
  id: number;
  title?: string;
  content?: string;
  email?: string;
  telephone?: string;
  count?: number;
  hidden?: boolean;
}

declare module '*&meta' {
  const value: any;
  export = value;
}
declare module '*?meta' {
  const value: any;
  export = value;
}

declare module '*&picture' {
  const value: any;
  export = value;
}

declare module '*&srcset' {
  const value: any;
  export = value;
}

declare module '*&webp' {
  const value: any;
  export = value;
}
declare module '*?webp' {
  const value: any;
  export = value;
}
declare module '*.webp' {
  const value: any;
  export = value;
}

declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.jpg' {
  const value: any;
  export = value;
}

declare module '*.jpeg' {
  const value: any;
  export = value;
}
