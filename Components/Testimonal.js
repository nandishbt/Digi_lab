import React from 'react'
import { FaStar } from "react-icons/fa";

const Testimonal = () => {
  return (
    <div className='w-1440 h-[620px] gap-8 pt-[96px] pr-[80px] pb-[96px] pl-[80px] '>
      <div className='flex justify-center mb-5'><img src='Images/wise.png'/></div>  
      <div className='w-1/2 ml-80 mb-4'>
        <p className='text-center text-2xl font-normal'>I had the pleasure of experiencing next generation of card solutions with this incredible product.it's refreshing to see such innovation in the financial industry</p>
      </div>
      <div className='flex justify-center mb-4 '><img className='w-32 h-24' src='Images/man.png'/></div> 
      <h1 className='text-center mb-1' >Nick Babich</h1>
      <h1 className='text-center mb-3'>Lead Designer</h1>
      <h1 className='text-yellow-500 flex justify-center'><FaStar/> <FaStar/> <FaStar/> <FaStar/> </h1>
      

      
    </div>
  )
}

export default Testimonal