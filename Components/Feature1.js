import React from 'react'
import { BsStars } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineZoomOutMap } from "react-icons/md";




const Feature1 = () => {
  return (
    


    <div className='w-[1440px] h-[32rem]  m-5 flex gap-60 justify-center p-5'>
        <div className='w-[29rem] h - [29rem ] bg-slate-100 '>
            <img  className= "rounded bg-slate-200" src='/Images/mobile.png'/>
        </div>
        <div className='w-[29rem] h - [29rem] bg-slate-100 flex items-center justify-center'>
            {/* <h1 className='text-purple-500 text-xl'><BsStars/></h1> */}
            <div className=' h-1/2 w-4/5 bg-white p-3'>
                <div className='flex justify-between '>
                    <h1 className='text-2xl font-semibold'>Spending</h1>
                    <MdOutlineZoomOutMap />
                    
                </div>
                <div className='font-sans text-xs mb-3 flex items-center gap-1'> <CiCreditCard1/> visa card</div>
                <div className='flex gap-2 mb-2'>
                <h1 className='text-2xl font-semibold' >127.47</h1>
                <h1 className='text-xs font-sans text-slate-600'>USD</h1>
                </div>
                

                
                <h1 className='text-xs mb-4 font-sans text-slate-600' >VS Last Week &emsp;&emsp; Last Purchased (Feb24 19:59 UTC-5)</h1>


                <div>
                <h1 className='text-xs font-serif text-slate-600'>&nbsp;400USD &emsp; &nbsp; &nbsp; &nbsp;&emsp; &nbsp; &nbsp; &nbsp; 1000USD &emsp; &nbsp;&nbsp;&nbsp;&emsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 5000USD</h1>
                <div class="progress" role="progressbar" aria-label="success example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar w-50"></div>
                </div>
                </div>
                


                </div>
                
                
                


            </div>
        </div>
    
  )
}

export default Feature1