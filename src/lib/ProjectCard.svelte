<script>
    export let title = ''
    export let homepage = ''
    export let source = ''
    export let image = ''
    export let tags = []
    export let desc = {fr: '', en: ''}
</script>

<img alt={title + " preview"} class="preview" draggable="false" src="/previews/{image}">

<div class="card-title">

	<h3>{title}</h3>

	<div class="tags">
		{#each tags as tag}
			<img src="/icons/{tag}.svg" alt="{tag} icon" draggable="false"/>
		{/each}
	</div>
</div>

<p>{desc.en}</p>

<div class="links">
	{#if homepage}
		<a href={homepage}>homepage <span>→</span></a>
	{/if}
	{#if source}
		<a href={source}>source code <span>→</span></a>
	{/if}
</div>


<style>

    img.preview {
        width: 100%;
        min-width: 200px;
        max-width: 300px;
        margin: auto;
        border-radius: .5em;
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
        margin-left: .6em;
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
        margin: .2em 0 0 -1em;
        padding: .2em 1em;
        text-decoration: none;
        border-radius: 2em;
    }

    .links span {
        font-size: 1.2em;
        margin-left: .3em;
    }

    .links a:hover {
        color: white;
        background-color: var(--color-accent);
    }

     @media (max-width: 500px) {
        p {
            width: 250px;
        }

        img {
            min-width: auto;
            max-width: auto;
        }
    }
</style>


