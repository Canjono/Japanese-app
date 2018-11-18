import apolloClient from '@/ApolloClient'
import DELETE_WORD from '../mutations/deleteWord.gql'

const deleteWord = (context, id) => {
    apolloClient
        .mutate({
            mutation: DELETE_WORD,
            variables: {
                id: id
            }
        })
        .then(result => {
            console.log(
                `Deleted word result: ${JSON.stringify(result, null, 2)}`
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
}

export default deleteWord
