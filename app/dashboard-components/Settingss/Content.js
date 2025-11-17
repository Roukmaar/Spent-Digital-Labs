import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Content() {
  return (

    <section className=''>
        <div className='space-y-8'>

    <div className="w-full">
      <p className="text-gray-600 mb-6">Manage your account settings and preferences</p>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button className="px-4 py-2 rounded-lg bg-white shadow text-black flex items-center gap-2">
          <span><FontAwesomeIcon icon={faUserAlt} className='size-4 text-blue-900'/></span> Profile
        </button>
      </div>

      {/* Profile Information */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold text-black mb-1">Profile Information</h2>
        <p className="text-gray-600 mb-4">Update your profile details and personal information</p>

        {/* Profile photo */}
        <div className="md:flex items-center space-y-3 md:gap-4 mb-6">
    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-semibold text-gray-600">
            SP
          </div>
          <div className="flex gap-2 cursor-pointer ">
            <button className="hover:bg-gray-200 px-4 text-black py-2 border rounded-md flex items-center gap-2 text-sm">
              <FontAwesomeIcon icon={faUpload} className='size-4 text-blue-900 '/> Upload Photo
            </button>
            <button className="text-red-500 text-sm cursor-pointer hover:bg-red-400 hover:text-white p-2 rounded-md">Remove</button>
          </div>
        </div>

        {/* Form fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" placeholder="Spirit Phillips" className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" placeholder="admin@spenddigitallab.com" className="placeholder:text-gray-400 w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <input type="text" placeholder="Administrator" className="placeholder:text-gray-400 w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input type="text" placeholder="+1 234 567 8900" className="placeholder:text-gray-400 w-full border rounded-md px-3 py-2" />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
          <input type="text" placeholder="Managing the Spent Digital Lab admin dashboard" className="placeholder:text-gray-400 w-full border rounded-md px-3 py-2" />
        </div>

        <button className="bg-blue-950 cursor-pointer hover:bg-blue-900 text-white px-6 py-2 rounded-md">
          Save Changes
        </button>
      </div>
    </div>


          <div className="bg-white rounded-xl shadow p-6">

    <div className="w-full">
        <h2 className="text-xl font-bold text-black mb-1">Change Password</h2>
      <p className="text-gray-600 mb-6">Update your password to keep your account secure</p>

      

        {/* Form fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
            <input type="password" placeholder="Current Password" className="placeholder:text-gray-400 w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input type="password" placeholder="New Password" className="placeholder:text-gray-400 w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
            <input type="password" placeholder="Confirm New Password" className="placeholder:text-gray-400 w-full border rounded-md px-3 py-2" />
          </div>
      </div>
      
        <button className="bg-blue-950 cursor-pointer hover:bg-blue-900 text-white px-6 py-2 rounded-md">
          Save Changes
        </button>
    </div>
</div>




</div>
    </section>



)
}
