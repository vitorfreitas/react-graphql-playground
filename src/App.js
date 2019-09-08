import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'

import client from './graphql'
import Home from './pages/Home'

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  )
}

export default App
