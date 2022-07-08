<script>

</script>

<div class="controls">
    <div class="lang">
        <button>en</button>
    </div>

    <div class="theme">
        <button>light</button>
    </div>
</div>

<style>
    .controls {
        display: flex;
        width: 100%;
        justify-content: flex-start;
        align-items: center;
        gap: 1em;
    }

    .controls > div {
        position: relative;
        z-index: 3;
        border: 1px solid #fff;
        box-shadow: .5em .5em 2em var(--color-shadow);
        border-radius: 2em;
        
        background-color: var(--color-accent);
    }

    button {
        width: 80px;
        height: 30px;
        border: none;
        border-radius: 1em;
        color: white;
        background-color: transparent;
    }
</style>