import { GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql'
import Word from '../../database/models/word'

const deleteWord = {
    type: GraphQLInt,
    args: {
        id: {
            description: 'Uuid of the word',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: (obj, args) => {
        const id = args.id
        return Word.update({ enabled: false }, { where: { id } })
    }
}

export default deleteWord
