<script>
    import gulptag from '../assets/gulp.png'
    import jstag from '../assets/js.png'
    import sasstag from '../assets/Sass.png'

    export let title = ''
    export let desc = ''
    export let homepage = ''
    export let tags = [gulptag, jstag, sasstag]

</script>

<div class="card-header">
	<h3><a href={homepage}>{title}</a></h3>
	<div class="tags">
		{#each tags as tag}
			<img src={tag} alt="tools used"/>
		{/each}
	</div>
</div>

<div class="card-main">
	<img src="https://bonjourr.fr/illu.webp" alt={title + " preview"}>
	<p>{desc}</p>
</div>


<style>

    h3 {
        font-size: 1.6em;
        margin: 0;
    }

    h3 a {
        display: inline-block;
        height: 1em;
        color: #333333;
        text-decoration: none;
        border-bottom: 3px solid transparent;
    }

    h3 a:hover {
        color: #5399EC;
        border-color: #5399EC;
    }

    .card-header,
    .card-main {
        display: flex;
        gap: 2em;
        justify-content: space-between;
        align-items: center;
        max-width: 500px;
    }

    .card-header {
        margin-bottom: 2em;
    }

    .card-header span {
        margin: 0 10px;
    }

    .tags img {
        width: 20px;
        height: 20px;
        margin-left: 16px;
    }

    .card-main img {
        width: 50%;
        min-width: 200px;
    }

    .card-main p {
        text-align: left;
    }
</style>


