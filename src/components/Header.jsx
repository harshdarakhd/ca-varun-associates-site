import React from 'react'
import logo from '../assets/download.jpg'

const Header = () => {


  return (
    <div className='flex justify-center items-center mt-5 space-x-5'>
      <img src={logo} className="w-[100px] h-[70px]" alt="logo" />
      <div>
        <h1 className='font-normal font-serif text-6xl'>Varun Associates</h1>
        <h2 className='font-thin font-serif text-2xl ml-2'>Chartered Accountants</h2>
      </div>
    </div>
  )
}

export default Header