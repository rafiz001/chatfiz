import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const LoginDialogue = ({user,setUser}) => {

  const [userName,setUserName]=useState(null);
  const [password,setPassword]=useState(null);

  const [userNameS,setUserNameS]=useState(null);
  const [passwordS,setPasswordS]=useState(null);
  const [nameS,setNameS]=useState(null);

  function signUp() {
    if(userNameS==null)return;

    fetch("http://localhost:8000/api/user",  {
      method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({'name': nameS ,'email': userNameS,'password':passwordS})
   
   }).then((x)=>x.json()).then((y)=>{
    if(y.message){
      toast("Account Created.");
      document.getElementById('my_modal_2').close();
    }
    else toast("Wrong info.");
   })

    console.log(nameS,userNameS,passwordS);
  }

  async function formSubmitter() {
    console.log(userName,password);
    try{
   let  respRaw= await fetch("http://localhost:8000/api/login",  {
       method: 'POST',
       
      headers: {
        
        
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'email': userName,'password':password})
    
    });
let resp=await respRaw.json();
 console.log(resp.message);
if(resp.message=="success"){
  const userD={
    status:true,
    email:resp.data.email,
    name:resp.data.name
  };
  setUser(userD);
  localStorage.setItem('user', JSON.stringify(userD));

toast("Welcome "+resp.data.name);
}
else{
  toast("Wrong credential. Please Try aggain...");
}
  }
  catch (err){
    toast("API error.");
  }

  }
  return (
    <>

 
<dialog id="my_modal_1" className="modal" >
  <div className="modal-box">
    <h3 className="font-bold text-lg">Login Here</h3>
    <p className="py-4">
      <form id='loginForm'>
      <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="text" className="grow" placeholder="Email" name="email"
  onChange={(e) => setUserName(e.target.value)}
  />
</label>
<label className="input input-bordered flex items-center gap-2 mt-3">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input type="password" className="grow" placeholder="Password"  name="password"
  onChange={(e) => setPassword(e.target.value)}
  />
</label>
<div className='btn btn-outline mt-3 ' onClick={()=>formSubmitter()}>Login</div>
<div className='btn btn-outline mt-3 ml-2' onClick={()=>document.getElementById('my_modal_2').showModal()}>Sign Up Form</div>
      </form>
    </p>
    <div className="modal-action">
      
    </div>
  </div>
</dialog>



<dialog id="my_modal_2" className="modal" >
  <div className="modal-box">
    <h3 className="font-bold text-lg">Sign Up Here</h3>
    <p className="py-4">
      <form id='loginForm'>
      <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="text" className="grow" placeholder="Name" name="name"
  onChange={(e) => setNameS(e.target.value)}
  
  />
  </label>
      <label className="input input-bordered flex items-center gap-2 mt-3">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="text" className="grow" placeholder="Email" name="email"
 onChange={(e) => setUserNameS(e.target.value)}
  />
</label>
<label className="input input-bordered flex items-center gap-2 mt-3">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input type="password" className="grow" placeholder="Password"  name="password"
  onChange={(e) => setPasswordS(e.target.value)}
  />
</label>
<div className='btn btn-outline mt-3 ' onClick={()=>signUp()}>Sign Up</div>
<div className='btn btn-outline mt-3 ml-2' onClick={()=>document.getElementById('my_modal_2').close()}>Login Form</div>
      </form>
    </p>
    <div className="modal-action">
      
    </div>
  </div>
</dialog>
    </>
  )
}

export default LoginDialogue;