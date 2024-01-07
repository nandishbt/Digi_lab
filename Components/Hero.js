import React from 'react'
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
   

  return (
    <>
    <div className=' w-full h-[23rem] flex justify-center items-start relative pt-6'> 
    <div className='w-[36rem] h-[22rem] pt-5 bg-fixed bg-center '  style={{ backgroundImage: 'url("https://i0.wp.com/techguruplus.com/wp-content/uploads/2021/10/Graph-Paper-Light-Blue-Lines.jpg?resize=653%2C1024&ssl=1")' }}>
        <h1 className='text-center mb-2 text-fuchsia-900 font-semibold tracking-wide text-xs'>Seamless  experiece</h1>
        <h1 className='text-5xl font-bold text-center mb-6'>
            Unleashing the Next Generation of Card Solutions
        </h1>
        <h1 className='text-center mb-5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.

        </h1>

        <div className='flex justify-center'>
            <button className="bg-fuchsia-900 text-white  px-5 py-2 rounded-xl flex items-center gap-2">Unlock your card  <GoArrowRight /></button>
           
        </div>
          
        
    </div>
   
     </div>
     <h1 className='text-xs text-center mt-4'>No Credit Card Required</h1>
    
    
    </>
  )
}

export default Hero