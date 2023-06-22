<script>
	import { t } from '../stores/lang'
	import { theme } from '../stores/theme'
	import ArrowRight from './arrows/Right.svelte'

	export let _id = ''
	export let title = ''
	export let homepage = ''
	export let category = ''
	export let source = ''
	export let tags = []
	export let themed = false

	let imageURL = _id

	$: {
		if (themed) imageURL = _id + '-' + $theme
		console.log(category)
	}
</script>

<div>
	<picture>
		<img src="./projects/previews/{imageURL}.webp" alt={'preview of ' + title} draggable="false" />
	</picture>

	<div class="card-title">
		<h2>{title}</h2>

		<div class="tags" aria-label="Made with">
			{#each tags as tag}
				<img src="./projects/tags/{tag}.svg" alt={tag} draggable="false" />
			{/each}
		</div>
	</div>

	<p>{$t.projects[_id]}</p>
</div>

<div class="links">
	{#if homepage}
		<a href={homepage} aria-label="{title} homepage" draggable="false">
			{$t.projects.home}
			<span>
				<ArrowRight />
			</span>
		</a>
	{/if}
	{#if source}
		<a href={source} aria-label="{title} source code on Github" draggable="false">
			{$t.projects.code}
			<span>
				<ArrowRight />
			</span>
		</a>
	{/if}
</div>

<style>
	picture img {
		display: block;
		width: 100%;
		height: 10em;
		object-fit: cover;
		border-radius: 0.5em;
		line-height: 10em;
		background: var(--color-image-background);
	}

	.card-title {
		display: flex;
		gap: 2em;
		justify-content: space-between;
		align-items: center;
		margin-top: 2em;
		margin-bottom: 1.5em;
	}

	h2 {
		font-size: 1.4em;
		margin: 0;
	}

	.card-title .tags {
		display: flex;
		gap: 0.6em;
	}

	.card-title .tags img {
		width: 1em;
		height: 1em;
	}

	p {
		text-align: left;
		margin: 1.5em 0;
	}

	.links {
		display: inline-flex;
		flex-direction: column;
		row-gap: 0.4em;
	}

	.links a {
		width: fit-content;
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

	:global(.links span svg) {
		fill: var(--color-accent);
	}

	@media (max-width: 500px) {
		img {
			min-width: auto;
			max-width: auto;
		}
	}
</style>
