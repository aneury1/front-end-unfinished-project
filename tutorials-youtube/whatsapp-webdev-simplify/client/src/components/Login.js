
import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidv4} from 'uuid';


export default function Login({onIdSubmit}) {
    
    const idRef = useRef()
    
    function HandleSubmit(e){
        e.preventDefault();
        onIdSubmit(idRef.current.value)
    }

    function onNewIdSelected(e){
        e.preventDefault();
        onIdSubmit(uuidv4()) 
    }


    return (
        <Container className="align-items-center d-flex" style={{height:'100vh'}}>
           <Form className="w-100" onSubmit={HandleSubmit}>
               <Form.Group>
                  <Form.Label>Enter your Id</Form.Label>
                  <Form.Control type="text" ref={idRef} required></Form.Control> 
               </Form.Group>
               <Button type="submit" className="m-2" >Submit</Button>
               <Button onClick={onNewIdSelected} variant="secondary">Create new new id</Button>
           </Form>
        </Container>
    )
}
