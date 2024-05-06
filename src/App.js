import { HashRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "../src/components/Navbar";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import { NavLink } from "react-router-dom";
import ServicesCard from "./components/ServicesCards";
import DirectandIndirectTaxation from "./InfoPages/DirectandIndirectTaxation";
import AuditandAssurance from "./InfoPages/AuditandAssurance";
import ManagementConsultancy from "./InfoPages/TransactionAdvisory";
import TransactionAdvisory from "./InfoPages/TransactionAdvisory";

function App() {
    return (
        <div>
            <Router>
                {/* <Header /> */}
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/services" element={<Services />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/careers" element={<Careers />} />
                    {/* <Route
                        path="/services/Direct and Indirect Taxation"
                        element={<DirectandIndirectTaxation />}
                    />
                    <Route
                        path="/services/Audit and Assurance"
                        element={<AuditandAssurance />}
                    />
                    <Route
                        path="/services/Transaction Advisory"
                        element={<TransactionAdvisory />}
                    /> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
