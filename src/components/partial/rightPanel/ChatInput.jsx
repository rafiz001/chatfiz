import {React, useState, useEffect, useRef} from 'react';
import {  HiArrowUpCircle } from "react-icons/hi2";

export default function(){

  
    return (<div  className=" bg-slate-900 text-white p-1 flex flex-row">
        <div className="flex-[12] bg-red"><textarea name="" id="" className='w-full h-full bg-transparent outline-none resize-none ' placeholder='Write your message here...'></textarea></div>
        
        <div className='flex-[2] '>
            <div className="flex flex-col items-center">
            <HiArrowUpCircle size={'40%'}  />
            </div>
            </div>
    </div>);
}