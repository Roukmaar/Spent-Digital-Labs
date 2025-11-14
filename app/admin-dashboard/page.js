import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from './Sidebar';
import Header from './Header';
import StatCard from './StatCard';
import Publications from './Publications';
import QuickActions from './QuickActions';
import Events from './Events';

export default function page() {
    return (
        <main className="min-h-screen w-full bg-stone-100">
            <div className="flex">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Header />
                    <div className="p-6">
                        <h2 className='text-4xl md:text-5xl font-semibold text-gray-800 py-2 mb-5 mt-3'>Overview</h2>
                        <div className="">
                            <StatCard />
                        </div>
                        <div className="mt-8">
                            <Publications />
                        </div>
                        <QuickActions />
                        <Events />
                    </div>
                </div>
            </div>
        </main>
    );
}
