import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navber";
import Footer from "./components/Footer";
import MainRoutes from "./routes/MainRoutes";

const App =  () => {
  return(
    <>
    <Router>
    <Navbar/>
    <MainRoutes />
    <Footer/>
    </Router>
    </>
  )
}
export default App;
