import React from "react";
import { MemoryRouter } from "react-router-dom";

import { ThemeProvider } from "@ngiudi.dev/hue-design-system";

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </MemoryRouter>
    ),
  ],

  parameters: {
    backgrounds: {},
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    layout: "fullscreen",
    status: {
      statuses: {
        //? add custom statuses.
      },
    },
  },

  initialGlobals: {
    backgrounds: {
      value: "light"
    }
  }
};

export default preview;