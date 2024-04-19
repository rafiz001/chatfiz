
import './App.css';
import { HiCog,HiOutlineArrowLeftOnRectangle } from "react-icons/hi2";

function App() {
  return (
<div className="grid grid-cols-12 divide-x divide-black">
  <div className="bg-slate-600 min-h-[100vh] relative" >
  <HiCog    className='absolute bottom-0 left-0   ' size={70} />
  <HiOutlineArrowLeftOnRectangle className='absolute bottom-20 left-0   ' size={70} />
  </div>
  <div className="col-span-4 bg-slate-600 ">01<br/><br/><br/></div>
  <div className="col-span-7 bg-gray-800 ">01</div>
  
</div>
  );
}

export default App;
