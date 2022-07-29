<script>
	import { setupI18n } from '../services/i18n'
	import { _, getLocaleFromNavigator } from 'svelte-i18n'

	let dark = false
	let lang = getLocaleFromNavigator().includes('fr') ? 'fr' : 'en'

	const setTheme = (theme = 'light') => {
		localStorage.theme = theme
		document.documentElement.setAttribute('data-theme', theme)
	}

	const toggleTheme = () => {
		dark = !dark
		setTheme(dark ? 'dark' : 'light')
	}

	const toggleLang = () => {
		console.log(lang)
		lang = lang === 'en' ? 'fr' : 'en'
		setupI18n({ withLocale: lang })
	}

	$: {
		if (localStorage.theme) {
			dark = localStorage.theme === 'dark'
			setTheme(localStorage.theme)
		}
	}
</script>

<nav class="card controls">
	<span>{$_('header.lang')}</span>
	<button on:click={toggleLang}>{lang === 'en' ? 'english' : 'francais'}</button>
	<span>{$_('header.theme')}</span>
	<button on:click={toggleTheme}>{dark ? $_('header.dark') : $_('header.light')}</button>
</nav>

<style>
	.controls {
		display: flex;
		flex-wrap: wrap;
		max-width: 70%;
		width: fit-content;
		justify-content: center;
		align-items: center;
		padding: 0.5em 1em;
		font-size: 15px;
		margin: 3vh auto 0 auto;
		color: var(--color-text);
	}

	.controls > button {
		display: inline;
		border: none;
		margin: 0 0.4em;
		padding: 0;
		font-weight: inherit;
		font-size: inherit;
		color: var(--color-accent);
		background-color: transparent;
		cursor: pointer;
	}

	.controls span,
	.controls button {
		border-bottom: 0.15em solid transparent;
	}

	.controls > button:hover {
		border-bottom: 0.15em solid var(--color-accent);
	}

	@media (max-width: 500px) {
		.controls {
			font-size: 12.5px;
		}
	}
</style>
