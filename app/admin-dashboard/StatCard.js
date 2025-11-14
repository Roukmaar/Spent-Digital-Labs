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

export default function StatCard() {
  return (
    <main className=''>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-3xl font-bold text-gray-800">264</p>
                            <p className="text-sm text-gray-600 mt-1">Total Publications</p>
                            <p className="text-sm text-blue-400 mt-1">+10 this month</p>

                        </div>
                        <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                            <FontAwesomeIcon icon={faFileText} className="w-6 h-6 text-teal-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-3xl font-bold text-gray-800">10</p>
                            <p className="text-sm text-gray-600 mt-1">Active Projects</p>
                            <p className="text-sm text-blue-400 mt-1">+2 this month</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FontAwesomeIcon icon={faCode} className="w-6 h-6 text-blue-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-3xl font-bold text-gray-800">12</p>
                            <p className="text-sm text-gray-600 mt-1">Upcoming Events</p>
                            <p className="text-sm text-blue-400 mt-1">Next: Dec 15,2025</p>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <FontAwesomeIcon icon={faCalendar}className="w-6 h-6 text-purple-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-3xl font-bold text-gray-800">8</p>
                            <p className="text-sm text-gray-600 mt-1">Teams</p>
                            <p className="text-sm text-blue-400 mt-1">+3 new hires</p>
                        </div>
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                            <FontAwesomeIcon icon={faUsers}className="w-6 h-6 text-amber-600" />
                        </div>
                    </div>
                </div>
            </div>


    </main>




)
}
