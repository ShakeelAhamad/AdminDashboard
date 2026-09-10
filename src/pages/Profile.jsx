import { Mail, Phone } from 'lucide-react'
import React from 'react'

function Profile() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* left column */}
      <div className="col-span-1 bg-white border border-gray-200 shadow-sm rounded-xl p-6 flex flex-col items-center justify-center gap-4">
        <div className="w-20 h-20 bg-primary text-white font-medium flex items-center justify-center text-3xl border-2 border-gray-400 rounded-full">AU</div>
        <div className="text-center border-b border-gray-200 w-full pb-4 mb-4">
          <p className="text-xl font-light text-text-primary">Admin User</p>
          <p className="text-sm font-light text-text-primary mb-2">Super Admin</p>
          <p className="text-xs font-light text-text-primary">Joined 2026-01-01</p>
        </div>
        {/* email and phone */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span className="text-sm text-text-primary font-light">admin@admin.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span className="text-sm text-text-primary font-light">+91 90056 07897</span>
          </div>
        </div>
      </div>

      {/* right column */}
      <div className="col-span-2 space-y-6">
        {/* About Section */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
          <p className="text-sm text-text-primary font-light mb-4 uppercase">About</p>
          <p className="text-sm text-text-primary font-light max-w-xl">Full-stack developer with 5+ years of experience. Passionate about building beautiful, scalable products.</p>
        </div>

        {/* Details Section */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
          <p className="text-sm text-text-primary font-light uppercase">Details</p>
          <div className="text-sm text-text-primary font-light flex items-center gap-8 mb-2">
            <span>Location</span>
            <span>Ahamedabad, India</span>
          </div>
          <div className="text-sm text-text-primary font-light flex items-center gap-8 mb-2">
            <span>Website</span>
            <span>https://adminhub.com</span>
          </div>
          <div className="text-sm text-text-primary font-light flex items-center gap-8 mb-2">
            <span>Eamil</span>
            <span>admin@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile