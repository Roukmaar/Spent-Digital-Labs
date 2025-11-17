import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileText } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faPlug } from '@fortawesome/free-solid-svg-icons';
import { faHdd } from '@fortawesome/free-solid-svg-icons';
import { faCloudDownload } from '@fortawesome/free-solid-svg-icons';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';





export default function QuickActions() {
  return (

    <section className='mt-9 md:flex items-start gap-8 space-y-8'>


        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 w-full">
            <div className='mb-3 md:flex justify-between items-center gap-4'>
              <h1 className="text-xl md:text-3xl font-semibold text-gray-800">Pending Approvals</h1>
              <h1 className=' bg-amber-200 text-amber-800 rounded-full inline-block px-2 py-1 text-xs font-medium w-16 text-center'>5 items</h1>
            </div>
            <hr className='w-full text-gray-200 py-3 pt-3'/>
          <div className="space-y-3">
            <div className="space-y-3">
                <button 
                  className="px-3 bg-amber-100 w-full h-12 flex gap-2 justify-between items-center rounded-lg"
                >
                  <div className='flex  space-x-2 items-center'>
                <FontAwesomeIcon icon={faFileText} className="size-5 text-amber-600" />

                  <span className="text-sm text-center text-black">3 New Publications</span>
                  </div>
                  <a className='text-sm text-blue-500 hover:underline hover:cursor-pointer'>Review</a>
                </button>
                <button 
                  className="px-3 bg-blue-100 w-full h-12 flex gap-2 justify-between items-center rounded-lg"
                >
                  <div className='flex  space-x-2 items-center'>
                <FontAwesomeIcon icon={faHandshake} className="size-6 text-blue-600" />

                  <span className="text-sm text-center text-black">5 Partnership Requests</span>
                  </div>
                  <a className='text-sm text-blue-500 hover:underline hover:cursor-pointer'>Review</a>
                </button>
            </div>
          </div>
        </div>


        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 w-full">
            <div className='mb-3 md:flex justify-between items-center gap-4'>
              <h1 className="text-xl md:text-3xl font-semibold text-gray-800">Recent Inquiries</h1>
              <h1 className=' bg-teal-200 text-teal-700 rounded-full inline-block px-2 py-1 text-xs font-medium w-16 text-center'>10 new</h1>
            </div>
            <hr className='w-full text-gray-200 py-3 pt-3'/>
          <div className="space-y-3">
            <div className="space-y-3">
                <button 
                  className="px-3 bg-purple-100 w-full h-12 flex gap-2 justify-between items-center rounded-lg"
                >
                  <div className='flex  space-x-2'>
                  <span className="text-sm text-center text-black">Contact Forms</span>
                  </div>
                  <a className='text-sm text-purple-500 hover:underline hover:cursor-pointer'>4 new</a>
                </button>
                <button 
                  className="px-3 bg-cyan-100 w-full h-12 flex gap-2 justify-between items-center rounded-lg"
                >
                  <div className='flex  space-x-2'>
                  <span className="text-sm text-center text-black">App Engagement</span>
                  </div>
                  <a className='text-sm text-cyan-500 hover:underline hover:cursor-pointer'>6 new</a>
                </button>
            </div>
          </div>
        </div>


        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 w-full">
            <div className='mb-3 md:flex justify-between items-center gap-4'>
              <h1 className="text-xl md:text-3xl font-semibold text-gray-800">System Status</h1>
            </div>
            <hr className='w-full text-gray-200 py-3 pt-3'/>
          <div className="space-y-3">
            <div className="space-y-2.5">
                <button className="px-3 w-full flex gap-2 justify-between items-center rounded-lg">
                  <div className='flex  space-x-2 items-center'>
                    <FontAwesomeIcon icon={faDatabase} className="w-3 h-3 text-teal-600" />
                    <span className="text-sm text-center text-black">Database</span>
                  </div>
                  <div className='flex justify-center items-center space-x-2'>
                    <span className='w-2 h-2 rounded-full bg-green-500'></span>
                    <h2 className='text-sm text-green-500 '>Online</h2>
                  </div>
                </button>


                <button className="px-3 w-full flex gap-2 justify-between items-center rounded-lg">
                  <div className='flex  space-x-2 items-center'>
                    <FontAwesomeIcon icon={faPlug} className="w-3 h-3 text-teal-600" />
                    <span className="text-sm text-center text-black">API Status</span>
                  </div>
                  <div className='flex justify-center items-center space-x-2'>
                    <span className='w-2 h-2 rounded-full bg-green-500'></span>
                    <h2 className='text-sm text-green-500'>Healthy</h2>
                  </div>
                </button>


                <button className="px-3 w-full flex gap-2 justify-between items-center rounded-lg">
                  <div className='flex  space-x-2 items-center'>
                    <FontAwesomeIcon icon={faHdd} className="w-3 h-3 text-teal-600" /> 
                    <span className="text-sm text-center text-black">Storage</span>
                  </div>
                  <div className='flex justify-center items-center space-x-2'>
                    <span className='w-2 h-2 rounded-full bg-amber-500'></span>
                    <h2 className='text-sm text-amber-500'>75% Used</h2>
                  </div>
                </button>


                <button className="px-3 w-full flex gap-2 justify-between items-center rounded-lg">
                  <div className='flex  space-x-2 items-center'>
                    <FontAwesomeIcon icon={faCloudUpload} className="w-3 h-3 text-teal-600" />
                    <span className="text-sm text-center text-black">Last Backup</span>
                  </div>
                  <div className='flex justify-center items-center space-x-2'>
                    <span className='w-2 h-2 rounded-full'></span>
                    <h2 className='text-sm text-black'>2 hours ago</h2>
                  </div>
                </button>
            </div>
          </div>
        </div>





      
</section>




)
}
