import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Content() {
  return (
   <section>
    
    <div className='space-y-5 w-full'>
        <div className='md:flex gap-5'>
                      <button className="cursor-pointer bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm">+ Add Event</button>
            <input type="text" placeholder="🔎 Search Publications..." 
            className="hidden md:flex md:flex-2 px-3 border border-gray-300 rounded-md focus:outline-none "/>
            
            <div className='md:flex space-y-3 md:space-y-0 space-x-3 mt-3 md:mt-0 flex-2'>
                <div className='flex-1 border border-gray-300 p-3 w-full rounded-md md:w-full hover:cursor-pointer hover:border-teal-400'>
                    <label className="font-light text-sm justify-center flex text-black ">Type:
                        <select className='focus:outline-none hover:cursor-pointer'>
                            <option value="">All Types</option>
                            <option value="Research">Research</option>
                            <option value="Article">Article</option>
                            <option value="Report">Report</option>
                        </select>
                    </label>
                </div>
                <div className='h-11.5 border flex-1 border-gray-300 w-full p-3 rounded-md md:w-full hover:cursor-pointer hover:border-teal-400'>
                    <label className="font-light text-sm justify-center flex text-black">Type:
                        <select className='focus:outline-none hover:cursor-pointer'>
                            <option value="">All Status</option>
                            <option value="Published">Published</option>
                            <option value="Draft">Draft</option>
                            <option value="Report">Under Review</option>
                        </select>
                    </label>
                </div>
            </div>
        </div>
    
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* Card 1 */}
            <div className='bg-white rounded-lg shadow p-4'>
                <div className='flex justify-between items-start'>
                    <div>
                        <h3 className='font-semibold text-black'>Blockchain Security & Protection</h3>
                        <p className='text-sm text-gray-600'>Spirit Philips</p>
                        <p className='text-xs text-gray-500 mt-2'>Research</p>
                    </div>
                    <div className='text-center space-y-1'>
                        <div><span className='bg-green-500 text-white text-xs px-2 py-1 rounded-full'>Published</span></div>
                        <div className='text-xs text-gray-500'>May 10, 2025</div>
                    </div>
                </div>
                <div className='mt-3 flex gap-3 justify-center'>
                    <FontAwesomeIcon icon={faEdit} className='w-4 h-4 text-teal-600 hover:text-teal-800 cursor-pointer'/>
                    <FontAwesomeIcon icon={faTrashAlt} className='w-4 h-4 text-red-600 hover:text-red-400 cursor-pointer'/>
                </div>
            </div>

            {/* Card 2 */}
            <div className='bg-white rounded-lg shadow p-4'>
                <div className='flex justify-between items-start'>
                    <div>
                        <h3 className='font-semibold text-black'>What are NFTs?</h3>
                        <p className='text-sm text-gray-600'>Alexander Akosile</p>
                        <p className='text-xs text-gray-500 mt-2'>Research</p>
                    </div>
                    <div className='text-center space-y-1'>
                        <div><span className='bg-indigo-500 text-white text-xs px-2 py-1 rounded-full'>Published</span></div>
                        <div className='text-xs text-gray-500'>July 25, 2025</div>
                    </div>
                </div>
                <div className='mt-3 flex gap-3 justify-center'>
                    <FontAwesomeIcon icon={faEdit} className='w-4 h-4 text-teal-600 hover:text-teal-800 cursor-pointer'/>
                    <FontAwesomeIcon icon={faTrashAlt} className='w-4 h-4 text-red-600 hover:text-red-400 cursor-pointer'/>
                </div>
            </div>

            {/* Card 3 */}
            <div className='bg-white rounded-lg shadow p-4'>
                <div className='flex justify-between items-start'>
                    <div>
                        <h3 className='font-semibold text-black'>Blockchain Security</h3>
                        <p className='text-sm text-gray-600'>Raji Roqeeeb</p>
                        <p className='text-xs text-gray-500 mt-2'>Research</p>
                    </div>
                    <div className='text-center space-y-1'>
                        <div><span className='bg-yellow-500 text-white text-xs px-2 py-1 rounded-full'>Under Review</span></div>
                        <div className='text-xs text-gray-500'>Sept 18, 2025</div>
                    </div>
                </div>
                <div className='mt-3 flex gap-3 justify-center'>
                    <FontAwesomeIcon icon={faEdit} className='w-4 h-4 text-teal-600 hover:text-teal-800 cursor-pointer'/>
                    <FontAwesomeIcon icon={faTrashAlt} className='w-4 h-4 text-red-600 hover:text-red-400 cursor-pointer'/>
                </div>
            </div>

            {/* Card 4 */}
            <div className='bg-white rounded-lg shadow p-4'>
                <div className='flex justify-between items-start'>
                    <div>
                        <h3 className='font-semibold text-black'>Annual Impact Report</h3>
                        <p className='text-sm text-gray-600'>Spent Digital Labs Team</p>
                        <p className='text-xs text-gray-500 mt-2'>Report</p>
                    </div>
                    <div className='text-center space-y-1'>
                        <div><span className='bg-indigo-500 text-white text-xs px-2 py-1 rounded-full'>Published</span></div>
                        <div className='text-xs text-gray-500'>Dec 30, 2025</div>
                    </div>
                </div>
                <div className='mt-3 flex gap-3 justify-center'>
                    <FontAwesomeIcon icon={faEdit} className='w-4 h-4 text-teal-600 hover:text-teal-800 cursor-pointer'/>
                    <FontAwesomeIcon icon={faTrashAlt} className='w-4 h-4 text-red-600 hover:text-red-400 cursor-pointer'/>
                </div>
            </div>

            {/* Card 5 */}
            <div className='bg-white rounded-lg shadow p-4'>
                <div className='flex justify-between items-start'>
                    <div>
                        <h3 className='font-semibold text-black'>AI Ethics in DeFi</h3>
                        <p className='text-sm text-gray-600'>Kemi Adebayo</p>
                        <p className='text-xs text-gray-500 mt-2'>Article</p>
                    </div>
                    <div className='text-center space-y-1'>
                        <div><span className='bg-gray-400 text-white text-xs px-2 py-1 rounded-full'>Draft</span></div>
                        <div className='text-xs text-gray-500'>Jan 15, 2026</div>
                    </div>
                </div>
                <div className='mt-3 flex gap-3 justify-center'>
                    <FontAwesomeIcon icon={faEdit} className='w-4 h-4 text-teal-600 hover:text-teal-800 cursor-pointer'/>
                    <FontAwesomeIcon icon={faTrashAlt} className='w-4 h-4 text-red-600 hover:text-red-400 cursor-pointer'/>
                </div>
            </div>
        </div>

    </div>


</section>
  )
}
