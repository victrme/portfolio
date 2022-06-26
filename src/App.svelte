<script>
    import Contacts from "./lib/Contacts.svelte";
    import Projects from "./lib/Projects.svelte";
    import About from "./lib/About.svelte";
    import './style.css'
</script>

<svelte:head>
	<title>victor.azevedo</title>
</svelte:head>

<main>

	<div class="top">
		<About/>
		<Contacts/>
	</div>

	<Projects/>

</main>

<style>

    .top {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 4em;
        padding-bottom: 10vh;
    }

    main {
        padding: 15vh 0;
        margin: 0 auto;
        font-size: 20px;
        font-weight: 500;
        color: var(--color-text);
        line-height: 1.4em;
        max-width: 1200px;
        overflow-x: hidden;
    }

    @media (min-width: 480px) {

    }
</style>