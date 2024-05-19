import { useEffect, useState } from 'react';
import './../App.css';
import LeftPanel from './LeftPanel';
import MidPanel from './MidPanel';
import RightPanel from './RightPanel';
import LoginDialogue from './partial/LoginDialogue';

/*
useEffect(() => {
  if(!user.status)

 
}, [user])*/


function App() {
  const [user,setUser]=useState({
    status:false,
    email:null,
    name:null,
  })
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    }
  }, []);

  useEffect(() => {
    if(!user.status)document.getElementById('my_modal_1').showModal();
    else document.getElementById('my_modal_1').close();
  
    
  }, [user])
  
  
  return (
    <div className="flex flex-row  bg-gray-600">
      <div className="hidden sm:flex flex-[1]  bg-slate-800 h-[100vh]   flex-col justify-between" >
  
       <LeftPanel user={user} setUser={setUser}/> 
      </div>
      <div className="hidden sm:flex sm:flex-col flex-[6] bg-slate-700 h-[100vh] overflow-y-auto hidden-scroll">
        <MidPanel user={user} />
      </div>
      <div className="flex-[11] bg-gray-600 ">
<LoginDialogue user={user} setUser={setUser} />
        <RightPanel/>
      </div>
    </div>
  );
}

export default App;
