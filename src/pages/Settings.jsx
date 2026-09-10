import React, { useEffect, useState } from 'react'
import { api } from '../services/api';


function Settings() {
  const [settingsData, setSettingsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    siteName: "",
    theme: "Light",
    notification: true,
    language: "English",
    timezone: "Asia/Kolkata",
    twoFactor: false,
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setSaved(false);
  }

  const handelSave = () => {
    console.log("Setting save:",formData);
    setSaved(true);
    setTimeout(() => {
      setSaved(false)
    }, 3000)
  }

  const handelReset = () => {
    if (settingsData) {
      setFormData(settingsData);
    }
    setSaved(false);
  }


  const loadSettingsData = async () => {
    setLoading(true);
    try {
      const data = await api.getSettings();
      setSettingsData(data);
    } catch (error) {
      console.log("Settings loading filed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSettingsData();
  }, []);

  //Show Loading 
  if (loading && !settingsData) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    )
  }

  //Check settingsData is null
  if (!settingsData) {
    return (
      <div className="p-6 bg-white rounded-xl border border-gray-200">
        <div>
          <p>Setting data not available</p>
        </div>
      </div>
    )
  }



  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-xl font-medium text-slate-900">
        <h1>Settings</h1>
        <p className="text-sm text-gray-400 mt-1">Manage your application preferences.</p>
      </div>
      {/* General Setting */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-base font-medium text-gray-800">General Settings</h3>
          <p className="text-sm text-gray-400 mt-1">Configure basic application settings.</p>
        </div>
        <div className="p-6 space-y-6">
          {/* Site name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
            <input 
              type='text' 
              name='siteName' 
              value={formData.siteName}
              onChange={handleChange}
              placeholder="Enter Site Name"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" 
            />
          </div>
          {/* Theme section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
            <select
            name='theme'
            value={formData.theme}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            >
              <option value={"Light"}>Light</option>
              <option value={"Dark"}>Dark</option>
              <option value={"System"}>System</option>
            </select>
          </div>
          {/* Language section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
            <select
            name='language'
            value={formData.language}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            >
              <option value={"English"}>English</option>
              <option value={"Hindi"}>Hindi</option>
            </select>
          </div>
          {/* Timezone section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
            <select
            name='timezone'
            value={formData.timezone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            >
              <option value={"Asia/Kolkata"}>Asia/Kolkata</option>
              <option value={"Asia/Dubai"}>Asia/Dubai</option>
              <option value={"Europe/London"}>Europe/London</option>
              <option value={"America/New_York"}>America/New_York</option>
            </select>
          </div>
        </div>


      </div>

      {/* Notifications Setting */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-base font-medium text-gray-800">Notifications</h3>
          <p className="text-sm text-gray-400 mt-1">Control application notifications.</p>
        </div>
        <div className="p-6">
          <label className="flex items-center justify-between gap-4 cursor-pointer">
            <div>
              <p className="text-sm font-medium text-gray-700">Email Notifications</p>
              <p className="text-xs text-gray-400 mt-1">Receive important updates through email.</p>
            </div>
            <input 
              type='checkbox'
              name='notification'
              checked={formData.notification}
              onChange={handleChange}
              className="w-5 h-5 accent-indigo-600"
            />
          </label>
        </div>
      </div>

       {/* Security Setting */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-base font-medium text-gray-800">Security</h3>
          <p className="text-sm text-gray-400 mt-1">Manage account security preferences.</p>
        </div>
        <div className="p-6">
          <label className="flex items-center justify-between gap-4 cursor-pointer">
            <div>
              <p className="text-sm font-medium text-gray-700">Two-Factor Authentication</p>
              <p className="text-xs text-gray-400 mt-1">Add an additional layer of security.</p>
            </div>
            <input 
              type='checkbox'
              name='twoFactor'
              checked={formData.twoFactor}
              onChange={handleChange}
              className="w-5 h-5 accent-indigo-600"
            />
          </label>
        </div>
      </div>

      {/* Action Setting */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              {
                saved && (
                  <p className="text-sm text-emerald-600">✓ Settings saved successfully!</p>
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
                Save Settings
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Settings