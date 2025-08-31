import React, { useState } from 'react'
import { assets } from '../assets/assets';

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: 'Edward Vincent',
    image: assets.profile_pic,
    email: 'richardjameswap@gmail.com',
    phone: '+1  123 456 7890',
    address: {
      line1: '57th Cross, Richmond ',
      line2: 'Circle, Church Road, London',
    },
    gender: 'Male',
    dob: '20 July, 2024',
  });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className='max-w-lg flex flex-col text-sm gap-2'>
      <img className='w-36 rounded' src={userData.image} alt="" />

      {
        isEditing
          ? <input type="text" className='bg-gray-50 text-3xl font-medium mt-4 max-w-60 ' value={userData.name} onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p className='text-3xl font-medium mt-4 text-neutral-800'>{userData.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none' />
      <p className='text-neutral-500 mt-4 underline'>CONTACT INFORMATION</p>
      <div className='text-neutral-700 grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3'>
        <p className='font-medium'>Email id:</p>
        <p className='text-blue-500'>{userData.email}</p>
        <p className='font-medium'>Phone:</p>
        {
          isEditing
            ? <input type="text" className='bg-gray-100 max-w-52' value={userData.phone} onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
            : <p className='text-blue-500'>{userData.phone}</p>
        }
        <p className='font-medium'>Address:</p>
        {
          isEditing
            ? (
              <>
                <input type="text" className='bg-gray-100' value={userData.address.line1} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} />
                <br />
                <input type="text" className='bg-gray-100' value={userData.address.line2} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} />
              </>
            )
            : (
              <p className='text-gray-500'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )
        }
      </div>
      <div>
        <p className='text-neutral-500 mt-4 underline'>BASIC INFORMATION</p>
        <div className='text-neutral-700 grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3'>
          <p className='font-medium'>Gender:</p>
          {
            isEditing
              ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              : <p className='text-gray-400'>{userData.gender}</p>
          }
          <p className='font-medium'>Date of Birth:</p>
          {
            isEditing
              ? <input className='bg-gray-100 max-w-28' type="date" value={userData.dob} onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} />
              : <p className='text-gray-400'>{userData.dob}</p>
          }
        </div>
      </div>
      <div className='mt-10'>

        {
          isEditing
            ? <button className='border-primary border px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEditing(false)}>Save Information</button>
            : <button className='border-primary border px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEditing(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile
