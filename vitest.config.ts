import type { UserConfig as VitestUserConfig } from "vitest/config";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "happy-dom",
    globals: true,
  },
}) as VitestUserConfig;
