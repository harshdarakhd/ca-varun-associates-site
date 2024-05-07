// import React from 'react';
// import HomeLogo from '../assets/Home.jpg';


// const Hometext = () => {
//   return (
//     <div className="max-w-2xl text-white relative pl-4 lg:pl-8 py-8 lg:pl-0 lg:text-left">
//       <h1 className="text-8xl mb-6" style={{ marginTop: '80px' }}>
//       We rise by lifting others
//       </h1>
//       <h1 className="text-4xl mb-6">
//       Striving hard to make a positive impact
//       </h1>
//     </div>
//   );
// };

// function Home() {
//   return (
//     <div style={{ minHeight: '100vh', position: 'relative' }}>
//       <img
//         src={HomeLogo}
//         className="absolute inset-0 w-full h-full object-cover"
//         alt="Home Background"
//         style={{ zIndex: -1 }}
//       />
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <Hometext />
//     </div>
//   );
// }
// export default Home;


import React, { useEffect, useState } from 'react';
import HomeLogo from '../assets/Home.jpg';
import logo from '../assets/download.jpg';
import { BsExclamationTriangle, BsGraphUpArrow } from "react-icons/bs";
import { PiSealCheckBold, PiSubtitlesDuotone } from "react-icons/pi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { MdWhatsapp } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";

const Hometext = () => {
  return (
    <div className="max-w-2xl text-white relative pl-4 lg:pl-8 py-8 lg:pl-0 lg:text-left">
      <h1 className="text-8xl mb-6" style={{ marginTop: '100px' ,fontFamily: 'Times New Roman'}}>
        We rise by lifting others
      </h1>
      <h1 className="text-4xl mb-6" style={{ marginTop : '60px' ,fontFamily: 'Times New Roman'}}>
        Striving hard to make a positive impact
      </h1>
    </div>
  );
};

const HomeInfo = () => {
  return(
    <div className="flex flex-wrap justify-left items-center mt-10 space-x-4 w-full mx-auto">
    {/* <h2 className="text-4xl my-6 text-center"></h2> */}
      <div className="flex flex-wrap justify-center"  style={{ marginTop: '80px' }}>
        <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
          <BsExclamationTriangle style={{fontSize: "80px"}}/>
          <h3 className="text-2xl mb-2"><b>Assessing high risk situations</b></h3>
          <p>A risk mitigation plan is developed after identifying areas at high risk.</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
        <BsExclamationTriangle style={{fontSize: "80px"}}/>
          <h3 className="text-2xl mb-2"><b>Methodology for auditing</b></h3>
          <p>An audit based on risk identification and resolves problem in a timely manner.</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
        <PiSealCheckBold style={{fontSize: "80px"}}/>
          <h3 className="text-2xl mb-2"><b>Resolving complex problems</b></h3>
          <p>A wide range of solutions to complex strategic, tax and operational issues for all sectors including manufacturing, real estate and services as well as for the financial sector.</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
        <AiOutlineFileSearch style={{fontSize: "80px"}}/>
          <h3 className="text-2xl mb-2"><b>Reviews and Recommendations</b></h3>
          <p>Assisting with best practices and accounting & financial reporting challenges, as well as complying with relevant accounting standards.</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
        <BsGraphUpArrow style={{fontSize: "80px"}}/>
          <h3 className="text-2xl mb-2"><b>Thinking in terms of future growth</b></h3>
          <p>Analyzing future growth synergies and suggesting probable expansion areas.</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
        <BsExclamationTriangle style={{fontSize: "80px"}}/>
          <h3 className="text-2xl mb-2"><b>Innovation</b></h3>
          <p>We promote innovative thinking and reward initiatives to explore best practices and develop comprehensive solutions to business challenges.</p>
        </div>
      </div>
      </div>
  )
}

const FooterArea = () => {
  return (
    <div className='bg-black text-white p-3 flex justify-between'>
    <div className="text-white relative lg:pl-8 py-8 lg:text-left">
    <div style={{ marginLeft: '70px' }}>
      <h1 className="text-3xl" style={{ marginTop: '80px' }}>
        ADAL ASSOCIATES LLP
      </h1>
      <h2 className="text-xl mb-4" style={{ marginTop : '10px'}}>
        {/* add copyright symbol */}
        © 2023 ADAL ASSOCIATES LLP
      </h2>
      <div>
      <h2>info@adal.com</h2>
      {/* add a horizontal razor line which will be white in color */}
      <hr style={{ borderTop: '0.25px solid white', width: '80%', marginTop: '20px'}}/>
      {/* add linkedin & whatsapp icon link */}
      <div className="flex mt-4">
        <a href="https://www.linkedin.com/company/agarwal-darak-associates-llp/?originalSubdomain=in" target="_blank">
          <AiFillLinkedin
          className='hover:text-gray-500'
            style={{
              fontSize: "30px",
            }}
          />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://wa.me/919833398833" target="_blank">
          <MdWhatsapp
            className='hover:text-gray-500'
            style={{
              fontSize: "30px",
            }}
          />
        </a>
      </div>
      </div>
    </div>
    </div>
    {/* add a code that will separate the above code output to left and below code to right partition 
    but make sure that both the information are parallel to each other */}
    <div className="text-white relative pl-4 lg:pl-8 py-8 lg:pl-0 lg:text-left">
    <div style={{ marginRight: '90px' }}>
    <h1 className="text-2xl" style={{ marginTop: '80px' }}>
        Pune
      </h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href=' https://maps.app.goo.gl/SCEcBxppkw2TQtGdA?g_st=aw'
          target="_blank">       
          <FaLocationArrow className='hover:text-gray-500' style={{ marginRight: '5px', marginTop: '10px',fontSize: "25px" }}/>
          </a>
          <h2 className="text-xl" style={{ marginTop: '10px' }}>
           : UG 05, Raviraj CRU,
          </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2 className="text-xl">
          Bibwewadi - Kondhawa Rd.,
          </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2 className="text-xl">
           Pune - 411037
          </h2>
          </div>
      </div>
      </div>
    </div>
    
  )
}



function Home() {
  // const [refreshed, setRefreshed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <div>
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <img
        src={HomeLogo}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Home Background"
        style={{ zIndex: -1 }}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Hometext />
    </div>
    <div className="flex flex-col items-center" style={{ marginTop: '80px' }}>
        <h1 className="mt-10 md:text-7xl 2xl">We Deliver What We Promise</h1>
        <HomeInfo />
    </div>
    <FooterArea />

    {/* add a button which will redirect to Contact us page */}
    {/* <div className="flex justify-center">
      <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-20 mb-20"
      onClick={() => window.location.href='ca-varun-associates-site#/contact'}
      >
        Get In Touch
      </button>
      </div> */}
    </div>

  );
}

export default Home;
