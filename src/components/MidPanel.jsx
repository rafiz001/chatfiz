import {React, useState, useEffect, useRef} from 'react';
import ContactList from "./partial/midPanel/ContactList";
import { HiMiniPlus } from "react-icons/hi2";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function({user}){
   
    const [contacts,setContacts]=useState(null);
    const [selectedContact, setSelectedContact]=useState(0);
    const [connectionBar,setConnectionBar]=useState(false);
    function connectionBarToggler(){connectionBar?setConnectionBar(false):setConnectionBar(true);}
    let to = useRef();
    async function connect(){
        const response = await toast.promise(
        fetch("http://localhost:8000/api/connect",  {
            method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify({'user1': user.email,'user2':to.current.value, 'commit':(new Date).getTime()+""})
         
         }),{
            pending: 'Loading...',
            success: 'User added successfully.',
            error: 'Something went wrong.'
          }
        );
        to.current.value="";
    }
         
    useEffect(()=>{
        let contactss="";
       user.email &&  fetch("https://chatfiz-express.onrender.com/api/getConnection/"+user.email).then((x)=>x.json()).then((y)=>{ 
       
      try{y.data.forEach((value)=>{
        setContacts(y.data);
            

       })}
       catch(error){
        toast.error("Some thing went wrong");
       }

       })
    },[user])

    return (<>
    <ToastContainer theme="dark" />  
    <div onClick={()=>connectionBarToggler()} className='cursor-pointer rounded-full flex justify-center border border-black  text-white'><HiMiniPlus size={25}/> Connect A User</div>
    <div className={`${!connectionBar?'hidden':' '} duration-500 transition-all`}>
    <div className=' flex justify-center'><input ref={to} className='bg-transparent outline-none w-[90%] rounded-full p-2 m-2 border border-black' type='email' placeholder='Enter email'/></div>
    <div className='flex justify-center'><span onClick={()=>connect()} className='text-center rounded-full p-2 px-7 m-2  border border-black hover:bg-white hover:text-black cursor-pointer'>Add</span>    </div>
    </div>


        {contacts?.map((value)=><ContactList  user={value.user2} selected={selectedContact} setSelectedContact={setSelectedContact}/>)}
    
    
    </>);
}