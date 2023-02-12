<!--
	*
	* All this to articulate waving from bottom right of hand emoji
	*
-->

<span id="wave">
	<span />
</span>

<style>
	@keyframes Waving {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(8deg);
		}
	}

	#wave {
		padding-left: 1.25em;
		display: inline-block;
	}

	#wave span {
		position: relative;
		display: inline-block;
		cursor: default;
		margin-bottom: -0.2em;
		animation: Waving 0.15s ease-in-out 0.2s 6 alternate;
	}

	#wave span::after {
		content: '👋';
		position: absolute;
		bottom: -0em;
		right: 0;
	}
</style>
