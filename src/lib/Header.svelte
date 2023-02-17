<script>
	import { theme } from '../stores/theme'
	import { t, lang } from '../stores/lang'

	const toggleTheme = () => {
		theme.update((val) => (val === 'light' ? 'dark' : 'light'))
	}

	const toggleLang = () => {
		lang.update((val) => (val === 'en' ? 'fr' : 'en'))
	}
</script>

<header>
	<nav>
		<span>{$t.header.lang}</span>

		<button on:click={toggleLang}>
			{$t.header.langval}
		</button>

		<span>{$t.header.theme}</span>

		<button on:click={toggleTheme}>
			{$theme === 'dark' ? $t.header.dark : $t.header.light}
		</button>

		<span>{$t.header.themeend}</span>
	</nav>

	<div>
		<a href="https://victr.me/tiny">>1kb portfolio</a>
	</div>
</header>

<style>
	header {
		text-align: center;
		margin-top: 5vh;
		font-size: 15px;
	}

	button {
		border: none;
		padding: 0;
		color: var(--color-accent);
		background-color: transparent;
		cursor: pointer;
	}

	a,
	span,
	button {
		border-bottom: 0.15em solid transparent;
	}

	a {
		border-color: var(--color-underline);
	}

	a:hover,
	button:hover {
		color: var(--color-accent);
		border-bottom: 0.15em solid var(--color-accent);
	}

	@media (max-width: 500px) {
		header {
			font-size: 12.5px;
		}
	}
</style>
