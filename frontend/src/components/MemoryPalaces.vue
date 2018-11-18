<template>
  <div class="memory-palaces">
    <b-img width="320" height="207" center src="../assets/logo.png" alt="center image" />
    <b-btn v-b-modal.addMemoryPalaceModal>New memory palace</b-btn>
    <h1>{{ title }}</h1>
    <b-container class="memory-palace-container">
        <b-row>
            <b-col sm="6" md="4" v-for="(palace, index) in memoryPalaces" v-bind:key="index">
                <Palace v-bind:palace="palace"></Palace>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import Palace from '@/components/Palace.vue'

export default {
    name: 'MemoryPalaces',
    data() {
        return {
            title: 'Memory Palaces',
            memoryPalaces: [
                { rooms: ['room1', 'room2'] },
                { rooms: ['kitchen', 'living room'] }
            ]
        }
    },
    created() {},
    apollo: {},
    components: { Palace },
    computed: {},
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
