import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql'

const memoryPalaceType = new GraphQLObjectType({
    name: 'MemoryPalace',
    description: 'A memory palace',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The id of the memory palace'
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The name of the memory palace'
        },
        createdAt: {
            type: GraphQLString,
            description: 'Date when the memory palace was created'
        },
        updatedAt: {
            type: GraphQLString,
            description: 'Date when the memory palace was last updated'
        }
    }
})

export default memoryPalaceType
