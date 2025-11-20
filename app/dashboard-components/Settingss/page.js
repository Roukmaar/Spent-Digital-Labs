import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content';

export default function page() {
    return (
        <main className="min-h-screen max-w-screen bg-stone-100">
            <div className="flex">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Header />
                    <div className="p-5 md:p-10 w-full">
                        <h2 className='text-4xl md:text-5xl font-semibold text-gray-800 py-2 mb-5'>Settings</h2>
                        {/* Add your main content for the Publications page here */}
                        <Content/>


                    </div>
                </div>
            </div>
        </main>
    );
}
