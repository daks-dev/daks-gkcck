/// <reference types="@sveltejs/kit" />

declare global {
  // interface Document {}
}

declare module '*.svg' {
  const value: string;
  export = value;
}

declare module '*.avif' {
  const value: string;
  export = value;
}

declare module '*.webp' {
  const value: string;
  export = value;
}

declare module '*.png' {
  const value: string;
  export = value;
}

declare module '*.jpg' {
  const value: string;
  export = value;
}

declare module '*.jpeg' {
  const value: string;
  export = value;
}
