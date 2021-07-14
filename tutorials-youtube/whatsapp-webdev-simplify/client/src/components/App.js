
import React /*, {useState}*/ from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard';
import { ContactsProvider } from '../Context/ContactsContext';
import Login from './Login';
///stop: 36:38
function App() {

   const [id, setId]= useLocalStorage('id');///useState();

   const dashboard = (
      <ContactsProvider>
         <Dashboard id={id} />
      </ContactsProvider>
   );

  return (
     id ? dashboard: <Login onIdSubmit={setId}/>
    
  );
}

export default App;
