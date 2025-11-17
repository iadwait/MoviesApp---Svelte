<script>
    import { createEventDispatcher } from 'svelte';
    export let movie;
    const dispatch = createEventDispatcher();
</script>

<div class="movie-card" on:click={() => dispatch('click')}>
    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
    <h3>{movie.title}</h3>
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

    img {
        width: 100%;
        height: 225px; /* fixed height */
        object-fit: cover;
        border-radius: 5px;
    }
</style>