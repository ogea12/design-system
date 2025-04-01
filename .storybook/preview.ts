import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

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
  tags: ['autodocs'],
}

export default preview
