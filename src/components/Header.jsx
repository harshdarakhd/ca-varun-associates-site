import React from 'react'
import logo from '../assets/download.jpg'

const Header = () => {


  return (
    <div className='flex justify-center items-center mt-10 space-x-4 w-full mx-auto'>
      <img src={logo} className="ml-4 w-[100px] h-[80px] md:w-[80px] md:h-[60px] sm:w-[50px] sm:h-[35px] mb-14" alt="logo" />
      <div>
        <h1 className='font-normal font-serif text-5xl md:3xl sm:xl hover:text-blue-500'>Varun Associates</h1>
        <h2 className='font-thin font-serif text-2xl md:xl sm:lg ml-2 hover:text-blue-500 mb-14'>Chartered Accountants</h2>
      </div>
    </div>
  )
}

export default Header