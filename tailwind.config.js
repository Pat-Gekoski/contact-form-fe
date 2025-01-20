/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	theme: {
		extend: {
			colors: {
				lightGreen: 'hsl(148, 38%, 91%)',
				darkGreen: 'hsl(169, 82%, 27%)',
				error: 'hsl(0, 66%, 54%)',
				lightGray: 'hsl(186, 15%, 59%)',
				darkGray: 'hsl(187, 24%, 22%)',
			},
		},
	},
	plugins: ['prettier-plugin-tailwindcss'],
}
