import { GraphQLList, GraphQLInt } from 'graphql'
import MemoryPalace from '../../database/models/memoryPalace'
import memoryPalaceType from '../types/memoryPalaceType'

const getWords = {
    type: new GraphQLList(memoryPalaceType),
    args: {
        limit: {
            type: GraphQLInt,
            description: 'Limits the number of results returned'
        },
        offset: {
            type: GraphQLInt
        }
    },
    resolve: (obj, args) => {
        const offset = args.offset || 0
        const limit = args.limit || 100
        return MemoryPalace.findAll({
            where: { enabled: true },
            offset,
            limit,
            attributes: { exclude: ['enabled'] }
        })
    }
}

export default getWords
