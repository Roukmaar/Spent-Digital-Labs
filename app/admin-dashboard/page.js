"use client";

import dynamic from "next/dynamic";
import Sidebar from "./Sidebar";
import Header from "./Header";
import StatCard from "./StatCard";
import Publications from "./Publications";
import QuickActions from "./QuickActions";
import Events from "./Events";
import Link from "next/link";
import { useEffect } from "react";

// AdminUsers is a client component that fetches users and opens the modal.
// Import it dynamically with ssr: false so it runs only on the client.
const AdminUsers = dynamic(() => import("../../components/AdminUsers"), { ssr: false });

export default function AdminDashboardPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const role = localStorage.getItem("spentlab_role") || sessionStorage.getItem("spentlab_role");
    if (!role || role !== "admin") {
      // redirect non-admins to home or login
      window.location.href = "/";
    }
  }, []);

  return (
    <main className="min-h-screen w-full bg-stone-100 pb-5">
      <div className="flex">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Header />

          <div className="px-5">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 py-2 mb-5 mt-3">
              Overview
            </h2>

            {/* Top stat cards */}
            <div className="mb-6">
              <StatCard />
            </div>

            {/* Publications section */}
            <div className="mb-8">
              <Publications />
            </div>

            {/* Quick actions row */}
            <div className="mb-8">
              <QuickActions />
            </div>

            {/* Events */}
            <div className="mb-8">
              <Events />
            </div>

            {/* AdminUsers component renders the users table and opens the Approve modal */}
            <section className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-black">User Management</h3>
              <AdminUsers />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
