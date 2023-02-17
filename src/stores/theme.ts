import { writable } from 'svelte/store'

export const theme = writable(localStorage.theme ? localStorage.theme : 'light')

theme.subscribe((val) => {
	localStorage.theme = val
	document.documentElement.dataset.theme = val
})
