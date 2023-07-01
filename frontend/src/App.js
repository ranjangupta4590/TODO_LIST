// import './App.css';
import Input from './component/Input';
import Header from './component/header';

function App() {
  return (
  <>
  <nav className='bg-black h-[4rem] text-white flex justify-between items-center pl-3 pr-3'>
  <div>
      Make your Potetial List
  </div>
  {/* <div>
   theme
  </div> */}
    </nav>
    <div className=" App-header  min-h-full justify-center flex" >
    
      <div className=" pt-10 ">
       <Header/>
       <Input/>
      </div>
    </div>
  </>
  );
}

export default App;
