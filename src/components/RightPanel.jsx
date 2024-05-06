import Header from './partial/rightPanel/Header';
import ChatHistory from './partial/rightPanel/ChatHistory';
import ChatInput from './partial/rightPanel/ChatInput';
import { useState } from 'react';
export default function(){
    const  [chats,setChats]=useState([
        {
            from:123456,
            to:789101,
            text:"This is a message",
            time:1714352693
        },
        {
            from:123456,
            to:789101,
            text:"This is a message",
            time:1714352693
        },
        {
            from:1234567,
            to:789101,
            text:"This is a message",
            time:1714352693
        },
        {
            from:123456,
            to:789101,
            text:"This is a message",
            time:1714352693
        },
        {
            from:1234567,
            to:789101,
            text:"This is a message",
            time:1714352693
        },
        {
            from:1234567,
            to:789101,
            text:"This is a message",
            time:1714352693
        },
        {
            from:123456,
            to:789101,
            text:"This is a message",
            time:1714352693
        },        {
            from:123456,
            to:789101,
            text:"This is a message",
            time:1714352693
        },
        {
            from:123456,
            to:789101,
            text:"This is a message",
            time:1714352693
        },
        {
            from:1234567,
            to:789101,
            text:"This is a message",
            time:1714352693
        },
        {
            from:123456,
            to:789101,
            text:"This is a message",
            time:1714352693
        },
        {
            from:1234567,
            to:789101,
            text:"This is a message",
            time:1714352693
        },
        {
            from:1234567,
            to:789101,
            text:"This is a message",
            time:1714352693
        },
        {
            from:123456,
            to:789101,
            text:"This is a message",
            time:1714352693
        },        {
            from:123456,
            to:789101,
            text:"This is a message",
            time:1714352693
        },
        {
            from:123456,
            to:789101,
            text:"This is a message",
            time:1714352693
        },
        {
            from:1234567,
            to:789101,
            text:"This is a message",
            time:1714352693
        },
        {
            from:123456,
            to:789101,
            text:"This is a message",
            time:1714352693
        },
        {
            from:1234567,
            to:789101,
            text:"This is a message",
            time:1714352693
        },
        {
            from:1234567,
            to:789101,
            text:"This is a message",
            time:1714352693
        },
        {
            from:123456,
            to:789101,
            text:"This is a message",
            time:1714352693
        },
    ]);
    return (<div className='flex flex-col justify-between h-[100vh]'>
    
        <Header/>
    <ChatHistory chats={chats} setChats={setChats}/>
   
    <ChatInput  chats={chats} setChats={setChats}/>
    </div>);
}