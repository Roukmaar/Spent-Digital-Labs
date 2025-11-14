import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Content() {
  return (

    <section className=''>
        <div className='space-y-8'>

    <div className="w-full">
      <p className="text-gray-600 mb-6">Manage your Profile and preferences</p>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button className="px-4 py-2 rounded-lg bg-white shadow text-black flex items-center gap-2">
          <span><FontAwesomeIcon icon={faUserAlt} className='size-4 text-teal-500'/></span> Profile
        </button>
      </div>

      {/* Profile Information */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-1">Profile Information</h2>
        <p className="text-gray-600 mb-4">Update your profile details and personal information</p>

        {/* Profile photo */}
        <div className="md:flex items-center space-y-3 md:gap-4 mb-6">
    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-semibold text-gray-600">
            SP
          </div>
          <div className="flex gap-2 cursor-pointer ">
            <button className="hover:bg-gray-200 px-4 py-2 border rounded-md flex items-center gap-2 text-sm">
              <FontAwesomeIcon icon={faUpload} className='size-4 text-teal-500'/> Upload Photo
            </button>
            <button className="text-red-500 text-sm cursor-pointer hover:bg-red-400 hover:text-white p-2 rounded-md">Remove</button>
          </div>
        </div>

        {/* Form fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" defaultValue="Spirit Phillips" className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" defaultValue="@spenddigitallab.com" className="w-full border rounded-md px-3 py-2 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input type="text-area" defaultValue="+1 234 567 8900" className="w-full border rounded-md px-3 py-2 focus:outline-none" />
          </div>
        </div>
<div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
          <textarea type="text" defaultValue="Managing the Spent Digital Lab admin dashboard" className="w-full border rounded-md px-3 py-2 focus:outline-none " />
        </div>
        <button className="bg-teal-600 hover:bg-teal-700 cursor-pointer text-white px-6 py-2 rounded-md">
          Save Changes
        </button>
      </div>
    </div>


          <div className="bg-white rounded-xl shadow p-6">

    <div className="w-full">
        <h2 className="text-xl font-bold mb-1">Change Password</h2>
      <p className="text-gray-600 mb-6">Update your password to keep your account secure</p>

      

        {/* Form fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
            <input type="password" defaultValue="" className="w-full border rounded-md px-3 py-2 focus:outline-none " />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input type="password" defaultValue="" className="w-full border rounded-md px-3 py-2 focus:outline-none " />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
            <input type="password" defaultValue="" className="w-full border rounded-md px-3 py-2 focus:outline-none " />
          </div>
      </div>
      
        <button className="bg-teal-600 hover:bg-teal-700 cursor-pointer text-white px-6 py-2 rounded-md">
          Save Changes
        </button>
    </div>
</div>




</div>
    </section>



)
}
