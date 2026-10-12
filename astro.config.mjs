import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@tailwindcss/vite";

const site = "https://armankianian.github.io";

export default defineConfig({
  site,
  base: "/nana-accessoryy-fa",
  integrations: [sitemap()],
  vite: { plugins: [tailwind()] }
});