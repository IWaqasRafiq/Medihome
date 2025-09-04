import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {

    const { adminToken } = useContext(AdminContext)
    return (
        <div className='bg-white min-h-screen border-r'>
            {
                adminToken && (
                    <ul className='text-[#515151] mt-5'>
                        <NavLink className={({ isActive }) =>  `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 ${isActive ? 'bg-[#F2F3Ff] border-r-4 border-primary' : ''}`} to={'/admin-dashboard'}>
                            <img src={assets.home_icon} alt="" />
                            <p className='sm:block hidden'>Dashboard</p>
                        </NavLink>
                        <NavLink className={({ isActive }) =>  `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 ${isActive ? 'bg-[#F2F3Ff] border-r-4 border-primary' : ''}`} to={'/doctors-list'}>
                            <img src={assets.people_icon} alt="" />
                            <p className='sm:block hidden'>Doctors List</p>
                        </NavLink>
                        <NavLink className={({ isActive }) =>  `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 ${isActive ? 'bg-[#F2F3Ff] border-r-4 border-primary' : ''}`} to={'/all-appointments'}>
                            <img src={assets.appointment_icon} alt="" />
                            <p className='sm:block hidden'>All Appointments</p>
                        </NavLink>
                        <NavLink className={({ isActive }) =>  `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 ${isActive ? 'bg-[#F2F3Ff] border-r-4 border-primary' : ''}`} to={'/add-doctor'}>
                            <img src={assets.add_icon} alt="" />
                            <p className='sm:block hidden'>Add Doctor</p>
                        </NavLink>
                    </ul>
                )
            }
        </div>
    )
}

export default Sidebar
