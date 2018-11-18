import apolloClient from '@/ApolloClient'
import GET_WORDS from '../queries/getWords.gql'

const getWords = context => {
    apolloClient
        .query({
            query: GET_WORDS
        })
        .then(result => {
            console.log(`getWords result: ${JSON.stringify(result, null, 2)}`)
            context.commit('GET_WORDS', result.data.getWords)
        })
        .catch(err => {
            console.error(`getWords error: ${err}`)
        })
}

export default getWords
