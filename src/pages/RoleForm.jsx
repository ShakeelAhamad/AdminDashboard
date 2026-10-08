import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function RoleForm() {
    const [roleData, setRoleData] = useState(null);
    const [saved, setSaved] = useState(false);
    const [loading, setLoading] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        roleName: "",
        roleStatus: "",
        roleDate: "",
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
        console.log("Role save:", formData);
        setSaved(true);
        setTimeout(() => {
            setSaved(false);
            navigate("/role/list");
        }, 3000)
    }
    const handelReset = () => {
        navigate("/role/list");
        if (roleData) {
            setFormData(roleData);

        }
        setSaved(false);
    }
    return (
        <div className='space-y-6'>
            <div className='bg-white border border-gray-200 rounded-2xl shadow-sm'>
                <div className="p-6 border-b border-gray-200">
                    <h3 className="text-xl font-bold text-gray-800">Role Form</h3>
                </div>
                <div className="p-6 space-y-6 border-b border-gray-300">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Role Name</label>
                        <input
                            type='text'
                            name='roleName'
                            value={formData.roleName}
                            onChange={handleChange}
                            placeholder="Enter role name"
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                        <select
                            name='roleStatus'
                            value={formData.roleStatus}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        >
                            <option value={"Active"}>Active</option>
                            <option value={"Inactive"}>Inactive</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Role Joined Date</label>
                        <div className="relative w-full">
                            <DatePicker
                               selected={formData.roleDate ? new Date(formData.roleDate) : null}
                                onChange={(date) => {
                                    setStartDate(date);

                                    setFormData((prev) => ({
                                        ...prev,
                                        roleDate: date,
                                    }));
                                }}
                                placeholderText="Select role joined date"
                                wrapperClassName="w-full"
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 cursor-pointer"
                            />
                        </div>

                    </div>
                </div>
                <div className='p-6 space-y-6'>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            {
                                saved && (
                                    <p className="text-sm text-emerald-600">✓ Role saved successfully!</p>
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
                                Save Role
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RoleForm