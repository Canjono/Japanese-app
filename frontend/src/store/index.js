import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    words: [
      'Amai',
      'Kuruma',
      'Korosu'
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
    }
  },
  actions: {
    addWord: (context, word) => {
      context.commit('ADD_WORD', word)
    },
    // Example of how to use a promise when getting words.
    getWords ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('GET_WORDS')
          resolve()
        }, 1000)
      })
    }
  }
})
