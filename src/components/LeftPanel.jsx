import { HiCog, HiOutlineArrowLeftOnRectangle, HiUserCircle } from "react-icons/hi2";

function App({user, setUser}) {
  function logut() {
    if(window.confirm("Are you sure want to logout?")){
      const userD={
        status:false,
        email:null,
        name:null,
      };
      setUser(userD)
      localStorage.setItem('user', JSON.stringify(userD));

    }
  }
  return (
<>
        <div className='flex flex-col items-center'><HiUserCircle size={'60%'} /></div><div></div>
        <div className='flex flex-col items-center'>
          <HiCog className='cursor-pointer' size={'60%'} />
          <HiOutlineArrowLeftOnRectangle className='cursor-pointer ' size={'60%'} onClick={()=>logut()}/>
        </div>
        
        </>);
}

export default App;
