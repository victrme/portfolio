<script>
	export let title = ''
	export let homepage = ''
	export let source = ''
	export let image = ''
	export let tags = []
	export let desc = { fr: '', en: '' }
</script>

<img alt={title + ' preview'} class="preview" draggable="false" src="./previews/{image}" />

<div class="card-title">
	<h3>{title}</h3>

	<div class="tags" aria-label="Made with">
		{#each tags as tag}
			<img src="./icons/{tag}.svg" alt={tag} draggable="false" />
		{/each}
	</div>
</div>

<p>{desc.en}</p>

<div class="links">
	{#if homepage}
		<a href={homepage} aria-label="{title} homepage" draggable="false">homepage <span>🡥</span></a>
	{/if}
	{#if source}
		<a href={source} aria-label="{title} source code on Github" draggable="false">source code <span>🡥</span></a>
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
		border-bottom: 0.14em solid transparent;
	}

	.links span {
		opacity: 0;
		font-size: 0.6em;
		font-weight: 700;
		vertical-align: super;
	}

	.links a:hover {
		color: var(--color-accent);
		border-color: var(--color-accent);
	}

	.links a:hover span {
		opacity: 1;
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
