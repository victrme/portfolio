import { unwrites } from './typewriter'

// function hides(dom: HTMLDivElement, callback: Function) {
// 	const tags = dom.querySelectorAll('.links > *')
// 	const desc = dom.querySelector('.description')

// 	tags.forEach((tag) => {
// 		setTimeout(() => {
// 			tag.classList.add('hidden')
// 		}, Math.random() * 1000)
// 	})

// 	setTimeout(() => {
// 		desc.classList.add('hidden')
// 	}, Math.random() * 1000)

// 	setTimeout(() => {
// 		callback()
// 	}, 1000)
// }

window.onload = () => {
	const mail = document.querySelector('#mail') as HTMLParagraphElement
	const titres = document.querySelectorAll('.project h2') as NodeListOf<HTMLTitleElement>
	const projects = document.querySelectorAll('.project') as NodeListOf<HTMLDivElement>
	let lastOpen = -1

	titres.forEach((titre, i) => {
		titre.addEventListener('click', () => {
			if (lastOpen !== -1) {
				projects[i].classList.add('opened')
				projects[lastOpen].classList.remove('opened')
				lastOpen = i
			} else {
				projects[i].classList.add('opened')
				lastOpen = i
			}
		})
	})

	mail.addEventListener('click', () => {
		mail.innerText = atob('dmljdG9yLmF6ZXZlZG9AbWFpbC5jb20=')
		mail.classList.add('discovered')
	})
}
