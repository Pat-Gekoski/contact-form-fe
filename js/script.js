document.addEventListener('DOMContentLoaded', () => {
	const radioBtns = document.querySelectorAll('.radio-input')
	const inputs = document.querySelectorAll('.input')
	const form = document.getElementById('form')
	const consentBtn = document.getElementById('consent')

	const formState = {
		firstName: {
			value: '',
			touched: false,
		},
		lastName: {
			value: '',
			touched: false,
		},
		email: {
			value: '',
			touched: false,
		},
		message: {
			value: '',
			touched: false,
		},
		query: {
			value: '',
			touched: false,
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

				document.getElementById('query-error').classList.add('hidden')
			}
		})
	})

	inputs.forEach((input) => {
		input.addEventListener('focus', (e) => {
			const id = e.target.id
			formState[id].touched = true
		})
	})

	inputs.forEach((input) => {
		input.addEventListener('blur', (e) => {
			const id = e.target.id
			if (!id) return

			if (formState[id].touched) {
				const value = e.target.value
				if (!validators[id](value)) {
					console.log('validator: ', validators[id](value))
					document.getElementById(`${id}-error`).classList.remove('hidden')
				}
			}
		})
	})

	inputs.forEach((input) => {
		input.addEventListener('input', (e) => {
			const id = e.target.id
			if (id) {
				const el = document.getElementById(`${id}-error`)
				if (el) {
					el.classList.add('hidden')
				}
			}
		})
	})

	consentBtn.addEventListener('change', (e) => {
		if (e.target.checked) {
			document.getElementById('consent-error').classList.add('hidden')
		}
	})

	const validators = {
		firstName: (value) => {
			return value && value.length
		},
		lastName: (value) => {
			return value && value.length
		},
		email: (value) => {
			const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
			return emailRegex.test(value)
		},
		message: (value) => {
			return value && value.length
		},
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault()

		let isValid = true

		const formData = new FormData(form)
		const formValues = Object.fromEntries(formData.entries())

		console.log('FormData:', formValues)

		if (!formValues.queryType) {
			document.getElementById('query-error').classList.remove('hidden')
			isValid = false
		}
		if (!formValues.consent) {
			document.getElementById(`consent-error`).classList.remove('hidden')
			isValid = false
		}
		if (!validators['firstName'](formValues?.firstName)) {
			document.getElementById(`firstName-error`).classList.remove('hidden')
			isValid = false
		}
		if (!validators['lastName'](formValues?.lastName)) {
			document.getElementById(`lastName-error`).classList.remove('hidden')
			isValid = false
		}
		if (!validators['email'](formValues?.email)) {
			document.getElementById(`email-error`).classList.remove('hidden')
			isValid = false
		}
		if (!validators['message'](formValues?.message)) {
			document.getElementById(`message-error`).classList.remove('hidden')
			isValid = false
		}

		if (!isValid) return

		showSuccessMsg()
	})

	function clearForm() {
		form.reset()
	}

	function showSuccessMsg() {
		clearForm()
		for (const btn of radioBtns) {
			const container = btn.closest('.radio-input-container')
			container.classList.remove('active')
			container.classList.add('not-active')
		}
		const toast = document.getElementById('toast')

		console.log('toast: ', toast)

		if (toast) {
			toast.classList.remove('opacity-0')
			toast.classList.remove('-translate-y-52')
			toast.classList.add('translate-y-0')
			toast.classList.add('opacity-100')

			setTimeout(() => {
				toast.classList.remove('translate-y-0')
				toast.classList.remove('opacity-100')
				toast.classList.add('opacity-0')
				toast.classList.add('-translate-y-52')
			}, 3000)
		}
	}
})
