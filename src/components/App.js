import React, { useState, useEffect } from "react";
import { v4 as uuid_v4 } from "uuid";

import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactDetails from "./ContactDetails";  
import UpdateContact from "./UpdateContact";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid_v4(), ...contact }]);
  };

  const updateContactHandler = (contact) => {
    //console.log();
    const response = contact
    const { id, name, email } = response;
    setContacts(
      contacts.map((contact) => {

        return contact.id === id ? {...response} : contact;
      })
    );
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
         <Header />
         <Switch>
           <Route path="/" exact 
           render={(props) => (
           <ContactList {...props} 
           contacts={contacts} 
           getContactId={removeContactHandler} 
           />
           )}
          />

           <Route path="/add" render={(props) => (
             <AddContact {...props} addContactHandler={addContactHandler}
            />
          )}
          />

          <Route path="/edit" render={(props) => (
             <UpdateContact {...props} updateContactHandler={updateContactHandler}
            />
          )}
          />
          <Route path="/contact/:id" component={ContactDetails} />
         </Switch>
      </Router>
      
    </div>
  );
 }

export default App;

  {/*
       <AddContact addContactHandler={addContactHandler} />
       <ContactList contacts={contacts} getContactId={removeContactHandler} />
        */}
