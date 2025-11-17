import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Content() {
    return (
        <section>
            <div className="p-6">
                <p className="text-gray-600 mb-4">
                    Manage and respond to contact form submissions
                </p>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0 mb-4">
                    <input
                        type="text"
                        placeholder="Search by name, email, or subject..."
                        className=" placeholder:text-gray-400 w-full md:w-2/3 px-4 py-2 border rounded-lg shadow-sm focus:outline-none mb-2 md:mb-0"
                    />
                    <select className="text-black w-full md:w-1/4 px-4 py-2 border rounded-lg shadow-sm focus:outline-none">
                        <option>All Status</option>
                        <option>New</option>
                        <option>Responded</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="text-lg font-semibold text-black">John Smith</div>
                        <div className="text-sm text-gray-500 mb-2">
                            john.smith@example.com
                        </div>
                        <div className="mb-2 text-black">
                            <strong>Subject:</strong> Inquiry about collaboration
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <div className="space-x-2 md:space-x-5">
                                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">
                                    New
                                </span>
                                <span>1/15/2024</span>
                            </div>
                            <div className="space-x-2 pt-1">
                                <FontAwesomeIcon
                                    icon={faTrashAlt}
                                    className="size-4 text-red-600 hover:text-red-400 cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="text-lg font-semibold text-black">Sarah Johnson</div>
                        <div className="text-sm text-gray-500 mb-2">
                            sarah.j@example.com
                        </div>
                        <div className="mb-2 text-black">
                            <strong>Subject:</strong> Question about services
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <div className="space-x-2 md:space-x-5">
                                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                                    New
                                </span>
                                <span>1/15/2024</span>
                            </div>
                            <div className="space-x-2 pt-1">
                                <FontAwesomeIcon
                                    icon={faTrashAlt}
                                    className="size-4 text-red-600 hover:text-red-400 cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="text-lg font-semibold text-black">Michael Chen</div>
                        <div className="text-sm text-gray-500 mb-2">m.chen@example.com</div>
                        <div className="mb-2 text-black">
                            <strong>Subject:</strong> General inquiry
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <div className="space-x-2 md:space-x-5">
                                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">
                                    New
                                </span>
                                <span>1/15/2024</span>
                            </div>
                            <div className="space-x-2 pt-1">
                                <FontAwesomeIcon
                                    icon={faTrashAlt}
                                    className="size-4 text-red-600 hover:text-red-400 cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
