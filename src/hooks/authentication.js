import { useState, useEffect } from 'react'

function useAuthentication() {
  const [isAuthenticated, setAuthenticationStatus] = useState(false)

  const authenticate = user => {
    localStorage.setItem('cur_user', JSON.stringify(user))
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
