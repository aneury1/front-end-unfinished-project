

import {Modal, Button, Form }from 'react-bootstrap';
import React, {useRef} from 'react'

import { useContacts } from '../Context/ContactsContext';

export default function NewContactModal({closeModal}) {
  
     const idRef = useRef();
     const name  = useRef();
     const {createContact } = useContacts();
     
     function HandleSubmit(e){
        e.preventDefault();   
        createContact(idRef.current.value, name.current.value);
        closeModal();
    }

    return (
        <>
            <Modal.Header closeButton>Add new Contact</Modal.Header>
            <Modal.Body>
                <Form onSubmit={HandleSubmit}>
                    <Form.Group >
                        <Form.Label>user id</Form.Label>
                        <Form.Control type="text" ref={idRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={name} required></Form.Control>
                    </Form.Group>
                    <Button type="submit" className="mt-2"> Add new User</Button>
                </Form>
            </Modal.Body>
        </>
    )
}
