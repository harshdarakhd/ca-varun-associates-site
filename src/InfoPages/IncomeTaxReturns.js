// import React from 'react';
// import logo from '../assets/ServicesImages/IncomeTaxReturn.jpg';
// function IncomeTaxReturns() {
//   return (
//     <div className="flex justify-between items-start py-8">
//       <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
//         <h1 className="mt-40 text-5xl mb-10">
//           <b>DIRECT TAXATION</b>
//         </h1>
//         <div className='mb-10'>
//           <div className='mb-8 text-3xl'>
//             Explore Direct Taxation Services
//           </div>
//           <ul className="list-disc pl-6 mb-10 ml-10">
//             <li>Corporate Tax Advisory</li>
//             <li>Income Tax Return Filings</li>
//             <li>Handling Assessment under Income Tax</li>
//             <li>Lower Deduction Certificate</li>
//             <li>Trust advisory & 80G / 12A Registration</li>
//             <li>TDS and TCS Return Filings</li>
//           </ul>
//         </div>
//       </div>
//       <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-40 mr-10 text-5xl">
//         <img src={logo} className="w-[90%] rounded-md mt-2 lg:mt-0 lg:ml-8" alt="Direct Taxation" />
//       </div>
//     </div>
//   );
// }

// export default IncomeTaxReturns;




import React from 'react';
import logo from '../assets/ServicesImages/IncomeTaxReturn.jpg';

function IncomeTaxReturns() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start py-8">
      <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
        <h1 className="mt-40 lg:mt-40 text-5xl mb-10 text-center lg:text-left">
          <b>Income Tax Returns</b>
        </h1>
        <div className="mb-10">
          {/* <div className="mb-8 text-3xl text-center lg:text-left">
            Explore Direct Taxation Services
          </div> */}
          <ul className="list-disc pl-6 mb-10 ml-4 lg:ml-10 text-left   ">
            <li>Salary income less than 50lakhs - Resident</li>
            <li>Salary income more than 50lakhs - Resident</li>
            <li>Futures and options income - Resident</li>
            <li>Income from crypto transactions - Resident</li>
            <li>Non-resident earning income from all sources except from business and profession and futures and options</li>
            <li>Non-resident earning income from business and profession and futures and options</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-10 lg:mt-40 lg:mr-10 text-5xl">
        <img src={logo} className="w-[90%] rounded-md mt-2 lg:mt-0 lg:ml-8" alt="Direct Taxation" />
      </div>
    </div>
  );
}

export default IncomeTaxReturns;

// import React, { useEffect } from 'react';
// import logo from '../assets/ServicesImages/IncomeTaxReturn.jpg';

// function IncomeTaxReturns() {
//   const handlePayment = (service) => {
//     // Logic for handling payment goes here
//     alert(`Payment initiated for ${service}`);
//   }
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     }, []);
  

  
//   return (
//     <div className="flex flex-col lg:flex-row justify-between items-start py-8">
//       <div className="text-black text-xl lg:pl-8 lg:text-left flex-1">
//         <h1 className="mt-40 lg:mt-40 text-5xl mb-10 text-center lg:text-left">
//           <b>Income Tax Returns</b>
//         </h1>
//         <div className="mb-10">
//           <ul className="list-disc pl-6 mb-10 ml-4 lg:ml-10 text-left">
//             <li className="mb-4">
//               Salary income less than 50lakhs - Resident
//               <div className="mt-2">
//               <button
//                 onClick={() => handlePayment('Salary income less than 50lakhs - Resident')}
//                 className="bg-gray-800 text-white px-2 py-1 rounded text-sm ml-4 sm:mr-10 hover:bg-gray-500"
//               >
//                   Pay Now
//                 </button>
//               </div>
//             </li>
//             <li className="mb-4">
//               Salary income more than 50lakhs - Resident
//               <div className="mt-2">
//               <button
//                 onClick={() => handlePayment('Salary income less than 50lakhs - Resident')}
//                 className="bg-gray-800 text-white px-2 py-1 rounded text-sm ml-4 sm:mr-10 hover:bg-gray-500"
//               >
//                   Pay Now
//                 </button>
//               </div>
//             </li>
//             <li className="mb-4">
//               Futures and options income - Resident
//               <div className="mt-2">
//               <button
//                 onClick={() => handlePayment('Salary income less than 50lakhs - Resident')}
//                 className="bg-gray-800 text-white px-2 py-1 rounded text-sm ml-4 sm:mr-10 hover:bg-gray-500"
//               >
//                   Pay Now
//                 </button>
//               </div>
//             </li>
//             <li className="mb-4">
//               Income from crypto transactions - Resident
//               <div className="mt-2">
//               <button
//                 onClick={() => handlePayment('Salary income less than 50lakhs - Resident')}
//                 className="bg-gray-800 text-white px-2 py-1 rounded text-sm ml-4 sm:mr-10 hover:bg-gray-500"
//               >
//                   Pay Now
//                 </button>
//               </div>
//             </li>
//             <li className="mb-4">
//               Non-resident earning income from all sources except from business and profession and futures and options
//               <div className="mt-2">
//               <button
//                 onClick={() => handlePayment('Salary income less than 50lakhs - Resident')}
//                 className="bg-gray-800 text-white px-2 py-1 rounded text-sm ml-4 sm:mr-10 hover:bg-gray-500"
//               >
//                   Pay Now
//                 </button>
//               </div>
//             </li>
//             <li className="mb-4">
//               Non-resident earning income from business and profession and futures and options
//               <div className="mt-2">
//               <button
//                 onClick={() => handlePayment('Salary income less than 50lakhs - Resident')}
//                 className="bg-gray-800 text-white px-2 py-1 rounded text-sm ml-4 sm:mr-10 hover:bg-gray-500"
//               >
//                   Pay Now
//                 </button>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="flex-1 flex justify-center items-center lg:justify-end lg:items-start mt-10 lg:mt-40 lg:mr-10 text-5xl">
//         <img src={logo} className="w-[90%] rounded-md mt-2 lg:mt-0 lg:ml-8" alt="Direct Taxation" />
//       </div>
//     </div>
//   );
// }

// export default IncomeTaxReturns;
