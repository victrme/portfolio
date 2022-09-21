<script>
	import { setupI18n } from '../services/i18n'
	import { _, getLocaleFromNavigator } from 'svelte-i18n'

	let dark = false
	let lang = getLocaleFromNavigator().includes('fr') ? 'fr' : 'en'
	let langStr = { en: 'english', fr: 'francais' }

	const setTheme = (/** @type {boolean} */ d) => {
		localStorage.theme = d ? 'dark' : 'light'
		document.documentElement.setAttribute('data-theme', localStorage.theme)
	}

	const toggleTheme = () => {
		dark = !dark
		setTheme(dark)
	}

	const toggleLang = () => {
		lang = lang === 'en' ? 'fr' : 'en'
		setupI18n({ withLocale: lang })
	}

	$: {
		const scheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
		dark = localStorage.theme ? localStorage.theme === 'dark' : scheme

		setTheme(dark)
	}
</script>

<header>
	<nav class="card">
		<span>{$_('header.lang')}</span>
		<button on:click={toggleLang}>{langStr[lang]}</button>

		<span>{$_('header.theme')}</span>

		<button on:click={toggleTheme}>{dark ? $_('header.dark') : $_('header.light')}</button>

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
		color: var(--color-text);
		border-radius: 1em;
		box-shadow: 0.2em 0.2em 3em var(--color-shadow);
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
