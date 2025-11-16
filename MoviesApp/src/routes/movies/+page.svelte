<script>
    import { user } from "$lib/stores/userStore";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import MovieCard from "$lib/components/MovieCard.svelte";

    let currentUser;
    let movies = [];
    const API_KEY = "";
    const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    let loading = true;
    let searchQuery = "";
    let page = 1;
    // movies is your fetched array from TMDb
    $: filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    const unsubscribe = user.subscribe((value) => {
        currentUser = value;
    });

    onMount(async () => {
        if (!currentUser) {
            goto("/login"); // block access if not logged in
            return;
        }
        // Reactive redirect if not logged in
        // $: if (!$user) goto('/login');

        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            movies = data.results;
        } catch (err) {
            console.error(err);
        } finally {
            loading = false;
        }
    });

    async function fetchMoreMovies() {
        page += 1;

        const res = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`,
        );
        const data = await res.json();
        // Append new movies
        movies = [...movies, ...data.results];
    }

    function handleScroll(e) {
        if (searchQuery === "") {
            const { scrollTop, scrollHeight, clientHeight } = e.target;

            const reachedBottom = scrollTop + clientHeight >= scrollHeight - 10;

            if (reachedBottom) {
                fetchMoreMovies();
            }
        }
    }
</script>

<h1>Movies Page</h1>
<p>Welcome {currentUser?.name}!</p>
<!-- <p>Welcome {$user?.name}!</p> -->

{#if loading}
    <p>Loading movies...</p>
{:else}
    <input
        type="text"
        placeholder="Search movies..."
        bind:value={searchQuery}
    />
    <div class="movies-container" on:scroll={handleScroll}>
        <div class="movies-grid">
            {#each filteredMovies as movie}
                <MovieCard {movie} />
            {/each}
        </div>
    </div>
{/if}

<style>
    .movies-container {
        height: 80vh; /* the grid will scroll inside 80% of screen height */
        overflow-y: auto; /* enable vertical scrolling */
        padding: 10px;
    }
    .movies-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        /* background-color: red; */
    }
</style>
