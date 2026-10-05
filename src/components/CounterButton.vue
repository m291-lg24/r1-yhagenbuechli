<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

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

  userStore.addName(name.value)

  name.value = ''
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

      <div
        v-if="userStore.names.length > 0"
        class="mt-6"
      >
        <h3 class="mb-2 font-bold">
          Gespeicherte Namen
        </h3>

        <ul class="space-y-2">
          <li
            v-for="(savedName, index) in userStore.names"
            :key="index"
            class="flex items-center justify-between rounded-lg bg-gray-100 p-3"
          >
            <span>{{ savedName }}</span>

            <button
              class="rounded-lg bg-red-100 px-3 py-1 text-red-700"
              @click="userStore.removeName(index)"
            >
              Löschen
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>