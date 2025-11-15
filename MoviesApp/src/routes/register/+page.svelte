<script>
    let name = '';
    let email = '';
    let password = '';
</script>

<h1>Register Page</h1>

<form on:submit|preventDefault={() => console.log(name, email,password)}>
    <input type='text' placeholder="Name" bind:value={name} />
    <input type='email' placeholder="Email" bind:value={email} />
    <input type='password' placeholder="Password" bind:value={password} />
    <button type="submit">Register</button>
</form>