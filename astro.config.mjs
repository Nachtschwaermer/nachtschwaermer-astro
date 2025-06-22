import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  image: {
    responsiveStyles: true,
  },
  vite: {
    ssr: {
        external: ['svgo'],
    },
    plugins: [tailwindcss()],
},
});