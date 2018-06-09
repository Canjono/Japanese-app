import express from 'express'
import express_graphql from 'express-graphql'
import cors from 'cors'

import db from './database/db'
import schema from './graphql/schema'

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
