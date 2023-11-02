import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({}) => {
  return {
    assetsInclude: ["app/src/assets/scripts/**", "app/src/assets/styles/**"],
    build: {
      assetsDir: "app/src/assets",
      outDir: "dist",

      rollupOptions: {
        input: {
          "scripts/a": path.resolve(__dirname, "./app/src/assets/scripts/a.js"),
          "scripts/b": path.resolve(__dirname, "./app/src/assets/scripts/b.js"),
          "styles/a": path.resolve(__dirname, "./app/src/assets/styles/a.css"),
          "styles/b": path.resolve(__dirname, "./app/src/assets/styles/b.css"),
        },
        output: {
          assetFileNames: "app/src/assets/styles /[name].css",
        },
      },
    },
  };
});
