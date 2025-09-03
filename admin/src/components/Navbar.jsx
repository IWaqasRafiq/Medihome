import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AdminContext } from '../context/AdminContext'

const Navbar = () => {

    const { adminToken, setAdminToken } = useContext(AdminContext)
    const navigate = useNavigate();

    const logout = () => {
        adminToken && setAdminToken('');
        adminToken && localStorage.removeItem('adminToken');
        navigate('/');
    }

    return (
        <div className='flex items-center bg-white justify-between py-5 px-9 text-sm border-b border-b-gray-400'>
            <div className='flex flex-row items-center gap-4'>
                <img className='w-44 cursor-pointer' src={assets.admin_logo} alt="" />
                <p className='border border-gray-400 rounded-full px-2'>{adminToken ? 'Admin' : 'Doctor'}</p>
            </div>
            <div className='flex items-center gap-4'>
                <button onClick={logout} className='bg-primary py-3 px-8 rounded-full text-white hidden md:block'>Logout</button>
            </div>
        </div>
    )
}

export default Navbar
