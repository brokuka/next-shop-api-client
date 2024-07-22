// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	css: [
		'@unocss/reset/tailwind.css',
	],

	features: {
		inlineStyles: false,
	},

	modules: ['@nuxt/eslint', '@unocss/nuxt', 'shadcn-nuxt'],

	eslint: {
		config: {
			standalone: false,
		},
	},
})