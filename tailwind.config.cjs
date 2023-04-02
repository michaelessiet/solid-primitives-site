/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-gradient': 'linear-gradient(90deg, #001E65 0%, #185899 100%)',
			},
			fontFamily: {
				'gordita': ['Gordita']
			}
		},
	},
	plugins: [],
}
