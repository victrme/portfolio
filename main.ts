window.onload = () => {
	const titres = document.querySelectorAll('.project h2') as NodeListOf<HTMLTitleElement>
	const projects = document.querySelectorAll('.project') as NodeListOf<HTMLDivElement>
	let lastOpen = -1

	titres.forEach((titre, i) => {
		titre.addEventListener('click', () => {
			if (lastOpen !== -1 && lastOpen !== i) {
				projects[lastOpen].classList.remove('opened')
			}

			projects[i].classList.toggle('opened')
			lastOpen = i
		})
	})
}
