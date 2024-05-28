// import React from 'react'
// import logo from '../assets/ServicesImages/Audit.jpg'

// function Audit() {
//   return (
//     <div className="flex justify-between items-start py-4 mt-10">
//       <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
//       <h1 className="mt-20 text-5xl mb-10">
//         <b>AUDIT</b></h1>
//       <div className='mb-10'>
//       <div className='mb-8 text-3xl'>
//       Explore Audit
//       </div>
//       <ul className="list-disc pl-6 mb-10 ml-10">
//         <li>Statutory Audits under the Companies Act, IND AS - IFRS</li>
//         <li>Audit under Income Tax Act, 1961</li>
//         <li>GST Audit</li>
//         <li>Bank Audit</li>
//         <li>Certification and attest functions</li>
//         <li>Others</li>
//       </ul>
//       </div>
//       </div>
//     <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-20 mr-10 text-5xl">
//     <img src={logo} className="w-[90%] rounded-md mt-2 lg:mt-0 lg:ml-8" alt="Direct Taxation" />
//   </div>
//   </div>
//   )
// }

// export default Audit

import React from 'react';
import logo from '../assets/ServicesImages/Audit.jpg';

function Audit() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start py-4 mt-10">
      <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
        <h1 className="mt-20 lg:mt-20 text-5xl mb-10 text-center lg:text-left">
          <b>AUDIT</b>
        </h1>
        <div className="mb-10">
          {/* <div className="mb-8 text-3xl text-center lg:text-left">
            Explore Audit
          </div> */}
          <ul className="list-disc pl-6 mb-10 ml-4 lg:ml-10 text-left">
            <li>Statutory Audits under the Companies Act, IND AS - IFRS</li>
            <li>Audit under Income Tax Act, 1961</li>
            <li>GST Audit</li>
            <li>Bank Audit</li>
            <li>Certification and attest functions</li>
            <li>Others</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-10 lg:mt-20 lg:mr-10 text-5xl">
        <img src={logo} className="w-[90%] rounded-md mt-2 lg:mt-0 lg:ml-8" alt="Audit" />
      </div>
    </div>
  );
}

export default Audit;
