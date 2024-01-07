import Announcement_bar from '@/Components/Announcement_bar'
import Features_ from '@/Components/Features_'
import Hero from '@/Components/Hero'
import Logo_cloud from '@/Components/Logo_cloud'
import NavBard from '@/Components/NavBard'
import SmallBox from '@/Components/SmallBox'


import { CgGlobeAlt } from "react-icons/cg";
import { FiKey } from "react-icons/fi";
import { CiLock } from "react-icons/ci";


import React from 'react'
import Medium from '@/Components/Medium'


const page = () => {
  
  
  return (
    <>
    <Announcement_bar />
    <NavBard />
    <Hero />
    <Logo_cloud />
    <Features_ />
    <div className='flex items-center justify-center'>
      
      <SmallBox heading="Globally Accepted"  icon={<CgGlobeAlt />}/>
      <SmallBox heading= "Biometric Integrated" icon={<FiKey />}/>
      <SmallBox heading="Fully Secured" icon={<CiLock />} />

    </div>

    <Features_ />
    <Medium />
    
    

    
    </>
  )
}

export default page