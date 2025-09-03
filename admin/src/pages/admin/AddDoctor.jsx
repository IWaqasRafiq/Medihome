import React from 'react'
import { assets } from '../../assets/assets'

const AddDoctor = () => {
    return (
        <form>
            <p>Add Doctor</p>
            <div>
                <div>
                    <label htmlFor='doctor_image'>
                        <img src={assets.upload_area} alt="" />
                    </label>
                    <input type="file" id="doctor_image" hidden />
                    <p>Upload Doctor <br /> Profile</p>
                </div>
                <div>
                    {/* Doctor Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Doctor name</label>
                            <input
                                type="text"
                                name="name"
                                // value={formData.name}
                                // onChange={handleChange}
                                placeholder="Name"
                                className="w-full border rounded-md px-3 py-2 text-sm  focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Speciality</label>
                            <select
                                name="speciality"
                                // value={formData.speciality}
                                // onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2 text-sm focus:ring focus:ring-blue-300"
                            >
                                <option>General physician</option>
                                <option>Cardiologist</option>
                                <option>Dermatologist</option>
                                <option>Neurologist</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Doctor Email</label>
                            <input
                                type="email"
                                name="email"
                                // value={formData.email}
                                // onChange={handleChange}
                                placeholder="Your email"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Education</label>
                            <input
                                type="text"
                                name="education"
                                // value={formData.education}
                                // onChange={handleChange}
                                placeholder="Education"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Doctor Password</label>
                            <input
                                type="password"
                                name="password"
                                // value={formData.password}
                                // onChange={handleChange}
                                placeholder="Password"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Address</label>
                            <input
                                type="text"
                                name="address1"
                                // value={formData.address1}
                                // onChange={handleChange}
                                placeholder="Address 1"
                                className="w-full border rounded-md px-3 py-2 text-sm mb-2 focus:ring focus:ring-blue-300"
                            />
                            <input
                                type="text"
                                name="address2"
                                // value={formData.address2}
                                // onChange={handleChange}
                                placeholder="Address 2"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Experience</label>
                            <select
                                name="experience"
                                // value={formData.experience}
                                // onChange={handleChange}
                                className="w-full border rounded-md  px-3 py-2 text-sm focus:ring focus:ring-blue-300"
                            >
                                <option value="">Experience</option>
                                <option value="1 year">1 Year</option>
                                <option value="2 years">2 Years</option>
                                <option value="5 years">5 Years</option>
                                <option value="10+ years">10+ Years</option>
                            </select>
                        </div>
                        <br />
                        <div>
                            <label className="block text-sm font-medium mb-1">Fees</label>
                            <input
                                type="number"
                                name="fees"
                                // value={formData.fees}
                                // onChange={handleChange}
                                placeholder="Your fees"
                                className="w-full border rounded-md px-3 py-2 text-sm focus:ring focus:ring-blue-300"
                            />
                        </div>
                    </div>

                    {/* About */}
                    <div>
                        <label className="block text-sm font-medium mb-1">About me</label>
                        <textarea
                            name="about"
                            // value={formData.about}
                            // onChange={handleChange}
                            placeholder="Write about yourself"
                            rows="4"
                            className="w-full border rounded-md px-3 py-2 text-sm focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-sm"
                    >
                        Add doctor
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddDoctor
