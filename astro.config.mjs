// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  legacy: {
    collections: true
  },

  integrations: [tailwind()],

  markdown: {
    syntaxHighlight: "prism",
  },

  adapter: netlify(),
});