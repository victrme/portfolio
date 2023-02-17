import fr from '../assets/lang/fr.json'
import en from '../assets/lang/en.json'
import { writable } from 'svelte/store'

const browserLang = navigator.language.includes('fr') ? 'fr' : 'en'

export const t = writable(en)
export const lang = writable(localStorage.lang ? localStorage.lang : browserLang)

lang.subscribe((val) => {
	localStorage.lang = val
	t.set(val === 'en' ? en : fr)
})
