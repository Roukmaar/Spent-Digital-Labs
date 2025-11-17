import React from "react";
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
    faGear,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
    return (
        <section>
            <aside className="w-20 h-full md:w-60 bg-white z-10 shadow-md ">
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
                        <button className="w-full flex items-center gap-3 px-6 py-3 text-left hover:text-teal-600 hover:bg-cyan-50 mt-8">
                            {" "}
                            <FontAwesomeIcon
                                icon={faChartLine}
                                className="w-5 h-5 ml-1 md:ml-0 text-black "
                            />
                            <span className="font-medium hidden md:flex">Dashboard</span>
                        </button>
                    </Link>
                    <Link href="/user-dashboard/Publications">
                        <button className="w-full flex items-center gap-3 px-6 py-3 text-left hover:text-teal-600 hover:bg-cyan-50 mt-8">
                            <FontAwesomeIcon
                                icon={faFileText}
                                className="w-5 h-5 ml-1 md:ml-0 text-black "
                            />
                            <span className="font-medium hidden md:flex">Publications</span>
                        </button>
                    </Link>
                    <Link href="/user-dashboard/Projects">
                        <button className="w-full flex items-center gap-3 px-6 py-3 text-left hover:text-teal-600 bg-cyan-50 mt-8">
                            <FontAwesomeIcon icon={faCode} className=" text-black w-5 h-5 ml-1 md:ml-0" />
                            <span className="font-medium hidden md:flex">Projects</span>
                        </button>
                    </Link>
                    <Link href="/user-dashboard/Eventss">
                        <button className="w-full flex items-center gap-3 px-6 py-3 text-left hover:text-teal-600 hover:bg-cyan-50 mt-8">
                            <FontAwesomeIcon
                                icon={faCalendar}
                                className="w-5 h-5 ml-1 md:ml-0 text-black "
                            />
                            <span className="font-medium hidden md:flex">Events</span>
                        </button>
                    </Link>

                    <Link href="/user-dashboard/Settingss">
                        <button className="w-full flex items-center gap-3 px-6 py-3 text-left hover:text-teal-600 hover:bg-cyan-50 mt-8">
                            {" "}
                            <FontAwesomeIcon icon={faUser} className=" text-black w-5 h-5 ml-1 md:ml-0" />
                            <span className="font-medium hidden md:flex">Profile</span>
                        </button>
                    </Link>
                    <Link href="/.">
                        <button className="w-full flex items-center gap-3 px-6 py-3 text-left text-red-600 hover:bg-red-50 mt-25 border-t border-gray-200 ">
                            <FontAwesomeIcon
                                icon={faArrowRightToBracket}
                                className="w-5 h-5 ml-1 md:ml-0"
                            />
                            <span className="font-medium hidden md:flex">logout</span>
                        </button>
                    </Link>
                </nav>
            </aside>
        </section>
    );
}
