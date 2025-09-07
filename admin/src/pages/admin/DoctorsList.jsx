import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext';

const DoctorsList = () => {

  const { doctors, adminToken, getAllDoctors, changeAvailability } = useContext(AdminContext);


  useEffect(() => {
    if (adminToken) {
      getAllDoctors();
    }
  }, [adminToken]);

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-3xl font-medium'> Doctors List</h1>
      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
        {
          doctors.map((item, index) => (
            <div  key={index} className='border border-blue-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group'>
              <img className='bg-blue-50 group-hover:bg-primary ' src={item.image} alt="" />
              <div className='p-4'>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
                <div className='flex items-center text-center gap-2 text-sm text-green-500 mt-2 cursor-pointer'>
                  <input type="checkbox" onChange={() => changeAvailability(item._id)} checked={item.available} />
                  <p>Available</p>
                </div>
              </div>

            </div>

          ))
        }
      </div>
    </div>
  )
}

export default DoctorsList
