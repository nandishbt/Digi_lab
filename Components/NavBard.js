import React from 'react'
import { SlArrowDown } from "react-icons/sl";
import { FiLogIn } from "react-icons/fi";

const NavBard = () => {
  return (
   <div className='w-full border-solid border-2 border-slate-400 flex justify-center  items-center '>

<div className='flex justify-between items-center h-20 w-4/5 '> 
    
    <h1 className='font-bold font-mono text-xl'>Mode UI</h1>
    <div className='gap-8 flex tracking-wide font-semibold'>
        <div className='flex items-center justify-center gap-3'> Card access <SlArrowDown /></div>
        <h1>Banking</h1>
        <h1>Processing</h1>
        <h1>About</h1>
        <h1>Career</h1>
        <h1>Contact</h1>

    </div>
   <div className='flex items-center justify-center bg-slate-200 gap-2 rounded-xl px-4 py-2'>
   <h1>Login </h1> <FiLogIn />
   </div>
    
    </div>
   </div>
  )
}

export default NavBard