import { GraphQLNonNull, GraphQLString } from 'graphql'
import Word from '../../database/models/word'
import wordType from '../types/wordType'
import uuid from 'uuid'

const addWord = {
    type: wordType,
    args: {
        name: {
            description: 'Name of the word',
            type: new GraphQLNonNull(GraphQLString)
        },
        translation: {
            description: 'Translation of the word',
            type: new GraphQLNonNull(GraphQLString)
        },
        grammar: {
            description: 'Grammar of the word',
            type: new GraphQLNonNull(GraphQLString)
        },
        story: {
            description: 'Story of the word',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: (obj, args) => {
        return Word.create({
            id: uuid(),
            name: args.name,
            translation: args.translation,
            grammar: args.grammar,
            story: args.story,
            createdAt: Date.now(),
            updatedAt: Date.now()
        })
    }
}

export default addWord
