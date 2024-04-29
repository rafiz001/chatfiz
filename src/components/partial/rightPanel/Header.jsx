import {React, useState, useEffect, useRef} from 'react';
import {  HiUserCircle } from "react-icons/hi2";

export default function(){

  
    return (<div  className="border-b border-black   text-white flex relative ">
        <div className={` flex flex-row w-[100%] p-1`}>
        <div className="  flex items-center pr-2"><HiUserCircle size={50} className=""/></div>
        <div className={` w-[100%] `}>
            
        <div className='flex flex-row justify-between  '>
            <div className='flex flex-col'>Rafiz Uddin
            <i className='text-sm'>Active at 29 April 6:47AM</i>
                </div>
                
                <div className='hidden flex flex-row items-center '>29/4/2024</div>
            
            </div>
        
        </div>
        
        </div>
    </div>);
}