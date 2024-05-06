import {React, useState, useEffect, useRef} from 'react';
import {  HiArrowUpCircle } from "react-icons/hi2";

export default function({chats,setChats}){
    const textarea=useRef();
    function addMessage() {
      if(textarea.current.value=="")return;
      var text=textarea.current.value;
      
        setChats([...chats,{        
            from:123456,
            to:789101,
            text:text,
            time:new Date().getTime,
            status:"sending",
        }
        ])
        textarea.current.value="";
    }

    /*setInterval(function () {
        setChats([...chats,{        
            from:789101,
            to:123456,
            text:"Hi, this another.",
            time:new Date().getTime,
        }
        ])
    
    },10000);*/
  
    return (<div  className=" bg-slate-900 text-white p-1 flex flex-row rounded-2xl">
        <div className="flex-[12] bg-red"><textarea ref={textarea} name="" autoFocus id="" className='w-full h-full bg-transparent outline-none resize-none ' placeholder='Write your message here...'></textarea></div>
        
        <div className='flex-[2] '>
            <div className="flex flex-col items-center">
            <HiArrowUpCircle size={'50'} className='cursor-pointer' onClick={addMessage} />
            </div>
            </div>
    </div>);
}