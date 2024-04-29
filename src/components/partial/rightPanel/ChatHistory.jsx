import {React} from 'react';
import {  HiUserCircle } from "react-icons/hi2";

export default function(){
    const id=123456;
    let a = [];
    const chats=[
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
    ];
    chats.forEach((i,y)=>{
        let self=false;
        if(id==i.from)self=true;
      a.push(<div className=' relative  w-full p-2'>&nbsp;
        <div className={`absolute rounded-2xl ${self?'rounded-tr-none bottom-0 right-0':'rounded-tl-none   bottom-0 left-0'}  p-2 w-[50%] h-fit bg-slate-800 text-white `}>
        {i.text} {y}
        </div>
        </div>);
    });
    a.reverse();
    return (<div style={{direction:"rtl"}}  className="h-full overflow-y-auto rotate-180 with-scroll">
        <div className='-rotate-180 ' style={{direction:"ltr"}} >
            {a}
            
            </div>
    </div>);
}