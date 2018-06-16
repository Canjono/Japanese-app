import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt
} from 'graphql'
import wordType from './types/wordType'
import Word from '../database/models/word'

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'root',
        fields: {
            getWordList: {
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
                    delete args.offset
                    delete args.limit
                    return Word.findAll({
                        where: args,
                        offset,
                        limit,
                        attributes: { exclude: ['enabled'] }
                    })
                }
            }
        }
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            createWord: {
                type: wordType,
                args: {
                    name: {
                        description: 'Name of the word',
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: (obj, args) => {
                    return Word.create(args)
                }
            },
            updateWord: {
                type: wordType,
                args: {
                    id: {
                        description: 'Uuid of the word',
                        type: new GraphQLNonNull(GraphQLString)
                    },
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
                    const id = args.id
                    delete args.id
                    return word.update(args, { where: { id } })
                }
            }
        }
    })
})

export default schema
