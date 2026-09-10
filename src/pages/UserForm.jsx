import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function UserForm() {
    const [usersData, setUsersData] = useState(null);
    const [saved, setSaved] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userName: "",
        userEmail: "",
        userRole: "Editor",
        userStatus: "",
        userJoined: "",
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        setSaved(false);
    }
    const handelSave = () => {
        console.log("User save:", formData);
        setSaved(true);
        setTimeout(() => {
            setSaved(false);
            navigate("/user/list");
        }, 3000)
    }
    const handelReset = () => {
        navigate("/user/list");
        if (usersData) {
            setFormData(usersData);
            
        }
        setSaved(false);
    }

    return (
        <div className='space-y-6'>
            <div className='bg-white border border-gray-200 rounded-2xl shadow-sm'>
                <div className="p-6 border-b border-gray-200">
                    <h3 className="text-xl font-bold text-gray-800">User Form</h3>
                </div>
                <div className="p-6 space-y-6 border-b border-gray-300">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">User Name</label>
                        <input
                            type='text'
                            name='userName'
                            value={formData.userName}
                            onChange={handleChange}
                            placeholder="Enter user name"
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">User Email</label>
                        <input
                            type='email'
                            name='userEmail'
                            value={formData.userEmail}
                            onChange={handleChange}
                            placeholder="Enter user email"
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">User Roles</label>
                        <select
                            name='userRole'
                            value={formData.userRole}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        >
                            <option value={"Admin"}>Admin</option>
                            <option value={"Editor"}>Editor</option>
                            <option value={"Viewer"}>Viewer</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                        <select
                            name='userStatus'
                            value={formData.userStatus}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        >
                            <option value={"Active"}>Active</option>
                            <option value={"Inactive"}>Inactive</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Joined Date</label>
                        <input
                            type='date'
                            name='userJoined'
                            value={formData.userJoined}
                            onChange={handleChange}
                            placeholder="Enter user joined date"
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 cursor-pointer"
                        />
                    </div>
                </div>
                <div className='p-6 space-y-6'>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            {
                                saved && (
                                    <p className="text-sm text-emerald-600">✓ User saved successfully!</p>
                                )
                            }
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={handelReset}
                                className="px-5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition cursor-pointer">Reset</button>
                            <button
                                onClick={handelSave}
                                className="px-5 py-2.5 rounded-lg bg-linear-to-r from-indigo-600 to-purple-600 text-white text-sm shadow-sm hover:shadow-md transition cursor-pointer"
                            >
                                Save User
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserForm