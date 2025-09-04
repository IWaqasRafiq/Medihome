import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const AddDoctor = () => {

    const [docImage, setDocImage] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [experience, setExperience] = useState('1 Year');
    const [degree, setDegree] = useState('');
    const [speciality, setSpeciality] = useState('general Physician');
    const [fees, setFees] = useState('');
    const [about, setAbout] = useState('');
    const [education, setEducation] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');

    return (
        <form className='overflow-x-scroll scroll-smooth'>
            <p className='mt-3 sm:mt-6 mx-4 sm:mx-8  text-xl font-semibold'>Add Doctor</p>
            <div className='flex flex-col  bg-white my-4 sm:my-8 mx-4 sm:mx-8 p-8'>
                <div className='flex items-center gap-4 mb-8'>
                    <label htmlFor='doctor_image'>
                        <img src={docImage ? URL.createObjectURL(docImage) : assets.upload_area} alt="" className='cursor-pointer bg-gray-100 w-20 rounded-full border border-gray-200' />
                    </label>
                    <input onChange={(e)=> setDocImage(e.target.files[0])} type="file" id="doctor_image" hidden />
                    <p className='font-mono text-gray-600'>Upload Doctor <br /> Profile</p>
                </div>
                <div>
                    {/* Doctor Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className='gap-4 flex flex-col'>
                            <div>
                                <label className="block text-md text-gray-500 font-medium mb-1">Doctor name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Name"
                                    className="w-full border rounded-md px-3 py-2 text-sm outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-md text-gray-500 font-medium mb-1">Doctor Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email"
                                    className="w-full border rounded-md px-3 py-2 text-sm outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-md text-gray-500 font-medium mb-1">Doctor Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e)=> setPassword(e.target.value)}
                                    placeholder="Password"
                                    className="w-full border rounded-md px-3 py-2 text-sm outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-md text-gray-500 font-medium mb-1">Experience</label>
                                <select
                                    name="experience"
                                    // value={formData.experience}
                                    // onChange={handleChange}
                                    className="w-full border rounded-md text-gray-500  px-3 py-2 text-sm outline-none"
                                >
                                    <option className='text-gray-600' value="1 year">1 Year</option>
                                    <option className='text-gray-600' value="2 years">2 Years</option>
                                    <option className='text-gray-600' value="2 years">3 Years</option>
                                    <option className='text-gray-600' value="2 years">4 Years</option>
                                    <option className='text-gray-600' value="2 years">5 Years</option>
                                    <option className='text-gray-600' value="5 years">5 Years</option>
                                    <option className='text-gray-600' value="5 years">5+ Years</option>
                                    <option className='text-gray-600' value="5 years">8+ Years</option>
                                    <option className='text-gray-600' value="10+ years">10+ Years</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-md text-gray-500 font-medium mb-1">Fees</label>
                                <input
                                    type="number"
                                    name="fees"
                                    // value={formData.fees}
                                    // onChange={handleChange}
                                    placeholder="Your fees"
                                    className="w-full border rounded-md px-3 py-2 text-sm outline-none"
                                />
                            </div>
                        </div>
                        <div className='gap-4 flex flex-col'>

                            <div>
                                <label className="block text-md text-gray-600 font-medium mb-1">Speciality</label>
                                <select
                                    name="speciality"
                                    // value={formData.speciality}
                                    // onChange={handleChange}
                                    className="w-full border rounded-md px-3 text-gray-500 py-2 text-sm outline-none"
                                >
                                    <option className='text-gray-600'>General physician</option>
                                    <option className='text-gray-600'>Cardiologist</option>
                                    <option className='text-gray-600'>Dermatologist</option>
                                    <option className='text-gray-600'>Gynecologist</option>
                                    <option className='text-gray-600'>Neurologist</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-md text-gray-500 font-medium mb-1">Education</label>
                                <input
                                    type="text"
                                    name="education"
                                    // value={formData.education}
                                    // onChange={handleChange}
                                    placeholder="Education"
                                    className="w-full border rounded-md px-3 py-2 text-sm outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-md text-gray-500 font-medium mb-1">Address</label>
                                <input
                                    type="text"
                                    name="address1"
                                    // value={formData.address1}
                                    // onChange={handleChange}
                                    placeholder="Address 1"
                                    className="w-full border rounded-md px-3 py-2 text-sm mb-2 outline-none"
                                />
                                <input
                                    type="text"
                                    name="address2"
                                    // value={formData.address2}
                                    // onChange={handleChange}
                                    placeholder="Address 2"
                                    className="w-full border rounded-md px-3 py-2 text-sm outline-none"
                                />
                            </div>
                        </div>

                        <br />

                    </div>

                    {/* About */}
                    <div>
                        <label className="block text-md text-gray-500 font-medium mb-1">About me</label>
                        <textarea
                            name="about"
                            // value={formData.about}
                            // onChange={handleChange}
                            placeholder="Write about yourself"
                            rows="4"

                            className="w-full border rounded-md px-3 py-2 text-sm outline-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 mt-3 text-white px-6 py-2 rounded-md text-sm"
                    >
                        Add doctor
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddDoctor
