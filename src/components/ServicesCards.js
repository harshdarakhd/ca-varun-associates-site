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

function ServicesCard() {
    return (
        <div>
            <Card
                title={<h1 style={{ fontSize: 24 }}>Audit and Assurance</h1>}
                hoverable
                style={{
                    width: 420,
                    height: 510,
                    margin: 50,
                    textAlign: "center",
                    padding: 30,
                    //   borderRadius: 75,
                    backgroundColor: "#D2E9E9",
                    display: "inline-grid",
                }}
                // cover={<Tilt><img alt="example" src={AuditLogo} /></Tilt>}
            >
                <Tilt>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img
                            alt="example"
                            src={AuditLogo}
                            style={{ maxWidth: "100%", maxHeight: "100%" }}
                        />
                    </div>
                </Tilt>
                <Meta
                    title="To Know More"
                    description={
                        <Link to='/audit'>Click Here</Link>
                    }
                    style={{ marginTop: "20px" }}
                />
            </Card>
            <Card
                title={
                    <h1 style={{ fontSize: 24 }}>
                        Direct and Indirect Taxation
                    </h1>
                }
                hoverable
                style={{
                    width: 420,
                    height: 510,
                    margin: 50,
                    textAlign: "center",
                    padding: 30,
                    // borderRadius: 75,
                    backgroundColor: "#D2E9E9",
                    display: "inline-grid",
                }}
                // cover={<Tilt><img alt="example" src={TaxLogo} /></Tilt>}
            >
                <Tilt>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img
                            alt="example"
                            src={TaxLogo}
                            style={{ maxWidth: "100%", maxHeight: "100%" }}
                        />
                    </div>
                </Tilt>
                <Meta
                    title="To Know More"
                    description={
                        // <a href="your-link-here">Click Here</a>
                        <Link to='/Tax'>Click Here</Link>
                    }
                    style={{ marginTop: "20px" }}
                />
            </Card>
            <Card
                title={<b style={{ fontSize: 24 }}>Management Consultancy</b>}
                hoverable
                style={{
                    width: 420,
                    height: 510,    
                    margin: 50,
                    textAlign: "center",
                    padding: 30,
                    // borderRadius: 75,
                    backgroundColor: "#D2E9E9",
                    display: "inline-grid",
                }}
                // cover={<Tilt><img alt="example" src={ManagementLogo} /></Tilt>}
            >
                <Tilt>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img
                            alt="example"
                            src={ManagementLogo}
                            style={{ display: "flex", maxWidth: "100%", maxHeight: "100%" }}
                        />
                    </div>
                </Tilt>
                <Meta
                    title="To Know More"
                    description={
                        // <a href="your-link-here">Click Here</a>
                        <Link to='/management'>Click Here</Link>
                    }
                    style={{ marginTop: "20px" }}
                />
            </Card>
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
