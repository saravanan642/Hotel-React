import Header from "./Components/Header";
import { Routes, Route } from 'react-router-dom';

import Mainheader from "./Components/Mainheader";
import Image from "./Components/Image"
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Mainheader />
    <Routes>
       <Route path="/" element ={<Image />} />
       <Route path="/about" element={<About/>} />
    </Routes>
    
      
      
 
    </div>
  );
}

export default App;
