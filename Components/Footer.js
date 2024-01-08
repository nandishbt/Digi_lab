import React from 'react'
import Card from './Card'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { AiOutlineCopyrightCircle } from "react-icons/ai";


const Footer = () => {
  return (
    <div className='w-1440 h-[720px] pt-[96px] pr-[80px] pb-[96px] pl-[80px] border-t-[1px] gap-8'>
        <div className='w-full flex items-center justify-center mb-48'>
            <div className='w-1/2 text-center text-xl'>
                <h1 className='text-2xl font-semibold mb-2'>ModeUI</h1>
                ModeUI is the comprehensive design system that empowers designers and developers to create cohensive and visually stunning
                user interfaces accross various platforms and devices

            </div>

        </div>
        <div className='flex ml-5 mr-5 justify-between mb-24'>
            <Card Headline="Company" text1="About us" text2="Pricing" text3="Contact us" text4 = "Features" />
            <Card Headline="Product" text1="Figma design system" text2="Ios kit" text3="Android kit" text4 = "Wireframe" />
            <Card Headline="Resources" text1="Templates" text2="Landing Pages" text3="Documentatin" text4 = "Comp Library" />
            <Card Headline="Legal" text1="Privact policy" text2="Terms and Conditions" text3="Disclaimer" text4 = "Affilitate programme" />
            <Card Headline="Support" text1="Help center" text2="Raise ticket" text3="Report" text4 = "Refund" />

        </div>
        <div className='w-full flex justify-center '>
            <div className='w-1/4' >
                <div className='flex items-center justify-center gap-4 mb-4 w-full  text-md'>
                    <FaGithub/>
                    <FaLinkedin/>
                    <FaDiscord/>


                </div>
                <div className='flex gap-2 items-center justify-center'>

                    <AiOutlineCopyrightCircle/>

                    <p className='text-md text-slate-500 font-sans' >ModeUI Inc. All rights reserved</p>

                  </div>
                

                
                </div> 

        </div>



    </div>
  )
}

export default Footer

// width: Hug (1,440px)
// height: Hug (720px)
// padding: 96px, 80px, 40px, 80px
// border: 1px, 0px, 0px, 0px
// gap: 8px
