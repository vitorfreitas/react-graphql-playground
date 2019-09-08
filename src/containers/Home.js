import React from 'react'

export default function HomeContainer({ users }) {
  return (
    <ul>
      {users.map(({ name }) => (
        <li>{name}</li>
      ))}
    </ul>
  )
}
