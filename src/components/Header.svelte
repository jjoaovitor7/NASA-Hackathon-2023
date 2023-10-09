<script>
  import { page } from "$app/stores";
</script>

<header class="entry-header">
  <h1 class="entry-title text-center my-2">AjuStats</h1>

  <nav class="nav">
    <ul>
      <li
        class="mx-2 nav-link"
        aria-current={$page.url.pathname === "/" ? "page" : undefined}
      >
        <a href="/">Início</a>
      </li>
      <li
        class="mx-2 nav-link"
        aria-current={$page.url.pathname === "/about" ? "page" : undefined}
      >
        <a href="/about">Sobre</a>
      </li>
    </ul>
  </nav>
</header>
