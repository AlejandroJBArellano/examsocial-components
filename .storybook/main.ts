import type { StorybookConfig } from "@storybook/react-vite";
import postcss from "postcss";

const config: StorybookConfig = {
  stories: ["../lib/components/**/*.stories.@(mdx|js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
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
};
export default config;
