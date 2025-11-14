import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Content() {
  return (
    <section className="w-full">
      <div className="min-h-screen px-3">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Partnership Inquiries</h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0 mb-4">
          <input
            type="text"
            placeholder="Search by organization, name, or email..."
            className="w-full md:w-2/3 px-4 py-2 border rounded-lg shadow-sm focus:outline-none mb-2 md:mb-0"
          />
          <select className="w-full md:w-1/4 px-4 py-2 border rounded-lg shadow-sm focus:outline-none">
            <option>All Status</option>
            <option>New</option>
            <option>Under Review</option>
            <option>Accepted</option>
          </select>
        </div>

        <div className="rounded-xl p-4">
          <h2 className="font-semibold text-lg mb-4">All Inquiries (5)</h2>
          {/* Mobile: show cards */}
          <div className="md:hidden space-y-4">
            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Tech Innovations Inc.</h3>
                  <p className="text-sm text-gray-600">
                    Research Collaboration
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Alice Williams •{" "}
                    <span className="text-gray-400">
                      alice@techinnovations.com
                    </span>
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div>
                    <span className="bg-sky-500 text-white text-xs px-2 py-1 rounded-full">
                      New
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">1/15/2024</div>
                </div>
              </div>
              <div className="mt-3 flex gap-3 text-sm">
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="size-4 text-red-600 hover:text-red-400 hover:cursor-pointer"
                />{" "}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">GreenTech Partners</h3>
                  <p className="text-sm text-gray-600">
                    Sustainability Partnership
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Lena Ortiz •{" "}
                    <span className="text-gray-400">lena@greentech.com</span>
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div>
                    <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                      New
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">2/02/2024</div>
                </div>
              </div>
              <div className="mt-3 flex gap-3 text-sm">
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="size-4 text-red-600 hover:text-red-400 hover:cursor-pointer"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Health Alliance</h3>
                  <p className="text-sm text-gray-600">Program Partnership</p>
                  <p className="text-xs text-gray-500 mt-2">
                    Dr. Samuel Park •{" "}
                    <span className="text-gray-400">
                      s.park@healthalliance.org
                    </span>
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div>
                    <span className="bg-sky-500 text-white text-xs px-2 py-1 rounded-full">
                      Review
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">2/01/2024</div>
                </div>
              </div>
              <div className="mt-3 flex gap-3 text-sm">
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="size-4 text-red-600 hover:text-red-400 hover:cursor-pointer"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Global Solutions Ltd</h3>
                  <p className="text-sm text-gray-600">Funding Partnership</p>
                  <p className="text-xs text-gray-500 mt-2">
                    Bob Martinez •{" "}
                    <span className="text-gray-400">
                      bob@globalsolutions.com
                    </span>
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div>
                    <span className="bg-orange-400 text-white text-xs px-2 py-1 rounded-full">
                      Review
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">1/12/2024</div>
                </div>
              </div>
              <div className="mt-3 flex gap-3 text-sm">
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="size-4 text-red-600 hover:text-red-400 hover:cursor-pointer"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Education First</h3>
                  <p className="text-sm text-gray-600">Academic Partnership</p>
                  <p className="text-xs text-gray-500 mt-2">
                    Carol Zhang •{" "}
                    <span className="text-gray-400">
                      carol@educationfirst.org
                    </span>
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div>
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Accepted
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">1/10/2024</div>
                </div>
              </div>
              <div className="mt-3 flex gap-3 text-sm">
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="size-4 text-red-600 hover:text-red-400 hover:cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Desktop/tablet: show table */}
          <div className="hidden md:block md:w-full">
            <table className="w-full shadow-sm rounded-lg">
              <thead className="text-gray-600 border px-3">
                <tr className=" bg-gray-50 w-full">
                  <th className="table-cell text-left font-light text-gray-400 py-3 px-2 md:px-5 border-r-0 border-t border-b border-l rounded-l-md">
                    Organization
                  </th>
                  <th className="table-cell text-left font-light text-gray-400 py-3 px-2 md:px-5 border-r-0 border-t border-b rounded-t-md">
                    Contact
                  </th>
                  <th className="table-cell text-left font-light text-gray-400 py-3 px-2 md:px-5 border-r-0 border-t border-b rounded-t-md">
                    Partnership Type
                  </th>
                  <th className="table-cell text-center font-light text-gray-400 py-3 px-2 md:px-5 border-r-0 border-t border-b rounded-t-md">
                    Status
                  </th>
                  <th className="table-cell text-center font-light text-gray-400 py-3 px-2 md:px-5 border-r-0 border-t border-b rounded-t-md">
                    Submitted
                  </th>
                  <th className="table-cell text-center font-light text-gray-400 py-3 px-2 md:px-5 border-t border-b border-r rounded-t-md">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b p-5">
                  <td className="p-3 wrap-break-word max-w-[18ch] md:max-w-none">
                    Tech Innovations Inc.
                  </td>
                  <td className="p-3 whitespace-normal wrap-break-word">
                    Alice Williams
                    <br />
                    <span className="text-xs text-gray-500">
                      alice@techinnovations.com
                    </span>
                  </td>
                  <td className="p-3 wrap-break-word">
                    Research Collaboration
                  </td>
                  <td className="hidden md:table-cell text-center align-middle">
                    <span className="bg-sky-500 text-white text-xs px-2 py-1 rounded-full">
                      New
                    </span>
                  </td>
                  <td className="hidden md:table-cell text-center align-middle">
                    1/15/2024
                  </td>
                  <td className="hidden md:table-cell text-center align-middle">
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="w-4 h-4 text-red-600 hover:text-red-400 cursor-pointer inline-block"
                    />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 wrap-break-word max-w-[18ch] md:max-w-none">
                    Global Solutions Ltd
                  </td>

                  <td className="p-3 whitespace-normal wrap-break-word">
                    Bob Martinez
                    <br />
                    <span className="text-xs text-gray-500">
                      bob@globalsolutions.com
                    </span>
                  </td>
                  <td className="p-3 wrap-break-word">Funding Partnership</td>
                  <td className="hidden md:table-cell text-center align-middle">
                    <span className="bg-orange-400 text-white text-xs px-2 py-1 rounded-full">
                      Under Review
                    </span>
                  </td>
                  <td className="hidden md:table-cell text-center align-middle">
                    1/12/2024
                  </td>
                  <td className="hidden md:table-cell text-center align-middle">
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="w-4 h-4 text-red-600 hover:text-red-400 cursor-pointer inline-block"
                    />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 wrap-break-word max-w-[18ch] md:max-w-none">
                    Education First
                  </td>
                  <td className="p-3 whitespace-normal wrap-break-word">
                    Carol Zhang
                    <br />
                    <span className="text-xs text-gray-500">
                      carol@educationfirst.org
                    </span>
                  </td>
                  <td className="p-3 wrap-break-word">Academic Partnership</td>
                  <td className="hidden md:table-cell text-center align-middle">
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Accepted
                    </span>
                  </td>
                  <td className="hidden md:table-cell text-center align-middle">
                    1/10/2024
                  </td>
                  <td className="hidden md:table-cell text-center align-middle">
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="w-4 h-4 text-red-600 hover:text-red-400 cursor-pointer inline-block"
                    />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 wrap-break-word max-w-[18ch] md:max-w-none">
                    GreenTech Partners
                  </td>
                  <td className="p-3 whitespace-normal wrap-break-word">
                    Lena Ortiz
                    <br />
                    <span className="text-xs text-gray-500">
                      lena@greentech.com
                    </span>
                  </td>
                  <td className="p-3 wrap-break-word">
                    Sustainability Partnership
                  </td>
                  <td className="hidden md:table-cell text-center align-middle">
                    <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                      New
                    </span>
                  </td>
                  <td className="hidden md:table-cell text-center align-middle">
                    2/02/2024
                  </td>
                  <td className="hidden md:table-cell text-center align-middle">
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="w-4 h-4 text-red-600 hover:text-red-400 cursor-pointer inline-block"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="p-3 wrap-break-word max-w-[18ch] md:max-w-none">
                    Health Alliance
                  </td>
                  <td className="p-3 whitespace-normal wrap-break-word">
                    Dr. Samuel Park
                    <br />
                    <span className="text-xs text-gray-500">
                      s.park@healthalliance.org
                    </span>
                  </td>
                  <td className="p-3 wrap-break-word">Program Partnership</td>
                  <td className="hidden md:table-cell text-center align-middle">
                    <span className="bg-sky-500 text-white text-xs px-2 py-1 rounded-full">
                      Under Review
                    </span>
                  </td>
                  <td className="hidden md:table-cell text-center align-middle">
                    2/01/2024
                  </td>
                  <td className="hidden md:table-cell text-center align-middle">
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="w-4 h-4 text-red-600 hover:text-red-400 cursor-pointer inline-block"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
