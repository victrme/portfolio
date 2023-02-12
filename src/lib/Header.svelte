<script>
	import { setupI18n } from '../services/i18n'
	import { _, getLocaleFromNavigator } from 'svelte-i18n'

	let theme = 'light'
	let lang = 'en'
	let langStr = { en: 'english', fr: 'francais' }

	const setTheme = () => {
		localStorage.theme = theme
		document.documentElement.setAttribute('data-theme', theme)
	}

	const setLang = () => {
		localStorage.lang = lang
		setupI18n({ withLocale: lang })
	}

	const toggleTheme = () => {
		theme = theme === 'light' ? 'dark' : 'light'
		setTheme()
	}

	const toggleLang = () => {
		lang = lang === 'en' ? 'fr' : 'en'
		setLang()
	}

	$: {
		const scheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
		const navLang = getLocaleFromNavigator().includes('fr') ? 'fr' : 'en'

		theme = localStorage.theme ? localStorage.theme : scheme
		lang = localStorage.lang ? localStorage.lang : navLang

		setTheme()
		setLang()
	}
</script>

<header>
	<nav>
		<span>{$_('header.lang')}</span>
		<button on:click={toggleLang}>{langStr[lang]}</button>

		<span>{$_('header.theme')}</span>

		<button on:click={toggleTheme}>{theme === 'dark' ? $_('header.dark') : $_('header.light')}</button>

		{#if lang === 'en'}
			<span>{$_('header.themeend')}</span>
		{/if}
	</nav>

	<div class="tiny">
		<a href="https://victr.me/tiny">{$_('header.tiny')}</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90%;
		max-width: 1200px;
		margin: auto;
		margin-top: 3vh;
		font-size: 15px;
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		max-width: 70%;
		width: fit-content;
		justify-content: flex-start;
		align-items: center;
		padding: 0.5em 1em;
		line-height: 1em;
	}

	.tiny a,
	nav > button {
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

	.tiny a,
	nav span,
	nav button {
		border-bottom: 0.15em solid transparent;
	}

	.tiny a:hover,
	nav > button:hover {
		border-bottom: 0.15em solid var(--color-accent);
	}

	.tiny {
		text-align: right;
	}

	.tiny a {
		margin: 0;
	}

	@media (max-width: 500px) {
		header {
			font-size: 12.5px;
		}
	}
</style>
