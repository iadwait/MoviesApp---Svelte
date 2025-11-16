<script>
    import { goto } from '$app/navigation';
    import { user } from '$lib/stores/userStore';

    let email = '';
    let password = '';

    function loginUser() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('users', users);

    const validUser = users.find(u => u.email === email && u.password === password);

    if (!validUser) {
      alert("Invalid email or password!");
      return;
    }

    // Store user to Svelte store
    user.set(validUser);

    // Persist user so refresh doesn't log out
    localStorage.setItem("loggedInUser", JSON.stringify(validUser));

    goto('/movies'); // redirect
  }

</script>

<h1>Login Page</h1>

<form on:submit|preventDefault={loginUser}>
    <input type='email' placeholder="Email" bind:value={email} />
    <input type='password' placeholder="Password" bind:value={password} />
    <button type="submit">Login</button>
</form>