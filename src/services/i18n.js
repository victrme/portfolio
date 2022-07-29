import { dictionary, locale, _ } from 'svelte-i18n'
import en from '../assets/lang/en.json'
import fr from '../assets/lang/fr.json'

function setupI18n({ withLocale: _locale } = { withLocale: 'en' }) {
	dictionary.set({ en, fr })
	locale.set(_locale)
}

export { _, setupI18n }
