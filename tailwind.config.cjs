/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
			'slab': ['Sanchez', 'Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
			'title': ['Montserrat', 'Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif']
		},
		extend: {
			backgroundImage: theme => ({
				'statistics-picture': "url('/images/flagge.jpg')",
				'quote-picture': "url('/images/wackelzug2018.jpg')",
			}),
			height: {
				'screen-1/2': '50vh',
				'screen-1/3': 'calc(100vh / 3)',
				'screen-2/3': 'calc(100vh / 1.5)',
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
	],
}
