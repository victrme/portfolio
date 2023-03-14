<script>
	import Header from './lib/Header.svelte'
	import Contacts from './lib/Contacts.svelte'
	import Projects from './lib/Projects.svelte'
	import Intro from './lib/Intro.svelte'
	import { t } from './stores/lang'
</script>

<svelte:head>
	<title>{$t.page.title}</title>
	<meta name="description" content={$t.page.desc} />
</svelte:head>

<Header />

<main>
	<Intro />
	<Contacts />
	<Projects />
</main>

<style>
	:root {
		--color-text: #3a3b3c;
		--color-accent: #458ee8;
		--color-shadow: #4d709922;
		--color-underline: #4d709922;
		--color-background: #f6fbfd;
		--color-card-background: #fffc;
		--color-image-background: linear-gradient(45deg, rgba(69, 142, 232, 0.6), rgba(69, 142, 232, 0.2));
	}

	:global([data-theme='dark']) {
		--color-text: #ddd;
		--color-accent: #458ee8;
		--color-shadow: #000;
		--color-underline: #666;
		--color-background: #000;
		--color-card-background: #222;
	}

	:global(html),
	:global(body) {
		margin: 0;
		height: 100%;
		overflow-x: hidden;
		font-weight: 500;
		font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;
		line-height: 1.4em;
		color: var(--color-text);
		background-color: var(--color-background);
		background-size: cover;
	}

	:global(a) {
		text-decoration: none;
		color: inherit;
	}

	:global(a),
	:global(button) {
		font-weight: inherit;
		font-size: inherit;
		font-family: inherit;
	}

	:global(button:focus-visible),
	:global(a:focus-visible) {
		outline: 3px solid var(--color-accent);
	}

	:global(svg) {
		display: block;
		width: 16px;
		height: 16px;
		fill: var(--color-text);
		outline: none;
	}

	main {
		max-width: 60em;
	}

	main {
		position: relative;
		margin: 0 auto 12vh auto;
		font-size: 20px;
		overflow-x: hidden;
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
	}

	@media (max-width: 500px) {
		main {
			font-size: 16px;
		}
	}
</style>
