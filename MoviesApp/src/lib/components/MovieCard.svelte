<script>
    import { createEventDispatcher } from "svelte";
    export let movie;
    export let isFavorite = false;
    const dispatch = createEventDispatcher();

    function toggleFavClick() {
        dispatch("fav");
    }
</script>

<div class="movie-card" on:click={() => dispatch("click")}>
    <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
    />
    <div class="title-row">
        <h3>{movie.title}</h3>
        <button class="fav-btn" on:click|stopPropagation={toggleFavClick}>
            {isFavorite ? "⭐" : "☆"}
        </button>
    </div>
    <p>⭐ {movie.vote_average}</p>
</div>

<style>
    .movie-card {
        width: 150px;
        margin: 10px;
        text-align: center;
        border: 0.5px solid gray;
        border-radius: 5px;
        /* background-color: aqua; */
    }

    .title-row {
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
        /* padding: 0 10px; */
    }
    .fav-btn {
        font-size: 20px;
        background: none;
        border: none;
        cursor: pointer;
    }
    img {
        width: 100%;
        height: 225px; /* fixed height */
        object-fit: cover;
        border-radius: 5px;
    }
</style>