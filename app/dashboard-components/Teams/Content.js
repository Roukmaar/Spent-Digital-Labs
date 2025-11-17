import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Content() {
  return (
    <section className="">
      <div className="p-3 min-h-screen w-full">
        <div className="md:flex space-y-2 justify-between items-center mb-6">
          <div>
            <p className="text-gray-500 text-xl md:text-2xl">
              Manage your organization&apos;s team members
            </p>
          </div>
          <button className="bg-blue-950 hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm">
            + Add Member
          </button>
        </div>

        <input
          type="text"
          placeholder="Search members..."
          className="placeholder:text-gray-400 hidden md:flex w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none mb-6"
        />
        <div className="space-y-5 border border-blue-700 rounded-lg p-3">
          <p className="font-semibold text-2xl md:text-3xl text-black">Team Marble</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            <div className="bg-white p-4 rounded-xl shadow">
              <div className="flex items-center mb-4 justify-between">
                <div className="flex space-x-4">
                  <div className="bg-blue-200 text-blue-950 rounded-full h-12 w-12 flex items-center justify-center font-semibold">
                    AA
                  </div>
                  <div>
                    <h2 className="font-bold text-black">Alexander Akosile O.</h2>
                    <p className="text-sm text-blue-600">Team Leader</p>
                  </div>
                </div>
                <div className="flex space-x-2 text-gray-500">
                  <FontAwesomeIcon
                    icon={faPencilAlt}
                    className="size-4 text-blue-900 hover:text-blue-700 cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="size-4 text-red-600 hover:text-red-400 cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex space-x-2 mb-2">
                <span className="bg-blue-800 text-white text-xs px-2 py-0.5 rounded-full">
                  active
                </span>
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                  Frontend
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Develops scalable and modern websites.
              </p>
              <hr className="my-4 border-gray-300" />
              <div className="text-sm text-gray-600 space-y-1">
                <p className="flex gap-1.5 items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="size-4 text-blue-900"
                  />{" "}
                  alexakosile1@gmail.com
                </p>
                <p className="flex gap-1.5 items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="size-4 text-blue-900"
                  />{" "}
                  (+234) 80337 70253
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <div className="flex items-center mb-4 justify-between">
                <div className="flex space-x-4">
                  <div className="bg-blue-200 text-blue-950 rounded-full h-12 w-12 flex items-center justify-center font-semibold">
                    AP
                  </div>
                  <div>
                    <h2 className="font-bold text-black">Adeogun Praise E.</h2>
                    <p className="text-sm text-blue-600">Member</p>
                  </div>
                </div>
                <div className="flex space-x-2 text-gray-500">
                  <FontAwesomeIcon
                    icon={faPencilAlt}
                    className="size-4 text-blue-900 hover:text-blue-700 cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="size-4 text-red-600 hover:text-red-400 cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex space-x-2 mb-2">
                <span className="bg-blue-800 text-white text-xs px-2 py-0.5 rounded-full">
                  active
                </span>
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                  Backend
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Ensures data integrity, security, and performance.</p>
                <hr className="my-4 border-gray-300" />
              <div className="text-sm text-gray-600 space-y-1">
                <p className="flex gap-1.5 items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="size-4 text-blue-900"
                  />{" "}
                  spraiseadeogun2@gmail.com
                </p>
                <p className="flex gap-1.5 items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="size-4 text-blue-900"
                  />{" "}
                  (+234) 91617 84554
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full ">
            <div className="bg-white p-4 rounded-xl shadow">
              <div className="flex items-center mb-4 justify-between">
                <div className="flex space-x-4">
                  <div className="bg-blue-200 text-blue-950 rounded-full h-12 w-12 flex items-center justify-center font-semibold">
                    SO
                  </div>
                  <div>
                    <h2 className="font-bold text-black">Samuel Okpokam D.</h2>
                    <p className="text-sm text-blue-600">Member</p>
                  </div>
                </div>
                <div className="flex space-x-2 text-gray-500">
                  <FontAwesomeIcon
                    icon={faPencilAlt}
                    className="size-4 text-blue-900 hover:text-blue-700 cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="size-4 text-red-600 hover:text-red-400 cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex space-x-2 mb-2">
                <span className="bg-blue-800 text-white text-xs px-2 py-0.5 rounded-full">
                  active
                </span>
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                  Mobile Dev.
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Creates scalable, responsive, and engaging mobile applications.
              </p>
              <hr className="my-4 border-gray-300" />
              <div className="text-sm text-gray-600 space-y-1">
                <p className="flex gap-1.5 items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="size-4 text-blue-900"
                  />{" "}
                  m.chen@example.com
                </p>
                <p className="flex gap-1.5 items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="size-4 text-blue-900"
                  />{" "}
                  (+234) 81003 67291
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <div className="flex items-center mb-4 justify-between">
                <div className="flex space-x-4">
                  <div className="bg-blue-200 text-blue-950 rounded-full h-12 w-12 flex items-center justify-center font-semibold">
                    OH
                  </div>
                  <div>
                    <h2 className="font-bold text-black">Onatade Haliyah O.</h2>
                    <p className="text-sm text-blue-600">Member</p>
                  </div>
                </div>
                <div className="flex space-x-2 text-gray-500">
                  <FontAwesomeIcon
                    icon={faPencilAlt}
                    className="size-4 text-blue-900 hover:text-blue-700 cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="size-4 text-red-600 hover:text-red-400 cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex space-x-2 mb-2">
                <span className="bg-blue-800 text-white text-xs px-2 py-0.5 rounded-full">
                  active
                </span>
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                  Prod. Design
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Produces user-centered designs that drive business success.
              </p>
              <hr className="my-4 border-gray-300" />
              <div className="text-sm text-gray-600 space-y-1">
                <p className="flex gap-1.5 items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="size-4 text-blue-900"
                  />{" "}
                  opeyemihaliyah6@gmail.com
                </p>
                <p className="flex gap-1.5 items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="size-4 text-blue-900"
                  />{" "}
                  (+234) 91282 68359
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2">
            <div className="bg-white p-4 rounded-xl shadow">
              <div className="flex items-center mb-4 justify-between">
                <div className="flex space-x-4">
                  <div className="bg-blue-200 text-blue-950 rounded-full h-12 w-12 flex items-center justify-center font-semibold">
                    MC
                  </div>
                  <div>
                    <h2 className="font-bold text-black">Olatunde U.Farouq</h2>
                    <p className="text-sm text-blue-600">Member</p>
                  </div>
                </div>
                <div className="flex space-x-2 text-gray-500">
                  <FontAwesomeIcon
                    icon={faPencilAlt}
                    className="size-4 text-blue-900 hover:text-blue-700 cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="size-4 text-red-600 hover:text-red-400 cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex space-x-2 mb-2">
                <span className="bg-blue-800 text-white text-xs px-2 py-0.5 rounded-full">
                  active
                </span>
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                  Frontend
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Creates fast, responsive, and engaging interfaces.
              </p>
              <hr className="my-4 border-gray-300" />
              <div className="text-sm text-gray-600 space-y-1">
                <p className="flex gap-1.5 items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="size-4 text-blue-900"
                  />{" "}
                  umaar.farouq123@gmail.com
                </p>
                <p className="flex gap-1.5 items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="size-4 text-blue-900"
                  />{" "}
                  (+234) 70537 25664
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
