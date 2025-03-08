import type { StorybookConfig } from "@storybook/react-vite";
import { dirname, resolve } from "path";
import postcss from "postcss";
import { fileURLToPath } from "url";

// Create __dirname equivalent for ESM
const __filename_from_url = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename_from_url);

const config: StorybookConfig = {
  stories: ["../lib/components/**/*.stories.@(mdx|js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: postcss,
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    // Add path aliases
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": resolve(__dirname, "../lib"),
      };
    }
    return config;
  },
};
export default config;
