<template>
  <div class="Vocabulary">
    <b-img width="320" height="207" center src="../assets/logo.png" alt="center image" />
    <h1>{{ title }}</h1>
    <h3>Number of words: {{ countWords }}</h3>
    <ul>
        <li v-for="(word, index) in words" v-bind:key="index">
            <Word v-bind:word="word"></Word>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Word from '@/components/Word.vue'

export default {
    name: 'Vocabulary',
    data() {
        return {
            title: 'uuu'
        }
    },
    components: {
        Word
    },
    computed: {
        ...mapState(['words']),
        ...mapGetters(['countWords'])
    },
    methods: {
        ...mapMutations(['ADD_WORD']),
        ...mapActions(['addWord']),
        addNewWord: function(word) {
            this.addWord(word)
        }
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
