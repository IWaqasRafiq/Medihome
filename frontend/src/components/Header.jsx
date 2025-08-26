import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 '>
            {/* ................left side............... */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 m-auto py-10 md:py-[8vw] md:mb-[-30px]'>
                <p className='text-3xl font-semibold text-white md:text-4xl lg:text-5xl leading-tight md:leading-tight lg:leading-tight '>Book Appointment<br />With Trusted Doctor</p>
                <div className='flex flex-col md:flex-row text-white text-sm font-light items-center gap-3'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                </div>
                <a href="#specialty" className='bg-white text-primary font-semibold px-5 py-3 rounded-lg flex items-center gap-2 hover:scale-105 transition-all duration-300'>
                    Book appointment
                    <img src={assets.arrow_icon} alt="" />
                </a>
            </div>
            {/* ................right side............... */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header
