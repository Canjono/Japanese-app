import apolloClient from '@/ApolloClient'
import GET_MEMORY_PALACES from '../queries/getMemoryPalaces.gql'

const deleteMemoryPalaces = context => {
    apolloClient
        .query({
            query: GET_MEMORY_PALACES
        })
        .then(result => {
            console.log(
                `getMemoryPalaces result: ${JSON.stringify(result, null, 2)}`
            )
            context.commit('GET_MEMORY_PALACES', result.data.getMemoryPalaces)
        })
        .catch(err => {
            console.error(`getMemoryPalaces error: ${err}`)
        })
}

export default deleteMemoryPalaces
