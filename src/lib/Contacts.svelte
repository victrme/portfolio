<script>
    export let links
</script>

<div class="contact">
	<a href=https://github.com/victrme>Github</a>
	<a href=https://t.me/@victrm>Telegram</a>
	<a href=mailto:victor.azevedo@mail.com>Email</a>
</div>


<style>
    .contact {
        display: inline-flex;
        flex-direction: column;
        gap: .5em;
    }

    a {
        font-size: 1.2em;
        font-weight: 500;
        padding: 12px 80px;
        border-radius: 10px;
    }

    a:hover {
        color: white;
        background-color: var(--color-accent);
        box-shadow: 10px 10px 20px #6662;
    }

    a:active {
        opacity: .8;
    }
</style>