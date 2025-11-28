'use client'
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt, faEnvelope, faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function Content() {
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "Team Marble",
      members: [
        {
          id: 1,
          name: "Alexander Akosile O.",
          role: "Team Leader",
          status: "active",
          specialty: "Frontend",
          description: "Develops scalable and modern websites.",
          email: "alexakosile1@gmail.com",
          phone: "(+234) 80337 70253",
          social: { type: "twitter", handle: "@kaptal_alex", url: "https://x.com/kaptal_alex?t=gFaKBZpDgfBcqc1F_ftw2A&s=08" },
          image: "/alex.jpg"
        },
        {
          id: 2,
          name: "Adeogun Praise E.",
          role: "Member",
          status: "active",
          specialty: "Backend",
          description: "Ensures data integrity, security, and performance.",
          email: "spraiseadeogun2@gmail.com",
          phone: "(+234) 91617 84554",
          social: { type: "linkedin", handle: "@Praise Adeogun", url: "https://www.linkedin.com/in/praise-adeogun-a008b72a6" },
          image: "/praise2.jpg"
        },
        {
          id: 3,
          name: "Samuel Okpokam D.",
          role: "Member",
          status: "active",
          specialty: "Mobile Dev.",
          description: "Creates scalable, responsive, and engaging mobile applications.",
          email: "isaacnewtondewizard@gmail.com",
          phone: "(+234) 81003 67291",
          social: { type: "twitter", handle: "@isaac_newt27907", url: "https://x.com/isaac_newt27907?t=dVjor3SVbEU7sTU0Qy-v2w&s=08" },
          image: "/samuel.jpg"
        },
        {
          id: 4,
          name: "Onatade Haliyah O.",
          role: "Member",
          status: "active",
          specialty: "Prod. Design",
          description: "Produces user-centered designs that drive business success.",
          email: "opeyemihaliyah6@gmail.com",
          phone: "(+234) 91282 68359",
          social: { type: "twitter", handle: "@yemmiemotara", url: "https://x.com/yemmiemotara?t=oHuT5pl-ib9rnkr0RpvmEw&s=08" },
          image: "/haliyah.jpg"
        },
        {
          id: 5,
          name: "Olatunde U. Farouq",
          role: "Member",
          status: "active",
          specialty: "Frontend",
          description: "Creates fast, responsive, and engaging interfaces.",
          email: "umaar.farouq123@gmail.com",
          phone: "(+234) 70537 25664",
          social: { type: "twitter", handle: "@Umarfarouq8080", url: "https://x.com/Umarfarouq8080?s=08" },
          image: "/farouq.jpg"
        },
        {
          id: 6,
          name: "Ajibade O. Favour",
          role: "Member",
          status: "active",
          specialty: "Prod Design",
          description: "Designs visually appealing products that brand your unique identity.",
          email: "Ajibadeoluwaseun018@gmail.com",
          phone: "(+234) 90234 82470",
          social: { type: "linkedin", handle: "@Ajibade Oluwaseun", url: "https://www.linkedin.com/in/ajibade-oluwaseun-493970386" },
          image: "/Seun.jpg"
        }
      ]
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [selectedTeamId, setSelectedTeamId] = useState(null);
  const [newTeamName, setNewTeamName] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    role: "Member",
    status: "active",
    specialty: "",
    description: "",
    email: "",
    phone: "",
    socialType: "twitter",
    socialHandle: "",
    socialUrl: "",
    image: "",
    teamId: null
  });

  // Get all members across all teams for search
  const getAllMembers = () => {
    return teams.flatMap(team => 
      team.members.map(member => ({ ...member, teamId: team.id, teamName: team.name }))
    );
  };

  // Filter members based on search
  const filteredMembers = getAllMembers().filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.teamName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add new team
  const handleAddTeam = () => {
    if (newTeamName.trim()) {
      const newTeam = {
        id: Date.now(),
        name: newTeamName,
        members: []
      };
      setTeams(prev => [...prev, newTeam]);
      setNewTeamName("");
      setIsTeamModalOpen(false);
    }
  };

  // Delete team
  const handleDeleteTeam = (teamId) => {
    if (window.confirm("Are you sure you want to delete this team? All members will be removed.")) {
      setTeams(prev => prev.filter(team => team.id !== teamId));
    }
  };

  // Handle delete member
  const handleDeleteMember = (teamId, memberId) => {
    if (window.confirm("Are you sure you want to remove this team member?")) {
      setTeams(prev => prev.map(team => 
        team.id === teamId 
          ? { ...team, members: team.members.filter(member => member.id !== memberId) }
          : team
      ));
    }
  };

  // Handle edit member
  const handleEditMember = (teamId, member) => {
    setEditingMember(member);
    setSelectedTeamId(teamId);
    setFormData({
      name: member.name,
      role: member.role,
      status: member.status,
      specialty: member.specialty,
      description: member.description,
      email: member.email,
      phone: member.phone,
      socialType: member.social.type,
      socialHandle: member.social.handle,
      socialUrl: member.social.url,
      image: member.image,
      teamId: teamId
    });
    setIsMemberModalOpen(true);
  };

  // Handle add new member
  const handleAddNewMember = (teamId = null) => {
    setEditingMember(null);
    setSelectedTeamId(teamId);
    setFormData({
      name: "",
      role: "Member",
      status: "active",
      specialty: "",
      description: "",
      email: "",
      phone: "",
      socialType: "twitter",
      socialHandle: "",
      socialUrl: "",
      image: "",
      teamId: teamId || (teams.length > 0 ? teams[0].id : null)
    });
    setIsMemberModalOpen(true);
  };

  // Handle form submit
  const handleSubmitMember = (e) => {
    e.preventDefault();
    
    const memberData = {
      name: formData.name,
      role: formData.role,
      status: formData.status,
      specialty: formData.specialty,
      description: formData.description,
      email: formData.email,
      phone: formData.phone,
      social: {
        type: formData.socialType,
        handle: formData.socialHandle,
        url: formData.socialUrl
      },
      image: formData.image || "/default-avatar.jpg"
    };

    const targetTeamId = formData.teamId || selectedTeamId;

    if (editingMember) {
      // Update existing member
      setTeams(prev => prev.map(team => 
        team.id === targetTeamId
          ? {
              ...team,
              members: team.members.map(member =>
                member.id === editingMember.id ? { ...memberData, id: member.id } : member
              )
            }
          : team
      ));
    } else {
      // Add new member
      setTeams(prev => prev.map(team =>
        team.id === targetTeamId
          ? { ...team, members: [...team.members, { ...memberData, id: Date.now() }] }
          : team
      ));
    }

    setIsMemberModalOpen(false);
  };

  const getSocialIcon = (type) => {
    switch (type) {
      case "twitter": return faTwitter;
      case "linkedin": return faLinkedin;
      default: return faTwitter;
    }
  };

  return (
    <section className="">
      <div className="p-3 min-h-screen w-full">
        <div className="md:flex space-y-2 justify-between items-center mb-6">
          <div>
            <p className="text-gray-500 text-xl md:text-2xl">
              Manage your organization&apos;s team members
            </p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setIsTeamModalOpen(true)}
              className="bg-blue-950 hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm"
            >
              + Add Team
            </button>
            <button 
              onClick={() => handleAddNewMember()}
              className="bg-blue-950 hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm"
            >
              + Add Member
            </button>
          </div>
        </div>

        <input
          type="text"
          placeholder="Search members or teams..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="placeholder:text-gray-400 w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none mb-6"
        />

        {/* Show filtered results when searching */}
        {searchTerm && (
          <div className="mb-6 space-y-5 border border-blue-700 rounded-lg p-3">
            <p className="font-semibold text-2xl md:text-3xl text-black">Search Results</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
              {filteredMembers.map((member) => (
                <div key={`${member.teamId}-${member.id}`} className="bg-white p-4 rounded-xl shadow">
                  <div className="flex items-center mb-4 justify-between">
                    <div className="flex space-x-4">
                      <div className="rounded-full h-12 w-12 flex items-center justify-center font-semibold">
                        <Image 
                          src={member.image} 
                          alt={member.name}
                          width={48}
                          height={48}
                          className="rounded-full h-12 w-12 object-cover" 
                        />
                      </div>
                      <div>
                        <h2 className="font-bold text-black">{member.name}</h2>
                        <p className="text-sm text-blue-600">{member.role}</p>
                        <p className="text-xs text-gray-500">{member.teamName}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 text-gray-500">
                      <FontAwesomeIcon
                        icon={faPencilAlt}
                        onClick={() => handleEditMember(member.teamId, member)}
                        className="size-4 text-blue-900 hover:text-blue-700 cursor-pointer"
                      />
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        onClick={() => handleDeleteMember(member.teamId, member.id)}
                        className="size-4 text-red-600 hover:text-red-400 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-2 mb-2">
                    <span className="bg-blue-800 text-white text-xs px-2 py-0.5 rounded-full">
                      {member.status}
                    </span>
                    <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                      {member.specialty}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    {member.description}
                  </p>

                  <hr className="my-4 border-gray-300" />

                  <div className="text-sm text-gray-600 space-y-1">
                    <p className="flex gap-1.5 items-center hover:underline">
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-1.5 items-center"
                      >
                        <FontAwesomeIcon icon={faEnvelope} className="size-4 text-blue-900" />
                        {member.email}
                      </a>
                    </p>
                    <p className="flex gap-1.5 items-center">
                      <FontAwesomeIcon icon={faWhatsapp} className="size-4 text-blue-900" />
                      {member.phone}
                    </p>
                    <Link href={member.social.url}>
                      <p className="flex gap-1.5 items-center hover:underline">
                        <FontAwesomeIcon
                          icon={getSocialIcon(member.social.type)}
                          className="size-4 text-blue-900"
                        />
                        {member.social.handle}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredMembers.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No team members found matching your search.
              </div>
            )}
          </div>
        )}

        {/* Show all teams when not searching */}
        {!searchTerm && teams.map((team) => (
          <div key={team.id} className="space-y-5 border border-blue-700 rounded-lg p-3 mb-6">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-2xl md:text-3xl text-black">{team.name}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAddNewMember(team.id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                >
                  + Add Member
                </button>
                <button
                  onClick={() => handleDeleteTeam(team.id)}
                  className="text-red-600 hover:text-red-800 px-2"
                  title="Delete Team"
                >
                  <FontAwesomeIcon icon={faTrashAlt} className="size-5" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
              {team.members.map((member) => (
                <div key={member.id} className="bg-white p-4 rounded-xl shadow">
                  <div className="flex items-center mb-4 justify-between">
                    <div className="flex space-x-4">
                      <div className="rounded-full h-12 w-12 flex items-center justify-center font-semibold">
                        <Image 
                          src={member.image} 
                          alt={member.name}
                          width={48}
                          height={48}
                          className="rounded-full h-12 w-12 object-cover" 
                        />
                      </div>
                      <div>
                        <h2 className="font-bold text-black">{member.name}</h2>
                        <p className="text-sm text-blue-600">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 text-gray-500">
                      <FontAwesomeIcon
                        icon={faPencilAlt}
                        onClick={() => handleEditMember(team.id, member)}
                        className="size-4 text-blue-900 hover:text-blue-700 cursor-pointer"
                      />
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        onClick={() => handleDeleteMember(team.id, member.id)}
                        className="size-4 text-red-600 hover:text-red-400 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-2 mb-2">
                    <span className="bg-blue-800 text-white text-xs px-2 py-0.5 rounded-full">
                      {member.status}
                    </span>
                    <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                      {member.specialty}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    {member.description}
                  </p>

                  <hr className="my-4 border-gray-300" />

                  <div className="text-sm text-gray-600 space-y-1">
                    <p className="flex gap-1.5 items-center hover:underline">
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-1.5 items-center"
                      >
                        <FontAwesomeIcon icon={faEnvelope} className="size-4 text-blue-900" />
                        {member.email}
                      </a>
                    </p>
                    <p className="flex gap-1.5 items-center">
                      <FontAwesomeIcon icon={faWhatsapp} className="size-4 text-blue-900" />
                      {member.phone}
                    </p>
                    <Link href={member.social.url}>
                      <p className="flex gap-1.5 items-center hover:underline">
                        <FontAwesomeIcon
                          icon={getSocialIcon(member.social.type)}
                          className="size-4 text-blue-900"
                        />
                        {member.social.handle}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}

              {team.members.length === 0 && (
                <div className="col-span-2 text-center py-8 text-gray-500">
                  No members in this team yet. Click &quot;+ Add Member&quot; to add one.
                </div>
              )}
            </div>
          </div>
        ))}

        {teams.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No teams yet. Click &quot;+ Add Team&quot; to create your first team.
          </div>
        )}
      </div>

      {/* Add Team Modal */}
      {isTeamModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Add New Team</h2>
              <button
                onClick={() => setIsTeamModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Team Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={newTeamName}
                onChange={(e) => setNewTeamName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Team Alpha"
                onKeyPress={(e) => e.key === 'Enter' && handleAddTeam()}
              />

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setIsTeamModalOpen(false)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTeam}
                  className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition font-medium"
                >
                  Create Team
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Member Modal */}
      {isMemberModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">
                {editingMember ? "Edit Member" : "Add New Member"}
              </h2>
              <button
                onClick={() => setIsMemberModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmitMember} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.teamId || ''}
                  onChange={(e) => setFormData({...formData, teamId: parseInt(e.target.value)})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  {teams.map(team => (
                    <option key={team.id} value={team.id}>{team.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Team Leader">Team Leader</option>
                    <option value="Member">Member</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specialty <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.specialty}
                    onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Frontend, Backend"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Brief description of expertise..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="(+234) 12345 67890"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Social Platform
                  </label>
                  <select
                    value={formData.socialType}
                    onChange={(e) => setFormData({...formData, socialType: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="twitter">Twitter</option>
                    <option value="linkedin">LinkedIn</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Social Handle
                  </label>
                  <input
                    type="text"
                    value={formData.socialHandle}
                    onChange={(e) => setFormData({...formData, socialHandle: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="@username"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profile URL
                  </label>
                  <input
                    type="url"
                    value={formData.socialUrl}
                    onChange={(e) => setFormData({...formData, socialUrl: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image Path
                </label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="/image.jpg"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsMemberModalOpen(false)}
                  className="w-full sm:w-auto px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-900 transition font-medium"
                >
                  {editingMember ? "Update Member" : "Add Member"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}