'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert('Thank you for subscribing!');
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <footer className="bg-[#0A1F44] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo + Social */}
          <div>
            <Image src="/elevate-white-logo.png" alt="Logo" width={120} height={120} />
            <p className="text-gray-300 text-sm mt-4">
              Advancing blockchain research, innovation, and policy development across Africa.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#00BFA6] rounded-lg flex items-center justify-center">
                T
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#00BFA6] rounded-lg flex items-center justify-center">
                L
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-[#00BFA6]">Who We Are</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-[#00BFA6]">Careers</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-sm uppercase mb-4">Stay Updated</h3>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFA6]"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#00BFA6] text-white px-4 py-2 rounded-lg hover:bg-[#009f8a] transition-colors"
              >
                {isSubmitting ? '...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-300">
          <span>© {currentYear} Blockchain Research Institute Africa. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#00BFA6]">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#00BFA6]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
