import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';
import { MdWhatsapp } from 'react-icons/md';
import { Link } from 'react-router-dom';



// const FooterArea = () => {
//     return (
//       <div className="flex flex-col">
//         <div className="bg-gray-900 text-white p-3 grid grid-cols-1 lg:grid-cols-3">
//           {/* Left Section */}
//           <div className="text-white relative py-8 lg:pl-8 flex flex-col justify-start items-start">
//             <h1 className="text-3xl lg:mt-8">
//               Agarwal Darak & Associates LLP
//             </h1>
//             <h2 className="text-xl mb-4 mt-2">
//               © 2023 ADAL
//             </h2>
//             <h2>
//               <a href="mailto:info@adal.com" className="hover:text-blue-500">
//                 info@adal.com
//               </a>
//             </h2>
//             <div className="flex mt-4 items-center">
//               <a
//                 href="https://www.linkedin.com/company/agarwal-darak-associates-llp/?originalSubdomain=in"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-500 mr-4"
//               >
//                 <AiFillLinkedin style={{ fontSize: '30px' }} />
//               </a>
//               <a
//                 href="https://api.whatsapp.com/send/?phone=919028330031&text=Hello wanted to connect with you."
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-500"
//               >
//                 <MdWhatsapp style={{ fontSize: '30px' }} />
//               </a>
//             </div>
//           </div>
  
//           {/* Center Section with Vertical Line */}
//           <div className="relative flex flex-col items-center justify-start lg:flex-row lg:items-start lg:mt-8">
//             <div className="hidden lg:block lg:border-l lg:border-white mx-4" style={{ height: '100%' }}></div>
//             <div className="lg:hidden w-full border-t border-white mt-4 mb-4"></div>
//             <div className="lg:text-left text-left">
//             <div className="text-white relative flex flex-col justify-start items-start">
//               <h1 className="text-3xl lg:mt-8">
//                 Precision Tax Advisors
//               </h1>
//               <h2 className="text-xl mb-4 mt-2">
//                 Tax Planners and Consultants
//               </h2>
//               </div>
//             </div>
//             <div className="lg:hidden w-full border-t border-white mt-4 mb-4"></div>
//           </div>
  
//           {/* Right Section */}
//           <div className="text-white relative py-8 lg:pl-4 flex flex-col justify-start items-start">
//             <div>
//               <h1 className="text-2xl lg:mt-8">
//                 Office Address
//               </h1>
//               <div className="hover:text-blue-500 mt-2">
//                 <div className="flex items-center mt-2">
//                   <a href="https://g.co/kgs/BzkeZe8" target="_blank" rel="noopener noreferrer">
//                     <FaLocationArrow className="hover:text-blue-500 mr-2" style={{ fontSize: '25px' }} />
//                   </a>
//                   <h2 className="text-xl">
//                     <a href="https://g.co/kgs/BzkeZe8" target="_blank">: UG 05, Raviraj CRU,</a>
//                   </h2>
//                 </div>
//                 <div className="flex items-center">
//                   <h2 className="text-xl">
//                     <a href="https://g.co/kgs/BzkeZe8" target="_blank">Bibwewadi - Kondhawa Rd.,</a>
//                   </h2>
//                 </div>
//                 <div className="flex items-center">
//                   <h2 className="text-xl">
//                     <a href="https://g.co/kgs/BzkeZe8" target="_blank">Pune - 411037</a>
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
// export default FooterArea;


