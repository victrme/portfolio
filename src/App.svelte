<script>
	import Controls from './lib/Controls.svelte'
	import Contacts from './lib/Contacts.svelte'
	import Projects from './lib/Projects.svelte'
	import About from './lib/About.svelte'
	import './style.css'
</script>

<svelte:head />

<!-- <Controls /> -->

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
		padding: 15vh 0;
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
			padding: 10vh 0;
			width: 100%;
		}

		.top {
			flex-direction: column;
		}
	}

	@media (max-width: 500px) {
		main {
			padding: 5vh 0 10vh 0;
			font-size: 16px;
		}
	}
</style>
