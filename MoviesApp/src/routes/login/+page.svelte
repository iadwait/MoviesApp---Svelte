<script>
    import { goto } from '$app/navigation';
    import { user } from '$lib/stores/userStore';

    let email = '';
    let password = '';
    let error = '';

    function loginUser() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('users', users);

    const existingUser = users.find(u => u.email === email && u.password === password);

    if (existingUser) {
      user.set(existingUser); // Update store
      goto('/movies'); // Redirect to movies
    } else {
      error = 'Invalid email or password';
    }
  }

</script>

<h1>Login Page</h1>

<form on:submit|preventDefault={loginUser}>
    <input type='email' placeholder="Email" bind:value={email} />
    <input type='password' placeholder="Password" bind:value={password} />
    <button type="submit">Login</button>
</form>
<p style="color:red">{error}</p>