import { React, useState } from 'react';
import { HiUserCircle } from "react-icons/hi2";

export default function ({ chats }) {
    const id = 123456;
    let a = [];

    chats.forEach((i, y) => {
        let self = false;
        if (id == i.from) self = true;
        a.push(<div className={`chat ${self ? 'chat-end' : 'chat-start'}`}>
            <div className={`chat-bubble text-white bg-slate-800`}>{i.text} {y}</div>
            {i.status=="sending"?<div className="chat-footer opacity-50">Sending...</div>:''}
        </div>);
    });

    return (<div style={{ direction: "rtl" }} className="h-full overflow-y-auto rotate-180 with-scroll">
        <div className='-rotate-180 ' style={{ direction: "ltr" }} >
            {a}

        </div>
    </div>);
}