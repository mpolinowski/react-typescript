# React UI

Scaffold your React app with [Vite.js](https://vitejs.dev/):

```bash
npm create vite@latest react-ts --template react-swc-ts
npm install react-router-dom @reduxjs/toolkit react-hook-form react-redux
npm install -D tailwindcss postcss autoprefixer
```

_tsconfig.json_

```json
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}

```

```bash
npm i -D @types/node
```

_vite.config.ts_


```ts
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```


```bash
npx shadcn-ui@latest init

✔ Would you like to use TypeScript (recommended)? … yes
✔ Which style would you like to use? › New York
✔ Which color would you like to use as base color? › Zinc
✔ Where is your global CSS file? … src/styles/global.css
✔ Would you like to use CSS variables for colors? … yes
✔ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) …
✔ Where is your tailwind.config.js located? … tailwind.config.js
✔ Configure the import alias for components: … @/components
✔ Configure the import alias for utils: … @/lib/utils
✔ Are you using React Server Components? … no
✔ Write configuration to components.json. Proceed? … yes
```

```bash
npx shadcn-ui@latest add <component name>
```

```ts
import { Component } from "@/components/ui/<component name>"
```





![Vite.js React Typescript SSR](./react-ts-ssr.png)





```bash
npm create vite@latest react-js --template react-swc

npm create vite@latest react-ts-ssr
✔ Select a template: › ssr-react
✔ Select a variant: › TypeScript + SWC
```
