<script>
	import Waving from './Waving.svelte'
	import { t } from '../stores/lang'
</script>

<div>
	<picture>
		<source type="image/avif" srcset="./images/intro/selfie.avif" />
		<img src="./images/intro/selfie.jpg" alt="A la montagne" draggable="false" />
	</picture>

	<h1>
		<span>
			{$t.about.greetings}
			<Waving />
		</span>
		<span>
			{$t.about.this}
			<span id="name">victor.azevedo,</span>
		</span>
		<span>
			{$t.about.new}
		</span>
	</h1>
</div>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2em;
		margin: 12vh auto 6vh auto;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		image-rendering: auto;
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
		background: var(--color-image-background);
	}

	h1 {
		margin: 0;
		font-size: 2.2em;
		line-height: 1.2em;
		font-weight: 700;
		max-width: 12em;
	}

	h1 span {
		display: inline-block;
		margin: 0;
	}

	span#name {
		color: var(--color-accent);
	}

	@media (max-width: 740px) {
		picture {
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
