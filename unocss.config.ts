import {
  defineConfig,
  presetAttributify,
  presetWebFonts,
  presetWind3,
  transformerVariantGroup,
} from 'unocss'

import { colors } from './src/tokens'

export default defineConfig({
  theme: {
    colors,
    fontSize: {
      '2xs': ['0.75rem', '100%'],
      'xs': ['0.8125rem', '120%'],
      'sm': ['0.875rem', '140%'],
      'base': ['1rem', '140%'],
      'lg': ['1.125rem', '140%'],
      'xl': ['1.375rem', '120%'],
      '2xl': ['1.5rem', '120%'],
      '3xl': ['1.75rem', '110%'],
      '4xl': ['2rem', '100%'],
    },
  },
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
