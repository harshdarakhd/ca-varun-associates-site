import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import Services from "./pages/Services";


function App() {
  return (
    <div>
      <Router>
      <Header/>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path='/:subpage' element={<Home/>} />
        {/* <Route exact path='/services' element={<Services/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/contact' element={<Contact/>} /> */}
      </Routes>
      {/* <Home/> */}
      </Router>
    </div>
  );
}

export default App;
