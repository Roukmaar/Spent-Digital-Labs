'use client'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import AddPublicationModal from './AddPublicationModal'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export default function Content() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [publications, setPublications] = useState([
        {
            id: 1,
            title: 'Blockchain Security & Protection',
            author: 'Spirit Philips',
            type: 'Research',
            status: 'Published',
            date: 'May 10, 2025'
        },
        {
            id: 2,
            title: 'What are NFTs?',
            author: 'Alexander Akosile',
            type: 'Research',
            status: 'Published',
            date: 'July 25, 2025'
        },
        {
            id: 3,
            title: 'Blockchain Security',
            author: 'Raji Roqeeeb',
            type: 'Research',
            status: 'Under Review',
            date: 'Sept 18, 2025'
        },
        {
            id: 4,
            title: 'Annual Impact Report',
            author: 'Spent Digital Labs Team',
            type: 'Report',
            status: 'Published',
            date: 'Dec 30, 2025'
        },
        {
            id: 5,
            title: 'AI Ethics in DeFi',
            author: 'Kemi Adebayo',
            type: 'Article',
            status: 'Draft',
            date: 'Jan 15, 2026'
        }
    ])

    const [searchQuery, setSearchQuery] = useState('')
    const [filterType, setFilterType] = useState('')
    const [filterStatus, setFilterStatus] = useState('')

    const handleAddPublication = (newPublication) => {
        // Add the new publication to the list
        const publicationWithId = {
            id: publications.length + 1,
            ...newPublication
        }
        setPublications(prev => [publicationWithId, ...prev])
    }

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this publication?')) {
            setPublications(prev => prev.filter(pub => pub.id !== id))
            alert('Publication deleted successfully!')
        }
    }

    const handleEdit = (id) => {
        // Add edit functionality here
        alert(`Edit publication with ID: ${id}`)
    }

    // Filter publications based on search and filters
    const filteredPublications = publications.filter(pub => {
        const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            pub.author.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesType = filterType === '' || pub.type === filterType
        const matchesStatus = filterStatus === '' || pub.status === filterStatus
        
        return matchesSearch && matchesType && matchesStatus
    })

    const getStatusColor = (status) => {
        switch (status) {
            case 'Published':
                return 'bg-green-500'
            case 'Under Review':
                return 'bg-yellow-500'
            case 'Draft':
                return 'bg-gray-400'
            default:
                return 'bg-indigo-500'
        }
    }

    return (
        <section className=''>
            <div className='space-y-5 w-full'>
                {/* Search and Filters */}
                <div className='md:flex gap-5'>
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="bg-teal-500 cursor-pointer hover:bg-teal-400 text-white px-4 py-2 rounded-lg text-sm"
                    >
                        + Add Publication
                    </button>

                    <input 
                        type="text" 
                        placeholder="🔎 Search Publications..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="hidden md:flex md:flex-2 px-3 border border-gray-300 rounded-md focus:outline-none" 
                    />

                    <div className='md:flex space-y-3 md:space-y-0 space-x-3 mt-3 md:mt-0 flex-2'>
                        <div className='flex-1 border border-gray-300 p-3 w-full rounded-md md:w-full hover:cursor-pointer hover:border-teal-400'>
                            <label className="font-light text-sm justify-center flex text-black">
                                Type:
                                <select 
                                    className='focus:outline-none hover:cursor-pointer'
                                    value={filterType}
                                    onChange={(e) => setFilterType(e.target.value)}
                                >
                                    <option value="">All Types</option>
                                    <option value="Research">Research</option>
                                    <option value="Article">Article</option>
                                    <option value="Report">Report</option>
                                </select>
                            </label>
                        </div>
                        <div className='h-11.5 border flex-1 border-gray-300 w-full p-3 rounded-md md:w-full hover:cursor-pointer hover:border-teal-400'>
                            <label className="font-light text-sm justify-center flex text-black">
                                Status:
                                <select 
                                    className='focus:outline-none hover:cursor-pointer'
                                    value={filterStatus}
                                    onChange={(e) => setFilterStatus(e.target.value)}
                                >
                                    <option value="">All Status</option>
                                    <option value="Published">Published</option>
                                    <option value="Draft">Draft</option>
                                    <option value="Under Review">Under Review</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Publications Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {filteredPublications.length > 0 ? (
                        filteredPublications.map((pub) => (
                            <div key={pub.id} className='bg-white rounded-lg shadow p-4'>
                                <div className='flex justify-between items-start'>
                                    <div>
                                        <h3 className='font-semibold text-black'>{pub.title}</h3>
                                        <p className='text-sm text-gray-600'>{pub.author}</p>
                                        <p className='text-xs text-gray-500 mt-2'>{pub.type}</p>
                                    </div>
                                    <div className='text-center space-y-1'>
                                        <div>
                                            <span className={`${getStatusColor(pub.status)} text-white text-xs px-2 py-1 rounded-full`}>
                                                {pub.status}
                                            </span>
                                        </div>
                                        <div className='text-xs text-gray-500'>{pub.date}</div>
                                    </div>
                                </div>
                                <div className='mt-3 flex gap-3 justify-center'>
                                    <FontAwesomeIcon 
                                        icon={faEdit} 
                                        className='w-4 h-4 text-teal-600 hover:text-teal-800 cursor-pointer'
                                        onClick={() => handleEdit(pub.id)}
                                    />
                                    <FontAwesomeIcon 
                                        icon={faTrashAlt} 
                                        className='w-4 h-4 text-red-600 hover:text-red-400 cursor-pointer'
                                        onClick={() => handleDelete(pub.id)}
                                    />
                                    <FontAwesomeIcon
                                        icon={faDownload}
                                        className='w-4 h-4 text-teal-600 hover:text-teal-800 cursor-pointer'
                                    />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='col-span-full text-center py-10'>
                            <p className='text-gray-500'>No publications found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Add Publication Modal */}
            <AddPublicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddPublication}
            />
        </section>
    )
}