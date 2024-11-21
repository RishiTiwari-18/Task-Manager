import React from 'react'
import { TbLogout } from "react-icons/tb";

const Header = () => {
  return (
    <div className='flex font-semibold py-5 justify-between items-center'>
        <h1 className="text-lg font-['BasicallyAMono']">Hello, <br />
            <span className="font-['BasicallyAMono']">Rishi Tiwari</span>
        </h1>
        <button className=' bg-[#0e0e0e] flex gap-2 items-center px-3.5 rounded-md py-1.5 text-white'>Log Out <TbLogout className=' scale-105'/> </button>
    </div>
  )
}

export default Header