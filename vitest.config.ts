import { resolve } from "path";
import type { UserConfig as VitestUserConfig } from "vitest/config";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: ["@testing-library/jest-dom"],
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./lib"),
    },
  },
}) as VitestUserConfig;
