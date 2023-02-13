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
		padding: 0.4em 2em;
		border-radius: 0.5em;
	}

	a:hover {
		color: white;
		background-color: var(--color-accent);
		box-shadow: 0.5em 0.5em 1em #6662;
	}

	a:active {
		opacity: 0.8;
	}

	@media (max-width: 740px) {
		a {
			font-size: 1em;
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
