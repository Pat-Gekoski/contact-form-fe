/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	safelist: ['translate-y-52', 'opacity-0', 'translate-y-0', 'opacity-100'],
	theme: {
		extend: {
			colors: {
				lightGreen: 'hsl(148, 38%, 91%)',
				darkGreen: 'hsl(169, 82%, 27%)',
				error: 'hsl(0, 66%, 54%)',
				lightGray: 'hsl(186, 15%, 59%)',
				darkGray: 'hsl(187, 24%, 22%)',
			},
			fontFamily: {
				karla: ['Karla', 'serif'],
			},
		},
	},
	safelist: ['border-lightGray', 'border-darkGreen'],
	plugins: ['prettier-plugin-tailwindcss'],
}
