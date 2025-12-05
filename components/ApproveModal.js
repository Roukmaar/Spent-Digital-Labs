"use client";

import { useState } from "react";
import axios from "axios";

export default function ApproveModal({ open, onClose, user, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  if (!open) return null;

  const token =
    (typeof window !== "undefined" &&
      (localStorage.getItem("spentlab_token") || sessionStorage.getItem("spentlab_token"))) ||
    null;

  const callEndpoint = async (action) => {
    if (!user?.id) {
      setStatus("Invalid user id");
      return;
    }
    setLoading(true);
    setStatus("");
    try {
      await axios.post(
        `https://spent-digital-lab-backend.onrender.com/api/admin/users/${user.id}/${action}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const msg = action === "approve" ? "approved" : "rejected";
      setStatus(`User ${user.id} ${msg} successfully`);
      onSuccess && onSuccess({ userId: user.id, action });
      setTimeout(() => onClose(), 700);
    } catch (err) {
      console.error(`${action} error:`, err.response?.data || err.message);
      setStatus(err.response?.data?.message || `Failed to ${action} user`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-lg w-full max-w-lg mx-auto p-5 shadow-lg">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold mb-1">Approve or Reject User</h3>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Email:</span> {user?.email || "—"}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Role:</span> {user?.role || "—"}
            </p>
            <p className="text-xs text-gray-500 mt-1 break-words">
              <span className="font-medium">ID:</span> <span className="font-mono">{user?.id || "—"}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 ml-2"
            aria-label="Close"
            disabled={loading}
          >
            ✕
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => callEndpoint("approve")}
            disabled={loading}
            className="w-full bg-blue-900 text-white py-2 rounded hover:bg-green-700 disabled:opacity-60"
          >
            {loading ? "Processing..." : "Approve"}
          </button>
          <button
            onClick={() => callEndpoint("reject")}
            disabled={loading}
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 disabled:opacity-60"
          >
            {loading ? "Processing..." : "Reject"}
          </button>
        </div>

        {status && <div className="mt-3 text-sm text-center text-gray-700">{status}</div>}

        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200"
            disabled={loading}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
