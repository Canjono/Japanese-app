import apolloClient from '@/ApolloClient'
import DELETE_MEMORY_PALACE from '../mutations/deleteMemoryPalace.gql'

const deleteMemoryPalace = (context, id) => {
    apolloClient
        .mutate({
            mutation: DELETE_MEMORY_PALACE,
            variables: {
                id: id
            }
        })
        .then(result => {
            if (result.data.deleteMemoryPalace === 1) {
                console.log(
                    `Delete memory palace result: ${JSON.stringify(
                        result,
                        null,
                        2
                    )}`
                )
                context.commit('DELETE_MEMORY_PALACE', id)
            } else {
                console.error('Could not delete word')
            }
        })
        .catch(err => {
            console.error(`deleteMemoryPalace error: ${err}`)
        })
}

export default deleteMemoryPalace
