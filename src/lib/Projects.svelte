<script>
    import InlineSvg from 'svelte-inline-svg'

    import ProjectCard from "./ProjectCard.svelte";
    import projectList from '../../src/assets/projects.json'
    import arrowLeft from '../assets/arrows/left.svg'
    import arrowRight from '../assets/arrows/right.svg'

    let cardWidth = 0
    let listWidth = 0

    let counter = 0
    let counterMax
    let offset // en px
    let toMove // en px

    $: {
        offset = (listWidth % (cardWidth + 81)) + 60 // le reste de la carte qui depasse de la liste (en px)
        counterMax = projectList.length - Math.floor(listWidth / (cardWidth + 81)) // le max de deplacements pour tout afficher

        if (counter === 0) toMove = 0
        if (counter === 1) toMove = offset
        if (counter > 1) toMove = offset + (cardWidth + 81) * (counter - 1)
    }

</script>

<div id="projects">
	<div class="projects-header">
		<h2>Things I worked on</h2>

		<div class="navigator">
			<button disabled="{counter === 0}" name="scroll left" on:click={() => counter--} tabindex="0">
				<InlineSvg alt="" src={arrowLeft}/>
			</button>

			<button disabled="{counter === counterMax}" name="scroll right" on:click={() => counter++} tabindex="0">
				<InlineSvg alt="" src={arrowRight}/>
			</button>
		</div>
	</div>


	<div bind:offsetWidth={listWidth} class="list">
		{#each projectList as project}
			<div class="card"
				 bind:offsetWidth={cardWidth}
				 style={'transform: translateX(' + -toMove + 'px)'}>
				<ProjectCard {...project}/>
			</div>
		{/each}
	</div>


</div>

<style>

    .projects-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 3em;
    }

    h2 {
        font-size: 2em;
        margin-bottom: .5em;
    }

    .list {
        display: flex;
        overflow-x: hidden;
        padding: 3em;
        width: 100%;
        gap: 4em;
    }

    .navigator {
        text-align: center;
    }

    .navigator button {
        border: none;
        border-radius: 2em;
        background-color: transparent;
        color: var(--text);
        cursor: pointer;
        padding: .5em 2em;
    }

    .navigator button:not(:disabled):hover {
        color: white;
        background-color: var(--color-accent);
        box-shadow: .1em .1em 1em var(--color-shadow);
    }

    .navigator button:disabled {
        opacity: .4;
        cursor: default;
    }


</style>