import React from 'react'

export default function Events() {
  return (
    <div>



        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mt-8 md:mt-3">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Events</h3>
            <hr className='w-full text-gray-200 py-3 pt-3'/>
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <div className='flex items-start gap-3'>
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold text-teal-600">15</span>
                    </div>
                    <div>
                        <p className="font-medium text-gray-800">Blockchain Security</p>
                        <p className="text-sm text-gray-500">Dec 15, 2025 • Virtual</p>
                    </div>
                </div>
                <div>
                    <a className='text-sm text-blue-500 hover:underline hover:cursor-pointer'>View</a>
                </div>
            </div>
            <hr className='w-full text-gray-100 py-3'/>


            <div className="flex justify-between items-center">
                <div className='flex items-start gap-3'>
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-600">20</span>
                    </div>
                    <div>
                        <p className="font-medium text-gray-800">Smart Contracts and  <br className='md:hidden'/>DApps</p>
                        <p className="text-sm text-gray-500">Dec 20, 2025 • Johannesburg</p>
                    </div>
                </div>
                <div>
                    <a className='text-sm text-blue-500 hover:underline hover:cursor-pointer'>View</a>
                </div>
            </div>
            <hr className='w-full text-gray-100 py-3'/>



            <div className="flex justify-between items-center">
                <div className='flex items-start gap-3'>
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold text-amber-600">10</span>
                    </div>
                    <div>
                        <p className="font-medium text-gray-800">Decentralized Finance  <br className='md:hidden'/>(DeFi)</p>
                        <p className="text-sm text-gray-500">Jan 10, 2026 • Dubai</p>
                    </div>
                </div>
                <div>
                    <a className='text-sm text-blue-500 hover:underline hover:cursor-pointer'>View</a>
                </div>
            </div>
            <hr className='w-full text-gray-100 py-3'/>



            <div className="flex justify-between items-center">
                <div className='flex items-start gap-3'>
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold text-cyan-600">12</span>
                    </div>
                    <div>
                        <p className="font-medium text-gray-800">Non-Fungible Tokens<br className='md:hidden'/>(NFTs)</p>
                        <p className="text-sm text-gray-500">Jan 12, 2026 • London</p>
                    </div>
                </div>
                <div>
                    <a className='text-sm text-blue-500 hover:underline hover:cursor-pointer'>View</a>
                </div>
            </div>
            <hr className='w-full text-gray-100 py-3'/>



            <div className="flex justify-between items-center">
                <div className='flex items-start gap-3'>
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold text-purple-600">16</span>
                    </div>
                    <div>
                        <p className="font-medium text-gray-800">AI in Web3 Seminar</p>
                        <p className="text-sm text-gray-500">March 16, 2026 • New York</p>
                    </div>
                </div>
                <div>
                    <a className='text-sm text-blue-500 hover:underline hover:cursor-pointer'>View</a>
                </div>
            </div>
            </div>
        </div>
    
    
    </div>
  )
}
