import apolloClient from '@/ApolloClient'
import ADD_WORD from '../mutations/addWord.gql'

const addWord = (context, word) => {
    apolloClient
        .mutate({
            mutation: ADD_WORD,
            variables: {
                name: word.name,
                translation: word.translation,
                grammar: word.grammar,
                story: word.story
            }
        })
        .then(result => {
            console.log(
                `Added word result: ${JSON.stringify(result, null, 2)}`
            )
            if (result.data.addWord.__typename === 'Word') {
                context.commit('ADD_WORD', result.data.addWord)
            } else {
                console.error('Word was not added')
            }
        })
        .catch(err => {
            console.error(`addWord error: ${err}`)
        })
}

export default addWord
