import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAnimalStore = defineStore('animal', () => {
  const animals = ref([])
  const loading = ref(false)
  const error = ref(null)
  async function fetchItems() {
    loading.value = true
    try {
      const res = await fetch('data.json')
      if (!res.ok) {
        throw Error('Could not fetch data')
      }
      const data = await res.json()
      animals.value = data
    } catch (e) {
      this.error.value = e.message
    } finally {
      this.loading = false
    }
  }
  return { animals, loading, error, fetchItems }
})

