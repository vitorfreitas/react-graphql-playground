import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { applySpec, path, pipe } from 'ramda'

import HomeContainer from '../containers/Home'
import Authenticate from '../containers/Authenticate'
import useAuthentication from '../hooks/authentication'
import useUsers from '../hooks/users'

const FOLLOW_USER = gql`
  mutation followUser($id: ID!, $user: UserInput) {
    followUser(id: $id, user: $user)
  }
`

const userInput = applySpec({
  name: path(['name']),
  email: path(['email']),
  age: pipe(
    path(['age']),
    Number
  )
})

export default function Home() {
  const users = useUsers()
  const [isAuthenticated, authenticate] = useAuthentication()
  const [followUserGql] = useMutation(FOLLOW_USER)
  const loggedInUser = JSON.parse(localStorage.getItem('cur_user'))

  const followUser = user => {
    followUserGql({
      variables: {
        id: user.id,
        user: userInput(loggedInUser)
      }
    })
  }

  if (!isAuthenticated) return <Authenticate onSubmit={authenticate} />

  return (
    <HomeContainer
      loggedInUser={loggedInUser}
      users={users}
      onFollowUser={followUser}
    />
  )
}
