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
import uuid from 'uuid'

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
                    return Word.findAll({
                        where: { enabled: true },
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
            },
            updateWord: {
                type: GraphQLInt,
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
                    const params = args
                    delete params.id
                    params.updatedAt = Date.now()
                    return Word.update(params, { where: { id } })
                }
            },
            deleteWord: {
                type: GraphQLInt,
                args: {
                    id: {
                        description: 'Uuid of the word',
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: (obj, args) => {
                    const id = args.id
                    return Word.update({ enabled: false }, { where: { id } })
                }
            }
        }
    })
})

export default schema
