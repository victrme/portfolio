<script>
	import skills from '../assets/skills.json'
	import { _ } from 'svelte-i18n'
</script>

<h2>{$_('skills')}</h2>

<ul class="card skills">
	{#each skills as category}
		<li>
			<h3>{category.hours}</h3>
			<ul class="category">
				{#each category.skill as skill}
					<li>
						<div class="skill-dot" style={'background-color: ' + skill.color} />
						<span>{skill.name}</span>
					</li>
				{/each}
			</ul>
		</li>
	{/each}
</ul>

<style>
	ul,
	li {
		list-style: none;
	}

	h3 {
		margin-top: 0;
	}

	.skills {
		display: grid;
		grid-template-columns: min-content min-content;
		margin: 3em;
		gap: 4em;
	}

	.skills > li {
	}

	.category {
		padding: 0;
	}

	.category li {
		display: flex;
		align-items: center;
		gap: 0.5em;
	}

	.skill-dot {
		width: 0.25em;
		height: 0.25em;
		border-radius: 1em;
	}
</style>
