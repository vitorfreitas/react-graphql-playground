import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $age: Int!, $email: String!) {
    createUser(user: { name: $name, age: $age, email: $email }) {
      id
    }
  }
`

function useAuthentication() {
  const [isAuthenticated, setAuthenticationStatus] = useState(false)
  const [createUser] = useMutation(CREATE_USER)

  const authenticate = async user => {
    try {
      const {
        data: { createUser: newUser }
      } = await createUser({
        variables: { ...user, age: +user.age }
      })

      localStorage.setItem(
        'cur_user',
        JSON.stringify({ ...user, id: newUser.id })
      )
    } catch (err) {
      console.warn(err)
    }

    setAuthenticationStatus(true)
  }

  useEffect(() => {
    const user = localStorage.getItem('cur_user')
    setAuthenticationStatus(!!user)

    return () => setAuthenticationStatus(false)
  }, [])

  return [isAuthenticated, authenticate]
}

export default useAuthentication
