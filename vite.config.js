import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages: https://bala27032002.github.io/portfolio/
export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL ? "/" : "/portfolio/",
});
