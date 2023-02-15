<script>
	import { _ } from 'svelte-i18n'
	import selfie from '../assets/selfie.webp'
	import Waving from './Waving.svelte'
</script>

<div>
	<picture>
		<img src={selfie} alt="A la montagne" draggable="false" />
	</picture>
	<h1>
		<p>{$_('about.greetings')} <Waving /></p>
		<p>{$_('about.this')} <span>victor.azevedo,</span></p>
		<p>{$_('about.new')}</p>
	</h1>
</div>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2em;
		padding: 0 1em;
		margin: 12vh auto 6vh auto;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		image-rendering: optimizeQuality;
		color: transparent;
	}

	picture {
		width: 10em;
		height: 10em;
		box-shadow: 0.2em 0.2em 1em var(--color-shadow);
		border-radius: 0.5em;
		overflow: hidden;
		image-rendering: pixelated;
		background-size: cover;
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAdElEQVQI1wFpAJb/AXep8f/4+vwA+vz9AAH+AQAAAAAAAhgVCgAbGA0AJ8qAALaVYwAcHA8AAuHUzgDhr3kAX1RSADAcEADpq3cAAvPSsgDg5vUA3OLbAMHFxADV5+oAAjQsJQDNxr0AR2+BABcVFgBBNjEAcDIngZ4UD8IAAAAASUVORK5CYII=');
	}

	h1 {
		margin: 0;
		font-size: 2.2em;
		line-height: 1.2em;
		font-weight: 700;
		max-width: 12em;
	}

	p {
		margin: 0;
	}

	span {
		color: var(--color-accent);
	}

	@media (max-width: 740px) {
		img {
			width: 7.8em;
			height: 7.8em;
		}

		h1 {
			font-size: 1.6em;
		}
	}

	@media (max-width: 500px) {
		div {
			flex-direction: column;
			margin-top: 8vh;
			margin-bottom: 4vh;
		}

		h1 {
			font-size: 1.4em;
			line-height: 1.1em;
			text-align: center;
		}
	}
</style>
