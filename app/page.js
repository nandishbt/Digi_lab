'use client'
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
import Feature1 from '@/Components/Feature1'
import Smallbox2 from '@/Components/Smallbox2'
import Testimonal from '@/Components/Testimonal'
import Call from '@/Components/Call'
import Footer from '@/Components/Footer'


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
    
    <Feature1 />

    <div className='flex items-center justify-between ml-10 mr-10 mt-20'>
    <Smallbox2  stats="2 Million" heading = "Customers"/>
    <Smallbox2  stats="1K" heading = "Downloads"/>
    <Smallbox2  stats="$73 Million" heading = "Transactions"/>
    <Smallbox2  stats="2.0" heading = "Latest Vesrion"/>
    </div>

    <Testimonal/>
    <Call/>
    <Footer />
    
    
    

    
    </>
  )
}

export default page