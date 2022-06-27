<script>
    import '../style.css'
    import profil from '../assets/moi.jpg'
</script>

<div class="card">
	<img src={profil} alt="Moi a la montagne" draggable="false" />
		<h1>
			<span>Hi 👋</span>
			<span>This is <strong>victor.azevedo,</strong></span>
			<span>a new dev in town !</span>
		</h1>
</div>

<style>

    .card {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: left;
        gap: 2em;
    }

    img {
        border-radius: 10px;
        width: 150px;
        height: 150px;
    }

    h1 {
        margin: 0;
        font-size: 1.6em;
        line-height: 1.2em;
        font-weight: bold;
        max-width: 500px;
        min-width: 320px;
    }

    span {
        display: block;
    }

    strong {
        color: var(--color-accent);
    }

    @media (max-width: 740px) {
        .card {
            flex-wrap: wrap;
            width: min-content;
        }

        h1 {
            text-align: center;
        }
    }

    @media (max-width: 500px) {
        .card {
            padding: 2em;
            width: calc(100% - 8em);
            overflow: hidden;
        }

        h1 {
            font-size: 1.5em;
        }
    }
</style>