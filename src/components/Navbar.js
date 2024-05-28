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

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from '../assets/CA_logo.png';

// function Navbar() {
//     const location = useLocation();


//     function linkClasses(path) {
//     const isActive = location.pathname === path;
//     return `${isActive ? "text-white" : "text-gray-500"} hover:text-white text-xl`;
//     }
//     // function linkClasses(path) {
//     //     const isActive = location.pathname === path;
//     //     // instead of rounded full I want to remove the rounded corners and keep text only
//     //     return `rounded-full px-3 py-3 ${
//     //         isActive ? "bg-gray-600 text-white" : "bg-gray-200"
//     //     } hover:bg-gray-600 hover:text-white`;
//     // }
    
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         // <div className="bg-gray-900 p-1 fixed top-0 w-full z-40 font-verdana">
//         //     <div className="flex justify-between items-center">
//         //         <div className="flex items-center">
//         //             <img src={logo} className="w-18 h-16 mr-2" alt="logo" />
//         //             <div className='font-normal font-serif text-3xl md:2xl sm:xl hover:text-gray-500 text-white'>
//         //                 <h1>Agarwal Darak & Associates LLP</h1>
//         //                 <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chartered Accountants</h1>
//         //             </div>
//         //         </div>
//         //         <ul className="flex justify-center space-x-8 mr-4">
//         //             <li className="sm:text-sm text-center">
//         //                 <Link to="/" className={linkClasses("/")}>
//         //                     Home
//         //                 </Link>
//         //             </li>
//         //             <li className="sm:text-sm text-center">
//         //                 <Link to="/services" className={linkClasses("/services")}>
//         //                     Our Services
//         //                 </Link>
//         //             </li>
//         //             <li className="sm:text-sm text-center">
//         //                 <Link to="/about" className={linkClasses("/about")}>
//         //                     About Us
//         //                 </Link>
//         //             </li>
//         //             <li className="sm:text-sm text-center">
//         //                 <Link to="/careers" className={linkClasses("/careers")}>
//         //                     Careers
//         //                 </Link>
//         //             </li>
//         //             <li className="sm:text-sm text-center">
//         //                 <Link to="/contact" className={linkClasses("/contact")}>
//         //                     Contact
//         //                 </Link>
//         //             </li>
//         //         </ul>
//         //     </div>
//         // </div>

//         <div className="bg-gray-900 p-1 fixed top-0 w-full z-40 font-verdana">
//             <div className="flex justify-between items-center flex-wrap">
//                 <div className="flex items-center">
//                     <img src={logo} className="w-14 h-15 mr-2" alt="logo" />
//                     <div className='font-normal font-serif text-lg md:text-2xl lg:text-3xl hover:text-gray-500 text-white'>
//                         <h2>Agarwal Darak & Associates LLP</h2>
//                         <h1 >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chartered Accountants</h1>
//                     </div>
//                 </div>
//                 <button onClick={toggleMenu} className="sm:hidden flex items-center px-3 py-2 rounded text-white border-white hover:text-gray-500 hover:border-gray-500 mx-auto">
//                 <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
//             </button>
//             <ul className={`${isOpen ? 'block' : 'hidden'} sm:flex justify-center space-x-8 w-full sm:w-auto text-center`}>
//                 <li className="text-sm sm:text-sm">
//                     <Link to="/" className={linkClasses("/")}>
//                         Home
//                     </Link>
//                 </li>
//                 <li className="text-sm sm:text-sm">
//                     <Link to="/services" className={linkClasses("/services")}>
//                         Our Services
//                     </Link>
//                 </li>
//                 <li className="text-sm sm:text-sm">
//                     <Link to="/about" className={linkClasses("/about")}>
//                         About Us
//                     </Link>
//                 </li>
//                 <li className="text-sm sm:text-sm">
//                     <Link to="/careers" className={linkClasses("/careers")}>
//                         Careers
//                     </Link>
//                 </li>
//                 <li className="text-sm sm:text-sm">
//                     <Link to="/contact" className={linkClasses("/contact")}>
//                         Contact
//                     </Link>
//                 </li>
//             </ul>
//             </div>
//         </div>
//     );
// }

// export default Navbar;


import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/CA_logo.png';

function Navbar() {
    const location = useLocation();

    function linkClasses(path) {
        const isActive = location.pathname === path;
        return `${isActive ? "text-white" : "text-gray-500"} hover:text-white text-xl`;
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-gray-900 p-1 fixed top-0 w-full z-40 font-verdana">
            <div className="flex justify-between items-center flex-wrap">
                <div className="flex items-center">
                    <img src={logo} className="w-14 h-15 mr-2" alt="logo" />
                    <div className='font-normal font-serif text-lg md:text-2xl lg:text-3xl text-white hover:text-gray-500'>
                        <h2>Agarwal Darak & Associates LLP</h2>
                        <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chartered Accountants</h1>
                    </div>
                </div>
                <button onClick={toggleMenu} className="sm:hidden flex items-center px-3 py-2 rounded text-white border-white hover:text-gray-500 hover:border-gray-500 mx-auto">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
                <ul className={`${isOpen ? 'block' : 'hidden'} sm:flex justify-center space-y-4 sm:space-y-0 sm:space-x-8 w-full sm:w-auto text-center mt-4 sm:mt-0`}>
                    <li className="text-sm sm:text-sm">
                        <Link to="/" className={linkClasses("/")}>
                            Home
                        </Link>
                    </li>
                    <li className="text-sm sm:text-sm">
                        <Link to="/services" className={linkClasses("/services")}>
                            Our Services
                        </Link>
                    </li>
                    <li className="text-sm sm:text-sm">
                        <Link to="/about" className={linkClasses("/about")}>
                            About Us
                        </Link>
                    </li>
                    <li className="text-sm sm:text-sm">
                        <Link to="/careers" className={linkClasses("/careers")}>
                            Careers
                        </Link>
                    </li>
                    <li className="text-sm sm:text-sm">
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
