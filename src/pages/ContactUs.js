// import React, { useEffect } from "react";
// import { Divider, Space } from "antd";
// import {
//     MdLocationOn,
//     MdEmail,
//     MdPhoneIphone,
//     MdWhatsapp,
// } from "react-icons/md";
// import logo from "../assets/contact.png";

// function ContactUs() {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//       }, []);

//     return (
//         <div className='text-black p-3 flex justify-between'>
//             {/* <Divider>ContactUs</Divider> */}
//             <div className="text-white relative lg:text-left">
//              <div style={{ marginLeft: '70px' }}></div>
//             </div>
//             <h1 className="text-5xl" style={{ marginTop: '100px' }}>
//             We would love to hear from you.!
//             </h1>
//             <h2 className="text-xl mb-4" style={{ marginTop : '100px'}}>
//                     <MdEmail />
//                     <div>
//                     <b>Email:</b> info@gmail.com
//                     </div>
//                 </h2>
//                 <h2 className="text-xl font-bold mr-2">
//                     <MdPhoneIphone />
//                 </h2>
//                 <p className="flex items-center">
//                     <b>Contact No:</b>
//                         +91 9028330031/+91 7350723755
//                 </p>
//             <div className="mt-6 flex items-center justify-center">
//                 <h2 className="text-xl font-bold mr-2">
//                     <MdWhatsapp />
//                 </h2>
//                 <p className="flex items-center">
//                     <a
//                         href="https://api.whatsapp.com/send/?phone=917350723755&text=Hello I am interested in your services."
//                         target="_blank"
//                         className="hover:text-gray-500"
//                     >
//                         Click to chat on WhatsApp
//                     </a>
//                 </p>
//                 <div className="flex justify-center mt-20" >
//             <div className="mt-8 flex items-center justify-center">
//                 <h1 className="text-xl font-bold m-2 mb-8">
//                     <MdLocationOn />
//                 </h1>
//                 <div className="hover:text-gray-500">
//                 <a href=' https://maps.app.goo.gl/SCEcBxppkw2TQtGdA?g_st=aw' target="_blank">
//                     <b>Address:</b> UG 05, Raviraj CRU, Bibwewadi - Kondhawa Rd.
//                     <br />
//                     Pune, Maharashtra 411037
//                 </a>
//                 </div>
//                 <div className="text-white relative pl-4 lg:pl-8 py-8 lg:pl-0 lg:text-left">
//                     <div style={{ marginRight: '90px' }}></div>
//                 <img
//                     src={logo}
//                     alt="Logo"
//                     className="w-60 h-75 object-contain"
//                 />
//                 </div>
//             </div>
//             </div>
//             </div>
//         </div>
//     );
// }

// export default ContactUs;

import React, { useEffect } from "react";
import { MdLocationOn, MdEmail, MdPhoneIphone, MdWhatsapp } from "react-icons/md";
import logo from "../assets/contact.png";

function ContactUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='text-black p-3 flex justify-between'>
            <div className="text-black relative lg:text-left">
                <h1 className="text-5xl mb-4" style={{marginTop:'150px', marginLeft: '50px'}}>
                    We would love to hear from you.!
                </h1>
                <div style={{ display: 'flex', alignItems: 'center'}}></div>
                <h2 className="text-xl mb-4 flex items-center" style={{marginTop:'30px',marginLeft: '50px'}}>
                    <MdEmail style={{ marginRight: '10px', fontSize: "25px" }}/>
                    <b>Email:</b>&nbsp; info@adal.com
                </h2>
                <h2 className="text-xl mb-4 flex items-center" style={{marginLeft: '50px'}} >
                    <MdPhoneIphone style={{ marginRight: '10px', fontSize: "25px" }}/>
                    <b>Contact No:</b>&nbsp; +91 9028330031 / +91 7350723755
                </h2>
                <h2 className="text-xl mb-4 flex items-center"  style={{marginLeft: '50px'}} >
                    <MdWhatsapp style={{ marginRight: '10px', fontSize: "25px" }}/>
                    <a
                        href="https://api.whatsapp.com/send/?phone=919028330031&text=Hello wanted to connect with you."
                        target="_blank"
                        className="hover:text-gray-500"
                    >
                        Click to chat on WhatsApp
                    </a>
                </h2>
                <a href=' https://maps.app.goo.gl/SCEcBxppkw2TQtGdA?g_st=aw'
                target="_blank">
                <h2 className="text-xl flex items-center" style={{marginLeft: '50px'}} >
                    <MdLocationOn style={{ marginRight: '10px', fontSize: "25px" }}/>
                    <b>Address:</b>&nbsp; &nbsp;<div className='hover:text-gray-500'>UG 05, Raviraj CRU,  
                    </div> 
                </h2>
                <h2 className="text-xl flex items-center" style={{marginLeft: '180px'}} >
                <div className='hover:text-gray-500'>Bibwewadi- Kondhawa Rd,Pune - 411037
                </div>
                </h2>
                </a>
            </div>
            <div className="text-black relative pl-4 lg:pl-8 py-8 lg:pl-0 lg:text-left">
                <img style={{ marginTop: '150px' , marginRight: '100px'}}
                    src={logo}
                    alt="Logo"
                    className="w-65 h-80 object-contain"
                />
            </div>
        </div>
    );
}

export default ContactUs;

