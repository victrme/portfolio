
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
        padding: .5em 2.5em;
        border-radius: .5em;
    }

    a:hover {
        color: white;
        background-color: var(--color-accent);
        box-shadow: .5em .5em 1em #6662;
    }

    a:active {
        opacity: .8;
    }

    @media (max-width: 950px) {
        .contact {
            flex-direction: row;
            flex-wrap: wrap;
        }
    }

    @media (max-width: 740px) {
        .contact {
            flex-direction: column;
        }
    }
</style>