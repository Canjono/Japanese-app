import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import getWordList from './queries/getWordList'
import addWord from './mutations/addWord'
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
            addWord,
            updateWord,
            deleteWord
        }
    })
})

export default schema
