import React, { useEffect, useState } from 'react'
import { api } from '../services/api';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SuspenseLoader from '../components/SuspenseLoader';

function Roles() {
    const [rolesData, setRolesData] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const loadRolesData = async () => {
        setLoading(true);
        try {
            const data = await api.getRoles();
            setRolesData(data);
        } catch (error) {
            console.log("Roles loading filed:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadRolesData();
    }, []);

    //Show Loading 
    if (loading && !rolesData) {
        return (
            <SuspenseLoader/>
        )
    }

    //Check rolesData is null
    if (!rolesData) {
        return (
            <div className="p-6 bg-white rounded-xl border border-gray-200">
                <div>
                    <p>Role data not available</p>
                </div>
            </div>
        )
    }
    return (
        <div className='space-y-6'>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <div className='text-lg font-semibold text-gray-800'>All Roles ({rolesData.length})</div>
                <button 
                onClick={() => navigate("/role/form")}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-lg shadow-sm transition cursor-pointer">
                    <Plus size={22} /> Add New Role
                </button>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-200 bg-gray-50 text-xs font-semibold">
                            <th className="px-5 py-3.5 text-left font-semibold uppercase tracking-wider">Role Id</th>
                            <th className="px-5 py-3.5 text-left font-semibold uppercase tracking-wider">Role</th>
                            <th className="px-5 py-3.5 text-left font-semibold uppercase tracking-wider">Status</th>
                            <th className="px-5 py-3.5 text-left font-semibold uppercase tracking-wider">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rolesData.map((role, idx) => (
                                <tr
                                    key={idx}
                                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                                >
                                    <td
                                        className="px-5 py-4 font-light text-sm text-left"
                                    >
                                        #{role.id}
                                    </td>
                                    <td
                                        className="px-5 py-4 font-light text-sm text-left"
                                    >
                                        {role.name}
                                    </td>
                                    <td
                                        className="px-5 py-4 font-light text-sm text-left"
                                    >
                                        {role.status}
                                    </td>
                                    <td
                                        className="px-5 py-4 font-light text-sm text-left"
                                    >
                                        {role.date}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Roles