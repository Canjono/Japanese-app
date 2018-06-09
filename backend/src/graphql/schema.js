import { resolver } from 'graphql-sequelize'
import { GraphQLSchema, GraphQLObjectType, GraphQLList } from 'graphql'
import wordType from './types/wordType'
import Word from '../database/models/word'

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'root',
        fields: {
            words: {
                type: new GraphQLList(wordType),
                resolve: resolver(Word)
            }
        }
    })
})

export default schema
