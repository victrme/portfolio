let interval = 0
let temp = ''

export function unwrites(dom: HTMLParagraphElement, callback?: VoidFunction) {
	let str = [...dom.innerText]
	temp = dom.innerText

	interval = setInterval(() => {
		if (str.length > 0) {
			str.pop()
			dom.innerText = str.join('')
		} else {
			clearInterval(interval)
			if (callback) callback()
		}

		console.log(temp)
	}, 10)
}

function rewrites(dom: HTMLParagraphElement, str: string) {
	let count = 0

	interval = setInterval(() => {
		if (count < str.length) {
			dom.innerText += str.slice(0, count++ + 1)
		} else {
			clearInterval(interval)
		}
	}, 80)
}

// window.onload = () => {
// 	const dom = document.querySelector('#test') as HTMLParagraphElement

// 	dom.addEventListener('mouseenter', () => {
// 		if (!dom.classList.contains('rwr')) {
// 			unwrites(dom, () => {
// 				rewrites(dom, 'bonjour la vie')
// 				dom.classList.add('rwr')
// 			})
// 		}
// 	})

// 	dom.addEventListener('mouseleave', () => {
// 		if (!dom.classList.contains('rwr')) {
// 			console.log(dom.innerText.length)
// 			clearInterval(interval)

// 			const wasRemoved = temp.slice(dom.innerText.length, temp.length)

// 			rewrites(dom, wasRemoved)
// 		}
// 	})
// }
