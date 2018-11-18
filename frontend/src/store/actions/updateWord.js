import apolloClient from '@/ApolloClient'
import UPDATE_WORD from '../mutations/updateWord.gql'

const updateWord = (context, word) => {
    apolloClient
        .mutate({
            mutation: UPDATE_WORD,
            variables: {
                id: word.id,
                name: word.name,
                translation: word.translation,
                grammar: word.grammar,
                story: word.story
            }
        })
        .then(result => {
            console.log(
                `Updated word result: ${JSON.stringify(result, null, 2)}`
            )
            if (result.data.updateWord === 1) {
                context.commit('UPDATE_WORD', result.data.updateWord)
                alert(`${word.name} was updated`)
            } else {
                console.error('Word was not updated')
            }
        })
        .catch(err => {
            console.error(`updateWord error: ${err}`)
        })
}

export default updateWord
