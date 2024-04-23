import {React, useState, useEffect} from 'react';
import ContactList from "./partial/ContactList";
export default function(){
    const [selectedContact, setSelectedContact]=useState(0);


         
    return (<>
    <ContactList  user={123} selected={selectedContact} setSelectedContact={setSelectedContact}/>
    <ContactList   user={456} selected={selectedContact} setSelectedContact={setSelectedContact}/>
    <ContactList   user={789} selected={selectedContact} setSelectedContact={setSelectedContact}/>

       
    
    
    </>);
}