import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-10 text-gray-500'>
        ABOUT <span className='text-gray-700 font-medium '>US</span>
      </div>
      <div className='my-10 flex gap-12 flex-col md:flex-row'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col md:w-2/4 text-gray-600 justify-center gap-6 text-sm '>
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-10'>
        <div className='border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer text-gray-600'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer text-gray-600'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer text-gray-600'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About
