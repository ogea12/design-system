import {
  defineConfig,
  presetAttributify,
  presetWebFonts,
  presetWind3,
  transformerVariantGroup,
} from 'unocss'

import { colors, fontSize } from './src/tokens'

export default defineConfig({
  theme: { colors, fontSize },
  content: { filesystem: ['./src/**/*.tsx'] },
  presets: [
    presetWind3({ dark: 'class' }),
    presetWebFonts({
      provider: 'bunny',
      fonts: { sans: 'Albert Sans', mono: 'Barlow Condensed' },
    }),
    presetAttributify({
      prefix: 'uno-',
      prefixedOnly: true,
      nonValuedAttribute: false,
    }),
  ],
  transformers: [transformerVariantGroup()],
})
