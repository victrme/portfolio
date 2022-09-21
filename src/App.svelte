<script>
	import { _, getLocaleFromNavigator } from 'svelte-i18n'
	import { setupI18n } from './services/i18n'

	import Header from './lib/Header.svelte'
	import Contacts from './lib/Contacts.svelte'
	import Projects from './lib/Projects/Projects.svelte'
	import Skills from './lib/Skills.svelte'
	import Intro from './lib/Intro.svelte'
	import './style.css'

	setupI18n({ withLocale: getLocaleFromNavigator().includes('fr') ? 'fr' : 'en' })
</script>

<svelte:head>
	<title>{$_('page.title')}</title>
	<meta name="description" content={$_('page.desc')} />
</svelte:head>

<main>
	<Header />

	<div class="top">
		<Intro />
		<Contacts />
	</div>

	<Projects />

	<!-- <Skills /> -->
</main>

<style>
	main {
		max-width: 60em;
	}

	main {
		position: relative;
		margin: 0 auto;
		font-size: 20px;
		font-weight: 500;
		color: var(--color-text);
		line-height: 1.4em;
		overflow-x: hidden;
	}

	.top {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 13vh;
		padding-bottom: 10vh;
		gap: 4em;
	}

	@media (max-width: 1200px) or (max-height: 901px) {
		main {
			font-size: 17px;
		}
	}

	@media (max-width: 950px) {
		main {
			width: 100%;
		}

		.top {
			padding-top: 10vh;
			flex-direction: column;
		}
	}

	@media (max-width: 500px) {
		main {
			font-size: 16px;
		}
	}
</style>
