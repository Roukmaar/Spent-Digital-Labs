'use client'
import { faCheckDouble, faTrashAlt, faPencilAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Content() {
  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      organization: "Tech Innovations Inc.",
      contactName: "Alice Williams",
      email: "alice@techinnovations.com",
      partnershipType: "Research Collaboration",
      status: "New",
      date: "1/15/2024",
      details: "Interested in collaborative research on AI technologies..."
    },
    {
      id: 2,
      organization: "Global Solutions Ltd",
      contactName: "Bob Martinez",
      email: "bob@globalsolutions.com",
      partnershipType: "Funding Partnership",
      status: "Under Review",
      date: "1/12/2024",
      details: "Seeking funding opportunities for joint projects..."
    },
    {
      id: 3,
      organization: "Education First",
      contactName: "Carol Zhang",
      email: "carol@educationfirst.org",
      partnershipType: "Academic Partnership",
      status: "Accepted",
      date: "1/10/2024",
      details: "Partnership for student exchange programs..."
    },
    {
      id: 4,
      organization: "GreenTech Partners",
      contactName: "Lena Ortiz",
      email: "lena@greentech.com",
      partnershipType: "Sustainability Partnership",
      status: "New",
      date: "2/02/2024",
      details: "Environmental sustainability initiatives..."
    },
    {
      id: 5,
      organization: "Health Alliance",
      contactName: "Dr. Samuel Park",
      email: "s.park@healthalliance.org",
      partnershipType: "Program Partnership",
      status: "Under Review",
      date: "2/01/2024",
      details: "Healthcare program collaboration..."
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  // Filter inquiries
  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesSearch = 
      inquiry.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.contactName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.partnershipType.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "All Status" || inquiry.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Delete inquiry
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this inquiry?")) {
      setInquiries(prev => prev.filter(inquiry => inquiry.id !== id));
    }
  };

  // Accept/Approve inquiry
  const handleAccept = (id) => {
    if (window.confirm("Accept this partnership inquiry?")) {
      setInquiries(prev => prev.map(inquiry => 
        inquiry.id === id ? { ...inquiry, status: "Accepted" } : inquiry
      ));
    }
  };

  // Open edit modal
  const handleEdit = (inquiry) => {
    setSelectedInquiry(inquiry);
    setEditModalOpen(true);
  };

  // Update inquiry status
  const handleUpdateStatus = (e) => {
    e.preventDefault();
    setInquiries(prev => prev.map(inquiry => 
      inquiry.id === selectedInquiry.id ? selectedInquiry : inquiry
    ));
    setEditModalOpen(false);
    setSelectedInquiry(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "New": return "bg-sky-500";
      case "Under Review": return "bg-orange-400";
      case "Accepted": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section className="">
      <div className="min-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-black">Partnership Inquiries</h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0 mb-4">
          <input
            type="text"
            placeholder="Search by organization, name, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 border border-gray-300 rounded-md focus:outline-none placeholder:text-gray-400 w-full md:w-2/3 py-2 focus:outline-blue-800 cursor-pointer hover:outline-blue-800 mb-2 md:mb-0"
          />
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="text-black w-full md:w-1/4 px-4 py-2 border rounded-lg shadow-sm focus:outline-none"
          >
            <option>All Status</option>
            <option>New</option>
            <option>Under Review</option>
            <option>Accepted</option>
          </select>
        </div>

        <div className="rounded-xl py-4">
          <h2 className="font-semibold text-lg text-black mb-4">
            All Inquiries ({filteredInquiries.length})
          </h2>

          {/* Mobile: show cards */}
          <div className="md:hidden space-y-4">
            {filteredInquiries.map((inquiry) => (
              <div key={inquiry.id} className="bg-white rounded-xl shadow p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-black">{inquiry.organization}</h3>
                    <p className="text-sm text-gray-600">{inquiry.partnershipType}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      {inquiry.contactName} •{" "}
                      <span className="text-gray-400">{inquiry.email}</span>
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <div>
                      <span className={`${getStatusColor(inquiry.status)} text-white text-xs px-2 py-1 rounded-full`}>
                        {inquiry.status}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">{inquiry.date}</div>
                  </div>
                </div>
                <div className="mt-3 flex gap-3 text-sm">
                  <FontAwesomeIcon 
                    icon={faPencilAlt}
                    onClick={() => handleEdit(inquiry)}
                    className="w-4 h-4 text-blue-600 hover:text-blue-800 cursor-pointer inline-block"
                    title="Edit"
                  />
                  <FontAwesomeIcon 
                    icon={faCheckDouble}
                    onClick={() => handleAccept(inquiry.id)}
                    className="w-4 h-4 text-green-600 hover:text-green-400 cursor-pointer inline-block"
                    title="Accept"
                  />
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    onClick={() => handleDelete(inquiry.id)}
                    className="w-4 h-4 text-red-600 hover:text-red-400 cursor-pointer inline-block"
                    title="Delete"
                  />   
                </div>
              </div>
            ))}
          </div>

          {/* Desktop/tablet: show table */}
          <div className="hidden md:block md:w-full">
            <table className="w-full shadow-sm rounded-lg">
              <thead className="text-gray-600 border px-3">
                <tr className="bg-gray-50 w-full">
                  <th className="table-cell text-left font-light text-gray-400 py-3 px-2 md:px-5 border-r-0 border-t border-b border-l rounded-l-md">
                    Organization
                  </th>
                  <th className="table-cell text-left font-light text-gray-400 py-3 px-2 md:px-5 border-r-0 border-t border-b rounded-t-md">
                    Contact
                  </th>
                  <th className="table-cell text-left font-light text-gray-400 py-3 px-2 md:px-5 border-r-0 border-t border-b rounded-t-md">
                    Partnership Type
                  </th>
                  <th className="table-cell text-center font-light text-gray-400 py-3 px-2 md:px-5 border-r-0 border-t border-b rounded-t-md">
                    Status
                  </th>
                  <th className="table-cell text-center font-light text-gray-400 py-3 px-2 md:px-5 border-r-0 border-t border-b rounded-t-md">
                    Submitted
                  </th>
                  <th className="table-cell text-center font-light text-gray-400 py-3 px-2 md:px-5 border-t border-b border-r rounded-t-md">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {filteredInquiries.map((inquiry, index) => (
                  <tr key={inquiry.id} className={index < filteredInquiries.length - 1 ? "border-b" : ""}>
                    <td className="p-3 wrap-break-word max-w-[18ch] md:max-w-none">
                      {inquiry.organization}
                    </td>
                    <td className="p-3 whitespace-normal wrap-break-word">
                      {inquiry.contactName}
                      <br />
                      <span className="text-xs text-gray-500">{inquiry.email}</span>
                    </td>
                    <td className="p-3 wrap-break-word">{inquiry.partnershipType}</td>
                    <td className="hidden md:table-cell text-center align-middle">
                      <span className={`${getStatusColor(inquiry.status)} text-white text-xs px-2 py-1 rounded-full`}>
                        {inquiry.status}
                      </span>
                    </td>
                    <td className="hidden md:table-cell text-center align-middle">
                      {inquiry.date}
                    </td>
                    <td className="hidden md:table-cell text-center align-middle space-x-3">
                      <FontAwesomeIcon 
                        icon={faPencilAlt}
                        onClick={() => handleEdit(inquiry)}
                        className="w-4 h-4 text-blue-600 hover:text-blue-800 cursor-pointer inline-block"
                        title="Edit"
                      />
                      <FontAwesomeIcon 
                        icon={faCheckDouble}
                        onClick={() => handleAccept(inquiry.id)}
                        className="w-4 h-4 text-green-600 hover:text-green-400 cursor-pointer inline-block"
                        title="Accept"
                      />
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        onClick={() => handleDelete(inquiry.id)}
                        className="w-4 h-4 text-red-600 hover:text-red-400 cursor-pointer inline-block"
                        title="Delete"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredInquiries.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No inquiries found matching your criteria.
            </div>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      {editModalOpen && selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">Edit Partnership Inquiry</h2>
              <button
                onClick={() => {
                  setEditModalOpen(false);
                  setSelectedInquiry(null);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleUpdateStatus} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    value={selectedInquiry.organization}
                    onChange={(e) => setSelectedInquiry({...selectedInquiry, organization: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    value={selectedInquiry.contactName}
                    onChange={(e) => setSelectedInquiry({...selectedInquiry, contactName: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={selectedInquiry.email}
                  onChange={(e) => setSelectedInquiry({...selectedInquiry, email: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Partnership Type
                  </label>
                  <input
                    type="text"
                    value={selectedInquiry.partnershipType}
                    onChange={(e) => setSelectedInquiry({...selectedInquiry, partnershipType: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={selectedInquiry.status}
                    onChange={(e) => setSelectedInquiry({...selectedInquiry, status: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>New</option>
                    <option>Under Review</option>
                    <option>Accepted</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Details
                </label>
                <textarea
                  rows={4}
                  value={selectedInquiry.details}
                  onChange={(e) => setSelectedInquiry({...selectedInquiry, details: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setEditModalOpen(false);
                    setSelectedInquiry(null);
                  }}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                >
                  Update Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}