import React from 'react'
import {ListGroup} from 'react-bootstrap'
const Conversations = () => {
    return (
        <ListGroup variant="flush">
            {contacts.map(contact => (
                <ListGroup.Item key={contact.id}>
                {contact.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default Conversations
