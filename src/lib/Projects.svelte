<script>
    import InlineSvg from 'svelte-inline-svg'

    import ProjectCard from "./ProjectCard.svelte";
    import projectList from '../../src/assets/projects.json'
    import arrowLeft from '../assets/arrows/left.svg'
    import arrowRight from '../assets/arrows/right.svg'
    import '../styles/card.css'

    let moved = 0
    let w

    function moveLeft() {
        moved > 0 ? moved -= 1 : ''
    }

    function moveRight() {
        (moved < projectList.length - 1) ? moved++ : ''
    }

</script>

<div id="projects">
	<h2>Things I worked on</h2>

	<div class="list">
		{#each projectList as project}
			<div class="card"
				 bind:offsetWidth={w}
				 style={'transform: translateX(' + -(moved * (w + 81)) + 'px)'}>
				<ProjectCard {...project}/>
			</div>
		{/each}
	</div>

	<div class="navigator">
		<button disabled="{moved === 0}" on:click={moveLeft}>
			<InlineSvg alt="" src={arrowLeft}/>
		</button>

		<button disabled="{moved === projectList.length - 1}" on:click={moveRight}>
			<InlineSvg alt="" src={arrowRight}/>
		</button>
	</div>
</div>

<style>

    h2 {
        font-size: 2em;
        margin-bottom: .5em;
        margin-left: 1.5em;
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
        color: #3a3b3c;
        cursor: pointer;
        padding: .5em 2em;
    }

    .navigator button:not(:disabled):hover {
        color: white;
        background-color: #5399EC;
        box-shadow: .1em .1em 1em #4D709922;
    }

    .navigator button:disabled {
        opacity: .4;
        cursor: default;
    }


</style>