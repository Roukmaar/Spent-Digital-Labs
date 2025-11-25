'use client'
import React, { useState } from 'react'
import AddEventModal from './AddEventModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

export default function Content() {
  // Get current date dynamically
  const getCurrentDate = () => {
    const now = new Date()
    return {
      day: now.getDate(),
      month: now.getMonth() + 1, // JavaScript months are 0-indexed
      year: now.getFullYear(),
      monthName: now.toLocaleString('en-US', { month: 'long' })
    }
  }

  const currentDate = getCurrentDate()
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(currentDate.day)
  const [currentMonth, setCurrentMonth] = useState(currentDate.month)
  const [currentYear, setCurrentYear] = useState(currentDate.year)
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Blockchain Security Lecture',
      date: 'Dec 15, 2025',
      time: '14:00',
      tags: ['Lecture', 'Virtual'],
      day: 15,
      month: 12,
      year: 2025
    },
    {
      id: 2,
      title: 'Smart Contracts and DApps',
      date: 'Dec 20, 2025',
      time: '09:00',
      tags: ['Symposium', 'Johannesburg'],
      day: 20,
      month: 12,
      year: 2025
    }
  ])

  // Check if an event date has passed
  const isEventPast = (event) => {
    const eventDate = new Date(event.year, event.month - 1, event.day)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    eventDate.setHours(0, 0, 0, 0)
    return eventDate < today
  }

  // Check if event is today
  const isEventToday = (event) => {
    const eventDate = new Date(event.year, event.month - 1, event.day)
    const today = new Date()
    return eventDate.getDate() === today.getDate() &&
           eventDate.getMonth() === today.getMonth() &&
           eventDate.getFullYear() === today.getFullYear()
  }

  // Delete event function
  const handleDelete = (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(prev => prev.filter(event => event.id !== eventId))
    }
  }

  // Edit event function (placeholder for future implementation)
  const handleEdit = (eventId) => {
    // TODO: Implement edit functionality
    alert('Edit functionality coming soon!')
  }

  // Add new event
  const handleAddEvent = (newEvent) => {
    const eventWithId = {
      id: Date.now(),
      ...newEvent
    }
    setEvents(prev => [...prev, eventWithId])
  }

  // Get events for selected date
  const getEventsForDate = (day) => {
    return events.filter(event => event.day === day && event.month === currentMonth && event.year === currentYear)
  }

  const selectedDateEvents = getEventsForDate(selectedDate)

  // Generate calendar days for current month
  const generateCalendarDays = () => {
    const firstDay = new Date(currentYear, currentMonth - 1, 1)
    const lastDay = new Date(currentYear, currentMonth, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    
    const days = []
    
    // Previous month days
    const prevMonthLastDay = new Date(currentYear, currentMonth - 1, 0).getDate()
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({ day: prevMonthLastDay - i, isCurrentMonth: false })
    }
    
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true })
    }
    
    // Next month days to fill the grid
    const remainingDays = 42 - days.length // 6 rows * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({ day: i, isCurrentMonth: false })
    }
    
    return days
  }

  const calendarDays = generateCalendarDays()

  // Get upcoming events (sorted by date)
  const upcomingEvents = events
    .filter(event => {
      const eventDate = new Date(event.year, event.month - 1, event.day)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return eventDate >= today
    })
    .sort((a, b) => {
      const dateA = new Date(a.year, a.month - 1, a.day)
      const dateB = new Date(b.year, b.month - 1, b.day)
      return dateA - dateB
    })
    .slice(0, 5) // Show only next 5 events

  return (
    <section className='space-y-5 w-full'>
      <div className='grid grid-cols-1 gap-6'>
        <div className="md:flex justify-between items-center space-y-3">
          <div>
            <p className="text-gray-500 text-xl md:text-2xl">Manage your events and programs</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-950 cursor-pointer hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm"
          >
            + Add Event
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-black">
                {new Date(currentYear, currentMonth - 1).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
              </h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => {
                    if (currentMonth === 1) {
                      setCurrentMonth(12)
                      setCurrentYear(currentYear - 1)
                    } else {
                      setCurrentMonth(currentMonth - 1)
                    }
                  }}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
                >
                  ←
                </button>
                <button 
                  onClick={() => {
                    const today = getCurrentDate()
                    setCurrentMonth(today.month)
                    setCurrentYear(today.year)
                    setSelectedDate(today.day)
                  }}
                  className="px-3 py-1 bg-blue-100 hover:bg-blue-200 rounded text-sm"
                >
                  Today
                </button>
                <button 
                  onClick={() => {
                    if (currentMonth === 12) {
                      setCurrentMonth(1)
                      setCurrentYear(currentYear + 1)
                    } else {
                      setCurrentMonth(currentMonth + 1)
                    }
                  }}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
                >
                  →
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 text-center text-gray-600 text-sm gap-2">
              <div className="font-semibold">Su</div>
              <div className="font-semibold">Mo</div>
              <div className="font-semibold">Tu</div>
              <div className="font-semibold">We</div>
              <div className="font-semibold">Th</div>
              <div className="font-semibold">Fr</div>
              <div className="font-semibold">Sa</div>
              
              {calendarDays.map((dayObj, index) => {
                const isToday = dayObj.isCurrentMonth && 
                               dayObj.day === currentDate.day && 
                               currentMonth === currentDate.month && 
                               currentYear === currentDate.year
                const hasEvents = dayObj.isCurrentMonth && 
                                 events.some(e => e.day === dayObj.day && e.month === currentMonth && e.year === currentYear)
                
                return (
                  <div 
                    key={index}
                    onClick={() => dayObj.isCurrentMonth && setSelectedDate(dayObj.day)}
                    className={`
                      relative hover:bg-gray-100 rounded-full w-9 h-9 mx-auto flex items-center justify-center cursor-pointer
                      ${!dayObj.isCurrentMonth ? 'text-gray-300' : ''}
                      ${isToday ? 'bg-blue-900 text-white hover:bg-blue-800' : ''}
                      ${dayObj.day === selectedDate && dayObj.isCurrentMonth && !isToday ? 'bg-blue-100' : ''}
                    `}
                  >
                    {dayObj.day}
                    {hasEvents && (
                      <div className="absolute bottom-0.5 w-1 h-1 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="space-y-6">
            {/* Selected Date Info */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-black">
                {new Date(currentYear, currentMonth - 1, selectedDate).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </h3>
              {selectedDateEvents.length > 0 ? (
                <div className="mt-3 space-y-2">
                  {selectedDateEvents.map(event => (
                    <div key={event.id} className="text-sm border-b border-gray-100 pb-2 last:border-0">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className={`text-gray-800 font-semibold ${isEventPast(event) ? 'line-through text-gray-400' : ''}`}>
                            {event.title}
                          </p>
                          <p className="text-gray-500">{event.time}</p>
                          <div className="gap-2 flex flex-wrap mt-1">
                            {isEventToday(event) && (
                              <span className="bg-green-200 text-green-900 text-xs px-2 py-0.5 rounded-full">
                                Today
                              </span>
                            )}
                            {isEventPast(event) && (
                              <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                                Past
                              </span>
                            )}
                            {event.tags.map((tag, index) => (
                              <span key={index} className="bg-blue-200 text-blue-900 text-xs px-2 py-0.5 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className='flex gap-2 ml-2'>
                          <FontAwesomeIcon 
                            icon={faEdit} 
                            className='w-4 h-4 text-teal-600 hover:text-teal-800 cursor-pointer'
                            onClick={() => handleEdit(event.id)}
                            title="Edit event"
                          />
                          <FontAwesomeIcon 
                            icon={faTrashAlt} 
                            className='w-4 h-4 text-red-600 hover:text-red-800 cursor-pointer'
                            onClick={() => handleDelete(event.id)}
                            title="Delete event"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm mt-2">No events scheduled for this day</p>
              )}
            </div>

            {/* Upcoming Events */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-3 text-black">Upcoming Events</h3>
              {upcomingEvents.length > 0 ? (
                <div className="text-sm space-y-4">
                  {upcomingEvents.map(event => (
                    <div key={event.id} className="border-b border-gray-100 pb-3 last:border-0">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className={`text-gray-800 font-semibold ${isEventPast(event) ? 'line-through text-gray-400' : ''}`}>
                            {event.title}
                          </p>
                          <p className="text-gray-500">{event.date} · {event.time}</p>
                          <div className='gap-2 flex flex-wrap mt-1'>
                            {isEventToday(event) && (
                              <span className="bg-green-200 text-green-900 text-xs px-2 py-0.5 rounded-full">
                                Today
                              </span>
                            )}
                            {isEventPast(event) && (
                              <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                                Past
                              </span>
                            )}
                            {event.tags.map((tag, index) => (
                              <span key={index} className="bg-blue-200 text-blue-900 text-xs px-2 py-0.5 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className='flex gap-2 ml-2'>
                          <FontAwesomeIcon 
                            icon={faEdit} 
                            className='w-4 h-4 text-teal-600 hover:text-teal-800 cursor-pointer'
                            onClick={() => handleEdit(event.id)}
                            title="Edit event"
                          />
                          <FontAwesomeIcon 
                            icon={faTrashAlt} 
                            className='w-4 h-4 text-red-600 hover:text-red-800 cursor-pointer'
                            onClick={() => handleDelete(event.id)}
                            title="Delete event"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No upcoming events</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Add Event Modal */}
      <AddEventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddEvent}
      />
    </section>
  )
}