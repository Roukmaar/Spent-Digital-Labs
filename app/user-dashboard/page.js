import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { 
  faHome, 
  faFileText, 
  faCalendar, 
  faNewspaper, 
  faUser, 
  faBell,
  faPlus,
  faDownload,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';


export default function userdashboard() {
    return (
        <section>


    <div className="min-h-screen bg-stone-100 flex">
      {/* Sidebar */}
    <aside className="w-20 md:w-60 bg-white shadow-sm">
        <div className="py-3 px-2  border-b border-gray-300 shadow-teal-100 shadow-xl">
                    <Link href="/.">
                        <div className="md:flex items-center gap-2 ">
                <div className="ml-3 md:ml-0 w-9 h-9 bg-teal-500 rounded-lg flex items-center justify-center">
                                <FontAwesomeIcon
                                    icon={faFlask}
                                    className="w-6 h-6 text-white"
                                />
                            </div>
                            <div className="">
                                <h1 className="text-xl font-semibold text-gray-800 hidden md:flex">
                                    Spent Digital Labs
                                </h1>
                                <h1 className="text-sm font-medium text-gray-300 hidden md:flex">
                                    User Dashboard
                                </h1>
                            </div>
                        </div>
                    </Link>
                </div>
        
        <nav className="flex flex-col px-0.5 md:px-0 mt-12">
            <Link href="/user-dashboard">
            <button className="w-full flex items-center gap-3 px-6 py-3 text-left hover:text-teal-600 bg-cyan-50 mt-8"         >
                <FontAwesomeIcon icon={faChartLine} className="w-5 h-5 ml-1 md:ml-0 text-black" />
                <span className="font-medium hidden md:flex">Dashboard</span>
            </button>
            </Link>
            <Link href="/user-dashboard/Publications">
            <button className="w-full flex items-center gap-3 px-6 py-3 text-left hover:text-teal-600 hover:bg-cyan-50 mt-8">
                <FontAwesomeIcon icon={faFileText} className="w-5 h-5 ml-1 md:ml-0 text-black font" />
                <span className="font-medium hidden md:flex">Publications</span>
            </button>
            </Link>
            <Link href="/user-dashboard/Projects">
            <button className="w-full flex items-center gap-3 px-6 py-3 text-left hover:text-teal-600 hover:bg-cyan-50 mt-8">
                <FontAwesomeIcon icon={faCode} className="w-5 h-5 ml-1 md:ml-0 text-black" />
                <span className="font-medium hidden md:flex">Projects</span>
            </button>
            </Link>
            <Link href="/user-dashboard/Eventss">
            <button className="w-full flex items-center gap-3 px-6 py-3 text-left hover:text-teal-600 hover:bg-cyan-50 mt-8">
                <FontAwesomeIcon icon={faCalendar} className="w-5 h-5 ml-1 md:ml-0 text-black font" />
                <span className="font-medium hidden md:flex">Events</span>
            </button>
            </Link>
            <Link href="/user-dashboard/Settingss">
            <button className="w-full flex items-center gap-3 px-6 py-3 text-left hover:text-teal-600 hover:bg-cyan-50 mt-8">
                <FontAwesomeIcon icon={faUser} className="w-5 h-5 ml-1 md:ml-0 text-black font" />
                <span className="font-medium hidden md:flex">Profile</span>
            </button>
            </Link>
            <Link href="./">
            <button className="w-full flex items-center gap-3 px-6 py-3 text-left text-red-600 hover:bg-red-50 mt-25 border-t border-gray-200 ">
                <FontAwesomeIcon icon={faArrowRightToBracket} className="w-5 h-5 ml-1 md:ml-0" />
                <span className="font-medium hidden md:flex">logout</span>
            </button> 
            </Link> 
        </nav>
    </aside>

      {/* Main Content */}
    <main className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-300 shadow-teal-100 shadow-xl ">
            <div className="px-5 py-2 md:py-3.5 flex justify-between">
                <div className="flex gap-4 flex-1 max-w-md">
                    <div className=" justify-center flex">
                        <div className="text-gray-400 w-5" />
                        <input
                            type="text"
                            placeholder="🔎  Search..."
                            className="hidden md:flex pl-5 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <button className="relative -ml-3 py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg md:hidden">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="size-5 flex md:hidden" />
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-4 ">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                            SP
                        </div>
                            <span className="text-xl font-medium text-gray-700">Spirit Phillips</span>
                    </div>  
                    <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        <FontAwesomeIcon icon={faBell} className="w-5 h-5" />
                        <span className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                </div>
            </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
            <div className="mb-8 flex items-center">
                <h2  className='gap-1 flex text-4xl md:text-5xl font-semibold text-gray-800 py-2 mb-5'>Welcome back, Spirit!<FontAwesomeIcon icon={faCheckCircle} className="hidden md:flex md:size-10 text-teal-500 size-5" /></h2>
                
            </div>

          {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-3xl font-bold text-gray-800">24</p>
                            <p className="text-sm text-gray-600 mt-1">Publications</p>
                        </div>
                        <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                            <FontAwesomeIcon icon={faFileText} className="w-6 h-6 text-teal-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-3xl font-bold text-gray-800">8</p>
                            <p className="text-sm text-gray-600 mt-1">Projects</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FontAwesomeIcon icon={faCode} className="w-6 h-6 text-blue-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-3xl font-bold text-gray-800">12</p>
                            <p className="text-sm text-gray-600 mt-1">Events</p>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <FontAwesomeIcon icon={faCalendar}className="w-6 h-6 text-purple-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-3xl font-bold text-gray-800">156</p>
                            <p className="text-sm text-gray-600 mt-1">Downloads</p>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <FontAwesomeIcon icon={faDownload}className="w-6 h-6 text-green-600" />
                        </div>
                    </div>
                </div>
            </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Publications */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="md:flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Recent Publications</h3>
                <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm font-medium transition flex items-center gap-2">
                    <FontAwesomeIcon icon={faPlus}className="w-4 h-4" />
                    New Publication
                </button>
            </div>
            <hr className='w-full text-gray-300 py-3 pt-3'/>
            <div className="space-y-4">
            <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                        <p className="font-medium text-gray-800">Blockchain Identity Solutions</p>
                        <p className="text-sm text-gray-500">Published 2 days ago</p>
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full mt-1">
                            Published
                        </span>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                        <div className="flex-1">
                            <p className="font-medium text-gray-800">Web3 Security Framework</p>
                            <p className="text-sm text-gray-500">Draft saved 1 hour ago</p>
                            <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full mt-1">
                                Draft
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Upcoming Events</h3>
            <hr className='w-full text-gray-300 py-3 pt-3'/>
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                            <span className="text-sm font-bold text-teal-600">15</span>
                        </div>
                    <div>
                        <p className="font-medium text-gray-800">Blockchain Workshop</p>
                        <p className="text-sm text-gray-500">Dec 15, 2025 • Virtual</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <span className="text-sm font-bold text-purple-600">20</span>
                        </div>
                    <div>
                        <p className="font-medium text-gray-800">Non-Fungible Tokens (NFTs)</p>
                        <p className="text-sm text-gray-500">Dec 20, 2025 • Dubai</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-600">02</span>
                    </div>
                    <div>
                        <p className="font-medium text-gray-800">AI in Web3 Symposium</p>
                        <p className="text-sm text-gray-500">Jan 2, 2026 • New York</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </main>
    </div>
    </section>
)
}
