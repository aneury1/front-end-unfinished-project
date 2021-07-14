import React,{Children, useContext} from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

const ContactsContext = React.createContext();

export function useContacts(){
    return useContext(ContactsContext);
}


export  function ContactsProvider({children}) {
     
    const [contacts, setContacts] = useLocalStorage('contact',[]);
  
     function createContact(id, name){
        
        setContacts(prevContact=>{
             return [...contacts, {id,name}];
         });
     }


    return(
        <ContactsContext.Provider value={{contacts, createContact}}>
            {children}
        </ContactsContext.Provider>
    )
}
