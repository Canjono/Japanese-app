import express from 'express'
import express_graphql from 'express-graphql'
import cors from 'cors'

import db from './database/db'
import schema from './graphql/schema'

// const wordsData = [
//     {
//         id: '11111',
//         name: 'Korosu',
//         translation: 'Kill',
//         grammar: 'Verb',
//         story: 'To kill a zombie you have to CRUSH it'
//     },
//     {
//         id: '12345',
//         name: 'Amai',
//         translation: 'Sweet',
//         grammar: 'Adjective',
//         story: 'Bart is sweet when he says, I know who you are, but who AM I?'
//     }
// ]

// const getWords = () => {
//     return wordsData
// }

// Create an express server and a GraphQL endpoint.
const app = express()

app.use(cors())

app.use(
    '/graphql',
    express_graphql({
        schema: schema,
        graphiql: true
    })
)

const port = 3000

// app.listen(port, () =>
//     console.log(
//         `Express GraphQL Server Now Running On localhost:${port}/graphql`
//     )
// )

db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
        const port = 3000

        app.listen(port, () =>
            console.log(
                `Express GraphQL Server Now Running On localhost:${port}/graphql`
            )
        )
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err)
    })
