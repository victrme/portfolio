<div class="contact">
	<a rel="noopener noreferrer" draggable="false" href="https://github.com/victrme">Github</a>
	<a rel="noopener noreferrer" draggable="false" href="https://t.me/victrm">Telegram</a>
	<a rel="noopener noreferrer" draggable="false" href="mailto:victor.azevedo@mail.com">Email</a>
</div>

<style>
	.contact {
		text-align: center;
	}

	a {
		font-size: 1.2em;
		padding: 0.1em 0em;
		margin: 0.3em 1.4em;
		border-bottom: 0.15em solid transparent;
		border-color: var(--color-underline);
	}

	a:focus-visible,
	a:hover {
		padding: 0.4em 1.4em;
		margin: 0;
		color: white;
		border: none;
		border-radius: 0.5em;
		background-color: var(--color-accent);
		box-shadow: 0.5em 0.5em 1em var(--color-shadow);
	}

	a:active {
		opacity: 0.8;
	}

	@media (max-width: 740px) {
		a {
			font-size: 1em;
			margin: 0.3em 1em;
		}

		a:focus-visible,
		a:hover {
			padding: 0.4em 1em;
		}
	}

	@media (max-width: 500px) {
		.contact {
			gap: 0.6em;
			text-align: center;
			flex-direction: column;
		}
	}
</style>
