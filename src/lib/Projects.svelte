<script>
	import { onMount } from 'svelte'
	import projectList from '../assets/projects.json'
	import ArrowLeft from './arrows/Left.svelte'
	import ArrowRight from './arrows/Right.svelte'
	import ProjectCard from './ProjectCard.svelte'

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

<div id="projects">
	<nav aria-label="Scroll through projects">
		<button type="button" disabled={toMove === 0} aria-label="Scroll left" on:click={() => moveCarousel(-1)}>
			<ArrowLeft />
		</button>

		<button type="button" disabled={toMove + gap > max} aria-label="Scroll right" on:click={() => moveCarousel(1)}>
			<ArrowRight />
		</button>
	</nav>

	<ul bind:this={carousel} bind:offsetWidth={lw} on:scroll={updateCarouselPos} class="carousel">
		{#each projectList as project}
			<li class="card" bind:offsetWidth={cw}>
				<ProjectCard {...project} />
			</li>
		{/each}
	</ul>
</div>

<style>
	#projects {
		margin-top: 10vh;
	}

	nav {
		margin-left: 3em;
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

	:global(nav button:not(:disabled):hover svg) {
		fill: white;
	}

	:global(nav button:not(:disabled):active svg) {
		transform: scale(0.8);
	}

	ul.carousel {
		display: flex;
		overflow-x: scroll;
		scroll-behavior: smooth;
		width: calc(100% - 6em);
		padding: 3em;
		margin: 0;
		gap: 3em;
		list-style: none;
	}

	ul::-webkit-scrollbar {
		height: 0.3em;
	}

	ul::-webkit-scrollbar-thumb {
		background-color: var(--color-underline);
		background-clip: padding-box;
		border-left: 3em solid transparent;
		border-right: 3em solid transparent;
	}

	.card {
		padding: 3em;
		border-radius: 20px;
		box-shadow: 0.5em 0.5em 3em var(--color-shadow);
		background-color: var(--color-card-background);
		transition: transform 0.6s;
	}

	@media (max-width: 500px) {
		nav {
			margin-left: 2em;
		}

		nav button {
			padding: 0.5em 1em;
		}

		#projects {
			margin-top: 8vh;
		}

		ul.carousel {
			width: calc(100% - 3em);
			padding: 2em 1.5em 3em 1.5em;
			gap: 2em;
		}

		.card {
			padding: 2em;
		}
	}
</style>
