<script setup>
import { onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { useAnimalStore } from './stores/animal.js'

const store = useAnimalStore()

onMounted(async () => {
  await store.fetchItems()
})
</script>

<template>
  <header>

  </header>

  <main>
    <v-data-table
      :items="store.animals"
    >

    </v-data-table>
  </main>
</template>

<style scoped>
</style>
