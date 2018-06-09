import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql'

const wordType = new GraphQLObjectType({
    name: 'Word',
    description: 'A word',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The id of the word'
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The name of the word'
        },
        translation: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The translation of the word'
        },
        grammar: {
            type: GraphQLString,
            description: 'The grammar of the word'
        },
        story: {
            type: GraphQLString,
            description: 'The story of the word'
        }
    }
})

export default wordType
