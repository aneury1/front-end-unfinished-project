import React, {useState} from 'react';
import { Tab, Nav, Button, Modal } from 'react-bootstrap';
import NewContactModal from './NewContactModal';
import NewConversationModal from './NewConversationModal';
import Contacts from './Contacts';



const CONVERSTAION_KEY ="CHAT";
const CONTACTS_KEY = 'contacts'


export default function Sidebar({id}) {

    const [activeKey, setActiveKey] = useState(CONTACTS_KEY);
  
     const [showModal, setShowModal] = useState(true);


    let conv_opn = activeKey === CONVERSTAION_KEY;


    return (
        <div style={{width:'250px'}} className="d-flex flex-column">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                 <Nav variant="tabs" className="justify-content-center">
                     <Nav.Item>
                         <Nav.Link eventKey={CONVERSTAION_KEY}>Conversations</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                         <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                     </Nav.Item>
                 </Nav>
                 <Tab.Content className="border-right overflow-auto flex-grow-1">
                    <Tab.Pane eventKey={CONVERSTAION_KEY}>CONVERSTATION</Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}><Contacts /></Tab.Pane>
                 </Tab.Content>  
                 <div className="p-2 border-top border-right small">
                     Your id is: <span className="text-muted">{id}</span>
                 </div>
                 <Button onClick={()=>setShowModal(true)} >New { conv_opn? 'Converstation':'Contact'} </Button>
            </Tab.Container>
            
           <Modal show={showModal} onHide={()=>setShowModal(false)} >
            { conv_opn?<NewConversationModal />:<NewContactModal closeModal={()=>setShowModal(false)}/>}
           </Modal>
           
        </div>
    )
}
