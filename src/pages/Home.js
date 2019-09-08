import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import HomeContainer from '../containers/Home'

export default function Home() {
  const { loading, error, data } = useQuery(gql`
    {
      users {
        name
        email
        age
        following {
          name
        }
      }
    }
  `)

  if (error) return <pre>{JSON.stringify(error, '', 4)}</pre>
  if (loading) return <p>Loading...</p>

  return <HomeContainer users={data.users} />
}
