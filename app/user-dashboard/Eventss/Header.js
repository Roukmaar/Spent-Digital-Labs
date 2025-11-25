import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



export default function header() {
  return (
    <section className=''>

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

    </section>
        





)
}
      