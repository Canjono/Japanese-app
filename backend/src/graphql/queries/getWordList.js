import { GraphQLList, GraphQLInt } from 'graphql'
import Word from '../../database/models/word'
import wordType from '../types/wordType'

const getWordList = {
    type: new GraphQLList(wordType),
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
        return Word.findAll({
            where: { enabled: true },
            offset,
            limit,
            attributes: { exclude: ['enabled'] }
        })
    }
}

export default getWordList
