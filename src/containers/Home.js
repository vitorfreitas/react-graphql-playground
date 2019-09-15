import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import UserCard from '../components/UserCard'

function HomeContainer({ users, onFollowUser, loggedInUser }) {
  const _renderUser = user => (
    <Col sm={2} md={6} lg={4} key={user.id}>
      <UserCard
        user={user}
        onFollowUser={onFollowUser}
        loggedInUser={loggedInUser}
      />
    </Col>
  )

  return (
    <Container>
      <Row>{users.map(_renderUser)}</Row>
    </Container>
  )
}

export default HomeContainer
