// import React from "react";
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

// const data = [
//     {
//         id: 1,
//         title: "ABOUT ME",
//         image: varun,
//         link: "https://www.linkedin.com/in/ca-varun-darak-adal/",
//         // text color black
//         description: (
//             <div className="text-black text-l relative lg:pl-6 py-8 lg:text-left">
//                 <p>
//                     Completed the Chartered Accountancy course in November 2022.
//                 </p>
//                 <p>
//                     Served as Partner and Manager at S P Ladda and Associates,
//                     displaying expertise in financial statement preparation, statutory
//                     bank audits, tax advisory, and GST audits.
//                 </p>
//                 <p>
//                     Specialized in:
//                     <ul>
//                         <li>Business advisory and support services</li>
//                         <ul>
//                             <li>Project report and business plan preparation</li>
//                             <li>Virtual CFO for SME’s</li>
//                             <li>Raising private equity and bank finance</li>
//                         </ul>
//                         <li>Risk Advisory Services</li>
//                         <ul>
//                             <li>Internal control set up and implementation</li>
//                             <li>Documentation of SOP manual</li>
//                         </ul>
//                     </ul>
//                 </p>
//             </div>
//         ),
//     },
//     {
//         id: 2,
//         title: "ABOUT ME",
//         image: jayesh,
//         link: "https://www.linkedin.com/in/jayesh-anand-25818419b/",
//         description: "Add your description here for Jayesh",
//     },
//     {
//         id: 3,
//         title: "ABOUT ME",
//         image: krishna,
//         link: "https://www.linkedin.com/in/krishna-raj-yadav-143b811b7/",
//         description: "Add your description here for Krishna",
//     }
// ];

// function AboutCard() {
//     return (
//         <div className="grid grid-cols-3 gap-4 mt-20">
//             {data.map((item) => {
//                 return (
//                     <div key={item.id} className="flex flex-col items-center">
//                         <h1 className="text-lg text-center font-semibold">
//                             {item.title}
//                         </h1>
//                         <img
//                             className="w-[60%] rounded-md mt-2"
//                             src={item.image}
//                             alt={item.title}
//                         />
//                         <div className="flex justify-center mt-2">
//                             <Link to={item.link} target="_blank">
//                                 <AiFillLinkedin
//                                     style={{
//                                         fontSize: "30px",
//                                     }}
//                                 />
//                             </Link>
//                         </div>
//                         <p className="mt-4 font-sans text-center">{item.description}</p>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }

// export default AboutCard;






import React from "react";
import { Card } from "antd";
import varun from "../Images/VarunD.png";
import jayesh from "../Images/JayeshA.png";
import krishna from "../Images/Krishna.png";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillLinkedin,
} from "react-icons/ai";

const { Meta } = Card;

const data = [
    {
        id: 1,
        title: "Core of the firm",
        image: varun,
        link: "https://www.linkedin.com/in/ca-varun-darak-adal/",
        description: (
            <div className="text-black text-l relative lg:pl-6 py-8 lg:text-left">
                <p>
                    Completed the Chartered Accountancy course in November 2022.
                </p>
                <p>
                • Served as Partner and Manager at S P Ladda <br/>&nbsp;and Associates,
                    displaying expertise in financial <br/>&nbsp;statement preparation, statutory
                    bank audits,<br/>&nbsp;tax advisory, and GST audits.
                </p>
                <p className="mt-4">
                    <b>Specialized in:</b>
                     <div><b>I)</b> Business advisory and support services</div>
                        <ul className="list-disc pl-6 mb-3 ml-4">
                            <li>Project report and business plan <br/>preparation</li>
                            <li>Virtual CFO for SME’s</li>
                            <li>Raising private equity and bank finance</li>
                        </ul>
                    <div><b>II)</b>Risk Advisory Services</div>
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
        title: "Core of the firm",
        image: jayesh,
        link: "https://www.linkedin.com/in/jayesh-agarwal-666758220/",
        description: (
            <div className="text-black text-center justify-center text-l relative lg:pl-6 py-8 lg:text-left">
                <p>
                    Successfully completed the CA course in July <br/> 2021 in first attempt.
                </p>
                <p>
                • Associated with Aditya Birla Group for 2 years<br/>
                • Extensively worked in the field of Direct Tax, &nbsp;&nbsp;International
                Tax and Indirect Tax.
                </p>
                <p className="mt-4">
                    <br/>
                    <b>Specialized in:</b>
                     <div><b>I)</b> Direct Tax</div>
                        <ul className="list-disc pl-6 mb-3 ml-4">
                            <li>Advisory services</li>
                            <li>Tax litigation support</li>
                            <li>Corporate taxation</li>
                        </ul>
                    <div><b>II)</b>International Tax</div>
                        <ul className="list-disc pl-6 mb-10 ml-4">
                            <li>Structuring of cross border transactions</li>
                            <li>Expatriate taxation and assignment <br/>structuring</li>
                            <li>Comprehensive analysis of various DTAA <br/>and related advice</li>
                        </ul>
                </p>
            </div>
        ),
    },
    {
        id: 3,
        title: "Core of the firm",
        image: krishna,
        link: "https://www.linkedin.com/in/ca-krishna-wadkar-35a3a0187/",
        description: (
            <div className="text-black text-center justify-center text-l relative lg:pl-6 py-8 lg:text-left">
                <p>
                Completed the Chartered Accountancy course <br/>in May’23.
                </p>
                <p>
                • Served as Article Assistance at Sarda
                Sarda <br/>&nbsp;&nbsp;& Co, displaying expertise in statutory Audit, &nbsp;&nbsp;Direct
                tax & GST.
                </p>
                <p className="mt-4">
                    <br/>   
                    <b>Specialized in:</b>
                     <div><b>I)</b> Statutory Audit</div>
                        <ul className="list-disc pl-6 mb-3 ml-4">
                            <li>Banks</li>
                            <li>Co-Oprative Societies</li>
                            <li>Corporate Entities</li>
                        </ul>
                    <div><b>II)</b>Direct Tax & GST</div>
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
        <div className="grid grid-cols-3 mt-20">
            {data.map((item) => {
                return (
                    <div className="md:w-[400px] my-10 border-4 rounded-md bg-[#FFFFFF]">
                        <h1 className="text-lg text-center font-semibold mb-4">
                            {item.title}
                        </h1>
                        <img
                            className="w-[60%] rounded-md mt-2 mx-auto"
                            src={item.image}
                        />
                        <p className="mt-4 font-sans text-center justify-center">
                        <div className="flex justify-center mt-2">
                            <Link to={item.link} target="_blank">
                                <AiFillLinkedin
                                    style={{
                                        fontSize: "30px",
                                    }}
                                />
                            </Link>
                        </div>
                        </p>
                    <p className="mt-1 font-sans text-center justify-center">
                    <div className="flex justify-center mt-1">
                        {item.description}
                        </div>
                    </p>
                    </div>
                );
            })}
        </div>
        </div>
    );
}

export default AboutCard;

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
