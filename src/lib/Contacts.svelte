<script>
    export let links
</script>

<div class="contact">
	{#each links as {url, text}}
		<a href={url}>
			{text}
		</a>
	{/each}
</div>


<style>
    .contact {
        display: inline-flex;
        flex-direction: column;
        gap: .5em;
    }

    a {
        font-size: 1.4em;
        font-weight: 500;
        padding: 12px 80px;
        text-align: center;
        border-radius: 10px;
    }

    a:hover {
        color: white;
        background-color: #5399EC;
        box-shadow: 10px 10px 20px #6662;
    }

    a:active {
        opacity: .8;
    }
</style>