import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                {/* ------------Left Sectio ------------------- */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 leading-5 text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                {/* ------------Center Sectio ------------------- */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='text-gray-600  flex flex-col gap-2'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                {/* ------------Right Section ------------------- */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='text-gray-600 flex flex-col gap-2'>
                        <li>+923-10-260-4311</li>
                        <li>info@company.com</li>
                    </ul>
                </div>

            </div>
            {/* ------------Copy right Sectio ------------------- */}
            <div>
                <hr className=' border-gray-400' />
                <p className='text-center py-5 text-sm'>Copyright © 2025 Medihome. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
