import apolloClient from '@/ApolloClient'
import UPDATE_MEMORY_PALACE from '../mutations/updateMemoryPalace.gql'

const updateMemoryPalace = (context, memoryPalace) => {
    apolloClient
        .mutate({
            mutation: UPDATE_MEMORY_PALACE,
            variables: {
                id: memoryPalace.id,
                name: memoryPalace.name
            }
        })
        .then(result => {
            console.log(
                `Updated memory palace result: ${JSON.stringify(
                    result,
                    null,
                    2
                )}`
            )
            if (result.data.updateMemoryPalace === 1) {
                context.commit(
                    'UPDATE_MEMORY_PALACE',
                    result.data.updateMemoryPalace
                )
                alert(`${memoryPalace.name} was updated`)
            } else {
                console.error('memory palace was not updated')
            }
        })
        .catch(err => {
            console.error(`updateMemoryPalace error: ${err}`)
        })
}

export default updateMemoryPalace
