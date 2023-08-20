import Navbar from "./components/Navbar/navbar.jsx";
import About from "./components/About/about.jsx";
import Volunteer from "./components/Volunteer/volunteer.jsx";
import Organizations from "./components/Organizations/organizations.jsx";
import Support from "./components/Support/support.jsx";
import Footer from "./components/Footer/footer.jsx";
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
