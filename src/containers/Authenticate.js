import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function Authenticate({ onSubmit }) {
  const [data, setData] = useState({ name: '', email: '', age: 0 })

  const handleInputChange = key => e => {
    setData({ ...data, [key]: e.target.value })
  }

  return (
    <Modal show>
      <Modal.Header closeButton={false}>
        <Modal.Title>Authenticate yourself</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Your name</Form.Label>
            <Form.Control
              onChange={handleInputChange('name')}
              placeholder="First name"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleInputChange('email')}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              onChange={handleInputChange('age')}
              placeholder="Numbers only"
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={() => onSubmit(data)}>
          Sign up
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

Authenticate.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
