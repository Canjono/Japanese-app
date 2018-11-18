import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import getWords from './queries/getWords'
import addWord from './mutations/addWord'
import updateWord from './mutations/updateWord'
import deleteWord from './mutations/deleteWord'
import getMemoryPalaces from './queries/getMemoryPalaces'
import addMemoryPalace from './mutations/addMemoryPalace'
import deleteMemoryPalace from './mutations/deleteMemoryPalace'

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'root',
        fields: {
            getWords,
            getMemoryPalaces
        }
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            addWord,
            updateWord,
            deleteWord,
            addMemoryPalace,
            deleteMemoryPalace
        }
    })
})

export default schema
