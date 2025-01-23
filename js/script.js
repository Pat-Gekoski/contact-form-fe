const radioBtns = document.querySelectorAll('.radio-input')
const firstNameInput = document.getElementById('firstsName')
const lastNameInput = document.getElementById('lastName')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')

const formState = {
	firstName: {
		value: '',
		touched: false,
		error: '',
	},
	lastName: {
		value: '',
		touched: false,
		error: '',
	},
	email: {
		value: '',
		touched: false,
		error: '',
	},
	message: {
		value: '',
		touched: false,
		error: '',
	},
}

radioBtns.forEach((input) => {
	input.addEventListener('change', () => {
		for (const btn of radioBtns) {
			const container = btn.closest('.radio-input-container')
			container.classList.remove('active')
		}

		if (input.checked) {
			const container = input.closest('.radio-input-container')
			container.classList.remove('not-active')
			container.classList.add('active')
		}
	})
})
