<script>
    import '../styles/card.css'
    import Moi from '../assets/moi.jpg'
</script>

<div class="card">
	<img alt="Image de moi a la montagne" draggable="false" src={Moi}>
	<div class="intro">
		<p>Hi 👋</p>
		<h1>This is <span>victor.azevedo,</span></h1>
		<p>a new dev in town !</p>
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
        color: #5399EC;
    }
</style>