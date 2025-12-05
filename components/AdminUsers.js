"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ApproveModal from "./ApproveModal";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const token =
    (typeof window !== "undefined" &&
      (localStorage.getItem("spentlab_token") || sessionStorage.getItem("spentlab_token"))) ||
    null;

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://spent-digital-lab-backend.onrender.com/api/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const list = res.data?.data || [];
      const normalized = list.map((u) => {
        const id = u.id || u._id || u.user?.id || u.userId;
        const email = u.email || u.user?.email || (u.user && u.user.email);
        const role = u.role || u.user?.role || (u.user && u.user.role);
        const status = u.status || u.user?.status || "n/a";
        return { id, email, role, status, raw: u };
      });
      setUsers(normalized);
      setStatus("");
    } catch (err) {
      console.error("Fetch users error:", err.response?.data || err.message);
      setStatus("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchUsers();
  }, [token]);

  const openModalFor = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedUser(null);
  };

  const handleSuccess = ({ userId, action }) => {
    setStatus(`User ${userId} ${action}ed`);
    fetchUsers();
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-lg shadow">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
        <h2 className="text-lg md:text-xl font-semibold text-black">Users</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={fetchUsers}
            className="text-sm bg-teal-500 text-white px-3 py-1 rounded hover:bg-teal-600"
          >
            Refresh
          </button>
          <span className="text-sm text-gray-600">{status}</span>
        </div>
      </div>

      {loading ? (
        <div className="py-8 text-center text-stone-500">Loading users...</div>
      ) : (
        <div className="overflow-x-auto">
          {/* Desktop table */}
          <table className="hidden md:table w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 text-black">
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((u) => (
                  <tr key={u.id || u.email} className="border-t text-black">
                    <td className="px-4 py-3">{u.email}</td>
                    <td className="px-4 py-3">{u.role}</td>
                    <td className="px-4 py-3">{u.status}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openModalFor(u)}
                          className="bg-blue-950 hover:bg-blue-800 text-white px-3 py-1 rounded"
                        >
                          Open
                        </button>
                        <button
                          onClick={() =>
                            u.id &&
                            (async () => {
                              try {
                                await axios.post(
                                  `https://spent-digital-lab-backend.onrender.com/api/admin/users/${u.id}/approve`,
                                  {},
                                  { headers: { Authorization: `Bearer ${token}` } }
                                );
                                setStatus(`User ${u.id} approved`);
                                fetchUsers();
                              } catch (err) {
                                console.error("Approve error:", err.response?.data || err.message);
                                setStatus("Failed to approve user");
                              }
                            })()
                          }
                          className="bg-teal-600 text-white px-3 py-1 rounded hover:bg-teal-500"
                        >
                          Approve
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Mobile list */}
          <div className="md:hidden space-y-3">
            {users.length === 0 ? (
              <div className="px-4 py-6 text-center text-gray-500">No users found</div>
            ) : (
              users.map((u) => (
                <div
                  key={u.id || u.email}
                  className="bg-white border rounded-lg p-3 shadow-sm flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 truncate">{u.email}</div>
                      <div className="text-xs text-gray-500">{u.role} • {u.status}</div>
                    </div>
                    <div className="ml-3 flex-shrink-0 flex items-center gap-2">
                      <button
                        onClick={() => openModalFor(u)}
                        className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
                      >
                        Open
                      </button>
                      <button
                        onClick={() =>
                          u.id &&
                          (async () => {
                            try {
                              await axios.post(
                                `https://spent-digital-lab-backend.onrender.com/api/admin/users/${u.id}/approve`,
                                {},
                                { headers: { Authorization: `Bearer ${token}` } }
                              );
                              setStatus(`User ${u.id} approved`);
                              fetchUsers();
                            } catch (err) {
                              console.error("Approve error:", err.response?.data || err.message);
                              setStatus("Failed to approve user");
                            }
                          })()
                        }
                        className="bg-green-600 text-white px-3 py-1 rounded text-sm"
                      >
                        Approve
                      </button>
                    </div>
                  </div>

                  {/* optional expanded details on mobile */}
                  <div className="text-xs text-black mt-1 break-words">
                    <span className="font-medium">ID:</span> <span className="font-mono">{u.id || "—"}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      <ApproveModal
        open={modalOpen}
        onClose={handleModalClose}
        user={selectedUser}
        onSuccess={handleSuccess}
      />
    </div>
  );
}
