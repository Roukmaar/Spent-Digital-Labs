"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [partnerStatus, setPartnerStatus] = useState("");

  async function handleGeneralSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mdkvrppy", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Network error. Please try again.");
    }
  }

  async function handlePartnershipSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    data.append("inquiry_type", "partnership");

    try {
      const res = await fetch("https://formspree.io/f/mdkvrppy", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setPartnerStatus("Partnership request submitted. We'll be in touch!");
        form.reset();
      } else {
        setPartnerStatus("Something went wrong. Please try again.");
      }
    } catch {
      setPartnerStatus("Network error. Please try again.");
    }
  }

  return (
    <main className="font-sans bg-[#0A1F44] min-h-screen flex justify-center items-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl shadow-cyan-800 p-8 space-y-6">
        <header className="mb-2">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-950">Contact Us</h1>
          <p className="text-gray-500 text-sm">
            Have questions or ideas? Reach out and we’ll get back to you.
          </p>
        </header>

        {/* Section that contains two distinct containers */}
        <section aria-labelledby="contact-section-heading" className="space-y-6">
          <h2 id="contact-section-heading" className="sr-only">Contact and Partnership forms</h2>

          <div className="grid gap-6 ml-3 pt-5">
            {/* General Contact Container */}
            <div className="bg-slate-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-blue-950 mb-2">General Contact</h3>
              <p className="text-gray-600 text-sm mb-4">Questions, feedback, or general inquiries.</p>

              <form
                action="https://formspree.io/f/mdkvrppy"
                method="POST"
                className="space-y-4"
                onSubmit={handleGeneralSubmit}
                aria-label="General contact form"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:border-teal-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:border-teal-500"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:border-teal-500"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-teal-500 text-white rounded-md h-10 hover:bg-teal-600"
                >
                  Send Message
                </button>
              </form>

              {status && <p className="text-sm text-teal-600 mt-3" role="status">{status}</p>}

              <div className="mt-4 space-y-2 text-gray-600 text-sm">
                <p>Email: contact@spentlabs.com</p>
                <Link href="https://wa.me/2348142273966" className="flex gap-2">
                  <span>WhatsApp:</span>
                  <span className="hover:underline hover:text-teal-500 transition ease-in-out">+234 814 227 3966</span>
                </Link>
                <p>Location: Ondo State, Nigeria</p>
              </div>
            </div>

            {/* Partnership Container */}
            <div className="bg-stone-100 p-6 rounded-xl shadow-sm border border-gray-100" id="partnership" aria-labelledby="partnership-heading">
              <h3 id="partnership-heading" className="text-lg font-semibold text-blue-950 mb-2">Partnership Inquiry</h3>
              <p className="text-gray-600 text-sm mb-4">
                We partner with academic groups, industry teams, and community projects. Tell us about your organization and goals.
              </p>

              <form
                action="https://formspree.io/f/mdkvrppy"
                method="POST"
                onSubmit={handlePartnershipSubmit}
                className="space-y-4"
                aria-label="Partnership inquiry form"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="org_name"
                    placeholder="Organization / Lab Name"
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:border-teal-500"
                    required
                  />
                  <input
                    type="text"
                    name="contact_name"
                    placeholder="Primary Contact Name"
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:border-teal-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="contact_email"
                    placeholder="Contact Email"
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:border-teal-500"
                    required
                  />
                  <input
                    type="text"
                    name="role"
                    placeholder="Role / Title"
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:border-teal-500"
                  />
                </div>

                <label className="block text-sm text-gray-700">Type of partnership</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" name="partnership_type[]" value="research" className="rounded" />
                    <span className="text-sm text-gray-600">Research</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" name="partnership_type[]" value="pilot" className="rounded" />
                    <span className="text-sm text-gray-600">Pilot</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" name="partnership_type[]" value="funding" className="rounded" />
                    <span className="text-sm text-gray-600">Funding</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" name="partnership_type[]" value="community" className="rounded" />
                    <span className="text-sm text-gray-600">Community</span>
                  </label>
                </div>

                <textarea
                  name="partnership_message"
                  placeholder="Brief description of the collaboration idea, goals, and timeline"
                  rows="4"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:border-teal-500"
                  required
                />

                <div className="flex justify-end gap-3">
                  <button
                    type="reset"
                    onClick={() => setPartnerStatus("")}
                    className="px-4 py-2 rounded-md border hover:bg-gray-300 cursor-pointer"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600 cursor-pointer"
                  >
                    Submit Partnership Request
                  </button>
                </div>
              </form>

              {partnerStatus && <p className="mt-3 text-sm text-teal-600" role="status">{partnerStatus}</p>}
            </div>
          </div>

          {/* Optional full-width note or CTA below the two containers */}
          <div className="mt-2 text-center">
            <p className="text-sm text-gray-500">
              Prefer to schedule a call instead? <Link href="https://wa.me/2348142273966" className="text-teal-600 hover:underline">Book time with us</Link>.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
