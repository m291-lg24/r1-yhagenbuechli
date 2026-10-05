<script setup>
import CounterButton from '@/components/CounterButton.vue'
</script>

<template>
  <main class="min-h-screen">
    <nav class="navbar">
      <div class="navbar-inner">
        <a href="#" class="logo">
          M291
        </a>

        <div class="nav-links">
          <a href="#home">Home</a>
          <a href="#counter">Zähler</a>
          <a href="#about">Über</a>
        </div>
      </div>
    </nav>

    <div id="home" class="page-content">
      <h1 class="mb-2 text-4xl font-bold">
        Hallo M291
      </h1>

      <p class="mb-8 text-gray-600">
        Meine erste Vue-App.
      </p>

      <div id="counter">
        <CounterButton />
      </div>

      <section id="about" class="about-card">
        <h2>Über diese Seite</h2>
        <p>
          Diese kleine Vue-App habe ich für Modul 291 erstellt.
        </p>
      </section>
    </div>
  </main>
</template>