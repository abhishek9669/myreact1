import Header from "./Header";

import Addstudent from "./Addstudent";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import About from "./About";

function App() {
  return (
    <div className="">
      <BrowserRouter>
          <Header />
          <Routes>
                <Route path="/" element={<Addstudent/>}/>
                <Route path="/home" element={<About/>}/>
          </Routes>
          

      </BrowserRouter>
    
  
    </div>
  );
}

export default App;
