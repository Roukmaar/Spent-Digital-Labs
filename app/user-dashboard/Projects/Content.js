'use client'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import AddProjectModal from './AddProjectModal'

export default function Content() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [projects, setProjects] = useState({
        planning: [
            {
                id: 1,
                title: 'Mobile App Development',
                description: 'Create a cross-platform mobile application for data visualization',
                priority: 'medium',
                date: '04/01/2024',
                teamSize: 3,
                status: 'planning'
            },
            {
                id: 2,
                title: 'Website Redesign',
                description: 'Modernize the company website with new branding',
                priority: 'low',
                date: '24/01/2026',
                teamSize: 2,
                status: 'planning'
            }
        ],
        inProgress: [
            {
                id: 3,
                title: 'AI-Powered Analytics Platform',
                description: 'Develop a comprehensive analytics platform using machine learning',
                priority: 'high',
                date: '14/12/2025',
                teamSize: 5,
                status: 'inProgress'
            }
        ],
        completed: [
            {
                id: 4,
                title: 'Research Paper Publication',
                description: 'Complete and publish research on digital transformation',
                priority: 'high',
                date: '04/01/2026',
                teamSize: 4,
                status: 'completed'
            }
        ]
    })

    const handleAddProject = (newProject) => {
        const projectWithId = {
            id: Date.now(), // Use timestamp as unique ID
            ...newProject
        }

        // Add project to the appropriate status column
        setProjects(prev => ({
            ...prev,
            [newProject.status]: [projectWithId, ...prev[newProject.status]]
        }))
    }

    const handleDelete = (id, status) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            setProjects(prev => ({
                ...prev,
                [status]: prev[status].filter(project => project.id !== id)
            }))
            alert('Project deleted successfully!')
        }
    }

    const handleEdit = (id) => {
        alert(`Edit project with ID: ${id}`)
        // Add edit functionality here
    }

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high':
                return 'bg-red-500'
            case 'medium':
                return 'bg-yellow-400'
            case 'low':
                return 'bg-gray-200 text-gray-600'
            default:
                return 'bg-gray-200'
        }
    }

    const ProjectCard = ({ project, status }) => (
        <div className='bg-white p-4 rounded-xl shadow-sm'>
            <div className='flex justify-between max-[900px]:flex-col max-[900px]:gap-2'>
                <h3 className='font-semibold text-sm text-black'>{project.title}</h3>
                <span className={`${getPriorityColor(project.priority)} ${project.priority === 'low' ? 'w-9' : 'w-15'} md:w-fit text-white text-xs px-2 py-0.5 rounded-full`}>
                    {project.priority}
                </span>
            </div>
            <p className='text-sm text-gray-600 mt-1'>{project.description}</p>
            <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center text-xs text-gray-500 mt-4 gap-1'>
                <span className='flex gap-1 items-center'>
                    <FontAwesomeIcon icon={faCalendar} className='text-black size-3' />
                    {project.date}
                </span>
                <span>👥 {project.teamSize}</span>
            </div>
            <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-3 text-sm gap-2'>
                <button
                    onClick={() => handleEdit(project.id)}
                    className='text-gray-600 hover:text-gray-800'
                >
                    Edit
                </button>
                <div
                    onClick={() => handleDelete(project.id, status)}
                    className='flex border-0 p-2 bg-gray-100 rounded-lg hover:cursor-pointer'
                >
                    <FontAwesomeIcon icon={faTrashAlt} className='text-red-600 size-4 hover:text-red-700' />
                </div>
            </div>
        </div>
    )

    return (
        <section className='space-y-5 w-full'>
            <div className="md:flex justify-between items-center space-y-3">
                <div>
                    <p className="text-gray-500 text-xl md:text-2xl">Manage your Projects</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-teal-500 cursor-pointer hover:bg-teal-400 text-white px-4 py-2 rounded-lg text-sm"
                >
                    + Add Project
                </button>
            </div>

            <div className='grid grid-cols-1 gap-6'>
                {/* Planning Column */}
                <div className='border border-blue-500 p-4 rounded-xl shadow-sm'>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='font-bold text-lg text-black'>Planning</h2>
                        <span className='bg-gray-200 text-xs px-2 py-1 border text-black rounded-full'>
                            {projects.planning.length}
                        </span>
                    </div>

                    <div className='space-y-4'>
                        {projects.planning.map((project, index) => (
                            <React.Fragment key={project.id}>
                                <ProjectCard project={project} status="planning" />
                                {index < projects.planning.length - 1 && <hr className='my-4 border-gray-300' />}
                            </React.Fragment>
                        ))}
                        {projects.planning.length === 0 && (
                            <p className='text-gray-500 text-center py-4'>No projects in planning</p>
                        )}
                    </div>
                </div>

                {/* In Progress Column */}
                <div className='border border-amber-500 p-4 rounded-xl shadow-sm'>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='font-bold text-lg text-black'>In Progress</h2>
                        <span className='bg-gray-200 text-xs px-2 py-1 rounded-full text-black border'>
                            {projects.inProgress.length}
                        </span>
                    </div>

                    <div className='space-y-4'>
                        {projects.inProgress.map((project) => (
                            <ProjectCard key={project.id} project={project} status="inProgress" />
                        ))}
                        {projects.inProgress.length === 0 && (
                            <p className='text-gray-500 text-center py-4'>No projects in progress</p>
                        )}
                    </div>
                </div>

                {/* Completed Column */}
                <div className='border border-green-500 p-4 rounded-xl shadow-sm'>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='font-bold text-lg text-black'>Completed</h2>
                        <span className='bg-gray-200 text-xs px-2 py-1 rounded-full border text-black'>
                            {projects.completed.length}
                        </span>
                    </div>

                    <div className='space-y-4'>
                        {projects.completed.map((project) => (
                            <ProjectCard key={project.id} project={project} status="completed" />
                        ))}
                        {projects.completed.length === 0 && (
                            <p className='text-gray-500 text-center py-4'>No completed projects</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Add Project Modal */}
            <AddProjectModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddProject}
            />
        </section>
    )
}