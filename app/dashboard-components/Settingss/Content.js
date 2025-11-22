"use client";
import {
  faUserAlt,
  faCog,
  faUpload,
  faExclamationTriangle,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo, useState } from "react";
import Image from "next/image";

export default function Content() {
  const [activeTab, setActiveTab] = useState("profile");

  // Profile state
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("Spirit Phillips");
  const [username, setUsername] = useState("spiritphillips");
  const [email, setEmail] = useState("admin@spenddigitallab.com");
  const [role, setRole] = useState("Administrator");
  const [phone, setPhone] = useState("+1 234 567 8900");
  const [bio, setBio] = useState(
    "Managing the Spent Digital Lab admin dashboard"
  );
  const [links, setLinks] = useState({ linkedin: "", github: "", twitter: "" });

  // Password state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Settings state
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [pushNotif, setPushNotif] = useState(false);
  const [privacy, setPrivacy] = useState({
    showProfilePublicly: true,
    shareAnalytics: false,
  });

  // UI feedback
  const [toast, setToast] = useState(null);

  // Delete Account modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState("");

  // Upload handlers
  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePic(reader.result);
      setToast({ type: "success", message: "Profile photo uploaded." });
      clearToastAfterDelay();
    };
    reader.readAsDataURL(file);
  };

  // Remove photo handler (with confirmation)
  const handleRemovePhoto = () => {
    if (!profilePic) {
      setToast({ type: "error", message: "No profile photo to remove." });
      clearToastAfterDelay();
      return;
    }
    const confirmed = window.confirm(
      "Remove profile photo? This cannot be undone in the UI."
    );
    if (confirmed) {
      setProfilePic(null);
      setToast({ type: "success", message: "Profile photo removed." });
      clearToastAfterDelay();
    }
  };

  // Helper to clear toast after 3s
  const clearToastAfterDelay = () => {
    setTimeout(() => setToast(null), 3000);
  };

  // Drag-and-drop support
  const [isDragging, setIsDragging] = useState(false);
  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        setToast({ type: "success", message: "Profile photo uploaded." });
        clearToastAfterDelay();
      };
      reader.readAsDataURL(file);
    } else {
      setToast({ type: "error", message: "Please drop a valid image file." });
      clearToastAfterDelay();
    }
  };

  // Password strength
  const passwordStrength = useMemo(() => {
    const p = newPassword;
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[a-z]/.test(p)) score++;
    if (/\d/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    if (p.length >= 12) score++;
    const levels = [
      "Very weak",
      "Weak",
      "Fair",
      "Good",
      "Strong",
      "Very strong",
    ];
    return { score, label: levels[Math.min(score, levels.length - 1)] };
  }, [newPassword]);

  const strengthColor = useMemo(() => {
    const s = passwordStrength.score;
    return s <= 1
      ? "bg-red-500"
      : s === 2
      ? "bg-orange-500"
      : s === 3
      ? "bg-yellow-500"
      : s === 4
      ? "bg-green-500"
      : "bg-emerald-600";
  }, [passwordStrength]);

  // Actions
  const saveProfile = () => {
    setToast({ type: "success", message: "Profile updated successfully." });
    clearToastAfterDelay();
  };

  const savePassword = () => {
    if (!newPassword || newPassword !== confirmPassword) {
      setToast({ type: "error", message: "Passwords do not match." });
      clearToastAfterDelay();
      return;
    }
    if (passwordStrength.score < 3) {
      setToast({
        type: "error",
        message: "Please choose a stronger password.",
      });
      clearToastAfterDelay();
      return;
    }
    setToast({ type: "success", message: "Password changed successfully." });
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    clearToastAfterDelay();
  };

  const saveSettings = () => {
    setToast({ type: "success", message: "Settings saved." });
    clearToastAfterDelay();
  };

  const openDeleteModal = () => {
    setDeleteConfirmText("");
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteAccount = () => {
    if (deleteConfirmText !== "DELETE") {
      setToast({ type: "error", message: "Type DELETE to confirm." });
      clearToastAfterDelay();
      return;
    }
    setIsDeleteModalOpen(false);
    setToast({ type: "success", message: "Account deletion requested." });
    clearToastAfterDelay();
    // Call deletion endpoint here
  };

  return (
    <section>
      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-4 right-4 z-50 px-4 py-2 rounded shadow text-white ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="space-y-8">
        <div className="w-full">
          <p className="text-gray-600 mb-6">
            Manage your account settings and preferences
          </p>

          {/* Tabs */}
          <div className="md:flex space-y-3 gap-4 mb-6">
            <button
              onClick={() => setActiveTab("profile")}
              className={`px-4 py-2 rounded-lg shadow flex items-center gap-2 ${
                activeTab === "profile"
                  ? "bg-blue-900 text-white"
                  : "bg-white text-black"
              }`}
            >
              <FontAwesomeIcon icon={faUserAlt} className="size-4" /> Profile
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className={`px-4 py-2 rounded-lg shadow flex items-center gap-2 ${
                activeTab === "settings"
                  ? "bg-blue-900 text-white"
                  : "bg-white text-black"
              }`}
            >
              <FontAwesomeIcon icon={faCog} className="size-4" /> Settings
            </button>
          </div>

          {/* Profile tab */}
          {activeTab === "profile" && (
            <div className="space-y-8">
              {/* Profile information */}
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-bold text-black mb-1">
                  Profile Information
                </h2>
                <p className="text-gray-600 mb-4">
                  Update your profile details and personal information
                </p>

                {/* Photo upload with drag-and-drop */}
                <div className="md:flex items-center space-y-3 md:gap-4 mb-6">
                  <div
                    className={`w-15 h-15 ${
                      isDragging ? "ring-2 ring-blue-500" : ""
                    } bg-gray-200 rounded-full flex items-center justify-center text-xl font-semibold text-gray-600 overflow-hidden`}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={onDrop}
                    title="Drag and drop an image here"
                  >
                    {profilePic ? (
                      <Image
                        src={profilePic}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      "SP"
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <input
                        type="file"
                        accept="image/*"
                        id="upload-photo"
                        className="hidden"
                        onChange={handleUpload}
                      />
                      <label
                        htmlFor="upload-photo"
                        className="hover:bg-gray-200 px-4 text-black py-2 border rounded-md flex items-center gap-2 text-sm cursor-pointer"
                      >
                        <FontAwesomeIcon
                          icon={faUpload}
                          className="size-4 text-blue-900"
                        />{" "}
                        Upload Photo
                      </label>

                      {/* Dedicated Remove Profile Photo button */}
                      <button
                        type="button"
                        onClick={() => {
                          if (!profilePic) return;
                          setProfilePic(null);
                          setToast({
                            type: "success",
                            message: "Profile photo removed.",
                          });
                          setTimeout(() => setToast(null), 3000);
                        }}
                        className={`px-4 py-2 border rounded-md text-sm ${
                          profilePic
                            ? "text-red-600 hover:bg-red-100"
                            : "text-gray-400 cursor-not-allowed"
                        }`}
                        title={
                          profilePic
                            ? "Remove photo"
                            : "No profile photo to remove"
                        }
                      >
                        Remove Photo
                      </button>
                    </div>

                    
                  </div>
                </div>

                {/* Profile fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      type="text"
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Username
                    </label>
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Role
                    </label>
                    <input
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      type="text"
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="text"
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    type="text"
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>

                {/* Social links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      LinkedIn
                    </label>
                    <input
                      value={links.linkedin}
                      onChange={(e) =>
                        setLinks({ ...links, linkedin: e.target.value })
                      }
                      type="url"
                      placeholder="https://linkedin.com/in/..."
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      GitHub
                    </label>
                    <input
                      value={links.github}
                      onChange={(e) =>
                        setLinks({ ...links, github: e.target.value })
                      }
                      type="url"
                      placeholder="https://github.com/..."
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Twitter
                    </label>
                    <input
                      value={links.twitter}
                      onChange={(e) =>
                        setLinks({ ...links, twitter: e.target.value })
                      }
                      type="url"
                      placeholder="https://twitter.com/..."
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>
                </div>

                <button
                  onClick={saveProfile}
                  className="bg-blue-950 hover:bg-blue-900 text-white px-6 py-2 rounded-md"
                >
                  Save Changes
                </button>
              </div>

              {/* Change password */}
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-bold text-black mb-1">
                  Change Password
                </h2>
                <p className="text-gray-600 mb-6">
                  Update your password to keep your account secure
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <input
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      type="password"
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      type="password"
                      className="w-full border rounded-md px-3 py-2"
                    />
                    <div className="mt-2">
                      <div className="h-2 w-full bg-gray-200 rounded">
                        <div
                          className={`h-2 rounded ${strengthColor}`}
                          style={{
                            width: `${(passwordStrength.score / 5) * 100}%`,
                          }}
                        />
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        Strength: {passwordStrength.label}
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="password"
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>
                </div>

                <button
                  onClick={savePassword}
                  className="bg-blue-950 hover:bg-blue-900 text-white px-6 py-2 rounded-md"
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Settings tab */}
          {activeTab === "settings" && (
            <div className="space-y-8">
              {/* Preferences */}
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-bold text-black mb-1">Settings</h2>
                <p className="text-gray-600 mb-4">
                  Customize your dashboard preferences
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Enable Dark Mode</span>
                    <input
                      type="checkbox"
                      checked={darkMode}
                      onChange={() => setDarkMode(!darkMode)}
                      className="cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Language</span>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="border rounded-md px-3 py-2"
                    >
                      <option value="en">English</option>
                      <option value="fr">French</option>
                      <option value="ha">Hausa</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Email Notifications</span>
                    <input
                      type="checkbox"
                      checked={emailNotif}
                      onChange={() => setEmailNotif(!emailNotif)}
                      className="cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">SMS Notifications</span>
                    <input
                      type="checkbox"
                      checked={smsNotif}
                      onChange={() => setSmsNotif(!smsNotif)}
                      className="cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Push Notifications</span>
                    <input
                      type="checkbox"
                      checked={pushNotif}
                      onChange={() => setPushNotif(!pushNotif)}
                      className="cursor-pointer"
                    />
                  </div>
                </div>

                {/* Privacy controls */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Show profile publicly</span>
                    <input
                      type="checkbox"
                      checked={privacy.showProfilePublicly}
                      onChange={() =>
                        setPrivacy({
                          ...privacy,
                          showProfilePublicly: !privacy.showProfilePublicly,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">
                      Allow analytics and usage tracking
                    </span>
                    <input
                      type="checkbox"
                      checked={privacy.shareAnalytics}
                      onChange={() =>
                        setPrivacy({
                          ...privacy,
                          shareAnalytics: !privacy.shareAnalytics,
                        })
                      }
                    />
                  </div>
                </div>

                <button
                  onClick={saveSettings}
                  className="bg-blue-950 hover:bg-blue-900 text-white px-6 py-2 rounded-md"
                >
                  Save Settings
                </button>
              </div>

              {/* Delete account with confirmation */}
              <div className="bg-white rounded-xl shadow p-6 border border-red-300">
                <h2 className="text-xl font-bold text-red-600 mb-1">
                  Delete Account
                </h2>
                <p className="text-gray-600 mb-4">
                  Permanently delete your account and all associated data. This
                  action cannot be undone.
                </p>
                <button
                  onClick={openDeleteModal}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faTrashAlt} /> Delete Account
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Delete confirmation modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex items-center gap-2 mb-3">
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                className="text-red-600"
              />
              <h3 className="text-lg font-bold text-black">
                Confirm account deletion
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              This will permanently delete your account and cannot be undone. To
              confirm, type DELETE in the box below:
            </p>
            <input
              type="text"
              value={deleteConfirmText}
              onChange={(e) => setDeleteConfirmText(e.target.value)}
              placeholder="Type DELETE to confirm"
              className="w-full border rounded-md px-3 py-2 mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteAccount}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
