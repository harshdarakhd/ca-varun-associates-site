import React from 'react'
import Home from '../pages/Home'

const Navbar = () => {
  return (
    <div className='mt-16 ml-16 mb-16 mr-16 inline'>
        <ul className='flex justify-between w-[300px] mx-auto'>
          {/* {on click of home i want to show the details i will have in my home.js file} */}
          {/* solution */}
          {/* <li className='hover:text-blue-500' onClick={Home}>Home</li> */}
            <li className='hover:text-blue-500' onClick={Home}>Home</li>
            <li className='hover:text-blue-500'>About</li>
            <li className='hover:text-blue-500'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar