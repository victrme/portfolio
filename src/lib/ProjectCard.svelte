<script>
    import gulptag from '../assets/icons/gulp.png'
    import jstag from '../assets/icons/javascript.svg'
    import sasstag from '../assets/icons/sass.svg'

    export let title = ''
    export let desc = ''
    export let homepage = ''
    export let source = ''
    export let tags = [gulptag, jstag, sasstag]

</script>

<img alt={title + " preview"} class="preview" draggable="false" src="https://bonjourr.fr/illu.webp">

<div class="card-title">

	<h3>{title}</h3>

	<div class="tags">
		{#each tags as tag}
			<img src={tag} alt="tools used" draggable="false"/>
		{/each}
	</div>
</div>

<p>{desc}</p>

<div class="links">
	<a href={homepage}>homepage <span>→</span></a>
	<a href={source}>source code <span>→</span></a>
</div>


<style>

    img.preview {
        width: 100%;
        min-width: 200px;
        max-width: 300px;
        margin: auto;
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

    .card-title span {
        margin: 0 10px;
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
        background-color: #5399EC;
        color: white;
    }
</style>


