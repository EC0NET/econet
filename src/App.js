import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <style jsx global>{`
         body{
             margin: 0px;
             padding: 0px;
         }
        `}</style>
      <Navbar/>
      <About/>
    </div>

    
  );
}

export default App;
