import Vue from 'vue'
import Vuex from 'vuex'
import apolloClient from '@/ApolloClient'
import ADD_WORD from './mutations/addWord.gql'
import GET_WORD_LIST from './queries/getWordList.gql'
import UPDATE_WORD from './mutations/updateWord.gql'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        appTitle: 'Japanese App',
        words: []
    },
    getters: {
        countWords: state => {
            return state.words.length
        }
    },
    mutations: {
        ADD_WORD: (state, word) => {
            state.words.push(word)
        },
        GET_WORDS: (state, words) => {
            state.words = words
        },
        UPDATE_WORD: (state, word) => {
            const words = state.words.map(x => {
                return x.id === word.id ? word : x
            })
            state.words = words
        }
    },
    actions: {
        addWord: (context, word) => {
            apolloClient
                .mutate({
                    mutation: ADD_WORD,
                    variables: {
                        name: word.name,
                        translation: word.translation,
                        grammar: word.grammar,
                        story: word.story
                    }
                })
                .then(result => {
                    console.log('Added word: ' + result.data.addWord)
                    context.commit('ADD_WORD', result.data.addWord)
                })
                .catch(err => {
                    console.error(`addWord error: ${err}`)
                })
        },
        getWords(context) {
            apolloClient
                .query({
                    query: GET_WORD_LIST
                })
                .then(result => {
                    context.commit('GET_WORDS', result.data.getWordList)
                })
                .catch(err => {
                    console.error(`getWords error: ${err}`)
                })
        },
        updateWord: (context, word) => {
            apolloClient
                .mutate({
                    mutation: UPDATE_WORD,
                    variables: {
                        id: word.id,
                        name: word.name,
                        translation: word.translation,
                        grammar: word.grammar,
                        story: word.story
                    }
                })
                .then(result => {
                    console.log('Updated word: ' + result.data.updateWord)
                    context.commit('UPDATE_WORD', result.data.updateWord)
                    alert(`${result.data.updateWord.name} was updated`)
                })
                .catch(err => {
                    console.error(`updateWord error: ${err}`)
                })
        }
    }
})
