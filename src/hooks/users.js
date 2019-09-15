import { useState, useEffect } from 'react'
import { gql } from 'apollo-boost'
import { when, identity } from 'ramda'
import { useQuery, useSubscription } from '@apollo/react-hooks'

const USER_FOLLOWED = gql`
  subscription userFollowed {
    userFollowed {
      id
      name
      email
      age
      followedBy {
        name
      }
    }
  }
`

const FETCH_USERS = gql`
  {
    users {
      id
      name
      email
      age
      followedBy {
        name
      }
    }
  }
`

function useUsers() {
  const [users, setUsers] = useState([])
  const { data: queryData = {} } = useQuery(FETCH_USERS)
  const { data: subData = {} } = useSubscription(USER_FOLLOWED)

  useEffect(() => setUsers(queryData.users || []), [queryData.users])
  useEffect(() => when(identity, setUsers)(subData.userFollowed), [
    subData,
    users
  ])

  return users
}

export default useUsers
