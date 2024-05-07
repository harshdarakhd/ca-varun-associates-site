import React from "react";
import { Card } from "antd";
import AuditLogo from "../assets/Audit.jpg";
import TaxLogo from "../assets/Tax.png";
import ManagementLogo from "../assets/Management.jpg";
import { Divider } from "antd";
import DirectandIndirectTaxation from "../InfoPages/DirectandIndirectTaxation";

import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const { Meta } = Card;

const data = [
    {
        id: 1,
        title: "DIRECT TAXATION",
        image: ManagementLogo,
    },
    {
        id: 2,
        title: "INDIRECT TAXATION",
        image: ManagementLogo,
    },
    {
        id: 3,
        title: "INTERNATIONAL TAXATION",
        image: ManagementLogo,
    },
    {
        id: 4,
        title: "BUSINESS REGISTRATION SERVICES",
        image: ManagementLogo,
    },
    {
        id: 5,
        title: "BUSINESS SUPPORT SERVICES",
        image: ManagementLogo,
    },
    {
        id: 6,
        title: "RISK ADVISORY SERVICES",
        image: ManagementLogo,
    },
    {
        id : 7,
        title : "ASSURANCE SERVICE",
        image : ManagementLogo
    }
];

function ServicesCard() {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-10">
            {data.map((item) => {
                return (
                    <div className="md:w-[425px] flex flex-col mx-5 my-10 border-2 p-3 bg-[#FFFFFF] ">
                        <h1 className="text-lg text-center font-semibold">{item.title}</h1>
                        <img
                            className="w-[60%] rounded-md mt-2 mx-auto"
                            src={item.image}
                        />
                        {/* <p className="mt-4 font-sans text-center">To Know More</p> */}
                        <Link
                            to={`/services/${item.title}`}
                            className="text-black-500 mt-2 text-center hover:text-gray-500"
                        >
                            Read More
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default ServicesCard;

// import React from 'react';
// import { Card, Divider } from 'antd';
// import AuditLogo from '../assets/Audit.jpg';
// import TaxLogo from '../assets/Tax.png';
// import ManagementLogo from '../assets/Management.jpg';

// import Tilt from "react-parallax-tilt";

// const { Meta } = Card;

// function ServicesCard() {
//   return (
//     <>
//     <Divider>
//         <h1 style={{ fontSize: 50, fontWeight: 700 }}>OUR SERVICES</h1>
//     </Divider>
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <Card
//         title="Audit and Assurance"
//         hoverable
//         style={{
//           width: 380,
//           margin: 50,
//           textAlign: 'center',
//           padding: 30,
//         //   borderRadius: 75,
//           backgroundColor: '#D2E9E9',
//           display: "inline-grid",
//         }}
//         cover={<Tilt><img alt="example" src={AuditLogo} /></Tilt>}
//       >
//         <Meta title="Audit and Assurance"
//         link='google.com'
//         description="www.instagram.com" />
//       </Card>
//       <Card
//         title=
//         {
//             <h1>Direct and Indirect Taxation</h1>
//         }
//         hoverable
//         style={{
//             width: 380,
//             margin: 50,
//             textAlign: 'center',
//             padding: 30,
//             // borderRadius: 75,
//             backgroundColor: '#D2E9E9',
//             display: "inline-grid",
//             }}
//         cover={<img alt="example" src={TaxLogo} />}
//         >
//         <Meta title="Direct and Indirect Taxation" description="www.instagram.com" />
//       </Card>
//       <Card
//         title="Management Consultancy"
//         hoverable
//         style={{
//             width: 380,
//             margin: 50,
//             textAlign: 'center',
//             padding: 30,
//             // borderRadius: 75,
//             backgroundColor: '#D2E9E9',
//             display: "inline-grid",
//             }}
//         cover={<img alt="example" src={ManagementLogo} />}
//         >
//         <Meta title="Management Consultancy" description="www.instagram.com" />
//       </Card>
//     </div>
//     </>
//   );
// }

// export default ServicesCard;

// import React from 'react';
// import { Card, Divider } from 'antd';
// import AuditLogo from '../assets/Audit.jpg';
// import TaxLogo from '../assets/Tax.png';
// import ManagementLogo from '../assets/Management.jpg';

// import Tilt from "react-parallax-tilt";
// import { textAlign } from '@mui/system';

// const { Meta } = Card;

// function ServicesCard() {
//   return (
//     <>
//     <div style={{ textAlign: 'center' }}>
//       <Divider>
//         <h1 style={{ fontSize: 50, fontWeight: 700 }}>OUR SERVICES</h1>
//       </Divider>
//         <Card
//         title={<h1 style={{ fontSize: 24, textAlign:'center'}}>Audit and Assurance</h1>}
//           hoverable
//           style={{
//             width: 380,
//             margin: 50,
//             textAlign: 'center',
//             padding: 30,
//             backgroundColor: '#D2E9E9',
//             display: "inline-grid",
//           }}
//         >
//             <Tilt>
//               <img alt="example" src={AuditLogo} style={{ maxWidth: '100%', maxHeight: '100%' }} />
//             </Tilt>
//           <Meta
//             title="Audit and Assurance"
//             description={<a href="your-link-here">Click here to know more</a>}
//           />
//         </Card>
//         <Card
//           title={<h1 style={{ fontSize: 24, textAlign:'center' }}>Direct and Indirect Taxation</h1>}
//           hoverable
//           style={{
//             width: 380,
//             margin: 50,
//             textAlign: 'center',
//             padding: 30,
//             backgroundColor: '#D2E9E9',
//             display: "inline-grid",
//           }}
//         >
//             <Tilt>
//                 <img alt="example" src={TaxLogo} style={{ maxWidth: '100%', maxHeight: '100%' }} />
//             </Tilt>
//           <Meta
//             title="Direct and Indirect Taxation"
//             description={<a href="your-link-here">Click here to know more</a>}
//           />
//         </Card>
//         <Card
//           title={<h1 style={{ fontSize: 24, textAlign:'center' }}>Management Consultancy</h1>}
//           hoverable
//           style={{
//             width: 380,
//             margin: 50,
//             textAlign: 'center',
//             padding: 30,
//             backgroundColor: '#D2E9E9',
//             display: "inline-grid",
//           }}
//         >
//             <img alt="example" src={ManagementLogo} style={{ maxWidth: '100%', maxHeight: '100%' }} />
//           <Meta
//             title="Management Consultancy"
//             description={<a href="your-link-here">Click here to know more</a>}
//           />
//         </Card>
//         </div>
//     </>
//   );
// }

// export default ServicesCard;
