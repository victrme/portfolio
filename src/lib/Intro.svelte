<script>
	import { _ } from 'svelte-i18n'
	import selfie from '../assets/selfie.webp'
	import Waving from './Waving.svelte'
	import '../style.css'
</script>

<div>
	<img src={selfie} alt="A la montagne" draggable="false" />
	<h1>
		<p>{$_('about.greetings')} <Waving /></p>
		<p>{$_('about.this')} <strong>victor.azevedo,</strong></p>
		<p>{$_('about.new')}</p>
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

	p {
		margin: 0;
	}

	strong {
		color: var(--color-accent);
	}

	@media (max-width: 740px) {
		h1 {
			text-align: center;
		}
	}

	@media (max-width: 500px) {
		h1 {
			font-size: 1.4em;
			line-height: 1.1em;
		}
	}
</style>
