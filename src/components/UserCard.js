import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function UserCard({ loggedInUser, user, onFollowUser }) {
  const alreadyFollow = () => {
    const bool = user.followedBy.some(u => u.name === loggedInUser.name)
    return bool
  }

  return (
    <Card style={{ margin: '1rem 0' }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle>{user.email}</Card.Subtitle>
        <Card.Text>{user.age} anos</Card.Text>

        {user.followedBy.length > 0 && (
          <Card.Text>
            Seguido por {user.followedBy.map(user => user.name).join(', ')}
          </Card.Text>
        )}

        <Button
          disabled={alreadyFollow()}
          variant="primary"
          onClick={() => onFollowUser(user)}
        >
          {alreadyFollow() ? 'Você já segue!' : 'Seguir'}
        </Button>
      </Card.Body>
    </Card>
  )
}
