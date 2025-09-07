import { createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {

    const [adminToken, setAdminToken] = useState(localStorage.getItem('adminToken') ? localStorage.getItem('adminToken') : '');
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [doctors, setDoctors] = useState([])

    const getAllDoctors = async () => {
        try {
            const { data } = await axios.post(
                backendUrl + '/api/admin/all-doctors',
                {}, // request body (empty)
                {
                    headers: { token: adminToken } // headers must be in config, not body
                }
            );

            if (data.success) {
                setDoctors(data.doctors);
                console.log(data.doctors);

            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const changeAvailability = async (docId) => {
        try {
            const { data } = await axios.post(
                backendUrl + '/api/admin/change-availability',
                { docId },
                {
                    headers: { token: adminToken }
                }
            );

            if (data.success) {
                toast.success(data.message);
                getAllDoctors(); // Refresh the doctor list
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const value = {
        adminToken, setAdminToken,
        backendUrl, doctors,
        getAllDoctors, changeAvailability
    };

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    );
}

export default AdminContextProvider;