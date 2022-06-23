<script>
    import { cubicOut } from 'svelte/easing';
    export let links

	let scale = 1

    function scaleHover(node, params) {
        const existingTransform = getComputedStyle(node).transform.replace('none', '');


        return {
            delay: params.delay || 0,
            duration: params.duration || 400,
            easing: params.easing || cubicOut,
            css: (t, u) => `transform: ${existingTransform} scaleY(${t});`
        };
    }

    function updateScale(which) {
        if (which === 'enter') scale = 1.1
        if (which === 'leave') scale = 1
        if (which === 'click') scale = .9

		console.log(scale)
	}
</script>

<div class="contact">
	{#each links as {url, text}}
		<a href={url}
		   onmouseenter="{() => updateScale('enter')}"
		   onmouseleave={() => updateScale('leave')}
		   onclick={() =>updateScale('click')}
		   transition:scaleHover>
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
		font-size: 24px;
		font-weight: 500;
        text-decoration: none;
        color: #444;
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