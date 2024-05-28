// import React from "react";
// import { Card } from "antd";
// import varun from "../Images/VarunD.png";
// import jayesh from "../Images/JayeshA.png";
// import krishna from "../Images/Krishna.png";
// import Tilt from "react-parallax-tilt";
// import { Link } from "react-router-dom";
// import {
//     AiFillGithub,
//     AiOutlineTwitter,
//     AiFillInstagram,
//     AiFillLinkedin,
// } from "react-icons/ai";

// const { Meta } = Card;

// const justifyStyle = {
//     textAlign: 'justify',
// };

// const data = [
//     {
//         id: 1,
//         title: "Core of the firm",
//         image: varun,
//         link: "https://www.linkedin.com/in/ca-varun-darak-adal/",
//         description: (
//             <div className="text-black text-center justify-center text-l relative lg:pl-6 py-8 lg:text-left" style={justifyStyle}>
//                 <p>
//                     Completed the Chartered Accountancy course in November 2022.
//                 </p>
//                 <p>
//                     • Served as Partner and Manager at S P Ladda <br />&nbsp;and Associates,
//                     displaying expertise in financial <br />&nbsp;statement preparation, statutory
//                     bank audits,<br />&nbsp;tax advisory, and GST audits.
//                 </p>
//                 <p className="mt-4">
//                     <b>Specialized in:</b>
//                     <div><b>I)</b> Business advisory and support services</div>
//                     <ul className="list-disc pl-6 mb-3 ml-4">
//                         <li>Project report and business plan <br />preparation</li>
//                         <li>Virtual CFO for SME’s</li>
//                         <li>Raising private equity and bank finance</li>
//                     </ul>
//                     <div><b>II)</b>Risk Advisory Services</div>
//                     <ul className="list-disc pl-6 mb-10 ml-4">
//                         <li>Internal control set up and implementation</li>
//                         <li>Documentation of SOP manual</li>
//                     </ul>
//                 </p>
//             </div>
//         ),
//     },
//     {
//         id: 2,
//         title: "Core of the firm",
//         image: jayesh,
//         link: "https://www.linkedin.com/in/jayesh-agarwal-666758220/",
//         description: (
//             <div className="text-black text-center justify-center text-l relative lg:pl-6 py-8 lg:text-left" style={justifyStyle}>
//                 <p>
//                     Successfully completed the CA course in July <br /> 2021 in first attempt.
//                 </p>
//                 <p>
//                     • Associated with Aditya Birla Group for 2 years<br />
//                     • Extensively worked in the field of Direct Tax, &nbsp;&nbsp;International
//                     Tax and Indirect Tax.
//                 </p>
//                 <p className="mt-4">
//                     <br />
//                     <b>Specialized in:</b>
//                     <div><b>I)</b> Direct Tax</div>
//                     <ul className="list-disc pl-6 mb-3 ml-4">
//                         <li>Advisory services</li>
//                         <li>Tax litigation support</li>
//                         <li>Corporate taxation</li>
//                     </ul>
//                     <div><b>II)</b>International Tax</div>
//                     <ul className="list-disc pl-6 mb-10 ml-4">
//                         <li>Structuring of cross border transactions</li>
//                         <li>Expatriate taxation and assignment <br />structuring</li>
//                         <li>Comprehensive analysis of various DTAA <br />and related advice</li>
//                     </ul>
//                 </p>
//             </div>
//         ),
//     },
//     {
//         id: 3,
//         title: "Core of the firm",
//         image: krishna,
//         link: "https://www.linkedin.com/in/ca-krishna-wadkar-35a3a0187/",
//         description: (
//             <div className="text-black text-center justify-center text-l relative lg:pl-6 py-8 lg:text-left" style={justifyStyle}>
//                 <p>
//                     Completed the Chartered Accountancy course <br />in May’23.
//                 </p>
//                 <p>
//                     • Served as Article Assistance at Sarda
//                     Sarda <br />&nbsp;& Co, displaying expertise in statutory Audit, &nbsp;&nbsp;Direct
//                     tax & GST.
//                 </p>
//                 <p className="mt-4">
//                     <br />
//                     <b>Specialized in:</b>
//                     <div><b>I)</b> Statutory Audit</div>
//                     <ul className="list-disc pl-6 mb-3 ml-4">
//                         <li>Banks</li>
//                         <li>Co-Oprative Societies</li>
//                         <li>Corporate Entities</li>
//                     </ul>
//                     <div><b>II)</b>Direct Tax & GST</div>
//                     <ul className="list-disc pl-6 mb-10 ml-4">
//                         <li>Individual Taxation</li>
//                         <li>Income tax Audit</li>
//                         <li>GST Audit</li>
//                     </ul>
//                 </p>
//             </div>
//         ),
//     }
// ];

