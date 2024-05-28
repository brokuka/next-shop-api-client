import { defineConfig, presetWebFonts, presetUno } from 'unocss'

export default defineConfig({
	presets: [
		presetUno(),
		presetWebFonts({
			provider: 'google',
			fonts: {
				mono: ['Inter:400,500']
			}
		}),
	],
	theme: {
		colors: {
			primary: '#141622',
			secondary: '#4D5166'
		}
	}
})