import { defineConfig, presetUno, presetWebFonts, transformerVariantGroup } from 'unocss'

import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
  presets: [
    presetUno(),
    presetAnimations(),
    presetShadcn(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        mono: ['Inter:400,500'],
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'components/**/*.{js,ts}',
      ],
    },
  },
  theme: {
    colors: {
      base: {
        100: '#FFFFFF',
        200: '#E8EDED',
      },
      neutral: {
        50: '#F7F7F7',
        100: '#E8EAEE',
        200: '#D5D9D9',
        300: '#BBC3C4',
        400: '#A4ABAC',
        500: '#848B8C',
        600: '#7A8486',
        700: '#525E60',
        800: '#373D3E',
        900: '#202425',
      },
      blue: {
        100: '#E5F0FF',
        200: '#C2DBFF',
        500: '#2B69BE',
        600: '#1752A2',
        700: '#0C4088',
      },
			red: {
				600: '#EE4343',
				700: '#E31717',
				800: '#C00000',
			}
    },
  },
})
