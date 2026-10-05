<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav class="navbar">
      <div class="navbar-inner">
        <RouterLink to="/" class="logo">
          M291
        </RouterLink>

        <div class="nav-links">
          <RouterLink to="/">
            Home
          </RouterLink>

          <RouterLink to="/about">
            Über mich
          </RouterLink>
        </div>
      </div>
    </nav>

    <RouterView />
  </div>
</template>