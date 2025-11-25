'use client'
import { faTrashAlt, faReply, faEdit } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Content() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Inquiry about collaboration",
      status: "New",
      date: "1/15/2024",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      subject: "Question about services",
      status: "New",
      date: "1/15/2024",
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "m.chen@example.com",
      subject: "General inquiry",
      status: "New",
      date: "1/15/2024",
    },
  ]);

  // Modal state
  const [isRespondModalOpen, setIsRespondModalOpen] = useState(false);
  const [activeSubmission, setActiveSubmission] = useState(null);
  const [responseText, setResponseText] = useState("");

  // Delete handler
  const handleDelete = (id) => {
    setSubmissions((prev) => prev.filter((s) => s.id !== id));
  };

  // Open respond modal
  const openRespondModal = (submission) => {
    setActiveSubmission(submission);
    setResponseText("");
    setIsRespondModalOpen(true);
  };

  // Submit response
  const handleRespondSubmit = () => {
    if (activeSubmission) {
      setSubmissions((prev) =>
        prev.map((s) =>
          s.id === activeSubmission.id
            ? { ...s, status: "Responded", response: responseText }
            : s
        )
      );
    }
    setIsRespondModalOpen(false);
  };

  // Edit handler
  const handleEdit = (id) => {
    const newSubject = prompt("Enter new subject:");
    if (newSubject) {
      setSubmissions((prev) =>
        prev.map((s) =>
          s.id === id ? { ...s, subject: newSubject } : s
        )
      );
    }
  };

  // Filter + search logic
  const filteredSubmissions = submissions.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.subject.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All Status" || s.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <section>
      <div className="py-6">
        <p className="text-gray-600 mb-4">
          Manage and respond to contact form submissions
        </p>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0 mb-4">
          <input
            type="text"
            placeholder="Search by name, email, or subject..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="placeholder:text-gray-400 w-full md:w-2/3 px-4 py-2 border rounded-lg shadow-sm focus:outline-none mb-2 md:mb-0"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="text-black w-full md:w-1/4 px-4 py-2 border rounded-lg shadow-sm focus:outline-none"
          >
            <option>All Status</option>
            <option>New</option>
            <option>Responded</option>
          </select>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          {filteredSubmissions.map((s) => (
            <div key={s.id} className="bg-white rounded-lg shadow p-4">
              <div className="text-lg font-semibold text-black">{s.name}</div>
              <div className="text-sm text-gray-500 mb-2">{s.email}</div>
              <div className="mb-2 text-black">
                <strong>Subject:</strong> {s.subject}
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="space-x-2 md:space-x-5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs text-white ${
                      s.status === "New"
                        ? "bg-blue-500"
                        : "bg-green-500"
                    }`}
                  >
                    {s.status}
                  </span>
                  <span>{s.date}</span>
                </div>
                <div className="flex space-x-2 pt-1">
                  <FontAwesomeIcon
                    icon={faReply}
                    onClick={() => openRespondModal(s)}
                    className="size-4 text-teal-600 hover:text-teal-800 cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faEdit}
                    onClick={() => handleEdit(s.id)}
                    className="size-4 text-yellow-600 hover:text-yellow-800 cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    onClick={() => handleDelete(s.id)}
                    className="size-4 text-red-600 hover:text-red-400 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Respond Modal */}
      {isRespondModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-bold mb-4 text-black">
              Respond to {activeSubmission?.name}
            </h2>
            <textarea
              value={responseText}
              onChange={(e) => setResponseText(e.target.value)}
              placeholder="Type your response..."
              className="w-full border rounded-lg p-3 text-sm mb-4 focus:outline-none"
              rows={5}
            />
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setIsRespondModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleRespondSubmit}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
              >
                Send Response
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
