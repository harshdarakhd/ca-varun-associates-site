// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import Header from "./Header";

// function Navbar() {
//     const location = useLocation();

//     function linkClasses(path) {
//         const isActive = location.pathname === path;
//         return `rounded-full px-3 py-3 ${
//             isActive ? "bg-teal-600 text-white" : "bg-gray-200"
//         } hover:bg-teal-600 hover:text-white`;
//     }

//     return (
//         // <div className="flex">
//         //   <ul className="flex justify-between w-full mx-auto">
//         //     <li className='sm:text-sm text-center'>
//         //       <Link to="/" className={linkClasses('/')}>
//         //         Home
//         //       </Link>
//         //     </li>
//         //     <li className='sm:text-sm text-center'>
//         //       <Link to="/services" className={linkClasses('/services')}>
//         //         Our Services
//         //       </Link>
//         //     </li>
//         //     <li className='sm:text-sm text-center'>
//         //       <Link to="/about" className={linkClasses('/about')}>
//         //         About Us
//         //       </Link>
//         //     </li>
//         //     <li className='sm:text-sm text-center'>
//         //       <Link to="/contact" className={linkClasses('/contact')}>
//         //         Contact Us
//         //       </Link>
//         //     </li>
//         //   </ul>
//         // </div>
//         <div className="bg-[#D2E9E9] p-5">
//             <ul className="flex justify-center space-x-8">
//                 <li className="sm:text-sm text-center">
//                     <Link to="/" className={linkClasses("/")}>
//                         Home
//                     </Link>
//                 </li>
//                 <li className="sm:text-sm text-center">
//                     <Link to="/services" className={linkClasses("/services")}>
//                        Our Services
//                     </Link>
//                 </li>
//                 <li className="sm:text-sm text-center">
//                     <Link to="/about" className={linkClasses("/about")}>
//                         About Us
//                     </Link>
//                 </li>
//                 <li className="sm:text-sm text-center">
//                     <Link to="/contact" className={linkClasses("/contact")}>
//                         Contact
//                     </Link>
//                 </li>
//             </ul>
//         </div>
//     );
// }

// export default Navbar;


// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from '../assets/download.jpg';

// function Navbar() {
//     const location = useLocation();

//     function linkClasses(path) {
//         const isActive = location.pathname === path;
//         return `rounded-full px-3 py-3 ${
//             isActive ? "bg-gray-600 text-white" : "bg-gray-200"
//         } hover:bg-gray-600 hover:text-white`;
//     }

//     return (
//         <div className="bg-gradient-to-br from-[#000000] p-5">
//             <div className="flex justify-between items-center">
//                 <div className="flex items-center">
//                     {/* <img src={logo} className="w-13 h-11 mr-2" alt="logo" /> */}
//                     <div>
//                         <h1 className='font-normal font-serif text-4xl md:2xl sm:xl hover:text-blue-500 text-white'>ADAL</h1>
//                         <h1 className='font-thin font-serif text-4xl md:xl sm:lg hover:text-blue-500 mb-0 text-white'>ASSOCIATES</h1>
//                     </div>
//                 </div>
//                 <ul className="flex justify-center space-x-8">
//                     <li className="sm:text-sm text-center">
//                         <Link to="/" className={linkClasses("/")}>
//                             Home
//                         </Link>
//                     </li>
//                     <li className="sm:text-sm text-center">
//                         <Link to="/services" className={linkClasses("/services")}>
//                             Our Services
//                         </Link>
//                     </li>
//                     <li className="sm:text-sm text-center">
//                         <Link to="/about" className={linkClasses("/about")}>
//                             About Us
//                         </Link>
//                     </li>
//                     <li className="sm:text-sm text-center">
//                         <Link to="/contact" className={linkClasses("/contact")}>
//                             Contact
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default Navbar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/CA_logo.png';

function Navbar() {
    const location = useLocation();


    function linkClasses(path) {
    const isActive = location.pathname === path;
    return `${isActive ? "text-white" : "text-gray-600"} hover:text-white text-xl`;
    }
    // function linkClasses(path) {
    //     const isActive = location.pathname === path;
    //     // instead of rounded full I want to remove the rounded corners and keep text only
    //     return `rounded-full px-3 py-3 ${
    //         isActive ? "bg-gray-600 text-white" : "bg-gray-200"
    //     } hover:bg-gray-600 hover:text-white`;
    // }

    return (
        <div className="bg-black p-2 fixed top-0 w-full z-40 font-verdana">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} className="w-20 h-18 mr-2" alt="logo" />
                    <div>
                        <h1 className='font-normal font-serif text-4xl md:2xl sm:xl hover:text-gray-500 text-white'>Agrawal Darak & </h1>
                        <h1 className='font-thin font-serif text-4xl md:xl sm:lg hover:text-gray-500 mb-0 text-white'>Associates LLP</h1>
                    </div>
                </div>
                <ul className="flex justify-center space-x-8 mr-4">
                    <li className="sm:text-sm text-center">
                        <Link to="/" className={linkClasses("/")}>
                            Home
                        </Link>
                    </li>
                    <li className="sm:text-sm text-center">
                        <Link to="/services" className={linkClasses("/services")}>
                            Our Services
                        </Link>
                    </li>
                    <li className="sm:text-sm text-center">
                        <Link to="/about" className={linkClasses("/about")}>
                            About Us
                        </Link>
                    </li>
                    <li className="sm:text-sm text-center">
                        <Link to="/careers" className={linkClasses("/careers")}>
                            Careers
                        </Link>
                    </li>
                    <li className="sm:text-sm text-center">
                        <Link to="/contact" className={linkClasses("/contact")}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;