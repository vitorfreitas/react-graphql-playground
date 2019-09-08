import React from 'react'

export default function HomeContainer({ users }) {
  return (
    <ul>
      {users.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  )
}
