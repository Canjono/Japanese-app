import apolloClient from '@/ApolloClient'
import ADD_MEMORY_PALACE from '../mutations/addMemoryPalace.gql'

const addMemoryPalace = (context, memoryPalace) => {
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
            if (result.data.addMemoryPalace.__typename === 'MemoryPalace') {
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

export default addMemoryPalace
