import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Page() {
  return (
    <main className="font-sans font-bold bg-[#0A1F44] h-screen flex justify-center items-center">
      <div className="w-95 md:w-120 bg-white flex flex-col justify-center items-center py-7 rounded-2xl space-y-3 shadow-2xl shadow-blue-500">
        <div className="bg-blue-950 w-20 rounded-2xl flex items-center">
          <FontAwesomeIcon icon={faFlask} className="text-4xl text-white px-5 py-5" />
        </div>
        <h2 className="text-blue-950 text-xl">Spent Digital Labs</h2>
        <span className="text-gray-500 text-sm">Admin Portal Access</span>
        <form className="flex flex-col space-y-2 px-5 ">
          <label className="font-medium text-black">Email Address</label>
          <input type="email"
            placeholder="admin@spentdigitallab.com"
            className="placeholder:font-medium placeholder:text-gray-400 placeholder:pl-1 rounded-xl border border-gray-300 px-2 py-2 hover:border-blue-800 hover:cursor-pointer focus:outline-1 focus:border-blue-300"
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            className="relative -top-9.5 md:left-88 left-78  text-gray-400 size-5 pointer-events-none"
          />
          <label className="font-medium text-black">Password</label>
          <input type="email"
            placeholder="Enter your password"
            className="placeholder:font-medium placeholder:text-gray-400 placeholder:pl-1 rounded-xl border border-gray-300 px-2 py-2 hover:border-blue-800 hover:cursor-pointer focus:outline-1 focus:border-blue-300"
          />
          <span className="text-gray-400 text-xs font-medium">Password must have 8+ characters with letters, numbers and symbols.</span>
          <FontAwesomeIcon
            icon={faEye}
            className="relative -top-19.5 md:-top-15.5 md:left-88 left-78  text-gray-400 size-5 pointer-events-none"
          />
          <div className="flex justify-between">
            <div className="flex space-x-0.5">
              <input
                type="checkbox" />
              <span className="font-medium text-sm text-gray-400">Remember me for 30 days</span>
            </div>
            <a className="font-medium text-sm text-blue-800 hover:text-blue-900 hover:cursor-pointer hover:underline">Forgot password?</a>
          </div>
          <Link href="/admin-dashboard"
            className="w-full">
            <button className="w-full bg-blue-950 text-white rounded-md h-10 hover:bg-blue-900 hover:cursor-pointer">Sign In</button>
          </Link>
        </form>
        <div className="flex py-3">
          <hr className="w-30 md:w-34 text-gray-300" /><span className="font-medium text-gray-400 text-sm -my-2 px-2">Or continue with</span><hr className="w-30 md:w-34 text-gray-300" />
        </div>
        <div className="flex gap-5">
          <button className="border border-gray-300 font-medium w-42 md:w-47 py-3 rounded-md flex justify-center items-center gap-2 hover:bg-blue-900 hover:cursor-pointer hover:text-white text-black"><FontAwesomeIcon icon={faGoogle} className="size-5 text-red-600" />Google</button>
          <button className="border border-gray-300 font-medium w-42 md:w-47 py-3 rounded-md flex justify-center items-center gap-2 hover:bg-blue-900 hover:cursor-pointer hover:text-white text-black"><FontAwesomeIcon icon={faGithub} className="size-5 text-black" />Github</button>
        </div>
        <span className="flex text-gray-400 text-sm font-medium py-3">Dont&apos;t have admin access?
          <Link href="/user-login">
            <h2 className="font-medium text-sm text-blue-800 hover:text-blue-900 hover:cursor-pointer hover:underline">
              Login as User
            </h2>
          </Link>
        </span>
      </div>
    </main>
  );
}
