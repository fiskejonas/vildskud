// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/omvildskud.html"),
        about2: resolve(__dirname, "src/opencall.html"),
        about3: resolve(__dirname, "src/frivillig.html"),
        findvejmain: resolve(__dirname, "src/find_vej.html"),
        findvej1: resolve(__dirname, "src/downunder.html"),
        findvej2: resolve(__dirname, "src/vox.html"),
        findvej3: resolve(__dirname, "src/xenon.html"),
        findvej4: resolve(__dirname, "src/zebu.html"),
        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
