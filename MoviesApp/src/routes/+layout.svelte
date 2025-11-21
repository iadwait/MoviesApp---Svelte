<script>
    // You can add reactive nav or user state here later
  </script>
  
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #f4f4f9;
    }
  
    header {
      background-color: #222;
      color: white;
      padding: 1rem;
      text-align: center;
    }
  
    nav a {
      color: white;
      margin: 0 1rem;
      text-decoration: none;
      font-weight: bold;
    }   
  
    nav a:hover {
      text-decoration: underline;
    }
  
    main {
      padding: 2rem;
      min-height: 72vh;
      /* background-color: aqua; */
    }
  
    footer {
      background-color: #222;
      color: white;
      text-align: center;
      padding: 1rem;
    }
  </style>
  
  <header>
    <h1>Movie Explorer</h1>
    <nav>
      <a href="/login">Login</a>
      <a href="/register">Register</a>
      <a href="/movies">Movies</a>
      <a href="/favorites">Favorites</a>
    </nav>
  </header>
  
  <main>
    <slot /> <!-- Current page content is automatically injected here -->
  </main>
  
  <footer>
    &copy; 2025 Movie Explorer
  </footer>
  