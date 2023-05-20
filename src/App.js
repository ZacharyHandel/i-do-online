import HeaderBar from "./components/HeaderBar"
import './App.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home"
import {Route, Routes} from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      <HeaderBar />
      <div className="container">
        <Routes>
          <Route path="/i-do-online" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
