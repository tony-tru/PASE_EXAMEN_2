import Naveg from "./navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboUt from "./about";
//import Image from 'react-bootstrap/Image'
import App2 from "./tables/App2";
import App from "./tables/App";
import Home from "./home";
import EditUserForm from "./forms/EditUserForm";
import EditUserForm2 from "./forms/EditUserForm2";
  const InicioFrame = ()=>{
    return(
      <BrowserRouter>
      <Naveg/>

      <br></br> <br></br> <br></br>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="About" element={<AboUt />} />
            <Route path="App" element={<App />} />
            <Route path="App2" element={<App2 />} />
            <Route path="EditUserForm/:id" element={<EditUserForm />} />
            <Route path="EditUserForm2/:id" element={<EditUserForm2 />} />

      </Routes>
    </BrowserRouter>
    
    )
  }
export default InicioFrame;




