import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className='flex items-center justify-between py-4 text-sm mb-5 border-b border-b-gray-400'>
            <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to="/">
                    <li className='py-1'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/doctors">
                    <li className='py-1'>All Doctors</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/about">
                    <li className='py-1'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/contact">
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                {
                    token 
                    ? <div className='flex items-center gap-4 cursor-pointer group relative' onClick={() => setShowMenu(!showMenu)}>
                        <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                        <img className='w-2.5 ' src={assets.dropdown_icon} alt="" />
                        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div  className='flex flex-col gap-4 p-4 bg-stone-100 min-w-48 rounded'>
                                {/* <img className='w-8 rounded-full' src={assets.profile_pic} alt="" /> */}
                                <p onClick={() => navigate('/profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                {/* <img className='w-8 rounded-full' src={assets.profile_pic} alt="" /> */}
                                <p onClick={()=> navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                {/* <img className='w-8 rounded-full' src={assets.profile_pic} alt="" /> */}
                                <p onClick={() => { setToken(false); navigate('/login'); }} className='hover:text-black cursor-pointer'>Logout</p>
                            </div>
                        </div>
                    </div>
                    : <button onClick={() => navigate('/login')} className='bg-primary py-3 px-8 rounded-full text-white hidden md:block'>Create Account</button>
                }
            </div>
        </div>
    )
}

export default Navbar
