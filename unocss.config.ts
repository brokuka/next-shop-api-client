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
      },
      neutral: {
        50: '#F7F8FA',
        100: '#E6E9EE',
        200: '#D5D9DE',
        300: '#B9C0C9',
        400: '#9FA7B2',
        500: '#7A828C',
        600: '#737B86',
        700: '#4B5058',
        800: '#34383E',
        900: '#1F2225',
      },
      blue: {
        50: '#F1F7FF',
        100: '#E5F0FF',
        200: '#C2DBFF',
        300: '#B8D6FF',
        400: '#85ACE2',
        500: '#4682D4',
        600: '#2967BC',
        700: '#144D9C',
        800: '#09336E',
        900: '#042654',
      },
    },
    fontSize: {
      xs: ['12px', '20px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      md: '18px',
      lg: ['20px', {
        lineHeight: '28px',
        fontWeight: '600',
      }],
      xl: ['24px', {
        lineHeight: '32px',
        fontWeight: '700',
      }],
    },
  },
})
