import React from 'react'

const Smallbox2 = ({stats ,heading}) => {
  return (
    <div className='w-1/4 h-48 pt-4'>
        <div className='flex items-start justify-center mb-1'>
        <div className=' text-3xl  text-fuchsia-950 font-normal'>{stats}</div>
        </div>
        
        
        
        
        <h1 className='font-semibold text-center '>{heading}</h1>
        <h1 className='text-center mt-4'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor</h1>

    </div>
  )
}

export default Smallbox2