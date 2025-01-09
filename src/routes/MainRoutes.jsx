import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Dasbord from "../pages/Dashboard/Dashboard"
import NotFound from "../pages/NotFound";


function MainRoutes() {
  return (
    <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/about" element={<About/>}/>
    <Route  path="/contact" element={<Contact/>}/>
    <Route  path="/dasbord" element={<Dasbord/>}/>
    <Route  path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default MainRoutes
