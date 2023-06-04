// import React from 'react'
// import Home from '../pages/Home'
// import Services from '../pages/Services'
// import { Link, useParams } from 'react-router-dom';

// const Navbar = () => {
//   let { subpage } = useParams();
//   console.log(subpage);
//   if (subpage === undefined) {
//     subpage = "home";
//   }
//   return (
//     // <div className='mt-16 ml-16 mb-16 mr-16 inline'>
//     <div className='nav'>
//         <ul className='flex justify-between w-[300px] mx-auto'>
//         <li>
//           <Link to='/home' className='hover:text-blue-500 for_home'>Home</Link>
//         </li>
//         <li>
//           <Link to='/services' className='hover:text-blue-500 for_services'
//           >Services</Link>
//         </li>
//         <li>
//           <Link to='/about' className='hover:text-blue-500 for_about_us' >About</Link>
//         </li>
//         <li>
//           <Link to='/contact' className='hover:text-blue-500 for_contact_us'>Contact</Link>
//         </li>

//             {/* <li className='hover:text-blue-500'>
//               <a onClick={<Home/>} >
//               Home
//               </a>
//               </li>
//             <li className='flex justify-center hover:text-blue-500'>Services</li>
//             <li className='flex justify-center hover:text-blue-500'>About</li>
//             <li className='flex justify-center hover:text-blue-500'>Contact</li> */}
//         </ul>
//     </div>

//   )
// }

// export default Navbar

// // import React from 'react';

// // const Navbar = () => {
// //   return (
// //     <div className='nav'>
// //       <ul className='flex justify-between w-72 mx-auto'>
// //         <li className='flex-shrink-0 hover:text-blue-500'>Home</li>
// //         <li className='flex-shrink-0 flex-grow-1 flex justify-center hover:text-blue-500'>About</li>
// //         <li className='flex-shrink-0 flex-grow-0 hover:text-blue-500'>Contact</li>
// //       </ul>
// //     </div>
// //   );
// // }

// // export default Navbar;


import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs';
import Services from '../pages/Services';
import Home from '../pages/Home';

function Navbar() {
  let { subpage } = useParams();
  console.log(subpage);
  if (subpage === undefined) {
    subpage = "/home";
  }
  function linkClasses(type = null) {
    let classes = "rounded-full px-4 py-2 gap-1 inline-flex list-none hover:text-blue-500 ";
    if (type === subpage) {
      classes += "bg-teal-600 text-white ";
    }
    else {
      classes += "bg-gray-200 "
    }
    return classes;
  }

  return (
    <div className='nav'>
      <ul className='flex justify-between w-[450px] mx-auto'>
        <li>
          <Link to='/home' className={linkClasses("home")}
          // 'hover:text-blue-500 for_home'
          >Home</Link>
        </li>
        <li>
          <Link to='/services' className={linkClasses("services")}
          >Services</Link>
        </li>
        <li>
          <Link to='/about' className={linkClasses("about")}>About</Link>
        </li>
        <li>
          <Link to='/contact' className={linkClasses("contact")}>Contact</Link>
        </li>

        {/* <li className='hover:text-blue-500'>
              <a onClick={<Home/>} >
              Home
              </a>
              </li>
            <li className='flex justify-center hover:text-blue-500'>Services</li>
            <li className='flex justify-center hover:text-blue-500'>About</li>
            <li className='flex justify-center hover:text-blue-500'>Contact</li> */}
      </ul>
      {subpage == "home" && <Home />}
      {subpage == "services" && <Services />}
      {subpage == "about" && <AboutUs />}
      {subpage == "contact" && <ContactUs />}
    </div>

  )
}

export default Navbar