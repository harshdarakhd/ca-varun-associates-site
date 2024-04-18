import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    function linkClasses(path) {
        const isActive = location.pathname === path;
        return `rounded-full px-3 py-3 ${
            isActive ? "bg-teal-600 text-white" : "bg-gray-200"
        } hover:bg-teal-600 hover:text-white`;
    }

    return (
        // <div className="flex">
        //   <ul className="flex justify-between w-full mx-auto">
        //     <li className='sm:text-sm text-center'>
        //       <Link to="/" className={linkClasses('/')}>
        //         Home
        //       </Link>
        //     </li>
        //     <li className='sm:text-sm text-center'>
        //       <Link to="/services" className={linkClasses('/services')}>
        //         Our Services
        //       </Link>
        //     </li>
        //     <li className='sm:text-sm text-center'>
        //       <Link to="/about" className={linkClasses('/about')}>
        //         About Us
        //       </Link>
        //     </li>
        //     <li className='sm:text-sm text-center'>
        //       <Link to="/contact" className={linkClasses('/contact')}>
        //         Contact Us
        //       </Link>
        //     </li>
        //   </ul>
        // </div>
        <div className="bg-[#D2E9E9] p-5">
            <ul className="flex justify-center space-x-7">
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
                    <Link to="/contact" className={linkClasses("/contact")}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
