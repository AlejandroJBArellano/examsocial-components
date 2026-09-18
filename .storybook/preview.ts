import type { Preview } from "@storybook/react";

import "../lib/fonts/Satoshi_Complete/Fonts/WEB/css/satoshi.css";
import "../lib/fonts/Sentient_Complete/Fonts/WEB/css/sentient.css";
import "../lib/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
