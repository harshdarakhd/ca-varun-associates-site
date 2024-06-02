// import { Divider } from "antd";
// import React, { useEffect } from "react";
// import ServicesCard from "../components/ServicesCards";
// import Audit from "../InfoPages/Audit";
// import DirectTaxation from "../InfoPages/DirectTaxation";
// import BusinessRegistration from "../InfoPages/BusinessRegistration";
// import BusinessSupport from "../InfoPages/BusinessSupport";
// import InternationalTaxation from "../InfoPages/InternationalTaxation";
// import RiskAdvisoryServices from "../InfoPages/RiskAdvisoryServices";
// import IndirectTaxation from "../InfoPages/IndirectTaxation";

// function Services() {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//       }, []);

//     return (
//         <div style={{ padding: 50, textAlign: "center" }}>
//           <Divider>
//             <h1 className='mt-20' style={{ fontSize: 50, fontWeight: 700 }}>OUR SERVICES</h1>
//           </Divider>
//         <ServicesCard />
//         </div>
//     );
//     //     <div className="flex flex-col items-center">
//     //         <h1 className="mt-20 md:text-5xl 2xl"><b><br/>OUR SERVICES</b></h1>
//     //         <DirectTaxation/>
//     //         <Audit/>
//     //         <IndirectTaxation/>
//     //         <BusinessRegistration/>
//     //         <BusinessSupport/>
//     //         <InternationalTaxation/>
//     //         <RiskAdvisoryServices/>
//     //     </div>
//     // );
// }

// export default Services;



// import { Divider } from "antd";
// import React, { useEffect } from "react";
// import ServicesCard from "../components/ServicesCards";
// import Audit from "../InfoPages/Audit";
// import DirectTaxation from "../InfoPages/DirectTaxation";
// import BusinessRegistration from "../InfoPages/BusinessRegistration";
// import BusinessSupport from "../InfoPages/BusinessSupport";
// import InternationalTaxation from "../InfoPages/InternationalTaxation";
// import RiskAdvisoryServices from "../InfoPages/RiskAdvisoryServices";
// import IndirectTaxation from "../InfoPages/IndirectTaxation";
// import FooterArea from "../components/Footer";

// function Services() {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     return (
//         <div style={{ padding: 20 }}>
//             <Divider>
//                 <h1 className="text-3xl md:text-5xl font-bold mt-20 mb-6">OUR SERVICES</h1>
//             </Divider>
//             <div className="flex flex-col items-center">
//                 <ServicesCard />
//                 {/* <div className="flex flex-col items-center">
//                     <DirectTaxation />
//                     <Audit />
//                     <IndirectTaxation />
//                     <BusinessRegistration />
//                     <BusinessSupport />
//                     <InternationalTaxation />
//                     <RiskAdvisoryServices />
//                 </div> */}
//             </div>
//             <div>
//             {/* <FooterArea /> */}
//             </div>
//         </div>
//     );
// }

// export default Services;

import { Divider } from "antd";
import React, { useEffect } from "react";
import ServicesCard from "../components/ServicesCards";
import FooterArea from "../components/Footer";

function Services() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow" style={{ padding: 20 }}>
                <Divider>
                    <h1 className="text-3xl md:text-5xl font-bold mt-20 mb-6">OUR SERVICES</h1>
                </Divider>
                <div className="flex flex-col items-center">
                    <ServicesCard />
                </div>
            </div>
            <FooterArea />
        </div>
    );
}

export default Services;
