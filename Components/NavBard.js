'use client'
import React from 'react'
import { SlArrowDown } from "react-icons/sl";
import { FiLogIn } from "react-icons/fi";

const NavBard = () => {
  return (
   <div className='container-fluid border-solid border-2 border-slate-400 flex justify-center  items-center '>

<div className='container flex justify-between items-center h-20  '> 
    
    <h1 className='font-bold font-mono text-xl'>Mode UI</h1>
    <div className=' gap-8 flex tracking-wide font-semibold'>
        <button className='flex items-center justify-center gap-3'> Card access <SlArrowDown /></button>
        <button>Banking</button>
        <button>Processing</button>
        <button>About</button>
        <button>Career</button>
        <button>Contact</button>

    </div>
   <button className='flex items-center justify-center bg-slate-200 gap-2 rounded-xl px-4 py-2'>
   <h1>Login </h1> <FiLogIn />
   </button>
    
    </div>
   </div>
  )
}

export default NavBard