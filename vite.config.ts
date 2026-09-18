import react from "@vitejs/plugin-react";
import fs from "node:fs";
import { resolve } from "path";
import tailwindcss from "tailwindcss";
import { defineConfig, Plugin } from "vite";
import dts from "vite-plugin-dts";
import packageJson from "./package.json" with { type: "json" };

const externalPackages = [
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.peerDependencies || {}),
];

function copyFontsPlugin(): Plugin {
  return {
    name: "copy-fonts-plugin",
    closeBundle() {
      const src = resolve(__dirname, "lib/fonts");
      const dest = resolve(__dirname, "dist/fonts");
      if (fs.existsSync(src)) {
        fs.mkdirSync(dest, { recursive: true });
        fs.cpSync(src, dest, { recursive: true });
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./lib/index.ts"),
      formats: ["es"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      external: externalPackages,
      output: {
        manualChunks(id) {
          if (id.includes("lib/illustrations")) {
            return "illustrations";
          }
        },
        chunkFileNames: "[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) return "index.css";
          return assetInfo.name || "";
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts(), copyFontsPlugin()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./lib"),
    },
  },
});