// const FooterArea = () => {
//   return (
//     // <div className="flex flex-col ">
//     //   <div className='bg-gray-900 text-white p-3 flex justify-between'>
//     //     <div className="text-white relative lg:pl-8 py-8 lg:text-left">
//     //       <div style={{ marginLeft: '70px' }}>
//     //         <h1 className="text-3xl" style={{ marginTop: '80px' }}>
//     //           Agarwal Darak & Associates LLP
//     //         </h1>
//     //         <h2 className="text-xl mb-4" style={{ marginTop: '10px' }}>
//     //           {/* add copyright symbol */}
//     //           © 2023 ADAL
//     //         </h2>
//     //         <div>
//     //           <h2><a href="mailto:info@adal.com" className='hover:text-blue-500'>
//     //             info@adal.com</a></h2>
//     //           {/* add a horizontal razor line which will be white in color */}
//     //           <hr style={{ borderTop: '0.25px solid white', width: '80%', marginTop: '20px' }} />
//     //           {/* add linkedin & whatsapp icon link */}
//     //           <div className="flex mt-4">
//     //             <a href="https://www.linkedin.com/company/agarwal-darak-associates-llp/?originalSubdomain=in" target="_blank">
//     //               <AiFillLinkedin
//     //                 className='hover:text-gray-500'
//     //                 style={{
//     //                   fontSize: "30px",
//     //                 }}
//     //               />
//     //             </a>
//     //             &nbsp;&nbsp;&nbsp;&nbsp;
//     //             <a href="https://api.whatsapp.com/send/?phone=919028330031&text=Hello wanted to connect with you." target="_blank">
//     //               <MdWhatsapp
//     //                 className='hover:text-gray-500'
//     //                 style={{
//     //                   fontSize: "30px",
//     //                 }}
//     //               />
//     //             </a>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //     <div className="text-white relative pl-4 lg:pl-8 py-8 lg:pl-0 lg:text-left">
//     //       <div style={{ marginRight: '90px' }}>
//     //         <h1 className="text-2xl" style={{ marginTop: '80px' }}>
//     //           Office Address
//     //         </h1>
//     //         <div className='hover:text-blue-500'>
//     //           <div style={{ display: 'flex', alignItems: 'center' }}>
//     //             <a href='https://g.co/kgs/qx9HNzw'
//     //               target="_blank">
//     //               <FaLocationArrow className='hover:text-blue-500' style={{ marginRight: '5px', marginTop: '10px', fontSize: "25px" }} />
//     //             </a>
//     //             <h2 className="text-xl" style={{ marginTop: '10px' }}>
//     //               <a href='https://g.co/kgs/qx9HNzw'>
//     //                 : UG 05, Raviraj CRU,
//     //               </a>
//     //             </h2>
//     //           </div>
//     //           <div style={{ display: 'flex', alignItems: 'center' }}>
//     //             <h2 className="text-xl">
//     //               <a href='https://g.co/kgs/qx9HNzw'>
//     //                 Bibwewadi - Kondhawa Rd.,
//     //               </a>
//     //             </h2>
//     //           </div>
//     //           <div style={{ display: 'flex', alignItems: 'center' }}>
//     //             <h2 className="text-xl">
//     //               <a href='https://g.co/kgs/qx9HNzw'>
//     //                 Pune - 411037
//     //               </a>
//     //             </h2>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>

//     <div className="flex flex-col">
//       <div className='bg-gray-900 text-white p-3 grid grid-cols-1 lg:grid-cols-2'>
//         <div className="text-white relative py-8 lg:pl-8 flex justify-center items-center">
//           <div>
//             <h1 className="text-2xl" style={{ marginTop: '60px',marginBottom: '20px' }}>
//               Agarwal Darak & Associates LLP
//             </h1>
//             {/* <h2 className="text-xl mb-4" style={{ marginTop: '10px' }}>
//               © 2023 ADAL
//             </h2> */}
//             <div>
//               <h2>
//                 <a href="mailto:info@adal.com" className="hover:text-blue-500">
//                   info@adal.com
//                 </a>
//               </h2>
//               {/* add a horizontal razor line which will be white in color */}
//               <hr className="border-white border-t mt-4 mb-2" />
//               {/* add linkedin & whatsapp icon link */}
//               <div className="flex mt-2 items-center">
//                 <a href="https://www.linkedin.com/company/agarwal-darak-associates-llp/?originalSubdomain=in" target="_blank">
//                   <AiFillLinkedin
//                     className="hover:text-gray-500 mr-4"
//                     style={{
//                       fontSize: "30px",
//                     }}
//                   />
//                 </a>
//                 <a href="https://api.whatsapp.com/send/?phone=919028330031&text=Hello wanted to connect with you." target="_blank">
//                   <MdWhatsapp
//                     className="hover:text-gray-500"
//                     style={{
//                       fontSize: "30px",
//                     }}
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="text-white relative py-8 lg:pl-4 flex justify-center items-center">
//           <div style={{ marginRight: '90px' }}>
//             <h1 className="text-2xl" style={{ marginTop: '60px' }}>
//               Office Address
//             </h1>
//             <div className="hover:text-blue-500">
//               <div className="flex items-center mt-2">
//                 <a href="https://g.co/kgs/BzkeZe8" target="_blank">
//                   <FaLocationArrow className="hover:text-blue-500 mr-2" style={{ fontSize: "25px" }} />
//                 </a>
//                 <h2 className="text-xl">
//                   <a href="https://g.co/kgs/BzkeZe8" target="_blank">: UG 05, Raviraj CRU,</a>
//                 </h2>
//               </div>
//               <div className="flex items-center">
//                 <h2 className="text-xl">
//                   <a href="https://g.co/kgs/BzkeZe8" target="_blank">Bibwewadi - Kondhawa Rd.,</a>
//                 </h2>
//               </div>
//               <div className="flex items-center">
//                 <h2 className="text-xl">
//                   <a href="https://g.co/kgs/BzkeZe8" target="_blank">Pune - 411037</a>
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>


