import Vue from 'vue'
import Vuex from 'vuex'
import apolloClient from '@/ApolloClient'
import ADD_WORD from './mutations/addWord.gql'
import GET_WORDS from './queries/getWords.gql'
import UPDATE_WORD from './mutations/updateWord.gql'
import DELETE_WORD from './mutations/deleteWord.gql'
import GET_MEMORY_PALACES from './queries/getMemoryPalaces.gql'
import ADD_MEMORY_PALACE from './mutations/addMemoryPalace.gql'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        appTitle: 'Japanese App',
        words: [],
        memoryPalaces: []
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
        },
        DELETE_WORD: (state, id) => {
            const words = state.words.filter(x => {
                return x.id !== id
            })
            state.words = words
        },
        GET_MEMORY_PALACES: (state, memoryPalaces) => {
            state.memoryPalaces = memoryPalaces
        },
        ADD_MEMORY_PALACE: (state, memoryPalace) => {
            state.memoryPalaces.push(memoryPalace)
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
                    console.log(
                        `Added word result: ${JSON.stringify(
                            result,
                            null,
                            2
                        )}`
                    )
                    if (result.data.addWord.__typename === 'Word') {
                        context.commit('ADD_WORD', result.data.addWord)
                    } else {
                        console.error('Word was not added')
                    }
                })
                .catch(err => {
                    console.error(`addWord error: ${err}`)
                })
        },
        getWords(context) {
            apolloClient
                .query({
                    query: GET_WORDS
                })
                .then(result => {
                    console.log(
                        `getWords result: ${JSON.stringify(result, null, 2)}`
                    )
                    context.commit('GET_WORDS', result.data.getWords)
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
                    console.log(
                        `Updated word result: ${JSON.stringify(
                            result,
                            null,
                            2
                        )}`
                    )
                    if (result.data.updateWord === 1) {
                        context.commit('UPDATE_WORD', result.data.updateWord)
                        alert(`${word.name} was updated`)
                    } else {
                        console.error('Word was not updated')
                    }
                })
                .catch(err => {
                    console.error(`updateWord error: ${err}`)
                })
        },
        deleteWord: (context, id) => {
            apolloClient
                .mutate({
                    mutation: DELETE_WORD,
                    variables: {
                        id: id
                    }
                })
                .then(result => {
                    console.log(
                        `Deleted word result: ${JSON.stringify(
                            result,
                            null,
                            2
                        )}`
                    )
                    if (result.data.deleteWord === 1) {
                        context.commit('DELETE_WORD', id)
                    } else {
                        console.error('Word was not deleted')
                    }
                })
                .catch(err => {
                    console.error(`deleteWord error: ${err}`)
                })
        },
        getMemoryPalaces(context) {
            apolloClient
                .query({
                    query: GET_MEMORY_PALACES
                })
                .then(result => {
                    console.log(
                        `getMemoryPalaces result: ${JSON.stringify(
                            result,
                            null,
                            2
                        )}`
                    )
                    context.commit(
                        'GET_MEMORY_PALACES',
                        result.data.getMemoryPalaces
                    )
                })
                .catch(err => {
                    console.error(`getMemoryPalaces error: ${err}`)
                })
        },
        addMemoryPalace: (context, memoryPalace) => {
            apolloClient
                .mutate({
                    mutation: ADD_MEMORY_PALACE,
                    variables: {
                        name: memoryPalace.name
                    }
                })
                .then(result => {
                    console.log(
                        `Added memory palace result: ${JSON.stringify(
                            result,
                            null,
                            2
                        )}`
                    )
                    if (
                        result.data.addMemoryPalace.__typename ===
                        'MemoryPalace'
                    ) {
                        context.commit(
                            'ADD_MEMORY_PALACE',
                            result.data.addMemoryPalace
                        )
                    } else {
                        console.error('Memory palace was not added')
                    }
                })
                .catch(err => {
                    console.error(`addMemoryPalace error: ${err}`)
                })
        }
    }
})
