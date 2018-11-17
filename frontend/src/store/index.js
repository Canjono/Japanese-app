import Vue from 'vue'
import Vuex from 'vuex'
import apolloClient from '@/ApolloClient'
import gql from 'graphql-tag'

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
        UPDATE_WORD: (state, word) => {},
        UPDATE_WORD_PROPERTY: (state, word) => {
            const words = state.words.map(x => {
                return x.id === word.id ? { ...word } : x
            })
            state.words = words
        }
    },
    apollo: {},
    actions: {
        addWord: (context, word) => {
            apolloClient
                .mutate({
                    mutation: gql`
                        mutation(
                            $name: String!
                            $translation: String!
                            $grammar: String!
                            $story: String!
                        ) {
                            addWord(
                                name: $name
                                translation: $translation
                                grammar: $grammar
                                story: $story
                            ) {
                                id
                                name
                                translation
                                grammar
                                story
                            }
                        }
                    `,
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
                    console.error(`getWords error: ${err}`)
                })
        },
        getWords(context) {
            apolloClient
                .query({
                    query: gql`
                        {
                            getWordList {
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
                    context.commit('GET_WORDS', result.data.getWordList)
                })
                .catch(err => {
                    console.error(`getWords error: ${err}`)
                })
        },
        updateWord: (context, word) => {
            context.commit('UPDATE_WORD', word)
        },
        updateWordProperty: (context, word) => {
            context.commit('UPDATE_WORD_PROPERTY', word)
        }
    }
})
