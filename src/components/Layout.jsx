import './../App.css';
import LeftPanel from './LeftPanel';
import MidPanel from './MidPanel';


function App() {
  return (
    <div className="flex flex-row ">
      <div className="flex-[1]  bg-slate-800 h-[100vh]  flex flex-col justify-between" >
       <LeftPanel/> 
      </div>
      <div className="flex-[6] bg-slate-700 h-[100vh] overflow-y-auto">
        <MidPanel/>
      </div>
      <div className="flex-[11] bg-gray-600 ">chat history</div>

    </div>
  );
}

export default App;
