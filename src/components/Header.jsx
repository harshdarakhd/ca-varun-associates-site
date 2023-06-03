import React from 'react'
import logo from '../assets/download.jpg'

const Header = () => {


  return (
    <div className='flex justify-center items-center mt-10 space-x-5'>
      <img src={logo} className="w-[100px] h-[70px] mb-14" alt="logo" />
      <div>
        <h1 className='font-normal font-serif text-6xl hover:text-blue-500'>Varun Associates</h1>
        <h2 className='font-thin font-serif text-2xl ml-2 hover:text-blue-500 mb-14'>Chartered Accountants</h2>
      </div>
    </div>
  )
}

export default Header