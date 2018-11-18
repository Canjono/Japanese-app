import { GraphQLNonNull, GraphQLString } from 'graphql'
import MemoryPalace from '../../database/models/memoryPalace'
import memoryPalaceType from '../types/memoryPalaceType'
import uuid from 'uuid'

const addMemoryPalace = {
    type: memoryPalaceType,
    args: {
        name: {
            description: 'Name of the memory palace',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: (obj, args) => {
        return MemoryPalace.create({
            id: uuid(),
            name: args.name,
            createdAt: Date.now(),
            updatedAt: Date.now()
        })
    }
}

export default addMemoryPalace