// function AboutCard() {
//     return (
//         <div className="flex flex-col items-center">
//             <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-20 gap-4 justify-center items-center">
//                 {data.map((item) => (
//                     <div key={item.id} className="md:w-[400px] my-10 border-4 rounded-md bg-[#FFFFFF]">
//                         <h1 className="text-lg text-center font-semibold mb-4">
//                             {item.title}
//                         </h1>
//                         <img
//                             className="w-[60%] rounded-md mt-2 mx-auto"
//                             src={item.image}
//                             alt={item.title}
//                         />
//                         <div className="flex justify-center mt-2">
//                             <Link to={item.link} target="_blank">
//                                 <AiFillLinkedin
//                                     className="hover:text-gray-500"
//                                     style={{
//                                         fontSize: "30px",
//                                     }}
//                                 />
//                             </Link>
//                         </div>
//                         <div className="mt-4 mr-6 font-sans text-center justify-center">
//                             {item.description}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>

//     );
// }

// export default AboutCard;


import React from "react";
import { Card } from "antd";
import varun from "../Images/VarunD.png";
import jayesh from "../Images/JayeshA.png";
import krishna from "../Images/Krishna.png";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";

const { Meta } = Card;

const justifyStyle = {
    textAlign: 'justify',
};

const data = [
    {
        id: 1,
        // title: "CA VARUN DARAK",
        image: varun,
        name: "CA VARUN DARAK",
        link: "https://www.linkedin.com/in/ca-varun-darak-adal/",
        description: (
            <div className="text-black text-center justify-center text-l relative lg:pl-6 py-8 lg:text-left" style={justifyStyle}>
                <p>
                    Successfully completed the CA course in November 2022.
                </p>
                <p>
                    Served as Partner and Manager at S P Ladda and Associates, displaying expertise in financial statement preparation, statutory bank audits, tax advisory, and GST audits.
                </p>
                <p className="mt-4">
                    <b>Specialized in:</b>
                    <div><b>I)</b> Business advisory and support services</div>
                    <ul className="list-disc pl-6 mb-3 ml-4">
                        <li>Project report and business plan preparation</li>
                        <li>Virtual CFO for SME’s</li>
                        <li>Raising private equity and bank finance</li>
                    </ul>
                    <div><b>II)</b> Risk Advisory Services</div>
                    <ul className="list-disc pl-6 mb-10 ml-4">
                        <li>Internal control set up and implementation</li>
                        <li>Documentation of SOP manual</li>
                    </ul>
                </p>
            </div>
        ),
    },
    {
        id: 2,
        // title: "CA JAYESH AGARWAL",
        image: jayesh,
        name: "CA JAYESH AGARWAL",
        link: "https://www.linkedin.com/in/jayesh-agarwal-666758220/",
        description: (
            <div className="text-black text-center justify-center text-l relative lg:pl-6 py-8 lg:text-left" style={justifyStyle}>
                <p>
                    Successfully completed the CA course in July 2021 in first attempt.
                </p>
                <p>
                    Associated with Aditya Birla Group for 2 years. Extensively worked in the field of Direct Tax, International Tax and Indirect Tax.
                </p>
                <p className="mt-4">
                    <b>Specialized in:</b>
                    <div><b>I)</b> Direct Tax</div>
                    <ul className="list-disc pl-6 mb-3 ml-4">
                        <li>Advisory services</li>
                        <li>Tax litigation support</li>
                        <li>Corporate taxation</li>
                    </ul>
                    <div><b>II)</b> International Tax</div>
                    <ul className="list-disc pl-6 mb-10 ml-4">
                        <li>Structuring of cross border transactions</li>
                        <li>Expatriate taxation and assignment structuring</li>
                        <li>Comprehensive analysis of various DTAA and related advice</li>
                    </ul>
                </p>
            </div>
        ),
    },
    {
        id: 3,
        // title: "CA KRISHNA WADKAR",
        image: krishna,
        name: "CA KRISHNA WADKAR",
        link: "https://www.linkedin.com/in/ca-krishna-wadkar-35a3a0187/",
        description: (
            <div className="text-black text-center justify-center text-l relative lg:pl-6 py-8 lg:text-left" style={justifyStyle}>
                <p>
                   Successfully completed the CA course in May 2023.
                </p>
                <p>
                    Served as Article Assistance at Sarda Sarda & Co, displaying expertise in statutory Audit, Direct tax & GST.
                </p>
                <p className="mt-4">
                    <b>Specialized in:</b>
                    <div><b>I)</b> Statutory Audit</div>
                    <ul className="list-disc pl-6 mb-3 ml-4">
                        <li>Banks</li>
                        <li>Co-Oprative Societies</li>
                        <li>Corporate Entities</li>
                    </ul>
                    <div><b>II)</b> Direct Tax & GST</div>
                    <ul className="list-disc pl-6 mb-10 ml-4">
                        <li>Individual Taxation</li>
                        <li>Income tax Audit</li>
                        <li>GST Audit</li>
                    </ul>
                </p>
            </div>
        ),
    }
];

