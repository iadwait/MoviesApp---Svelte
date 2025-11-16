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
</script>

<h1>Movies Page</h1>
<p>Welcome {currentUser?.name}!</p>
<!-- <p>Welcome {$user?.name}!</p> -->

{#if loading}
    <p>Loading movies...</p>
{:else}
    <div class="movies-grid">
        {#each movies as movie}
            <MovieCard {movie} />
        {/each}
    </div>
{/if}

<style>
    .movies-grid {
        display: flex;
        flex-wrap: wrap;
        /* background-color: red; */
    }
</style>
