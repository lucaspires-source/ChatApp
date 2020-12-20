import React,{useState} from 'react'
import {Modal,Form,Button} from 'react-bootstrap';
import { useContacts } from '../contexts/ContactsProvider';
import {useConversations} from '../contexts/ConversationsProvider';
const NewConversationsModal = ({closeModal}) => {
    const {contacts} = useContacts()
    const [selectedContactIds, setSelectedContactids] = useState([])
    const{createConversation} = useConversations()
    
    const handleCheckboxChange = (contactId) =>{
        setSelectedContactids(prevSelectedContactIds =>{
            if(prevSelectedContactIds.includes(contactId)){
                return prevSelectedContactIds.filter(prevId =>{
                    return contactId !== prevId
                })
            }else{
                return [... prevSelectedContactIds, id]
            }
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        createConversation(selectedContactIds)
        closeModal()
    }
    return (
            <>
            <Modal.Header closeButton>Create Contact</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                   {contacts.map(contact =>(
                       <Form.Group controlId={contact.id} key={contact.id}>
                           <Form.Check 
                                type="checkbox"
                                value={selectedContactIds.incluedes(contact.id)}
                                label={contact.name}
                                onChange={()=> handleCheckboxChange(contact.id)}
                           />
                       </Form.Group>
                   ))}
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
            </>
    )
}

export default NewConversationsModal
