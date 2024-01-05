
import './App.css';
import Home from "../src/components/home/home.js"
import Addprojects from './components/addprojects/addprojects.js';
import Projects from './components/projects/projects.js';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <Home></Home>
      {/* <Addprojects></Addprojects> */}
    </div>
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={Home}></Route>
    //   {/* <Route path="/addproject" element={Addprojects}></Route>
    //   <Route path="/projects" element={Projects}></Route> */}
    // </Routes>
    // </BrowserRouter>
  );
}

export default App;
