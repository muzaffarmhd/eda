/// <reference types="vite/client" />

declare module 'showdown';

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.md' {
  const src: string
  export default src
}

