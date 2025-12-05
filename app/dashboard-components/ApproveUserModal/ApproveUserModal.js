"use client"; // important for Next.js App Router if using client components
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ApproveUserModal({ isAdmin }) {
  const [showModal, setShowModal] = useState(false);
  const [pendingUsers, setPendingUsers] = useState([]);

  useEffect(() => {
    if (isAdmin) {
      setShowModal(true);
      fetchPendingUsers();
    }
  }, [isAdmin]);

  const fetchPendingUsers = async () => {
    try {
      const res = await axios.get(
        "https://spent-digital-lab-backend.onrender.com/api/admin/users/pending",
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SPENTLAB_KEY}`
          }
        }
      );
      setPendingUsers(res.data);
    } catch (err) {
      console.error("Error fetching pending users:", err);
    }
  };

  const handleApprove = async (userId) => {
    try {
      await axios.post(
        `https://spent-digital-lab-backend.onrender.com/api/admin/users/${userId}/approve`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SPENTLAB_KEY}`
          }
        }
      );
      alert(`User ${userId} approved successfully!`);
      fetchPendingUsers(); // refresh list
    } catch (err) {
      console.error(err);
      alert("Failed to approve user");
    }
  };

  const handleReject = async (userId) => {
    try {
      await axios.post(
        `https://spent-digital-lab-backend.onrender.com/api/admin/users/${userId}/reject`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SPENTLAB_KEY}`
          }
        }
      );
      alert(`User ${userId} rejected successfully!`);
      fetchPendingUsers(); // refresh list
    } catch (err) {
      console.error(err);
      alert("Failed to reject user");
    }
  };

  if (!showModal) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Pending User Approvals</h2>
        {pendingUsers.length === 0 ? (
          <p>No pending users 🎉</p>
        ) : (
          <ul>
            {pendingUsers.map(user => (
              <li key={user.id} style={{ marginBottom: "10px" }}>
                {user.name} ({user.email})
                <button
                  style={{ marginLeft: "10px", background: "green", color: "white" }}
                  onClick={() => handleApprove(user.id)}
                >
                  Approve
                </button>
                <button
                  style={{ marginLeft: "10px", background: "red", color: "white" }}
                  onClick={() => handleReject(user.id)}
                >
                  Reject
                </button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => setShowModal(false)}>Close</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex", justifyContent: "center", alignItems: "center",
    zIndex: 1000
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    textAlign: "center"
  }
};