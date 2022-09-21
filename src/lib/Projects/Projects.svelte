<script>
	import { _ } from 'svelte-i18n'
	import { onMount } from 'svelte'

	import projectList from '../../assets/projects.json'
	import ProjectCard from './Card.svelte'
	import Left from '../Arrows/Left.svelte'
	import Right from '../Arrows/Right.svelte'

	let carousel
	let cw = 0
	let lw = 0
	let max = 0
	let gap = 0
	let toMove = 0

	const clamp = (num = 0, min = 0, max = 1) => Math.min(Math.max(num, min), max)

	onMount(() => {
		const handleSizeChanges = () => {
			if (carousel) {
				gap = parseInt(window.getComputedStyle(carousel, null).gap)
				max = carousel.scrollWidth - lw
			}
		}

		handleSizeChanges()
		window.addEventListener('resize', handleSizeChanges)
	})

	function moveCarousel(dir = 1) {
		toMove += (cw + gap) * dir
		clamp(toMove, 0, max)
		carousel.scrollTo(toMove, 0)
	}

	function updateCarouselPos() {
		toMove = carousel.scrollLeft
	}
</script>

<div class="projects-header">
	<h2>{$_('projects.title')}</h2>

	<nav aria-label="Scroll through projects">
		<button disabled={toMove === 0} aria-label="Scroll left" on:click={() => moveCarousel(-1)}>
			<Left />
		</button>

		<button disabled={toMove + gap > max} aria-label="Scroll right" on:click={() => moveCarousel(1)}>
			<Right />
		</button>
	</nav>
</div>

<ul bind:this={carousel} bind:offsetWidth={lw} on:scroll={updateCarouselPos} class="carousel">
	{#each projectList as project}
		<li class="card" bind:offsetWidth={cw}>
			<ProjectCard {...project} />
		</li>
	{/each}
</ul>

<style>
	.projects-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 3em;
		gap: 2em;
	}

	nav {
		text-align: center;
	}

	nav button {
		border: none;
		border-radius: 2em;
		background-color: transparent;
		color: var(--text);
		cursor: pointer;
		padding: 0.5em 2em;
	}

	nav button:not(:disabled):hover {
		color: white;
		background-color: var(--color-accent);
		box-shadow: 0.1em 0.1em 1em var(--color-shadow);
	}

	nav button:disabled {
		opacity: 0.4;
		cursor: default;
	}

	ul.carousel {
		display: flex;
		overflow-x: scroll;
		scroll-behavior: smooth;
		width: calc(100% - 6em);
		padding: 3em;
		margin: 0%;
		margin-bottom: 3em;
		gap: 3em;
		list-style: none;
	}

	@media (max-width: 500px) {
		.projects-header {
			padding: 0 1em 0 2em;
		}

		nav button {
			padding: 0.5em 1em;
		}

		h2 {
			margin: 0;
		}

		ul.carousel {
			width: calc(100% - 3em);
			padding-left: 1.5em;
			padding-right: 1.5em;
			gap: 2em;
		}
	}
</style>
