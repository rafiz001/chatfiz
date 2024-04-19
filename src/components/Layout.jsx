import './../App.css';
import LeftPanel from './LeftPanel';


function App() {
  return (
    <div className="flex flex-row divide-x divide-black">
      <div className="flex-[1]  bg-slate-600 min-h-[100vh]  flex flex-col justify-between" >
       <LeftPanel/> 
      </div>
      <div className="flex-[5] bg-slate-600 ">Friends<br /><br /><br /></div>
      <div className="flex-[11] bg-gray-800 ">chat history</div>

    </div>
  );
}

export default App;
