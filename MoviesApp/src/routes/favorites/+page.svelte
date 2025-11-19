<script>
    import { favorites } from "$lib/stores/favoriteStore";
    import MovieCard from "$lib/components/MovieCard.svelte";

    // let favList = [];

    let favList = $favorites;
    // favorites.subscribe((value) => {
    //     favList = value;
    // });

    function test() {
        alert('Please favorite from the movie section');
    }
</script>

<h1>Favorites Movies</h1>

{#if favList.length === 0}
    <p>No favorites yet !!</p>
{:else}
    <div class="movies-grid">
        {#each favList as movie}
            <MovieCard {movie} isFavorite={true} on:fav={test} />
        {/each}
    </div>
{/if}

<style>
    .movies-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
</style>
