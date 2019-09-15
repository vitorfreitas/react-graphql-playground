import { ApolloClient } from 'apollo-boost'
import { split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({
  uri: 'http://localhost:3001'
})

const wsLink = new WebSocketLink({
  uri: `ws://localhost:3001`,
  options: {
    reconnect: true
  }
})

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

const client = new ApolloClient({ link, cache: new InMemoryCache() })

export default client
