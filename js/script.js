const radioBtns = document.querySelectorAll('.radio-input')

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
