import Vue from 'vue'
import Vuex from 'vuex'
import addWordAction from './actions/addWord'
import getWordsAction from './actions/getWords'
import updateWordAction from './actions/updateWord'
import deleteWordAction from './actions/deleteWord'
import getMemoryPalacesAction from './actions/getMemoryPalaces'
import addMemoryPalaceAction from './actions/addMemoryPalace'
import deleteMemoryPalaceAction from './actions/deleteMemoryPalace'
import updateMemoryPalaceAction from './actions/updateMemoryPalace'

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
        },
        DELETE_MEMORY_PALACE: (state, id) => {
            const memoryPalaces = state.memoryPalaces.filter(x => {
                return x.id !== id
            })
            state.memoryPalaces = memoryPalaces
        },
        UPDATE_MEMORY_PALACE: (state, memoryPalace) => {
            const memoryPalaces = state.memoryPalaces.map(x => {
                return x.id === memoryPalace.id ? memoryPalace : x
            })
            state.memoryPalaces = memoryPalaces
        }
    },
    actions: {
        addWord: (context, word) => addWordAction(context, word),
        getWords: context => getWordsAction(context),
        updateWord: (context, word) => updateWordAction(context, word),
        deleteWord: (context, id) => deleteWordAction(context, id),

        getMemoryPalaces: context => getMemoryPalacesAction(context),
        addMemoryPalace: (context, memoryPalace) =>
            addMemoryPalaceAction(context, memoryPalace),
        deleteMemoryPalace: (context, id) =>
            deleteMemoryPalaceAction(context, id),
        updateMemoryPalace: (context, memoryPalace) =>
            updateMemoryPalaceAction(context, memoryPalace)
    }
})
