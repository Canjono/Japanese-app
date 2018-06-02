import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({
    // You should use an absolute URL here
    // uri: 'japaneseapp_backend/graphql'
    uri: 'http://127.0.0.1:21000/graphql'
})

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true
})

export default apolloClient
