'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Thank you for subscribing!');
    setEmail('');
    setIsSubmitting(false);
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { name: 'Who We Are', href: '/About#who-we-are' },
      { name: 'Mission & Vision', href: '/About#mission-vision' },
      { name: 'Leadership Team', href: '/About#team' },
      { name: 'Partnerships', href: ' /Contact#partnership' },
      { name: 'Careers', href: '/careers' },
    ],
    research: [
      { name: 'Research Areas', href: '/research#areas' },
      { name: 'Publications', href: '/research#publications' },
      { name: 'Innovation Lab', href: '/Innovation-Lab' },
      { name: 'Submit Research', href: '/research#submit' },
      { name: 'Ongoing Projects', href: '/Innovation-Lab#projects' },
    ],
    education: [
      { name: 'Programs Overview', href: '/education' },
      { name: 'Research Fellowship', href: '/education#fellowship' },
      { name: 'Developer Bootcamp', href: '/education#bootcamp' },
      { name: 'Policy Masterclass', href: '/education#policy' },
      { name: 'Apply Now', href: '/education#apply' },
    ],
    resources: [
      { name: 'Latest News', href: '/publications#news' },
      { name: 'Blog', href: '/publications#insights' },
      { name: 'Events', href: '/events' },
      { name: 'Contact Us', href: '/Contact' },
      { name: 'FAQ', href: '/faq' },
    ],
  };

  return (
    <footer className="bg-[#0A1F44] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo + Social */}
          <div>
            <Image src="/elevate-white-logo.png" alt="Logo" width={120} height={120} />
            <p className="text-gray-300 text-sm mt-4">
              Advancing blockchain research, innovation, and policy development across Africa.
            </p>
            <div className="flex gap-3 mt-4">
              {/* Example social link */}
              
              {/* Add other socials here */}


              {/* Social Links */}
              <div className="flex gap-3 mt-4">
                {/* Twitter */}
                <a
                  href="https://twitter.com/blockchainresearch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white hover:bg-[#00BFA6] rounded-lg flex items-center justify-center transition"
                  aria-label="Twitter"
                >
                <FontAwesomeIcon icon={faXTwitter} className='size-7 text-black'/>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/blockchainresearch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white hover:bg-[#00BFA6] rounded-lg flex items-center justify-center transition"
                  aria-label="LinkedIn"
                >
                <FontAwesomeIcon icon={faLinkedin} className='size-7 text-blue-900'/>

                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/blockchainresearch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white hover:bg-[#00BFA6] hover:text-black rounded-lg flex items-center justify-center transition"
                  aria-label="GitHub"
                >
                <FontAwesomeIcon icon={faGithub} className='size-7 text-black hover:text-black'/>

                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@blockchainresearch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white hover:bg-[#00BFA6] rounded-lg flex items-center justify-center transition"
                  aria-label="YouTube"
                >
                  <FontAwesomeIcon icon={faYoutube} className='size-7 text-red-500'/>

                </a>
              </div>




            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </h3>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-[#00BFA6] text-sm transition">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <h3 className="text-lg font-semibold">Stay Updated</h3>
          <p className="text-gray-300 text-sm mb-4">
            Subscribe to our newsletter for the latest research insights and program updates.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFA6] focus:ring-2 focus:ring-[#00BFA6]/20"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 rounded-lg bg-[#00BFA6] text-white hover:bg-teal-500 transition"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 mt-12 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
          <div>
            <div className="font-semibold text-white mb-1">Address</div>
            123 Innovation Drive<br />Ibadan, Oyo State<br />Nigeria
          </div>
          <div>
            <div className="font-semibold text-white mb-1">Email</div>
            <a href="mailto:info@blockchainresearch.africa" className="hover:text-[#00BFA6]">info@blockchainresearch.africa</a><br />
            <a href="mailto:research@blockchainresearch.africa" className="hover:text-[#00BFA6]">research@blockchainresearch.africa</a>
          </div>
          <div>
            <div className="font-semibold text-white mb-1">Phone</div>
<Link href="https://wa.me/2348142273966" className="flex gap-2">
                  <span>WhatsApp:</span>
                  <span className="hover:underline hover:text-teal-500 transition ease-in-out">+234 814 227 3966</span>
                </Link>          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-4">
          <div>© {currentYear} Blockchain Research Institute Africa. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#00BFA6]">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#00BFA6]">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-[#00BFA6]">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
