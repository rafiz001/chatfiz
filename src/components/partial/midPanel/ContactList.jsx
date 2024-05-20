import {React, useState, useEffect, useRef} from 'react';
import {  HiUserCircle } from "react-icons/hi2";
import borderLeftArrow from './borderLeftArrow.svg';
import { Link } from 'react-router-dom';
export default function({user, selected, setSelectedContact}){
    const [active,setActive]=useState(false);
    const [userName, setUserName]=useState("");
    function clickHandler(id){
        setSelectedContact(id)
       
     }
    useEffect(() => {   
        if(user==selected)setActive(true);
        else setActive(false);
    },[selected]);

    useEffect(()=>{
        fetch("http://localhost:8000/api/user/"+user).then((x)=>x.json()).then((y)=>setUserName(y.data?.name))

    },[])

    useEffect(()=>{
        console.log(userName)
    },[userName])

    return (<>
        <Link to={"/"+user}>
        <div onClick={(e)=>clickHandler(user)} className={`${userName?'':'hidden'} border-b  border-black  text-white flex relative cursor-pointer`}>
        <div className={`${active?'border-l-4 border-red-700':''} flex flex-row w-[100%] p-4`}>
        <div className="  flex items-center pr-2"><HiUserCircle size={50} className=""/></div>
        <div className={` w-[100%] `}>
            
        <div className='flex flex-row justify-between  '><div>{userName}</div><div>29/4/2024</div></div>
        <i className='text-sm'>This is a text</i>
        </div>
        <img className={`${active?'':'hidden'} h-[100%] absolute right-0 top-0`} src={borderLeftArrow}/>
        </div>
    </div>
    </Link>
    </>);
}