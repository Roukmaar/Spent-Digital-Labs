"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faEnvelope, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

export default function UserLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // ✅ new state

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://spent-digital-lab-backend.onrender.com/api/auth/login",
        { email, password }
      );
      const token = res.data?.data?.token || res.data?.data?.taken;
      if (!token) throw new Error("No token returned from API");

      if (rememberMe) {
        localStorage.setItem("spentlab_token", token);
      } else {
        sessionStorage.setItem("spentlab_token", token);
      }

      setStatus("Login successful!");
      router.push("/user-dashboard");
    } catch (err) {
      setStatus(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <main className="font-sans font-bold bg-[#0A1F44] h-screen flex justify-center items-center">
      <div className="w-95 md:w-120 bg-white flex flex-col justify-center items-center py-7 rounded-2xl space-y-3 shadow-2xl shadow-cyan-800">
        <div className="bg-linear-to-br from-cyan-300 to-emerald-700 w-20 rounded-2xl flex items-center">
          <FontAwesomeIcon icon={faFlask} className="text-4xl text-white px-5 py-5" />
        </div>
        <h2 className="text-blue-950 text-xl">Spent Digital Labs</h2>
        <span className="text-gray-500 text-sm">User Portal Access</span>

        <form className="flex flex-col space-y-4 px-5 w-full" onSubmit={handleSubmit}>
          {/* Email input */}
          <label className="font-medium text-black">Email Address</label>
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-3 py-2 pr-10 focus:outline-none focus:border-teal-500 placeholder-gray-400 placeholder:text-base placeholder:font-medium"
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>

          {/* Password input */}
          <label className="font-medium text-black">Password</label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-3 py-2 pr-10 focus:outline-none focus:border-teal-500 placeholder-gray-400 placeholder:text-base placeholder:font-medium"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            />
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="cursor-pointer"
              />
              Remember Me
            </label>
            <Link href="/forgot-password">
              <span className="text-teal-500 hover:underline cursor-pointer">
                Forgot Password?
              </span>
            </Link>
          </div>

          <button type="submit" className="w-full bg-teal-500 text-white rounded-md h-10 hover:bg-teal-600">
            Sign In
          </button>
        </form>

        {status && <p className="text-sm text-red-500">{status}</p>}

        {/* Social login */}
        <div className="flex py-3">
          <hr className="w-30 md:w-34 text-gray-300" />
          <span className="font-medium text-gray-400 text-sm -my-2 px-2">
            Or continue with
          </span>
          <hr className="w-30 md:w-34 text-gray-300" />
        </div>
        <div className="flex gap-5">
          <button className="border border-gray-300 font-medium w-42 md:w-47 py-3 rounded-md flex justify-center items-center gap-2 hover:bg-teal-600 hover:text-white">
            <FontAwesomeIcon icon={faGoogle} className="size-5 text-red-600" /> Google
          </button>
          <button className="border border-gray-300 font-medium w-42 md:w-47 py-3 rounded-md flex justify-center items-center gap-2 hover:bg-teal-600 hover:text-white">
            <FontAwesomeIcon icon={faGithub} className="size-5 text-black" /> Github
          </button>
        </div>

        <span className="flex text-gray-400 text-sm font-medium py-3">
          Don&apos;t have an account?
          <Link href="/new-user">
            <h2 className="font-medium text-sm text-teal-500 hover:underline">Sign Up</h2>
          </Link>
        </span>
        <span className="flex text-gray-400 text-sm font-medium -my-2">
          Admin?
          <Link href="/admin-login">
            <h2 className="font-medium text-sm text-teal-500 hover:underline">
              Login here
            </h2>
          </Link>
        </span>
      </div>
    </main>
  );
}
