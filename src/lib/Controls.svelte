<script>
	let dark = false

	const setTheme = (theme) => {
		localStorage.theme = theme
		document.documentElement.setAttribute('data-theme', theme)
	}

	const toggleTheme = () => {
		dark = !dark
		setTheme(dark ? 'dark' : 'light')
	}

	$: {
		if (localStorage.theme) {
			dark = localStorage.theme === 'dark'
			setTheme(localStorage.theme)
		}
	}
</script>

<nav class="controls">
	<div class="lang">
		<button>en</button>
	</div>

	<div class="theme">
		<button on:click={toggleTheme}>{dark ? 'dark' : 'light'}</button>
	</div>
</nav>

<style>
	.controls {
		position: absolute;
		top: 1em;
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		gap: 1em;
	}

	.controls > div {
		position: relative;
		z-index: 3;
		border: 1px solid var(--color-card-border);
		box-shadow: 0.5em 0.5em 2em var(--color-shadow);
		border-radius: 2em;

		background-color: var(--color-accent);
	}

	button {
		width: 80px;
		height: 30px;
		border: none;
		border-radius: 1em;
		color: white;
		background-color: transparent;
		cursor: pointer;
	}
</style>
