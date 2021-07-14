import React, {useRef} from 'react'
import {Modal, Button, Form }from 'react-bootstrap';
 

import { useContacts } from '../Context/ContactsContext';
export default function NewConversationModal() {

     const idRef = useRef();
     const nameRef = useRef();

    function HandleSubmit(e){
       e.preventDefault();
    }


    return (
        <>
            <Modal.Header closeButton>Create new Convertsation</Modal.Header>
            <Modal.Body>
                <Form onSubmit={HandleSubmit}>
                    <Form.Group >
                        <Form.Label>user id</Form.Label>
                        <Form.Control type="text" ref={idRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} required></Form.Control>
                    </Form.Group>
                    <Button type="submit" className="mt-2"> Add new User</Button>
                </Form>
            </Modal.Body>
        </>
    )
}
