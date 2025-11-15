<script>
    let email = '';
    let password = '';
</script>

<h1>Login Page</h1>

<form on:submit|preventDefault={() => console.log(email,password)}>
    <input type='email' placeholder="Email" bind:value={email} />
    <input type='password' placeholder="Password" bind:value={password} />
    <button type="submit">Login</button>
</form>