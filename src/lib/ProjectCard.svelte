<script>
	import { _ } from 'svelte-i18n'

	export let _id = ''
	export let title = ''
	export let homepage = ''
	export let source = ''
	export let tags = []
</script>

<img alt={title + ' preview'} class="preview" draggable="false" src="./previews/{_id}.webp" />

<div class="card-title">
	<h3>{title}</h3>

	<div class="tags" aria-label="Made with">
		{#each tags as tag}
			<img src="./icons/{tag}.svg" alt={tag} draggable="false" />
		{/each}
	</div>
</div>

<p>{$_('projects.' + _id)}</p>

<div class="links">
	{#if homepage}
		<a href={homepage} aria-label="{title} homepage" draggable="false">
			{$_('projects.home')}
			<span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path
						d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"
					/>
				</svg>
			</span>
		</a>
	{/if}
	{#if source}
		<a href={source} aria-label="{title} source code on Github" draggable="false">
			{$_('projects.code')}
			<span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path
						d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"
					/>
				</svg>
			</span>
		</a>
	{/if}
</div>

<style>
	img.preview {
		margin: auto;
		width: 100%;
		height: 10em;
		object-fit: cover;
		border-radius: 0.5em;
		background-color: var(--color-background);
	}

	.card-title {
		display: flex;
		gap: 2em;
		justify-content: space-between;
		align-items: center;
		margin-top: 2em;
		margin-bottom: 1.5em;
	}

	h3 {
		font-size: 1.4em;
		margin: 0;
	}

	.card-title .tags {
		display: flex;
	}

	.card-title .tags img {
		width: 1em;
		height: 1em;
		margin-left: 0.6em;
	}

	p {
		width: 300px;
		text-align: left;
		margin: 1.5em 0;
	}

	.links {
		display: inline-flex;
		flex-direction: column;
	}

	.links a {
		width: fit-content;
		margin-top: 0.4em;
		border-bottom: 0.14em solid var(--color-underline);
	}

	.links span {
		display: none;
		font-size: 0.6em;
		font-weight: 700;
		vertical-align: sub;
	}

	.links a:hover {
		color: var(--color-accent);
		border-color: var(--color-accent);
	}

	.links a:hover span {
		display: inline-block;
		margin-left: 0.5em;
	}

	.links span svg {
		fill: var(--color-accent);
	}

	@media (max-width: 500px) {
		p {
			width: calc(100vw - 8em);
		}

		img {
			min-width: auto;
			max-width: auto;
		}
	}
</style>
