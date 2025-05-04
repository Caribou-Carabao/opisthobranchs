<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { useAnimalStore } from '../stores/animal.js'

const store = useAnimalStore()
</script>

<template>
    <div>component-mounted</div>
    <DataTable :value="store.animals" tableStyle="min-width: 50rem">
        <Column field="CH ID" header="CH ID"></Column>
        <Column field="Group" header="Group"></Column>
        <Column field="Family" header="Family"></Column>
        <Column field="Name" header="Name"></Column>
        <Column field="Described by" header="Described by"></Column>
        <Column field="Described by year" header="Described by year"></Column>
        <Column field="Note" header="Note"></Column>
        <Column field="Logs" header="Name"></Column>

    </DataTable>
</template>

<style scoped>

</style>
