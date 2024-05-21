// import React, { useEffect } from "react";
// import { Divider } from "antd";
// import AboutCard from "../components/AboutCards";

// const AboutUstext = () => {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//       }, []);

//     return (
//         <div>
//         <div className="flex flex-col items-center p-2">
//             {/* add background image */}
//             <h1 className="text-5xl font-semibold mt-8 mb-6">ABOUT US</h1>
//             <p className="text-2xl mb-10">
//             Agarwal Darak & Associates LLP is a highly esteemed Chartered Accountants firm based in Pune.
//             Our founders, CA Jayesh Agarwal and CA Varun Darak, envisioned a firm that could effectively 
//             tackle complex business challenges with customized and innovative solutions.
//             </p>
//             <p className="text-2xl mb-10">
//             With a comprehensive range of services, including Taxation, Compliance, GST, International 
//             Taxation, Transfer Pricing, Transaction Advisory, Company Law Matters, Representation as 
//             Counsel, Project Financing, Accounts Outsourcing, Audit and Assurance, Business Registrations,
//             Valuations, Mergers and Acquisition, and Corporate, Financial, and Risk Advisory, we cater to 
//             diverse business needs, you are assured of expert guidance in all legal, financial, managerial, 
//             and administrative facets of business.​ 
//             </p>
//             <p className="text-2xl mr-40">
//             As we look forward to a brighter future, 
//             we are even more determined than ever to keep the legacy of faith, cooperation and 
//             unity alive!
//             </p>
//         </div>
//         {/* <div className="flex flex-col items-center p-2">
//         <h1 className="text-5xl font-semibold mt-4 mb-6">Our Vision</h1>
//         <p className="text-2xl">
//         We strive to establish ourselves as a nationally recognized leader in financial and professional 
//         services for high net worth individuals and businesses alike, providing a work environment 
//         where staff can thrive and grow in their careers.
//         </p>
//     </div> */}
//     {/* <div className="flex flex-col items-center p-2">
//         <h1 className="text-5xl font-semibold mt-4 mb-6">Our Mission</h1>
//         <p className="text-2xl">
//         Our mission is to provide our clients with creative solutions that integrate people,processes 
//         and technology to facilitate the achievements of their strategic objectives and growth. 
//         Developing an enduring business relationship between firm team, partners and clients through 
//         trust and loyalty. Create an environment that fosters creative thinking, innovative ideas, 
//         develops skills across diverse disciplines and challenges staff to perform at their highest 
//         levels.
//         </p>
//     </div> */}
//     </div>
//     );
// };

// function AboutUs() {
//     return (
//         <div className="flex flex-col items-center p-10">
//             <Divider>
//                 {/* <TypeWriter /> */}
//             </Divider>
//             <AboutUstext />
//             <AboutCard />
//         </div>
//     );
// }

// export default AboutUs;

import React, { useEffect } from "react";
import { Divider } from "antd";
import AboutCard from "../components/AboutCards";

const AboutUstext = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const justifyStyle = {
        textAlign: 'justify',
    };

    return (
        <div>
            <div className="flex flex-col items-center p-2">
                <h1 className="text-5xl font-semibold mt-8 mb-6">ABOUT US</h1>
                <p className="text-2xl mb-6" style={justifyStyle}>
                    Agarwal Darak & Associates LLP is a highly esteemed Chartered Accountants firm based in Pune.
                    Our founders, CA Jayesh Agarwal and CA Varun Darak, envisioned a firm that could effectively 
                    tackle complex business challenges with customized and innovative solutions.
                </p>
                <p className="text-2xl mb-6" style={justifyStyle}>
                    With a comprehensive range of services, including Taxation, Compliance, GST, International 
                    Taxation, Transfer Pricing, Transaction Advisory, Company Law Matters, Representation as 
                    Counsel, Project Financing, Accounts Outsourcing, Audit and Assurance, Business Registrations,
                    Valuations, Mergers and Acquisition, and Corporate, Financial, and Risk Advisory, we cater to 
                    diverse business needs, you are assured of expert guidance in all legal, financial, managerial, 
                    and administrative facets of business.​ 
                </p>
                <p className="text-2xl mr-40" style={justifyStyle}>
                    As we look forward to a brighter future, 
                    we are even more determined than ever to keep the legacy of faith, cooperation and 
                    unity alive!
                </p>
            </div>
            {/* <div className="flex flex-col items-center p-2">
            <h1 className="text-5xl font-semibold mt-4 mb-6">Our Vision</h1>
            <p className="text-2xl">
            We strive to establish ourselves as a nationally recognized leader in financial and professional 
            services for high net worth individuals and businesses alike, providing a work environment 
            where staff can thrive and grow in their careers.
            </p>
        </div> */}
        {/* <div className="flex flex-col items-center p-2">
            <h1 className="text-5xl font-semibold mt-4 mb-6">Our Mission</h1>
            <p className="text-2xl">
            Our mission is to provide our clients with creative solutions that integrate people,processes 
            and technology to facilitate the achievements of their strategic objectives and growth. 
            Developing an enduring business relationship between firm team, partners and clients through 
            trust and loyalty. Create an environment that fosters creative thinking, innovative ideas, 
            develops skills across diverse disciplines and challenges staff to perform at their highest 
            levels.
            </p>
        </div> */}
        </div>
    );
};

function AboutUs() {
    return (
        <div className="flex flex-col items-center p-10">
            <Divider>
                {/* <TypeWriter /> */}
            </Divider>
            <AboutUstext />
            <AboutCard />
        </div>
    );
}

export default AboutUs;
