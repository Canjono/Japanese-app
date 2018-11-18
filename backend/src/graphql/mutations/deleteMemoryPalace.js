import { GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql'
import MemoryPalace from '../../database/models/memoryPalace'

const deleteMemoryPalace = {
    type: GraphQLInt,
    args: {
        id: {
            description: 'Uuid of the memory palace',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: (obj, args) => {
        const id = args.id
        return MemoryPalace.update({ enabled: false }, { where: { id } })
    }
}

export default deleteMemoryPalace
