"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const token =
    (typeof window !== "undefined" && (localStorage.getItem("spentlab_token") || sessionStorage.getItem("spentlab_token"))) ||
    null;

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://spent-digital-lab-backend.onrender.com/api/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data?.data || []);
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

  const handleApprove = async (userId) => {
    setStatus("Approving...");
    try {
      // Option A: call helper
      // const result = await approveUser(userId);
      // if (!result.ok) throw result.error;

      // Option B: inline call
      await axios.post(
        `https://spent-digital-lab-backend.onrender.com/api/admin/users/${userId}/approve`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setStatus(`User ${userId} approved`);
      await fetchUsers(); // refresh list
    } catch (err) {
      console.error("Approve error:", err.response?.data || err.message);
      setStatus(err.response?.data?.message || "Failed to approve user");
    }
  };

  return (
    <div>
      <h2>Admin Users</h2>
      {status && <div className="mb-2">{status}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="w-full">
          <thead>
            <tr><th>Email</th><th>Role</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {users.map((u) => {
              const id = u.id || u._id || u.user?.id;
              const email = u.email || u.user?.email;
              const role = u.role || u.user?.role;
              return (
                <tr key={id || email}>
                  <td>{email}</td>
                  <td>{role}</td>
                  <td>
                    <button
                      onClick={() => id && handleApprove(id)}
                      disabled={!id}
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
