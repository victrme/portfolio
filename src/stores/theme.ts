let themestore: string = 'light'

export const init = () => {
	themestore = localStorage.theme ? localStorage.theme : 'light'
	document.documentElement.dataset.theme = themestore
}

export const update = (val: string) => {
	themestore = val
}

export const theme = (() => themestore)()
