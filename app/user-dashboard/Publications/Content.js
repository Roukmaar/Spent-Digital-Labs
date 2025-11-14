import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Content() {
  return (
   <section>
    <div className='space-y-5 w-full'>
        <div className='md:flex gap-5'>
            <input type="text" placeholder="🔎 Search Publications..." 
            className="hidden md:flex md:flex-2 px-3 border border-gray-300 rounded-md focus:outline-none "/>
            
            <div className='flex space-y-3 md:space-y-0 space-x-3 mt-3 md:mt-0 flex-2'>
                <div className='flex-1 border border-gray-300 p-3 rounded-md md:w-full hover:cursor-pointer hover:border-teal-400'>
                    <label className="font-light text-sm justify-center flex ">Type:
                        <select className='focus:outline-none hover:cursor-pointer'>
                            <option value="">All Types</option>
                            <option value="Research">Research</option>
                            <option value="Article">Article</option>
                            <option value="Report">Report</option>
                        </select>
                    </label>
                </div>
                <div className='h-11.5 border flex-1 border-gray-300 p-3 rounded-md md:w-full hover:cursor-pointer hover:border-teal-400'>
                    <label className="font-light text-sm justify-center flex">Type:
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
    
        <table className='w-full shadow-sm rounded-lg'>
            <thead>
        <tr className=' bg-gray-50 w-full'>
            <th className='text-left font-light text-gray-400 py-3 px-2 md:px-5 border-r-0 border-t border-b border-l rounded-t-md'>Title</th>
            <th className='text-left font-light text-gray-400 py-3 px-2 md:px-5 border-r-0 border-t border-b rounded-t-md'>Author</th>
            <th className='text-left font-light text-gray-400 py-3 px-2 md:px-5 border-r-0 border-t border-b rounded-t-md hidden md:table-cell'>Type</th>
            <th className='text-left font-light text-gray-400 py-3 px-2 md:px-5 border-r-0 border-t border-b rounded-t-md hidden md:table-cell'>Status</th>
            <th className='text-left font-light text-gray-400 py-3 px-2 md:px-5 border-r-0 border-t border-b rounded-t-md hidden md:table-cell'>Date</th>
            <th className='text-center font-light text-gray-400 py-3 px-2 md:px-5 border-t border-b border-r rounded-t-md'>Action</th>
        </tr>
        </thead>
        <tbody className='w-full'>
            <tr className='text-left'>
            <td className='px-2 md:px-5 font-medium text-md p-2'>Blockchain Security & Protection</td>
            <td className='px-2 md:px-5 font-medium text-md p-2'>Spirit philips</td>
            <td className='px-2 md:px-5 font-medium text-md p-2 hidden md:table-cell'>Research</td>
            <td className='px-2 md:px-5 font-medium text-md p-2 hidden md:table-cell'>APublished</td>
            <td className='px-2 md:px-5 font-medium text-md p-2 hidden md:table-cell'>May 10,2025</td>
            <td className='md:px-5 font-medium text-md py-5 flex items-center justify-center'><FontAwesomeIcon icon={faTrashAlt} className='size-3 text-red-600 hover:text-red-400 hover:cursor-pointer'/></td>
            </tr>
            <tr className='text-left'>
            <td className='px-2 md:px-5 font-medium text-md p-2'>What are NFTs?</td>
            <td className='px-2 md:px-5 font-medium text-md p-2'>Alexander Akosile</td>
            <td className='px-2 md:px-5 font-medium text-md p-2 hidden md:table-cell'>Research</td>
            <td className='px-2 md:px-5 font-medium text-md p-2 hidden md:table-cell'>Published</td>
            <td className='px-2 md:px-5 font-medium text-md p-2 hidden md:table-cell'>July 25,2025</td>
            <td className='md:px-5 font-medium text-md py-5 flex items-center justify-center'><FontAwesomeIcon icon={faTrashAlt} className='size-3 text-red-600 hover:text-red-400 hover:cursor-pointer'/></td>
            </tr>
            <tr className='text-left'>
            <td className='px-2 md:px-5 font-medium text-md p-2'>Blockchain Security</td>
            <td className='px-2 md:px-5 font-medium text-md p-2'>Raji Roqeeeb</td>
            <td className='px-2 md:px-5 font-medium text-md p-2 hidden md:table-cell'>Research</td>
            <td className='px-2 md:px-5 font-medium text-md p-2 hidden md:table-cell'>Under Review</td>
            <td className='px-2 md:px-5 font-medium text-md p-2 hidden md:table-cell'>Sept 18,2025</td>
            <td className='md:px-5 font-medium text-md py-5 flex items-center justify-center'><FontAwesomeIcon icon={faTrashAlt} className='size-3 text-red-600 hover:text-red-400 hover:cursor-pointer'/></td>
            </tr>
            <tr className='text-left'>
            <td className='px-2 md:px-5 font-medium text-md p-2'>Annual Impact Report</td>
            <td className='px-2 md:px-5 font-medium text-md p-2'>Spent digital labs Team</td>
            <td className='px-2 md:px-5 font-medium text-md p-2 hidden md:table-cell'>Report</td>
            <td className='px-2 md:px-5 font-medium text-md p-2 hidden md:table-cell'>Published</td>
            <td className='px-2 md:px-5 font-medium text-md p-2 hidden md:table-cell'>Dec 30,2025</td>
            <td className='md:px-5 font-medium text-md py-5 flex items-center justify-center'><FontAwesomeIcon icon={faTrashAlt} className='size-3 text-red-600 hover:text-red-400 hover:cursor-pointer'/></td>
            </tr>
            <tr className='text-left'>
            <td className='px-2 md:px-5 font-medium text-md p-2'>AI Ethics in DeFi</td>
            <td className='px-2 md:px-5 font-medium text-md p-2'>Kemi Adebayo</td>
            <td className='px-2 md:px-5 font-medium text-md p-2 hidden md:table-cell'>Article</td>
            <td className='px-2 md:px-5 font-medium text-md p-2 hidden md:table-cell'>Draft</td>
            <td className='px-2 md:px-5 font-medium text-md p-2 hidden md:table-cell'>Jan 15,2026</td>
            <td className='md:px-5 font-medium text-md py-5 flex items-center justify-center'><FontAwesomeIcon icon={faTrashAlt} className='size-3 text-red-600 hover:text-red-400 hover:cursor-pointer'/></td>
            </tr>
        </tbody>
        </table>

    </div>


</section>
  )
}
