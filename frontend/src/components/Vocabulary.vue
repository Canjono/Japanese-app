<template>
  <div class="Vocabulary">
    <b-img width="320" height="207" center src="../assets/logo.png" alt="center image" />
    <b-btn v-b-modal.addWordModal>New word</b-btn>
    <AddWord />
    <h1>{{ title }}</h1>
    <b-container class="word-container">
        <b-row>
            <b-col sm="6" md="4" v-for="(word, index) in words" v-bind:key="index">
                <Word v-bind:word="word"></Word>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Word from '@/components/Word.vue'
import AddWord from '@/components/AddWord.vue'

export default {
    name: 'Vocabulary',
    data() {
        return {
            title: 'Vocabulary'
        }
    },
    created() {
        this.getWords()
    },
    components: {
        Word,
        AddWord
    },
    computed: {
        ...mapState(['words'])
    },
    methods: {
        ...mapActions(['getWords'])
    }
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
