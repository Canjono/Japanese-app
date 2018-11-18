import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import getWords from './queries/getWords'
import addWord from './mutations/addWord'
import updateWord from './mutations/updateWord'
import deleteWord from './mutations/deleteWord'

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'root',
        fields: {
            getWords
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
