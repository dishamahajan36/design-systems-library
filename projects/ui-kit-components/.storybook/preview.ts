import { applicationConfig, moduleMetadata, type Preview } from '@storybook/angular'
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    applicationConfig({
      providers: [
        // provideAnimations()
      ],
    }),
    moduleMetadata({
      imports: [], // Add other global modules here if needed by your stories directly
    }),
  ],
};
