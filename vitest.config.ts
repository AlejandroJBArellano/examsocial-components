import { resolve } from "path";
import type { UserConfig as VitestUserConfig } from "vitest/config";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: ["@testing-library/jest-dom"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["lib/**/*.{ts,tsx}"],
      exclude: [
        "lib/**/*.stories.{ts,tsx}",
        "lib/**/*.test.{ts,tsx}",
        "lib/**/index.{ts,tsx}",
        "lib/illustrations/**",
        "lib/**/*Example.{ts,tsx}",
        "lib/vite-env.d.ts",
      ],
      thresholds: {
        lines: 100,
        statements: 100,
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./lib"),
    },
  },
}) as VitestUserConfig;