//   )
// }

// export default FooterArea;



const FooterArea = () => {
  return (
    <div className="flex flex-col">
      <div className='bg-gray-900 text-white p-3 grid grid-cols-1 lg:grid-cols-2'>
        <div className="text-white relative py-8 lg:pl-8 flex justify-center items-center">
          <div>
            <h1 className="text-2xl" style={{ marginTop: '60px', marginBottom: '20px' }}>
              Agarwal Darak & Associates LLP
            </h1>
            <div>
              <h2>
                <a href="mailto:info@adal.com" className="hover:text-blue-500">
                  info@adal.com
                </a>
              </h2>
              <hr className="border-white border-t mt-4 mb-2" />
              <div className="flex mt-2 items-center">
                <a href="https://www.linkedin.com/company/agarwal-darak-associates-llp/?originalSubdomain=in" target="_blank">
                  <AiFillLinkedin
                    className="hover:text-gray-500 mr-4"
                    style={{
                      fontSize: "30px",
                    }}
                  />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=917385287426&text=Hello wanted to connect with you." target="_blank">
                  <MdWhatsapp
                    className="hover:text-gray-500"
                    style={{
                      fontSize: "30px",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white relative py-8 lg:pl-4 flex justify-center items-center">
          <div style={{ marginRight: '90px' }}>
            <h1 className="text-2xl" style={{ marginTop: '60px' }}>
              Office Address
            </h1>
            <div className="hover:text-blue-500">
              <div className="flex items-center mt-2">
                <a href="https://g.co/kgs/BzkeZe8" target="_blank">
                  <FaLocationArrow className="hover:text-blue-500 mr-2" style={{ fontSize: "25px" }} />
                </a>
                <h2 className="text-xl">
                  <a href="https://g.co/kgs/BzkeZe8" target="_blank">: UG 05, Raviraj CRU,</a>
                </h2>
              </div>
              <div className="flex items-center">
                <h2 className="text-xl">
                  <a href="https://g.co/kgs/BzkeZe8" target="_blank">Bibwewadi - Kondhawa Rd.,</a>
                </h2>
              </div>
              <div className="flex items-center">
                <h2 className="text-xl">
                  <a href="https://g.co/kgs/BzkeZe8" target="_blank">Pune - 411037</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white p-3 flex justify-center">
        <p className="text-center text-sm">
          |&nbsp;© 2023 ADAL&nbsp;|&nbsp;
          <Link to="/privacy-policy" className="hover:text-blue-500"
          target='_blank'
          >Privacy Policy</Link>&nbsp;|&nbsp;
          <Link to="/terms-of-use" className="hover:text-blue-500" target='_blank'>Terms of Use</Link>&nbsp;|&nbsp;
          {/* <a href="/refund-policy" className="hover:text-blue-500">Refund Policy</a> */}
        </p>
      </div>
      <div className="bg-gray-900 text-white p-3 text-sm flex justify-end text-right">
        Design & Developed by<Link to='www.linkedin.com/in/harsh-d-07a873124' target="_blank" className="hover:text-blue-500">&nbsp;Harsh Darak</Link>
      </div>
    </div>
  )
}

export default FooterArea;
