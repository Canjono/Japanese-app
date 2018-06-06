import express from 'express'
import express_graphql from 'express-graphql'
import { buildSchema } from 'graphql'
import cors from 'cors'
import Sequelize from 'sequelize'

// GraphQL schema.
const schema = buildSchema(`
    type Query {
        words: [Word]
    },
    type Word {
        id: String
        name: String
        translation: String
        grammar: String
        story: String
    }
`)

const wordsData = [
    {
        id: '11111',
        name: 'Korosu',
        translation: 'Kill',
        grammar: 'Verb',
        story: 'To kill a zombie you have to CRUSH it'
    },
    {
        id: '12345',
        name: 'Amai',
        translation: 'Sweet',
        grammar: 'Adjective',
        story: 'Bart is sweet when he says, I know who you are, but who AM I?'
    }
]

const getWords = () => {
    return wordsData
}

// Root resolver
const root = {
    words: getWords
}

// Sequlize time!!
const sequelize = new Sequelize('Vocabulary', 'root', 'root', {
    host: 'database',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err)
    })

// Create an express server and a GraphQL endpoint.
const app = express()

app.use(cors())

app.use(
    '/graphql',
    express_graphql({
        schema: schema,
        rootValue: root,
        graphiql: true
    })
)

const port = 3000

app.listen(port, () =>
    console.log(
        `Canjono GraphQL Server Now Running On localhost:${port}/graphql`
    )
)
