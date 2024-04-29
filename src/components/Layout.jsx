import './../App.css';
import LeftPanel from './LeftPanel';
import MidPanel from './MidPanel';
import RightPanel from './RightPanel';

function App() {
  return (
    <div className="flex flex-row ">
      <div className="flex-[1]  bg-slate-800 h-[100vh]  flex flex-col justify-between" >
       <LeftPanel/> 
      </div>
      <div className="hidden sm:flex sm:flex-col flex-[6] bg-slate-700 h-[100vh] overflow-y-auto hidden-scroll">
        <MidPanel/>
      </div>
      <div className="flex-[11] bg-gray-600 ">
        <RightPanel/>
      </div>

    </div>
  );
}

export default App;
