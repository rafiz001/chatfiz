import {React, useState, useEffect} from 'react';
import ContactList from "./partial/ContactList";
export default function(){
    const [selectedContact, setSelectedContact]=useState(0);


         
    return (<>
    <ContactList  user={123} selected={selectedContact} setSelectedContact={setSelectedContact}/>
    <ContactList   user={456} selected={selectedContact} setSelectedContact={setSelectedContact}/>
    <ContactList   user={789} selected={selectedContact} setSelectedContact={setSelectedContact}/>
    <ContactList   user={34} selected={selectedContact} setSelectedContact={setSelectedContact}/>
    <ContactList   user={7832432439} selected={selectedContact} setSelectedContact={setSelectedContact}/>
    <ContactList   user={7834539} selected={selectedContact} setSelectedContact={setSelectedContact}/>
    <ContactList   user={783534545459} selected={selectedContact} setSelectedContact={setSelectedContact}/>
    <ContactList   user={7865656759} selected={selectedContact} setSelectedContact={setSelectedContact}/>
    <ContactList   user={78687879} selected={selectedContact} setSelectedContact={setSelectedContact}/>
    <ContactList   user={78798799} selected={selectedContact} setSelectedContact={setSelectedContact}/>
    <ContactList   user={2323} selected={selectedContact} setSelectedContact={setSelectedContact}/>

       
    
    
    </>);
}