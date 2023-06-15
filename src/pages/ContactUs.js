// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/contactus.jpg';
// import { MdEmail, MdLocationOn, MdWhatsapp,MdPhoneIphone} from "react-icons/md";


// function ContactUs() {
//   return (
//     <div className="text-center max-w-2xl mx-auto p-10">
//       {/* <Divider>ContactUs</Divider> */}
//       <div className="flex justify-center">
//         <img src={logo} alt="Logo" className="w-60 h-75 object-contain" />
//       </div>
//       <div className="mt-8 flex items-center justify-center">
//         <h1 className="text-xl font-bold mr-2"><MdLocationOn /></h1>
//         <div>
//           <h1 className="text-xl font-bold">Address:</h1>
//           <p>123 Example Street</p>
//           <p>City, State, ZIP Code</p>
//         </div>
//       </div>
//       <div className="mt-4 flex items-center justify-center">
//         <h2 className="text-xl font-bold mr-2"><MdEmail /></h2>
//         <div>
//           <h2 className="text-xl font-bold">Email:</h2>
//           <p>info@gmail.com</p>
//         </div>
//       </div>
//       <div className="mt-4 flex items-center justify-center">
//         <h2 className="text-xl font-bold mr-2"><MdPhoneIphone /></h2>
//         <p className="flex items-center">
//           Contact No: +917350286056
//         </p>
//         </div>
//         <div className="mt-4 flex items-center justify-center">
//         <h2 className="text-xl font-bold mr-2"><MdWhatsapp /></h2>
//         <p className="flex items-center">
//         <a
//             href="https://api.whatsapp.com/send/?phone=917350286056&text=Hello I am interested in your services.Please Reply me back."
//             target="_blank"
//           >Click to chat on WhatsApp</a>
//         </p>
//         </div>
//     </div>
//   );
// }

// export default ContactUs;


import React from "react";
import { Divider, Space } from "antd";
import { MdLocationOn, MdEmail, MdPhoneIphone, MdWhatsapp } from "react-icons/md";
import logo from '../assets/contactus.jpg';;

function ContactUs() {
  return (
    <div className="text-center max-w-2xl mx-auto p-10">
      {/* <Divider>ContactUs</Divider> */}
      <div className="flex justify-center">
        <img src={logo} alt="Logo" className="w-60 h-75 object-contain" />
      </div>
      <div className="mt-8 flex items-center justify-center">
        <h1 className="text-xl font-bold mr-2"><MdLocationOn /></h1>
        <div>
          <h1 className="text-xl font-bold">Address:</h1>
          <p>123 Example Street</p>
          <p>City, State, ZIP Code</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <h2 className="text-xl font-bold mr-2"><MdEmail /></h2>
        <div>
          <b>Email:</b>  info@gmail.com
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <h2 className="text-xl font-bold mr-2"><MdPhoneIphone /></h2>
        <p className="flex items-center">
          <b>Contact No:</b><Space>+917350286056</Space>
        </p>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <h2 className="text-xl font-bold mr-2"><MdWhatsapp /></h2>
        <p className="flex items-center">
          <a
            href="https://api.whatsapp.com/send/?phone=917350286056&text=Hello I am interested in your services.Please Reply me back."
            target="_blank"
            className="text-blue-500 underline"
          >Click to chat on WhatsApp</a>
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
