import { useState } from 'react';
import './App.css';
import Navbar from './componets/Navbar';
import Textarea from './componets/Textarea';
// import About from './componets/About';

function App() {
  const [mode,setMode] = useState("light")
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode('dark')
      document.body.style.backgroundColor = '#072d54';
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="ONE PIECE" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3 my-3">
      <Textarea heading="Enter your text below" mode={mode}/>
      {/* <About/> */}
      </div>
    </>

  );
}

export default App;