<script>
	import ProjectCard from "./ProjectCard.svelte";
    import projectList from '../../src/assets/projects.json'
	import '../styles/card.css'
</script>

<div id="projects">
	<h2>Things I worked on</h2>

	<div class="list">
		{#each projectList as project}
			<div class="card">
				<ProjectCard {...project} />
			</div>
		{/each}
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
		margin-left: calc(20% - 40px);
		width: 80%;
		gap: 4em;
    }
</style>