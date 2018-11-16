import { GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql'
import Word from '../../database/models/word'

const updateWord = {
    type: GraphQLInt,
    args: {
        id: {
            description: 'Uuid of the word',
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            description: 'Name of the word',
            type: new GraphQLNonNull(GraphQLString)
        },
        translation: {
            description: 'Translation of the word',
            type: new GraphQLNonNull(GraphQLString)
        },
        grammar: {
            description: 'Grammar of the word',
            type: new GraphQLNonNull(GraphQLString)
        },
        story: {
            description: 'Story of the word',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: (obj, args) => {
        const id = args.id
        const params = args
        delete params.id
        params.updatedAt = Date.now()
        return Word.update(params, { where: { id } })
    }
}

export default updateWord
