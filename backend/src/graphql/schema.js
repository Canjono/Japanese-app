import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import getWordList from './queries/getWordList'
import createWord from './mutations/createWord'
import updateWord from './mutations/updateWord'
import deleteWord from './mutations/deleteWord'

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'root',
        fields: {
            getWordList
        }
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            createWord,
            updateWord,
            deleteWord
        }
    })
})

export default schema
