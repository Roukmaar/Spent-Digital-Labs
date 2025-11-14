import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faFlask,
    faFileText, 
    faCalendar, 
    faUsers, 
    faHandshake, 
    faCode,
    faNewspaper,
    faArrowRightToBracket,
    faChartLine,
    faMessage,
    faGear
    } from "@fortawesome/free-solid-svg-icons";





export default function Sidebar() {
  return (
<section>



    <aside className="w-20 h-full md:w-60 bg-white z-10 shadow-md ">
        <div className="p-2.5 shadow-blue-200 shadow-xl bg-white">
            <Link href="/.">
            <div className="md:flex items-center gap-2 ">
                <div className="w-9 h-9 bg-blue-950 rounded-lg flex items-center justify-center ml-3 md:ml-0">
                        <FontAwesomeIcon icon={faFlask} className="w-6 h-6 text-white" />
                </div>
                <div className=''>
            <h1 className="text-xl font-semibold text-gray-800 hidden md:flex">Spent Digital Labs</h1>
            <h1 className='text-sm font-medium text-gray-300 hidden md:flex'>Admin Dashboard</h1>
            </div>
            </div>
            </Link>
        </div>
        <nav className="flex flex-col px-0.5 md:px-0 mt-12">
            <Link href="/admin-dashboard">
            <button className="w-full flex items-center gap-3 px-6 py-3 text-left hover:text-blue-900 hover:bg-blue-100 mt-3"         >
                <FontAwesomeIcon icon={faChartLine} className="w-5 h-5 ml-1 md:ml-0" />
                <span className="font-medium hidden md:flex">Dashboard</span>
            </button>
            </Link>
            <Link href="/dashboard-components/Publications">
            <button className="w-full flex items-center gap-3 px-6 py-3 text-left hover:text-blue-900 bg-blue-100 mt-3">
                <FontAwesomeIcon icon={faFileText} className="w-5 h-5 ml-1 md:ml-0" />
                <span className="font-medium hidden md:flex">Publications</span>
            </button>
            </Link>
            <Link href="/dashboard-components/Projects">
            <button className="w-full flex items-center gap-3 px-6 py-3 text-left hover:text-blue-900 hover:bg-blue-100 mt-3">
                <FontAwesomeIcon icon={faCode} className="w-5 h-5 ml-1 md:ml-0" />
                <span className="font-medium hidden md:flex">Projects</span>
            </button>
            </Link>
            <Link href="/dashboard-components/Eventss">
            <button className="w-full flex items-center gap-3 px-6 py-3 text-left hover:text-blue-900 hover:bg-blue-100 mt-3">
                <FontAwesomeIcon icon={faCalendar} className="w-5 h-5 ml-1 md:ml-0" />
                <span className="font-medium hidden md:flex">Events</span>
            </button>
            </Link>
            
            <Link href="/dashboard-components/Teams">
            <button className="w-full flex items-center gap-3 px-6 py-3 text-left hover:text-blue-900 hover:bg-blue-100 mt-3">
                <FontAwesomeIcon icon={faUsers} className="w-5 h-5 ml-1 md:ml-0" />
                <span className="font-medium hidden md:flex">Team Members</span>
            </button>
            </Link>
            <Link href="/dashboard-components/Partnerships">
            <button className="w-full flex items-center gap-3 px-6 py-3 text-left hover:text-blue-900 hover:bg-blue-100 mt-3">
                <FontAwesomeIcon icon={faHandshake} className="w-5 h-5 ml-1 md:ml-0" />
                <span className="font-medium hidden md:flex">Partnership Inquiries</span>
            </button>
            </Link>
            <Link href="/dashboard-components/Contacts">
            <button className="w-full flex items-center gap-3 px-6 py-3 text-left hover:text-blue-900 hover:bg-blue-100 mt-3">
                <FontAwesomeIcon icon={faMessage} className="w-5 h-5 ml-1 md:ml-0" />
                <span className="font-medium hidden md:flex">Contact Submissions</span>
            </button>
            </Link>
            <Link href="/dashboard-components/Settingss">
            <button className="w-full flex items-center gap-3 px-6 py-3 text-left hover:text-blue-900 hover:bg-blue-100 mt-3">
                <FontAwesomeIcon icon={faGear} className="w-5 h-5 ml-1 md:ml-0" />
                <span className="font-medium hidden md:flex">Settings</span>
            </button>
            </Link>
            <Link href="/.">
            <button className="w-full flex items-center gap-3 px-6 py-3 text-left text-red-600 hover:bg-red-50 mt-28 border-t border-gray-200 ">
                <FontAwesomeIcon icon={faArrowRightToBracket} className="w-5 h-5 ml-1 md:ml-0" />
                <span className="font-medium hidden md:flex">logout</span>
            </button> 
            </Link>
        </nav>
    </aside>






</section>
  );
}
