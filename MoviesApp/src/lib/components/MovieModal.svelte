<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  export let movie;
  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch("close");
  }
</script>

<div class="overlay" on:click={closeModal} transition:fade>
  <div class="modal" on:click|stopPropagation>
    <div class="close-btn" on:click={closeModal}>×</div>

    <h2>{movie.title}</h2>

    <img
      src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
      alt={movie.title}
      class="modal-img"
    />

    <p>{movie.overview}</p>
    <p><strong>Rating:</strong> {movie.vote_average}</p>
  </div>
</div>

<style>
  .overlay {
    position: fixed;
    inset: 0; /* full screen for dark background */
    background: rgba(0, 0, 0, 0.6); /* semi-transparent overlay */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 90%; /* take 90% of viewport width on small screens */
    max-width: 450px; /* cap width on large screens */
    max-height: 80vh; /* cap height to 80% of viewport height */
    overflow-y: auto; /* scroll inside modal if content is too tall */
  }

  .modal-img {
    width: 100%;
    border-radius: 6px;
    margin: 10px 0;
  }

  .close-btn {
    cursor: pointer;
    float: right;
    font-size: 24px;
  }
</style>
