<script setup>
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
</script>

<template>
  <main class="page-content">
    <section class="about-page">
      <p class="about-label">
        ÜBER MICH
      </p>

      <h1>
        Hi, ich bin Yara.
      </h1>

      <p class="about-intro">
        Ich bin Mediamatikerin und interessiere mich besonders für
        Sportjournalismus, Fotografie, Videografie und Design.
      </p>

      <div class="about-grid">
        <article class="about-box">
          <h2>Sport</h2>

          <p>
            Fussball und Sportjournalismus interessieren mich besonders.
          </p>
        </article>

        <article class="about-box">
          <h2>Media</h2>

          <p>
            Ich arbeite gerne mit Fotografie, Video und visueller Gestaltung.
          </p>
        </article>

        <article class="about-box">
          <h2>Tech</h2>

          <p>
            Im Modul 291 lerne ich gerade Vue, Tailwind, Router und Pinia kennen.
          </p>
        </article>
      </div>

      <details class="names-panel">
        <summary class="names-summary">
          Gespeicherte Namen

          <span class="names-count">
            {{ userStore.names.length }}
          </span>
        </summary>

        <div class="names-content">
          <p
            v-if="userStore.names.length === 0"
            class="names-empty"
          >
            Noch keine Namen gespeichert.
          </p>

          <div
            v-else
            class="names-list"
          >
            <div
              v-for="(savedName, index) in userStore.names"
              :key="`${savedName}-${index}`"
              class="name-chip"
            >
              {{ savedName }}
            </div>
          </div>
        </div>
      </details>
    </section>
  </main>
</template>