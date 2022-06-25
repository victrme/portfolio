<script>
    import ProjectCard from "./ProjectCard.svelte";
    import projectList from '../../src/assets/projects.json'
    import InlineSvg from 'svelte-inline-svg'
    import arrowLeft from '../assets/arrows/left.svg'
    import arrowRight from '../assets/arrows/right.svg'
    import '../styles/card.css'

    let moved = 0
    let w

    function updateNavigation(dir) {

        if (dir > 0 && moved < projectList.length - 1) {
            moved++
        }

        if (dir < 0 && moved > 0) {
            moved -= 1
        }
    }
</script>

<div id="projects">
	<h2>Things I worked on</h2>

	<div class="list">
		{#each projectList as project}
			<div class="card"
				 bind:offsetWidth={w}
				 style={'transform: translateX(' + -(moved * (w + 80)) + 'px)'}>
				<ProjectCard {...project}/>
			</div>
		{/each}
	</div>

	<div class="navigator">
		<button class={moved === 0 ? 'off' : ''} on:click='{e => updateNavigation(-1, e)}'>
			<InlineSvg src={arrowLeft} alt=""/>
		</button>

		<button class={moved === projectList.length - 1 ? 'off' : ''} on:click='{e => updateNavigation(1, e)}'>
			<InlineSvg src={arrowRight} alt=""/>
		</button>
	</div>
</div>

<style>

    h2 {
        font-size: 2em;
        margin-bottom: 2em;
        text-align: center;
    }

    .list {
        display: flex;
        overflow-x: hidden;
        padding: 3em;
        width: 100%;
        gap: 4em;
        /*transform: translateX(-120px);*/
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

    .navigator button:hover {
        color: white;
        background-color: #5399EC;
    }

    .navigator button.off {
        opacity: .4;
        cursor: default;
    }

    .navigator button.off:hover {
        color: #3a3b3c;
        background-color: transparent;
    }


</style>