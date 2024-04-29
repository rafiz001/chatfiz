import Header from './partial/rightPanel/Header';
import ChatHistory from './partial/rightPanel/ChatHistory';
import ChatInput from './partial/rightPanel/ChatInput';
export default function(){
    return (<div className='flex flex-col justify-between h-[100vh]'>
    
        <Header/>
    <ChatHistory/>
   
    <ChatInput/>
    </div>);
}