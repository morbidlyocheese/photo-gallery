<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <main class="main-content">
    <RouterView />
  </main>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--color-background, #fff);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
  height: 64px;
}

.wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  font-size: 1rem;
  margin: 0;
}

nav a {
  padding: 0.25rem 0.5rem;
  color: inherit;
  text-decoration: none;
  border: none;
}

nav a.router-link-exact-active {
  color: var(--color-text, #111);
}

.main-content {
  padding-top: 72px; /* space for fixed header */
  grid-column: 1 / -1; /* span both columns of #app grid */
}

@media (max-width: 640px) {
  nav {
    gap: 1rem;
    font-size: 0.95rem;
  }
}
</style>
