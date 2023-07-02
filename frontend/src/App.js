// import './App.css';
import Input from './component/Input';
import Header from './component/header';

function App() {
  return (
  <div className='text-center min-h-[100vh] flex flex-col'>
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
    <div></div>
    <div className='mt-auto'>
        <footer className="bg-black pt-2 pb-3">
        <div className=" text-center text-white ">
            <p className="text-sm md:text-center">
              Copyright<sup className="text-base font-bold">&copy;</sup> 2023 All
              Reserved Rights{" "}
              <span className="font-semibold">Gupta Developers</span>
            </p>
          </div>
        </footer>
      </div>
  </div>
  );
}

export default App;
