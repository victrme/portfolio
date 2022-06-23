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
	}

	.list {
		display: grid;
		grid-template-columns: repeat(auto-fit, 600px);
		justify-content: center;
		margin: auto;
		width: 80%;
		gap: 40px;
    }
</style>