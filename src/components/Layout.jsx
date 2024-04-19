import './../App.css';
import { HiCog, HiOutlineArrowLeftOnRectangle, HiUserCircle } from "react-icons/hi2";

function App() {
  return (
    <div className="flex flex-row divide-x divide-black">
      <div className="flex-[1]  bg-slate-600 min-h-[100vh]  flex flex-col justify-between" >
        <div className='flex flex-col items-center'><HiUserCircle size={'60%'} /></div><div></div>
        <div className='flex flex-col items-center'>
          <HiCog className='' size={'60%'} />
          <HiOutlineArrowLeftOnRectangle className=' ' size={'60%'} />
        </div>
      </div>
      <div className="flex-[5] bg-slate-600 ">Friends<br /><br /><br /></div>
      <div className="flex-[11] bg-gray-800 ">chat history</div>

    </div>
  );
}

export default App;
