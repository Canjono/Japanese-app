import Vue from 'vue'
import Vuex from 'vuex'
import apolloClient from '@/ApolloClient'
import gql from 'graphql-tag'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        appTitle: 'Japanese App',
        words: [
            {
                id: '12345',
                name: 'Amai',
                translation: 'Sweet',
                grammar: 'Adjective',
                story: 'A story about sweet and amai'
            },
            {
                id: '34567',
                name: 'Kuruma',
                translation: 'Car',
                grammar: 'Noun',
                story: 'A story about kuruma and car'
            },
            {
                id: '56789',
                name: 'Korosu',
                translation: 'Kill',
                grammar: 'Verb',
                story: 'A story about korosu and kill'
            }
        ]
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
        UPDATE_WORD: (state, word) => {}
    },
    actions: {
        addWord: (context, word) => {
            context.commit('ADD_WORD', word)
        },
        // Example of how to use a promise when getting words.
        getWords(context) {
            apolloClient
                .query({
                    query: gql`
                        {
                            getWords {
                                id
                                name
                                translation
                                grammar
                                story
                            }
                        }
                    `
                })
                .then(result => {
                    context.commit('GET_WORDS', result.data.getWords)
                })
                .catch(err => {
                    console.error(err)
                })
            // return new Promise((resolve, reject) => {
            //     setTimeout(() => {
            //         commit('GET_WORDS')
            //         resolve()
            //     }, 1000)
            // })
        },
        updateWord: (context, word) => {
            context.commit('UPDATE_WORD', word)
        }
    }
})
