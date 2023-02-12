<script>
	import { _ } from 'svelte-i18n'
	import selfie from '../assets/selfie.webp'
	import '../style.css'
</script>

<div>
	<img src={selfie} alt="A la montagne" draggable="false" />
	<h1>
		<span>{$_('about.greetings')}</span>
		<span>{$_('about.this')} <strong>victor.azevedo,</strong></span>
		<span>{$_('about.new')}</span>
	</h1>
</div>

<style>
	div {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: left;
		gap: 2em;
	}

	img {
		border-radius: 0.5em;
		width: 10em;
		height: 10em;
	}

	h1 {
		margin: 0;
		font-size: 2.2em;
		line-height: 1.2em;
		font-weight: bold;
		max-width: 12em;
	}

	span {
		display: block;
	}

	strong {
		color: var(--color-accent);
	}

	@media (max-width: 740px) {
		.card {
			flex-wrap: wrap;
			width: min-content;
		}

		h1 {
			text-align: center;
		}
	}

	@media (max-width: 500px) {
		.card {
			width: calc(100% - 8em);
			overflow: hidden;
		}

		h1 {
			font-size: 1.4em;
			line-height: 1.1em;
		}
	}
</style>
