import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Content() {
    return (
        <section className='space-y-5 w-full'>
            <div className="md:flex justify-between items-center space-y-3">
                <div>
                    <p className="text-gray-500 text-xl md:text-2xl">Manage your Projects</p>
                </div>
                <button className="cursor-pointer bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm">+ Add New Projects</button>
            </div>

            < div className='grid grid-cols-1 gap-6'>
                <div className='border border-blue-500 p-4 rounded-xl shadow-sm'>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='font-bold text-lg text-black'>Planning</h2>
                        <span className='bg-gray-200 text-xs text-black border px-2 py-1 rounded-full'>2</span>
                    </div>

                    <div className='space-y-4'>
                        <div className='bg-white p-4 rounded-xl shadow-sm'>
                            <div className='flex justify-between max-[900px]:flex-col max-[900px]:gap-2'>
                                <h3 className='font-semibold text-sm text-black'>Mobile App Development</h3>
                                <span className='bg-yellow-400 w-15 md:w-fit text-white text-xs px-2 py-0.5 rounded-full'>medium</span>
                            </div>
                            <p className='text-sm text-gray-600 mt-1'>Create a cross-platform mobile application for data visualization</p>
                            <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center text-xs text-gray-500 mt-4 gap-1'>
                                <span className='flex gap-1 items-center'><FontAwesomeIcon icon={faCalendar} className='text-teal-400 size-3' /> 04/01/2024</span>
                                <span>👥 3</span>
                            </div>
                            <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-3 text-sm gap-2'>
                                <button className='text-gray-600'>Edit</button>
                                <div className='flex border-0 p-2 bg-gray-100 rounded-lg hover:cursor-pointer'>
                                    <FontAwesomeIcon icon={faTrashAlt} className='text-red-600 size-4 hover:text-red-700' />
                                </div>
                            </div>
                            <hr className='my-4 border-gray-300' />
                            <div className='mt-4'>
                                <div className='flex justify-between max-[900px]:flex-col max-[900px]:gap-2'>
                                    <h3 className='font-semibold text-sm text-black'>Website Redesign</h3>
                                    <span className='bg-gray-200 w-9 md:w-fit text-gray-600 text-xs px-2 py-0.5 rounded-full'>low</span>
                                </div>
                                <p className='text-sm text-gray-600 mt-1'>Modernize the company website with new branding</p>
                                <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center text-xs text-gray-500 mt-4 gap-1'>
                                    <span className='flex gap-1 items-center'><FontAwesomeIcon icon={faCalendar} className='text-teal-400 size-3' /> 24/01/2026</span>
                                    <span>👥 2</span>
                                </div>
                                <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-3 text-sm gap-2'>
                                    <button className='text-gray-600'>Edit</button>
                                    <div className='flex border-0 p-2 bg-gray-100 rounded-lg hover:cursor-pointer'>
                                        <FontAwesomeIcon icon={faTrashAlt} className='text-red-600 size-4 hover:text-red-700' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* In Progress Column */}
                <div className='border border-amber-500 p-4 rounded-xl shadow-sm'>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='font-bold text-lg text-black'>In Progress</h2>
                        <span className='bg-gray-200 text-xs px-2 border py-1 rounded-full text-black'>1</span>
                    </div>

                    <div className='bg-white p-4 rounded-xl shadow-sm'>
                        <div className='flex justify-between max-[900px]:flex-col max-[900px]:gap-2'>
                            <h3 className='font-semibold text-sm text-black'>AI-Powered Analytics Platform</h3>
                            <span className='bg-red-500 w-10 md:w-fit text-white text-xs px-2 py-0.5 rounded-full'>high</span>
                        </div>
                        <p className='text-sm text-gray-600 mt-1'>Develop a comprehensive analytics platform using machine learning</p>
                        <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center text-xs text-gray-500 mt-4 gap-1'>
                            <span className='flex gap-1 items-center'><FontAwesomeIcon icon={faCalendar} className='text-teal-400 size-3' /> 14/12/2025</span>
                            <span>👥 5</span>
                        </div>
                        <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-3 text-sm gap-2'>
                            <button className='text-gray-600'>Edit</button>
                            <div className='flex border-0 p-2 bg-gray-100 rounded-lg hover:cursor-pointer'>
                                <FontAwesomeIcon icon={faTrashAlt} className='text-red-600 size-4 hover:text-red-700' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Completed Column */}
                <div className='border border-green-500 p-4 rounded-xl shadow-sm'>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='font-bold text-lg text-black'>Completed</h2>
                        <span className='bg-gray-200 text-xs text-black border px-2 py-1 rounded-full'>1</span>
                    </div>

                    <div className='bg-white p-4 rounded-xl shadow-sm'>
                        <div className='flex justify-between max-[900px]:flex-col max-[900px]:gap-2'>
                            <h3 className='font-semibold text-sm text-black'>Research Paper Publication</h3>
                            <span className='bg-red-500 w-10 md:w-fit text-white text-xs px-2 py-0.5 rounded-full'>high</span>
                        </div>
                        <p className='text-sm text-gray-600 mt-1'>Complete and publish research on digital transformation</p>
                        <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center text-xs text-gray-500 mt-4 gap-1'>
                            <span className='flex gap-1 items-center'><FontAwesomeIcon icon={faCalendar} className='text-teal-400 size-3' /> 04/01/2026</span>
                            <span>👥 4</span>
                        </div>
                        <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-3 text-sm gap-2'>
                            <button className='text-gray-600'>Edit</button>
                            <div className='flex border-0 p-2 bg-gray-100 rounded-lg hover:cursor-pointer'>
                                <FontAwesomeIcon icon={faTrashAlt} className='text-red-600 size-4 hover:text-red-700' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

