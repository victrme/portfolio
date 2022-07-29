<script>
	import { _, getLocaleFromNavigator } from 'svelte-i18n'
	import { setupI18n } from './services/i18n'

	import Controls from './lib/Controls.svelte'
	import Contacts from './lib/Contacts.svelte'
	import Projects from './lib/Projects/Projects.svelte'
	import About from './lib/About.svelte'
	import './style.css'

	setupI18n({ withLocale: getLocaleFromNavigator().includes('fr') ? 'fr' : 'en' })
</script>

<svelte:head>
	<title>{$_('page.title')}</title>
	<meta name="description" content={$_('page.desc')} />
</svelte:head>

<header>
	<Controls />
</header>

<main>
	<div class="top">
		<About />
		<Contacts />
	</div>

	<Projects />
</main>

<style>
	.top {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-bottom: 10vh;
		gap: 4em;
	}

	main {
		position: relative;
		padding-top: 13vh;
		margin: 0 auto;
		font-size: 20px;
		font-weight: 500;
		color: var(--color-text);
		line-height: 1.4em;
		max-width: 60em;
		overflow-x: hidden;
	}

	@media (max-width: 1200px) or (max-height: 901px) {
		main {
			font-size: 17px;
		}
	}

	@media (max-width: 950px) {
		main {
			padding-top: 10vh;
			width: 100%;
		}

		.top {
			flex-direction: column;
		}
	}

	@media (max-width: 500px) {
		main {
			font-size: 16px;
		}
	}
</style>
