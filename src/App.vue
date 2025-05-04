<script setup>
import { onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { useAnimalStore } from './stores/animal.js'
// import Button from "primevue/button"
import myComponent from './components/myComponent.vue'



const store = useAnimalStore()

onMounted(async () => {
  await store.fetchItems()
})
</script>

<template>
  <v-app>
    <v-app-bar :elevation="2" rounded>
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Application Bar</v-app-bar-title>

    </v-app-bar>

    <v-navigation-drawer>
      <v-list-item link title="Navigation drawer"></v-list-item>
      <v-list-item link title="List Item 1"></v-list-item>
      <v-list-item link title="List Item 2"></v-list-item>
      <v-list-item link title="List Item 3"></v-list-item>
    </v-navigation-drawer>

    <v-main>
      <v-data-table
      :items="store.animals"
      >
      </v-data-table>
      <myComponent></myComponent>
    </v-main>
  </v-app>
  <!-- <Button>Verify</Button>
  <VBtn>Verify</VBtn> -->
</template>


<style scoped>
</style>
