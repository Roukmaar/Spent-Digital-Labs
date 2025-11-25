'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function AddPublicationModal({ isOpen, onClose, onSubmit }) {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        type: 'Research',
        status: 'Draft',
        date: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState('')

    // Toggle this to switch between local and API mode
    const USE_API = false // Set to true when backend is ready

    // Set USE_API = true when backend is ready


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // Clear error when user starts typing
        if (error) setError('')
    }

    const formatDate = (dateString) => {
        // Convert date string to formatted date (e.g., "May 10, 2025")
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        try {
            // Format the date to match existing format
            const formattedDate = formatDate(formData.date)

            const newPublication = {
                ...formData,
                date: formattedDate
            }

            if (USE_API) {
                // API mode - for future backend integration
                const response = await fetch('/api/publications', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // Add authorization header when needed
                        // 'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(newPublication)
                })

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}))
                    throw new Error(errorData.message || `Server error: ${response.status}`)
                }

                const data = await response.json()

                // Pass the server response to parent
                onSubmit(data)
                handleClose()
                alert('Publication created successfully!')

            } else {
                // Local mode - no API call, just pass data to parent
                onSubmit(newPublication)
                handleClose()
                alert('Publication created successfully!')
            }

        } catch (error) {
            console.error('Error creating publication:', error)
            setError(error.message || 'An error occurred while creating the publication')

            // Optionally still add locally even if API fails (fallback behavior)
            // Uncomment the lines below if you want this behavior
            /*
            const formattedDate = formatDate(formData.date)
            const newPublication = {
              ...formData,
              date: formattedDate
            }
            onSubmit(newPublication)
            handleClose()
            alert('Publication created locally (API unavailable)')
            */
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleClose = () => {
        setFormData({
            title: '',
            author: '',
            type: 'Research',
            status: 'Draft',
            date: ''
        })
        setError('')
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800">Add New Publication</h2>
                    <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-600 transition"
                        type="button"
                    >
                        <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
                    </button>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mx-6 mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm text-red-600">{error}</p>
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {/* Title */}
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                            Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            required
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            placeholder="e.g., Blockchain Security & Protection"
                        />
                    </div>

                    {/* Author */}
                    <div>
                        <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                            Author <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            required
                            value={formData.author}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            placeholder="e.g., Spirit Phillips"
                        />
                    </div>

                    {/* Type and Status Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Type */}
                        <div>
                            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                                Type <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="type"
                                name="type"
                                required
                                value={formData.type}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            >
                                <option value="Research">Research</option>
                                <option value="Article">Article</option>
                                <option value="Report">Report</option>
                            </select>
                        </div>

                        {/* Status */}
                        <div>
                            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                                Status <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="status"
                                name="status"
                                required
                                value={formData.status}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            >
                                <option value="Draft">Draft</option>
                                <option value="Under Review">Under Review</option>
                                <option value="Published">Published</option>
                            </select>
                        </div>
                    </div>

                    {/* Date */}
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                            Date <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={handleClose}
                            disabled={isSubmitting}
                            className="w-full sm:w-auto px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full sm:w-auto px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-medium ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                        >
                            {isSubmitting ? 'Creating...' : 'Create Publication'}
                        </button>
                    </div>
                </form>

                {/* Development Mode Indicator
        {!USE_API && (
          <div className="px-6 pb-6">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs text-blue-600">
                💡 <strong>Development Mode:</strong> Currently running in local mode. 
                Set <code className="bg-blue-100 px-1 rounded">USE_API = true</code> to enable backend integration.
              </p>
            </div>
          </div>
        )} */}
            </div>
        </div>
    )
}