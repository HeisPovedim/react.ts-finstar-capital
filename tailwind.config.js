/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: 'black',
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '16px',
				},
				screens: {
					lg: '1200px',
				},
			},
		},
	},
	plugins: [],
};
