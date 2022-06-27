<script>
    import { onMount } from 'svelte';
    import InlineSvg from 'svelte-inline-svg'

    import ProjectCard from "./ProjectCard.svelte";
    import projectList from '../../src/assets/projects.json'
    import arrowLeft from '../assets/arrows/left.svg'
    import arrowRight from '../assets/arrows/right.svg'

    let cardWidth = 0
    let listWidth = 0
    let gap = 0
    let list

    let counter = 0
    let counterMax
    let toMove

    const handleSizeChanges = () => {
        gap = parseInt(window.getComputedStyle(list, null).gap)
        counterMax = projectList.length - Math.floor(listWidth / (cardWidth + gap)) 
    }

    onMount(() => {
        handleSizeChanges()
        window.addEventListener('resize', handleSizeChanges)
    })

    $: {
       toMove = counter === 0 ? 0 : (cardWidth + gap) * counter
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


	<div bind:this={list}  bind:offsetWidth={listWidth} class="list">
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
        gap: 2em;
    }

    h2 {
        font-size: 2em;
        line-height: 1.1em;
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

    @media (max-width: 500px) {
        .projects-header {
            padding: 0 1em 0 2em;
        }

        .navigator button {
            padding: .5em 1em;
        }

        .list {
            padding: 3em 2em;
            gap: 3em;
        }
    }
</style>