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
import AuditandAssurance from "./InfoPages/Assurance";
import ManagementConsultancy from "./InfoPages/RiskAdvisoryServices";
import TransactionAdvisory from "./InfoPages/RiskAdvisoryServices";
import BusinessRegistrationService from "./InfoPages/BusinessRegistrationService";
import DirectTaxation from "./InfoPages/DirectTaxation";
import InternationalTaxation from "./InfoPages/InternationalTaxation";
import IndirectTaxation from "./InfoPages/IndirectTaxation";
import BusinessSupportServices from "./InfoPages/BusinessSupportServices";
import RiskAdvisoryServices from "./InfoPages/RiskAdvisoryServices";
import Assurance from "./InfoPages/Assurance";

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
                    <Route
                        path="/services/Direct Taxation"
                        element={<DirectTaxation/>}
                    />
                    <Route
                        path="/services/Indirect Taxation"
                        element={<IndirectTaxation />}
                    />
                    <Route
                        path="/services/International Taxation"
                        element={<InternationalTaxation />}
                    />
                    <Route
                        path="/services/Business Support Services"
                        element={<BusinessSupportServices />}
                    />
                    <Route
                        path="/services/Risk Advisory Services"
                        element={<RiskAdvisoryServices />}
                    />
                    <Route
                        path="/services/Business Registration Services"
                        element={<BusinessRegistrationService/>}
                    />
                    <Route
                        path="/services/Assurance Service"
                        element={<Assurance />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
