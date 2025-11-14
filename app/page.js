import React from 'react'
import Link from 'next/link'

export default function page() {
    return (
        <section>








    <div className="font-sans">
      {/* Hero */}
      <section className="bg-linear-to-r from-blue-900 to-blue-700 text-white py-20 text-center px-4">
        <h1 className="text-3xl font-bold mb-4">
          Advancing Blockchain Research, Innovation & Policy in Africa
        </h1>
        <p className="mb-6">Driving progress through education, collaboration, and open research</p>
        <div className="space-x-4">
            <Link href="/new-user">
          <button className="bg-teal-500 px-5 py-2 rounded">Get Involved</button>
          </Link>
          <button className="bg-white text-blue-900 px-5 py-2 rounded">Learn More</button>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
        <p className="mb-8 text-gray-600">Building Africa’s blockchain future through inclusive research</p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-6 bg-gray-100 rounded shadow">🌍 Pan-African Team</div>
          <div className="p-6 bg-gray-100 rounded shadow">🔬 Research & Innovation</div>
          <div className="p-6 bg-gray-100 rounded shadow">📊 Policy & Strategy</div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-6">Our Research Focus</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-6 bg-white rounded shadow">DeFi & Crypto Adoption</div>
          <div className="p-6 bg-white rounded shadow">Digital Identity & Privacy</div>
          <div className="p-6 bg-white rounded shadow">Blockchain for Governance</div>
          <div className="p-6 bg-white rounded shadow">Supply Chain Transparency</div>
          <div className="p-6 bg-white rounded shadow">Web3 Communities</div>
          <div className="p-6 bg-white rounded shadow">Tokenized Economies</div>
        </div>
      </section>

      {/* Innovation Lab */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">The Innovation Lab</h2>
          <p className="mb-8">Prototyping tools & solutions for Africa’s unique challenges</p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-6 bg-blue-800 rounded shadow">🛠 Toolkits</div>
          <div className="p-6 bg-blue-800 rounded shadow">🚀 Startup Incubator</div>
          <div className="p-6 bg-blue-800 rounded shadow">💡 Hackathons</div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-2xl font-bold mb-4">Education & Capacity Building</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          We offer courses, certifications, and mentorship programs to empower blockchain learners.
        </p>
        <ul className="text-left max-w-md mx-auto space-y-2">
          <li>✅ Online Courses</li>
          <li>✅ Local Workshops</li>
          <li>✅ University Partnerships</li>
          <li>✅ Developer Bootcamps</li>
        </ul>
        <button className="mt-6 bg-teal-500 px-6 py-2 rounded text-white">Start Learning</button>
      </section>

      {/* Research & Publications */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-6">Research & Publications</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-6 bg-white rounded shadow">📄 DeFi in African Markets</div>
          <div className="p-6 bg-white rounded shadow">📄 Blockchain & Governance Study</div>
          <div className="p-6 bg-white rounded shadow">📄 Privacy & Regulation Reports</div>
        </div>
      </section>

      {/* Collaborate */}
      <section className="bg-blue-900 text-white py-16 text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Collaborate With Us</h2>
        <p className="mb-6">Partner, fund, or contribute to our growing research ecosystem</p>
        <button className="bg-teal-500 px-6 py-2 rounded">Get in Touch</button>
      </section>

      {/* Community */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-2xl font-bold mb-6">Insights, Events & Community</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-6 bg-gray-100 rounded shadow">📰 Newsletter</div>
          <div className="p-6 bg-gray-100 rounded shadow">📅 Upcoming Events</div>
          <div className="p-6 bg-gray-100 rounded shadow">🤝 Meet Our Fellows</div>
        </div>
      </section>

      {/* Footer */}

<section className="bg-blue-900 text-white py-10 text-center px-6">
        <h2 className="text-xl font-semibold mb-4">Join the Blockchain Research Revolution</h2>
        <div className="max-w-sm mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-2 rounded text-black"
          />
          <button className="bg-teal-500 px-6 py-2 rounded">Subscribe</button>
        </div>
      </section>
    </div>











    </section >



)
}
