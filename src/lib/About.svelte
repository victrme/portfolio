<script>
	import '../styles/card.css'
	import Moi from '../assets/moi.jpg'
</script>

<div class="card">
	<img src={Moi} alt="Image de moi a la montagne" draggable="false">
	<div class="intro">
		<p>Hi 👋</p>
		<p>This is <span>victor.azevedo,</span></p>
		<p>a new dev in town !</p>
	</div>
</div>

<style>

	.card {
		display: inline-flex;
		align-items: center;
		text-align: left;
		gap: 2em;
    }

	img {
		border-radius: 10px;
		width: 150px;
		height: 150px;
	}

	.intro {
		max-width: 500px;
	}

	p {
		font-size: 1.6em;
		font-weight: bold;
		line-height: 1.2em;
		margin: 0;
	}

	span {
		color: #5399EC;
	}
</style>