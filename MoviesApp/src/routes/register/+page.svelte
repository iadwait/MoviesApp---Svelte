<script>
    import { goto } from "$app/navigation";

    let name = '';
    let email = '';
    let password = '';

    function registerUser() {
        // Get existing users or empty array
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if email already exists
        const exists = users.find(u => u.email === email);
        if (exists) {
            alert("User already exists!");
            return;
        }

        // Save new user
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert("Registration successful!");

        goto('/login'); // redirect
    }

</script>

<h1>Register Page</h1>

<form on:submit|preventDefault={registerUser}>
    <input type='text' placeholder="Name" bind:value={name} />
    <input type='email' placeholder="Email" bind:value={email} />
    <input type='password' placeholder="Password" bind:value={password} />
    <button type="submit">Register</button>
</form>