import type { PresetWind3Theme } from 'unocss'

import { defineConfig, presetWebFonts, presetWind3, transformerVariantGroup } from 'unocss'

import { colors, fontSize } from './src/tokens'

export default defineConfig<PresetWind3Theme>({
  theme: {
    colors,
    fontSize,
  },
  content: { filesystem: ['./src/**/*.tsx'] },
  presets: [
    presetWind3({ dark: 'class' }),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: {
          name: 'Albert Sans',
          weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
        mono: {
          name: 'Barlow Condensed',
          weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
      },
    }),
  ],
  transformers: [transformerVariantGroup()],
})
