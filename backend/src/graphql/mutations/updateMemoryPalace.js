import { GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql'
import MemoryPalace from '../../database/models/memoryPalace'

const updateMemoryPalace = {
    type: GraphQLInt,
    args: {
        id: {
            description: 'Uuid of the memory palace',
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            description: 'Name of the memory palace',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: (obj, args) => {
        const id = args.id
        const params = args
        delete params.id
        params.updatedAt = Date.now()
        return MemoryPalace.update(params, { where: { id } })
    }
}

export default updateMemoryPalace
