<script>
    import Contacts from "./lib/Contacts.svelte";
    import Projects from "./lib/Projects.svelte";
    import About from "./lib/About.svelte"
</script>

<svelte:head>
	<title>victor.azevedo</title>
</svelte:head>

<main>

	<div class="top">
		<About />
		<Contacts links={[
			{text: "Github", url: "https://github.com"},
			{text: "Telegram", url: "https://t.me/@victrm"},
			{text: "Email", url: "mailto:victor.azevedo@mail.com"}
		]}/>
	</div>

	<Projects />



</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

    :global(html),
    :global(body) {
        margin: 0;
        height: 100%;
        background-color: #F6FBFD;
		overflow-x: hidden;
		background-size: cover;
    }

    * {
        font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

	:global(a) {
		text-decoration: none;
		color: inherit;
	}

	.top {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 4em;
		padding: 20vh 0 10vh 0;
	}

    main {
        padding-bottom: 20vh;
        margin: 0 auto;
		font-size: 20px;
        font-weight: 500;
        color: #3a3b3c;
        line-height: 1.4em;
    }

    img {
        height: 16rem;
        width: 16rem;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4rem;
        font-weight: 100;
        line-height: 1.1;
        margin: 2rem auto;
        max-width: 14rem;
    }

    @media (min-width: 480px) {
        h1 {
            max-width: none;
        }

        p {
            max-width: none;
        }
    }
</style>