<div class="contact">
	<a rel="noopener noreferrer" draggable="false" href="https://github.com/victrme">Github</a>
	<a rel="noopener noreferrer" draggable="false" href="https://t.me/victrm">Telegram</a>
	<a rel="noopener noreferrer" draggable="false" href="mailto:victor.azevedo@mail.com">Email</a>
</div>

<style>
	.contact {
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.5em;
	}

	a {
		font-size: 1.2em;
		font-weight: 500;
		padding: 0.5em 2.5em;
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

	@media (max-width: 950px) {
		.contact {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}

	@media (max-width: 740px) {
		.contact {
			gap: 0;
		}

		a {
			font-size: 1.2em;
			padding: 0.5em 1em;
		}
	}
</style>
