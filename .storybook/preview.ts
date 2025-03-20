import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /.*(background|color).*$/i,
      },
    },
    layout: 'centered',
  },
}

export default preview
