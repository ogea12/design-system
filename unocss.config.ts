import { defineConfig, presetWebFonts, presetWind3, transformerVariantGroup } from 'unocss'

export default defineConfig({
  content: { filesystem: ['./src/**/*.tsx'] },
  presets: [
    presetWind3({ dark: 'class' }),
    presetWebFonts({
      provider: 'bunny',
      fonts: { sans: 'Albert Sans', mono: 'Barlow Condensed' },
    }),
  ],
  transformers: [transformerVariantGroup()],
})
