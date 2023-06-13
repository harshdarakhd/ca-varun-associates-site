import { HashRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "../src/components/Navbar"
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import Services from "./pages/Services";
import { NavLink } from 'react-router-dom';
import ServicesCard from './components/ServicesCards';
import DirectandIndirectTaxation from './InfoPages/DirectandIndirectTaxation';
import AuditandAssurance from './InfoPages/AuditandAssurance';
import ManagementConsultancy from './InfoPages/ManagementConsultancy';


function App() {

  return (
    <div>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route path='/Tax' element={<DirectandIndirectTaxation />} />
          <Route path='/audit' element={<AuditandAssurance />} />
          <Route path='/management' element={<ManagementConsultancy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
