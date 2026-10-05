import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const savedNames = JSON.parse(
    localStorage.getItem('names') || '[]'
  )

  const names = ref(savedNames)

  function addName(newName) {
    const cleanedName = newName.trim()

    if (!cleanedName) return

    names.value.push(cleanedName)

    localStorage.setItem(
      'names',
      JSON.stringify(names.value)
    )
  }

  function removeName(index) {
    names.value.splice(index, 1)

    localStorage.setItem(
      'names',
      JSON.stringify(names.value)
    )
  }

  function clearNames() {
    names.value = []
    localStorage.removeItem('names')
  }

  return {
    names,
    addName,
    removeName,
    clearNames,
  }

})