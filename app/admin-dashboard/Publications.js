import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import { 
  faFileText, 
  faCalendar, 
  faUsers, 
  faDownload,
  faCode,
} from '@fortawesome/free-solid-svg-icons';



export default function Publications() {
  return (
<section className='md:flex md:items-start gap-5 space-y-8 md:space-y-0 max-[900px]:flex max-[900px]:flex-col w-full'>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex-2 w-full">
            <div className="md:flex items-center justify-between mb-4 space-y-2">
                <h3 className="text-xl md:text-3xl font-semibold text-gray-800">Recent Publications</h3>
                <button className="px-4 py-2 text-white rounded-lg text-sm font-medium bg-blue-950 hover:bg-blue-900 transition flex items-center">
                    View all Publications
                </button>
            </div>
            <hr className='w-full text-gray-300 py-3 pt-3'/>
            <div className="space-y-4">
                <div className="flex items-start gap-3">
                    <div className=" bg-teal-50 mt-2">
                        <FontAwesomeIcon icon={faFileText} className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="flex-1">
                        <p className="font-medium text-gray-800">Blockchain Security Solutions</p>
                        <p className="text-sm text-gray-500">Mr.Sprit Philips | Security | Published 2 days ago</p>
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full mt-1">
                            Published
                        </span>
                    </div>
                </div>
                <hr className='w-full text-gray-100 py-3'/>
                <div className="flex items-start gap-3">
                    <div className=" bg-yellow-50 mt-2">
                        <FontAwesomeIcon icon={faFileText} className="w-6 h-6 text-yellow-500" />
                    </div>
                        <div className="flex-1">
                            <p className="font-medium text-gray-800">Web3 Identity Framework</p>
                            <p className="text-sm text-gray-500">Mr.Raji Roqeeb | Identity | Draft saved 1 hour ago</p>
                            <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-200 text-yellow-800 rounded-full mt-1">
                                Draft
                            </span>
                        </div>
                    </div>
                    <hr className='w-full text-gray-100 py-3'/>
                <div className="flex items-start gap-3">
                    <div className=" bg-teal-50 mt-2">
                        <FontAwesomeIcon icon={faFileText} className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="flex-1">
                        <p className="font-medium text-gray-800">AI Ethics in Web3</p>
                        <p className="text-sm text-gray-500">Dr. Bernard Oluwadare | AI | Published 2 days ago</p>
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full mt-1">
                            Published
                        </span>
                    </div>
                </div>
            </div>
        </div>




        <div className="bg-white md:space-y-5 rounded-xl shadow-md p-6 border border-gray-100 flex-1 max-[900px]:w-full">
            <div className=''>
            <h1 className="text-xl md:text-3xl font-semibold text-gray-800">Quick Actions</h1>
        </div>
        <hr className='w-full text-gray-300 py-3 pt-3'/>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
                <button 
                  className="bg-slate-50 h-25.5 flex flex-col gap-2 hover:bg-teal-100 items-center justify-center border-2 border-dotted border-gray-200 rounded-lg"
                >
                <FontAwesomeIcon icon={faFileText} className="w-6 h-6 text-teal-600" />

                  <span className="text-xs text-center">New Publication</span>
                </button>
                <button 
                  className="bg-slate-100 h-25.5 flex flex-col gap-2 hover:bg-blue-100 items-center justify-center border-2 border-dotted border-gray-200 rounded-lg"
                >
                <FontAwesomeIcon icon={faCode} className="w-6 h-6 text-blue-600" />

                  <span className="text-xs text-center">Add Project</span>
                </button>
                <button 
                  className="bg-slate-100 h-25.5 flex flex-col gap-2 hover:bg-purple-100 items-center justify-center border-2 border-dotted border-gray-200 rounded-lg"
                >
                <FontAwesomeIcon icon={faCalendar} className="w-6 h-6 text-purple-600" />
                  <span className="text-xs text-center">Create Event</span>
                </button>
                <button 
                  className="bg-slate-100 h-25.5 flex flex-col gap-2 hover:bg-amber-100 items-center justify-center border-2 border-dotted border-gray-200 rounded-lg"
                >
                <FontAwesomeIcon icon={faUsers} className="w-6 h-6 text-amber-600" />
                  <span className="text-xs text-center text-">Add Team Member</span>
                </button>
            </div>
            
            <button className="px-4 py-2 text-white rounded-lg text-sm font-medium bg-blue-950 hover:bg-blue-900 transition flex items-center w-full justify-center">
              Bulk Upload Publications
            </button>
            
            <button variant="outline" className="px-4 py-2 text-white rounded-lg text-sm font-medium bg-stone-400 hover:bg-stone-600  transition flex items-center w-full justify-center">
              Export Data
            </button>
          </div>
        </div>

</section>  
)
}
