import { HiCog, HiOutlineArrowLeftOnRectangle, HiUserCircle } from "react-icons/hi2";

function App() {
  return (
<>
        <div className='flex flex-col items-center'><HiUserCircle size={'60%'} /></div><div></div>
        <div className='flex flex-col items-center'>
          <HiCog className='' size={'60%'} />
          <HiOutlineArrowLeftOnRectangle className=' ' size={'60%'} />
        </div>
        
        </>);
}

export default App;
