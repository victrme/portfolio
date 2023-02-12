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
		<span>
			{$_('header.lang')}
		</span>

		<button on:click={toggleLang}>
			{langStr[lang]}
		</button>

		<span>
			{$_('header.theme')}
		</span>

		<button on:click={toggleTheme}>
			{theme === 'dark' ? $_('header.dark') : $_('header.light')}
		</button>

		{#if lang === 'en'}
			<span>{$_('header.themeend')}</span>
		{/if}
	</nav>

	<div>
		<span><a href="https://victr.me/tiny">{$_('header.tiny')}</a></span>
	</div>
</header>

<style>
	header {
		text-align: center;
		margin-top: 5vh;
		font-size: 15px;
	}

	a,
	button {
		border: none;
		padding: 0;
		font-weight: inherit;
		font-size: inherit;
		color: var(--color-accent);
		background-color: transparent;
		cursor: pointer;
	}

	a,
	span,
	button {
		border-bottom: 0.15em solid transparent;
	}

	a:hover,
	button:hover {
		border-bottom: 0.15em solid var(--color-accent);
	}

	@media (max-width: 500px) {
		header {
			font-size: 12.5px;
		}
	}
</style>
