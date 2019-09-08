import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import HomeContainer from '../containers/Home'
import useAuthentication from '../hooks/authentication'
import Authenticate from '../containers/Authenticate'

export default function Home() {
  const [isAuthenticated, authenticate] = useAuthentication()
  const { loading, error, data } = useQuery(gql`
    {
      users {
        id
        name
        following {
          name
        }
      }
    }
  `)

  if (!isAuthenticated) return <Authenticate onSubmit={authenticate} />
  if (error) return <pre>{JSON.stringify(error, '', 4)}</pre>
  if (loading) return <p>Fetching Data...</p>

  return <HomeContainer users={data.users} />
}
