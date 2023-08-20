import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Volunteer from "./components/Volunteer/Volunteer.jsx";
import Organizations from "./components/Organizations/Organizations.jsx";
import Support from "./components/Support/Support.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <style jsx global>{
      `body {
             margin: 0px;
             padding: 0px;
         }`
      }</style>

      <Navbar/>
      <Routes>
        <Route path="/econet" element={ <About/> } />
        <Route path="/volunteer" element={ <Volunteer/> } />
        <Route path="/organizations" element={ <Organizations/> } />
        <Route path="/support" element={ <Support/> } />
      </Routes>
      <Footer/>
    </div>

    
  );
}

export default App;
