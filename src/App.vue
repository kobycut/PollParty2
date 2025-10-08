<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar">
      <RouterLink to="/" class="brand-nav-link">Poll Party</RouterLink>
      <div class="page-links">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/polls" class="nav-link">Polls</RouterLink>
        <RouterLink to="/create" class="nav-link">Create</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />

  <footer>
    <div class="footer">
      <p class="footer-item">Koby Cutler |</p>
      <a class="footer-item" href="https://github.com/kobycut">Github | </a>
      <a class="footer-item" href="https://www.linkedin.com/in/koby-cutler/">Linkedin</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>
