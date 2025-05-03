<script setup>
import { onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { useAnimalStore } from './stores/animal.js'
import Button from "primevue/button"
import myComponent from './components/myComponent.vue'


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
    <Button>Verify</Button>
    <myComponent></myComponent>
  </main>
</template>

<style scoped>
</style>
