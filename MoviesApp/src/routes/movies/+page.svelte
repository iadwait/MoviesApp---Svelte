<script>
    import { user } from '$lib/stores/userStore';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    let currentUser;

    const unsubscribe = user.subscribe(value => {
        currentUser = value;
    });

    onMount(() => {
        if (!currentUser) {
        goto('/login'); // block access if not logged in
    }

    // Reactive redirect if not logged in
    // $: if (!$user) goto('/login');
  });

</script>

<h1>Movies Page</h1>
<p>Welcome {currentUser?.name}!</p>
<!-- <p>Welcome {$user?.name}!</p> -->