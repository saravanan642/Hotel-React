import Header from "./Components/Header";
import { Routes, Route } from 'react-router-dom';

import Mainheader from "./Components/Mainheader";
import Image from "./Components/Image"
import Deatils from "./Components/Deatils";
import PageNotFound from "./Components/PageNotFound";
import Property from "./Components/Property.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Mainheader />
    <Routes>
       <Route path="/" element ={<Image />} />
       <Route path="/Property" element={<Property/>} />
       <Route path="/deatils" element={<Deatils/>} />
       <Route path="*" element={<PageNotFound/>} />
    </Routes>
    
      
      
 
    </div>
  );
}

export default App;
