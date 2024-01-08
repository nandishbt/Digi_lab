import React from 'react'
import { PiHeadphonesLight } from "react-icons/pi";
import { GoCreditCard } from "react-icons/go";

const Call = () => {
  return (
    <div className='w-1440 h-[364px] pt-[96px] pr-[80px] pb-[96px] pl-[80px] gap-8  flex items-center justify-center' >
        
    <div className='w-1/2'>
        <h1 className='mb-3 text-center text-4xl font-semibold '>Unlock  Limitless Possibilities with Our New Card solutions</h1>
        <div className='flex gap-6 justify-center items-center'>
        <button className='bg-fuchsia-900 rounded-md text-md px-4 py-2 flex items-center gap-2 text-white'>Unlock Your Card <GoCreditCard/></button>
        <button className='bg-zinc-200 rounded-md text-md px-4 py-2 flex items-center gap-2' >Customer Support <PiHeadphonesLight/></button>
        </div>
        


    </div>
    
       

    
   
    </div>
  )
}

export default Call


// width: Fixed (1,440px)
// height: Hug (364px)
// padding: 96px, 80px, 96px, 80px
// gap: 8px