function AboutCard() {
    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-4 justify-center items-stretch">
                {data.map((item) => (
                    <div key={item.id} className="flex flex-col md:w-[400px] my-10 border-4 rounded-md bg-[#FFFFFF] p-4">
                        <h1 className="text-lg text-center font-semibold mb-4">
                            {item.title}
                        </h1>
                        <img
                            className="w-[60%] rounded-md mt-2 mx-auto"
                            src={item.image}
                            alt={item.title}
                        />
                        <div className="flex justify-center mt-2">
                            <h2 className="text-lg font-semibold">{item.name}</h2>
                        </div>
                        <div className="flex justify-center mt-2">
                            <Link to={item.link} target="_blank">
                                <AiFillLinkedin
                                    className="hover:text-gray-500"
                                    style={{
                                        fontSize: "30px",
                                    }}
                                />
                            </Link>
                        </div>
                        <div className="font-sans text-center justify-center flex-grow p-2" style={justifyStyle}>
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutCard;


// maincode

// import React from "react";
// import { Card } from "antd";
// import varun from "../Images/VarunD.png";
// import jayesh from "../Images/JayeshA.png";
// import krishna from "../Images/Krishna.png";
// import Tilt from "react-parallax-tilt";
// import { Link } from "react-router-dom";
// import {
//     AiFillGithub,
//     AiOutlineTwitter,
//     AiFillInstagram,
//     AiFillLinkedin,
// } from "react-icons/ai";

// const { Meta } = Card;

// const data = [
//     {
//         id: 1,
//         title: "Core of the firm",
//         image: varun,
//         link: "https://www.linkedin.com/in/ca-varun-darak-adal/",
//         description: (
//             <div className="text-black text-l relative lg:pl-6 py-8 lg:text-left">
//                 <p>
//                     Completed the Chartered Accountancy course in November 2022.
//                 </p>
//                 <p>
//                 • Served as Partner and Manager at S P Ladda <br/>&nbsp;and Associates,
//                     displaying expertise in financial <br/>&nbsp;statement preparation, statutory
//                     bank audits,<br/>&nbsp;tax advisory, and GST audits.
//                 </p>
//                 <p className="mt-4">
//                     <b>Specialized in:</b>
//                      <div><b>I)</b> Business advisory and support services</div>
//                         <ul className="list-disc pl-6 mb-3 ml-4">
//                             <li>Project report and business plan <br/>preparation</li>
//                             <li>Virtual CFO for SME’s</li>
//                             <li>Raising private equity and bank finance</li>
//                         </ul>
//                     <div><b>II)</b>Risk Advisory Services</div>
//                         <ul className="list-disc pl-6 mb-10 ml-4">
//                             <li>Internal control set up and implementation</li>
//                             <li>Documentation of SOP manual</li>
//                         </ul>
//                 </p>
//             </div>
//         ),
//     },
//     {
//         id: 2,
//         title: "Core of the firm",
//         image: jayesh,
//         link: "https://www.linkedin.com/in/jayesh-agarwal-666758220/",
//         description: (
//             <div className="text-black text-center justify-center text-l relative lg:pl-6 py-8 lg:text-left">
//                 <p>
//                     Successfully completed the CA course in July <br/> 2021 in first attempt.
//                 </p>
//                 <p>
//                 • Associated with Aditya Birla Group for 2 years<br/>
//                 • Extensively worked in the field of Direct Tax, &nbsp;&nbsp;International
//                 Tax and Indirect Tax.
//                 </p>
//                 <p className="mt-4">
//                     <br/>
//                     <b>Specialized in:</b>
//                      <div><b>I)</b> Direct Tax</div>
//                         <ul className="list-disc pl-6 mb-3 ml-4">
//                             <li>Advisory services</li>
//                             <li>Tax litigation support</li>
//                             <li>Corporate taxation</li>
//                         </ul>
//                     <div><b>II)</b>International Tax</div>
//                         <ul className="list-disc pl-6 mb-10 ml-4">
//                             <li>Structuring of cross border transactions</li>
//                             <li>Expatriate taxation and assignment <br/>structuring</li>
//                             <li>Comprehensive analysis of various DTAA <br/>and related advice</li>
//                         </ul>
//                 </p>
//             </div>
//         ),
//     },
//     {
//         id: 3,
//         title: "Core of the firm",
//         image: krishna,
//         link: "https://www.linkedin.com/in/ca-krishna-wadkar-35a3a0187/",
//         description: (
//             <div className="text-black text-center justify-center text-l relative lg:pl-6 py-8 lg:text-left">
//                 <p>
//                 Completed the Chartered Accountancy course <br/>in May’23.
//                 </p>
//                 <p>
//                 • Served as Article Assistance at Sarda
//                 Sarda <br/>&nbsp;&nbsp;& Co, displaying expertise in statutory Audit, &nbsp;&nbsp;Direct
//                 tax & GST.
//                 </p>
//                 <p className="mt-4">
//                     <br/>   
//                     <b>Specialized in:</b>
//                      <div><b>I)</b> Statutory Audit</div>
//                         <ul className="list-disc pl-6 mb-3 ml-4">
//                             <li>Banks</li>
//                             <li>Co-Oprative Societies</li>
//                             <li>Corporate Entities</li>
//                         </ul>
//                     <div><b>II)</b>Direct Tax & GST</div>
//                         <ul className="list-disc pl-6 mb-10 ml-4">
//                             <li>Individual Taxation</li>
//                             <li>Income tax Audit</li>
//                             <li>GST Audit</li>
//                         </ul>
//                 </p>
//             </div>
//         ),
//     }
// ];

// function AboutCard() {
//     return (
//         <div className="flex flex-col items-center">
//         <div className="grid grid-cols-3 mt-20">
//             {data.map((item) => {
//                 return (
//                     <div className="md:w-[400px] my-10 border-4 rounded-md bg-[#FFFFFF]">
//                         <h1 className="text-lg text-center font-semibold mb-4">
//                             {item.title}
//                         </h1>
//                         <img
//                             className="w-[60%] rounded-md mt-2 mx-auto"
//                             src={item.image}
//                         />
//                         <p className="mt-4 font-sans text-center justify-center">
//                         <div className="flex justify-center mt-2">
//                             <Link to={item.link} target="_blank">
//                                 <AiFillLinkedin
//                                     style={{
//                                         fontSize: "30px",
//                                     }}
//                                 />
//                             </Link>
//                         </div>
//                         </p>
//                     <p className="mt-1 font-sans text-center justify-center">
//                     <div className="flex justify-center mt-1">
//                         {item.description}
//                         </div>
//                     </p>
//                     </div>
//                 );
//             })}
//         </div>
//         </div>
//     );
// }

// export default AboutCard;

{
    /* <Card
        title="ABOUT ME"
        hoverable
        style={{
          width: 380,
          margin: 50,
          textAlign: 'center',
          padding: 30,
          borderRadius: 75,
          backgroundColor: '#D2E9E9',
          display: "inline-grid",          
        }}
        cover={<Tilt><img alt="example" src={logo} /></Tilt>}
      >
        <Meta title="Know More" 
        description={
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2px' }}> */
}
{
    /* // <a href="your-link-here">Click Here</a> */
}
{
    /* <Link to='https://www.linkedin.com/in/harsh-d-07a873124' target="_blank"><AiFillLinkedin style={{ fontSize: "30px", justifyContent:'center'}}/></Link>
          </div>
      }
          style={{ marginTop: "20px"}}/>
      </Card>
      <Card
        title="ABOUT ME"
        hoverable
        style={{
          width: 380,
          margin: 50,
          textAlign: 'center',
          padding: 30,
          borderRadius: 75,
          backgroundColor: '#D2E9E9',
          display: "inline-grid",           
        }}
        cover={<Tilt><img alt="example" src={logo} /></Tilt>}
      >
       <Meta title="Know More" 
        description={
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2px' }}> */
}
{
    /* <a href="your-link-here">Click Here</a> */
}
{
    /* <Link to='https://www.linkedin.com/in/harsh-d-07a873124' target="_blank"><AiFillLinkedin style={{ fontSize: "30px", justifyContent:'center'}}/></Link>
          </div>
      }
          style={{ marginTop: "20px" }}/>
      </Card> */
}
{
    /* <Card
        title="ABOUT ME"
        hoverable
        style={{
          width: 380,
          margin: 50,
          textAlign: 'center',
          padding: 30,
          borderRadius: 75,
          backgroundColor: '#D2E9E9',
        }}
        cover={<img alt="example" src={logo} />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card> */
}
// </div>
//   );
// }

// export default AboutCard;
