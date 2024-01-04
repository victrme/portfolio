import fr from '../assets/lang/fr.json'
import en from '../assets/lang/en.json'

const browserLang = navigator.language.includes('fr') ? 'fr' : 'en'

export let t = 'en'
export let lang = localStorage.lang ? localStorage.lang : browserLang

lang.subscribe((val) => {
	localStorage.lang = val
	t = val === 'en' ? en : fr
})
