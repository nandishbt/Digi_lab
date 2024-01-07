import React from 'react'
import { GoArrowRight} from 'react-icons/go'

const Features_ = () => {
  return (
    <div className=' w-full h-[23rem] flex justify-center items-start relative pt-12'> 
    <div className='w-[36rem] h-[22rem] pt-5' >
        <h1 className='text-4xl font-semiold text-center mb-6'>
            Elevating Card Programs with Cutting Edge Technology
        </h1>
        <h1 className='text-center mb-5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.

        </h1>
        <div className='flex items-center justify-center gap-2 text-purple-950 font-semibold mt-10'>
            <h1 className='text-center '>Compare all pro features</h1>
            <GoArrowRight />
        </div>
    </div></div>
  )
}

export default Features_