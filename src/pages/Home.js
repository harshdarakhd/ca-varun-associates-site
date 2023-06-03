import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Services from './Services';

function Home() {
  let { subpage } = useParams();
  console.log(subpage);
  if (subpage === undefined) {
    subpage = "home";
  }
  function linkClasses(type = null) {
    let classes = "rounded-full px-4 py-2 gap-1 inline-flex ";
    if (type === subpage) {
      classes += "bg-teal-600 text-white ";
    }
    else{
        classes +="bg-gray-200 "
    }
    return classes;
  }

  return (
    // add this image url https://c4.wallpaperflare.com/wallpaper/138/347/679/motivational-typography-simple-background-wallpaper-preview.jpg
    // solution
    <div className='nav'>
        <ul className='flex justify-between w-[300px] mx-auto'>
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
        {subpage == "home" && <div className="text-center"></div>}
        {subpage == "services" && <Services/>}
        {subpage == "about" && <AboutUs/>}
        {subpage == "contact" && <ContactUs/>}



    </div>

  )
}

export default Home