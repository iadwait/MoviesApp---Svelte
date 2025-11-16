<script>
    import { goto } from "$app/navigation";
    import { user } from '$lib/stores/userStore';

    let name = '';
    let email = '';
    let password = '';
    let error = '';

    function registerUser() {
        // Get existing users or empty array
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if email already exists
        const exists = users.find(u => u.email === email);
        if (exists) {
            error = 'Email already registered';
            //alert("User already exists!");
            return;
        }

        const newUser = { name, email, password };
        // Save new user
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // Save in store
        user.set(newUser);

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
<p style="color:red">{error}</p>