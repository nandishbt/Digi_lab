'use client'
import React from 'react'






const SmallBox = ({heading,icon}) => {
  return (
    <div className='w-1/4 h-48 pt-4'>
        <div className='flex items-start justify-center mb-4'>
        <div className=' w-12 h-12 rounded-full flex items-center justify-center  bg-fuchsia-100'>
        <div className=' text-2xl  text-fuchsia-950 '>{icon}</div>

        </div>
        </div>
        
        
        
        <h1 className='font-semibold text-center '>{heading}</h1>
        <h1 className='text-center mt-4'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor</h1>

    </div>
  )
}

export default SmallBox