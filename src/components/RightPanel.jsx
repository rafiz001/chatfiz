import Header from './partial/rightPanel/Header';
import ChatHistory from './partial/rightPanel/ChatHistory';
import ChatInput from './partial/rightPanel/ChatInput';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function({user, setUser}){
    const  [chats,setChats]=useState([]);
    const [chatRefresh, setChatRefresh]=useState();

    const { id } = useParams();
    useEffect(()=>{
        user.email && fetch("http://localhost:8000/api/msg/"+user.email+"/"+id).then((x)=>x.json()).then((y)=>{setChats(y.data);})
        // console.log("http://localhost:8000/api/msg/"+user.email+"/"+id)
        setChatRefresh(false);
    },[user,id,chatRefresh])
        // setInterval(() => {
        //     setChatRefresh(true)
            
            
        // }, 1000);
    return (<div className='flex flex-col justify-between h-[100vh]'>
        
        <Header   to={id} />
    <ChatHistory chats={chats} user={user} to={id} setChats={setChats}/>
   
    <ChatInput  chats={chats} setChats={setChats}  to={id} user={user} setChatRefresh={setChatRefresh}/>
    </div>);
}