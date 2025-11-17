import React from 'react'

export default function Content() {
  return (

    <section className='space-y-5 w-full px-0'>

      <div className='grid grid-cols-1 gap-6'>
        <div className="md:flex justify-between items-center space-y-3">
          <div>
            <p className="text-gray-500 text-xl md:text-2xl">Manage your events and programs</p>
          </div>
          <button className="cursor-pointer bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm">+ Add Event</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 hover:cursor-pointer w-full">
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-black">Calendar</h2>
            <div className="grid grid-cols-7 text-center text-gray-600 text-sm gap-5">
              <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
              <div className="text-gray-300">27</div><div className="text-gray-300">28</div><div>29</div><div>30</div><div>31</div><div>1</div><div>2</div>
              <div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div>
              <div>10</div><div>11</div><div>12</div>
              <div className="bg-teal-500 text-white rounded-full w-7 h-7 mx-auto p-1 -mt-1">13</div>
              <div>14</div><div>15</div><div>16</div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-black">November 13, 2025</h3>
              <p className="text-gray-500 text-sm mt-2">No events scheduled for this day</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-3 text-black">Upcoming Events</h3>
              <div className="text-sm space-y-4">
                <div>
                  <p className="text-gray-800 font-semibold">Blockchain Security Lecture</p>
                  <p className="text-gray-500">Dec 15, 2025 · 14:00</p>
                  <div className='gap-3 flex'>
                    <span className="bg-teal-400 text-white text-xs px-2 py-0.5 rounded-full">Lecture</span>
                    <span className="bg-teal-400 text-white text-xs px-2 py-0.5 rounded-full">Virtual</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">Smart Contracts and DApps</p>
                  <p className="text-gray-500">Dec 20, 2025 · 09:00</p>
                  <div className='gap-3 flex'>
                    <span className="bg-teal-400 text-white text-xs px-2 py-0.5 rounded-full">Symposium</span>
                    <span className="bg-teal-400 text-white text-xs px-2 py-0.5 rounded-full">Johannesburg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>


  )
}
