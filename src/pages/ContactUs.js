// import { Divider } from 'antd'
// import React from 'react'
// import logo from '../assets/contactus.jpg'

// function ContactUs() {
//   return (
//     <div className="text-center max-w-2xl mx-auto p-10">
//       {/* <Divider>ContactUs</Divider> */}
//       <div className="flex justify-center">
//       <img src={logo} alt="Logo" />
//       </div>
//     </div>
//   )
// }

// export default ContactUs

import { Divider } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/contactus.jpg';
import { MdWhatsapp } from "react-icons/md";

function ContactUs() {
  return (
    <div className="text-center max-w-2xl mx-auto p-10">
      {/* <Divider>ContactUs</Divider> */}
      <div className="flex justify-center">
        <img src={logo} alt="Logo" />
      </div>
      <div className="mt-8">
        <h1 className="text-xl font-bold">Address:</h1>
        <p>123 Example Street</p>
        <p>City, State, ZIP Code</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Email:</h2>
        <p>info@gmail.com</p>
      </div>
      <div className="mt-4 flex items-center">
        <h2 className="text-xl font-bold">Contact Number:</h2>
        <p className="ml-2">
        <Link to='https://api.whatsapp.com/send/?phone=917350286056' target="_blank"><MdWhatsapp/>+917350286056</Link>
          </p>
      </div>
    </div>
  );
}

export default ContactUs;
