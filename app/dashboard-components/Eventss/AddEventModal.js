'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function AddEventModal({ isOpen, onClose, onSubmit }) {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        time: '',
        tags: []
    })

    const [currentTag, setCurrentTag] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState('')

    // Toggle this to switch between local and API mode
    const USE_API = false // Set to true when backend is ready

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // Clear error when user starts typing
        if (error) setError('')
    }

    const handleAddTag = () => {
        if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
            setFormData(prev => ({
                ...prev,
                tags: [...prev.tags, currentTag.trim()]
            }))
            setCurrentTag('')
        }
    }

    const handleRemoveTag = (tagToRemove) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags.filter(tag => tag !== tagToRemove)
        }))
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            handleAddTag()
        }
    }

    const formatDate = (dateString) => {
        // Convert date string to "Dec 15, 2025" format
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

        // Validate tags
        if (formData.tags.length === 0) {
            setError('Please add at least one tag')
            setIsSubmitting(false)
            return
        }

        try {
            // Format the date to match existing format
            const formattedDate = formatDate(formData.date)
            const dateObj = new Date(formData.date)

            const newEvent = {
                ...formData,
                date: formattedDate,
                day: dateObj.getDate(),
                month: dateObj.getMonth() + 1,
                year: dateObj.getFullYear()
            }

            if (USE_API) {
                // API mode - for future backend integration
                const response = await fetch('/api/events', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // Add authorization header when needed
                        // 'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(newEvent)
                })

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}))
                    throw new Error(errorData.message || `Server error: ${response.status}`)
                }

                const data = await response.json()

                // Pass the server response to parent
                onSubmit(data)
                handleClose()
                alert('Event created successfully!')

            } else {
                // Local mode - no API call, just pass data to parent
                onSubmit(newEvent)
                handleClose()
                alert('Event created successfully!')
            }

        } catch (error) {
            console.error('Error creating event:', error)
            setError(error.message || 'An error occurred while creating the event')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleClose = () => {
        setFormData({
            title: '',
            date: '',
            time: '',
            tags: []
        })
        setCurrentTag('')
        setError('')
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800">Add New Event</h2>
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
                            Event Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            required
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="e.g., Blockchain Security Lecture"
                        />
                    </div>

                    {/* Date and Time Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Time */}
                        <div>
                            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                                Time <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                required
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    {/* Tags */}
                    <div>
                        <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                            Tags <span className="text-red-500">*</span>
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                id="tags"
                                value={currentTag}
                                onChange={(e) => setCurrentTag(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="e.g., Lecture, Virtual, Workshop"
                            />
                            <button
                                type="button"
                                onClick={handleAddTag}
                                className="px-4 py-2 bg-blue-100 text-blue-900 rounded-lg hover:bg-blue-200 transition"
                            >
                                <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Display Tags */}
                        {formData.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-3">
                                {formData.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-200 text-blue-900 text-sm px-3 py-1 rounded-full flex items-center gap-2"
                                    >
                                        {tag}
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveTag(tag)}
                                            className="hover:text-red-600"
                                        >
                                            <FontAwesomeIcon icon={faXmark} className="w-3 h-3" />
                                        </button>
                                    </span>
                                ))}
                            </div>
                        )}
                        <p className="text-xs text-gray-500 mt-2">
                            Press Enter or click + to add a tag
                        </p>
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
                            className={`w-full sm:w-auto px-6 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-900 transition font-medium ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                        >
                            {isSubmitting ? 'Creating...' : 'Create Event'}
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