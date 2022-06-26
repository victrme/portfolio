<script>
    import '../style.css'
    import Moi from '../assets/moi.jpg'
</script>

<div class="card">
	<img alt="Image de moi a la montagne" draggable="false" src={Moi}>
	<div class="intro">
		<h1>
			<span>Hi 👋</span>
			<span>This is <strong>victor.azevedo,</strong></span>
			<span>a new dev in town !</span>
		</h1>
	</div>
</div>

<style>

    .card {
        display: inline-flex;
        align-items: center;
        text-align: left;
        gap: 2em;
        min-width: 550px;
    }

    img {
        border-radius: 10px;
        width: 150px;
        height: 150px;
    }

    .intro {
        max-width: 500px;
    }

    p, h1 {
        font-size: 1.6em;
        font-weight: bold;
        line-height: 1.2em;
        margin: 0;
    }

    span {
        display: block;
    }

    strong {
        color: var(--color-accent);
    }
</style>