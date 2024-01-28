import './App.css';
import Navbar from './componets/Navbar';
// import Textarea from './componets/Textarea';
import About from './componets/About';

function App() {
  return (
    <>
      <Navbar title="ONE PIECE" about="AboutUs"/>
      <div className="container my-3 my-3">
      {/* <Textarea heading="Enter your text below"/> */}
      <About/>
      </div>
    </>

  );
}

export default App;
