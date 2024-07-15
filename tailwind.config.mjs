/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './src/components/*.{astro}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				'dark': {
					'primary': {  DEFAULT: '#2A669F',  50: '#E4F7F8',  100: '#CCEEF2',  200: '#9CD7E5',  300: '#6CB9D8',  400: '#3B94CB',  500: '#2A669F',  600: '#234B83',  700: '#1B3366',  800: '#14204A',  900: '#0C102E',  950: '#080A20'},
					'secondary': {  DEFAULT: '#166064',  50: '#57D3DA',  100: '#47CFD6',  200: '#2CC0C8',  300: '#25A0A7',  400: '#1D8085',  500: '#166064',  600: '#0C3436',  700: '#020808',  800: '#000000',  900: '#000000'},
				}
			},
			fontFamily: {
				'source-code-pro': ['Source Code Pro', 'monospace']
			}
		},
	},
	plugins: [],
}
