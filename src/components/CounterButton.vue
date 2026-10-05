<script setup>
import { ref } from 'vue'

const count = ref(0)
const name = ref('')
const errorMessage = ref('')
const greeting = ref('')

function increaseCount() {
  count.value++
}

function decreaseCount() {
  count.value--
}


function resetCount() {
  count.value = 0
}

function submitName() {
  if (name.value.trim() === '') {
    errorMessage.value = 'Bitte gib deinen Namen ein.'
    greeting.value = ''
    return
  }

  errorMessage.value = ''
  greeting.value = `Hallo ${name.value}!`
}
</script>

<template>
  <section class="rounded-2xl bg-white p-6 shadow-lg">
    <h2 class="mb-4 text-2xl font-bold">
      Mein Vue-Zähler
    </h2>

    <p class="mb-4 text-lg">
      Zähler: {{ count }}
    </p>

    <div class="mb-6 flex gap-2">
      <button
        class="rounded-lg bg-black px-4 py-2 text-white"
        @click="increaseCount"
      >
        Plus
      </button>

      <button
        class="rounded-lg bg-gray-200 px-4 py-2"
        @click="decreaseCount"
      >
        Minus
      </button>

      <button
        class="rounded-lg border border-gray-300 px-4 py-2"
        @click="resetCount"
      >
        Zurücksetzen
      </button>
    </div>

    <p
      v-if="count > 5"
      class="mb-6 rounded-lg bg-green-100 p-3"
    >
      Du hast mehr als 5 Klicks.
    </p>

    <div>
      <label
        for="name"
        class="mb-2 block font-medium"
      >
        Dein Name
      </label>

      <input
        id="name"
        v-model="name"
        type="text"
        placeholder="Name eingeben"
        class="w-full rounded-lg border border-gray-300 p-3"
      >

      <p
        v-if="errorMessage"
        class="mt-2 text-red-600"
      >
        {{ errorMessage }}
      </p>

      <button
        class="mt-3 rounded-lg bg-blue-600 px-4 py-2 text-white"
        @click="submitName"
      >
        Begrüssen
      </button>

      <p
        v-if="greeting"
        class="mt-3 font-medium"
      >
        {{ greeting }}
      </p>
    </div>
  </section>
</template>