'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFistRaised } from '@fortawesome/free-solid-svg-icons';
import { faHandFist } from '@fortawesome/free-solid-svg-icons';
import { faHandBackFist } from '@fortawesome/free-solid-svg-icons';
import { faHandshakeAlt } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faExplosion } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-linear-to-br from-[#1A3A5C] to-[#0A1F44] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Advancing blockchain research, innovation, and policy development in Nigeria and across Africa.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed md:text-xl">
            We are a collective of researchers, developers, and policy experts passionate about blockchain technology
            and its transformative potential. Our institute serves as a hub for collaboration, knowledge sharing,
            and innovation across the continent.
          </p>
        </div>
        <div className="flex justify-center">
          <Image src="/team.jpg" alt="Our Team" width={500} height={350} className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Mission & Vision */}
<section id="mission-vision" className="bg-[#ECF0F1] py-16">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    
    {/* Image with blue overlay */}
    <div className="relative">
      <Image
        src="/mvvpic.png"
        alt="Mission and Vision"
        width={500}
        height={350}
        className="rounded-lg shadow-lg w-full h-auto object-cover"
      />

      {/* Blue overlay */}
      <div className="absolute inset-0 bg-[#2244da] opacity-50 mix-blend-multiply rounded-lg"></div>
    </div>

    {/* Text content */}
    <div>
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Mission & Vision</h2>
      <p className="text-gray-600 leading-relaxed mb-4 md:text-xl">
        Our mission is to foster blockchain adoption through research, education, and
        innovation. We envision Africa as a leader in blockchain-driven solutions that address
        real-world challenges in finance, governance, and social impact.
      </p>
      <p className="text-gray-600 leading-relaxed md:text-xl">
        By bridging academia, industry, and policy, we aim to create sustainable ecosystems
        that drive inclusive growth and technological advancement.
      </p>
    </div>

  </div>
</section>


      {/* Leadership Team */}
      <section id="team" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Image src="/spirit.jpg" alt="Team Member" width={200} height={200} className="rounded-full mx-auto mb-4" />
            <h3 className="font-semibold">Mr. Spirit Phillips</h3>
            <p className="text-sm text-gray-500">Founder & Director</p>
          </div>
          <div className="text-center">
            <Image src="/benard.jpg" alt="Team Member" width={200} height={200} className="rounded-full mx-auto mb-4" />
            <h3 className="font-semibold">Adeloju Tosin Benard</h3>
            <p className="text-sm text-gray-500">Head of Research</p>
          </div>
          <div className="text-center">
            <Image src="/joy.jpg" alt="Team Member" width={200} height={200} className="rounded-full mx-auto mb-4" />
            <h3 className="font-semibold">Joy Queenesther Okorochukwu</h3>
            <p className="text-sm text-gray-500">Innovation Lead</p>
          </div>
        </div>
      </section> 

      {/* Partnerships */}
      <section id="partnerships" className="bg-linear-to-br from-[#1A3A5C] to-[#0A1F44] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6 md:text-4xl">Our Partnerships</h2>
          <p className="max-w-2xl mx-auto text-white leading-relaxed mb-8 md:text-xl">
            We collaborate with universities, tech companies, and policy makers to accelerate blockchain adoption and innovation.
            Together, we build impactful projects that drive change across Africa.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Image src="/tech.jpg" alt="Partner 1" width={10000} height={30} className='w-100 h-20' />
            <Image src="/spentacademy.png" alt="Partner 3" width={10000} height={60} className='w-70 h-20 bg-black'/>
            <Image src="/spac.png" alt="Partner 3" width={10000} height={60} className='w-50 h-20 bg-black px-3' />
            <Image src="/logss.jpeg" alt="Partner 3"width={150} height={60} className='' />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 md:text-4xl">Our Story</h2>
          <p className="text-gray-600 leading-relaxed md:text-xl">
            Founded in 2020, Blockchain Research Institute Africa began as a small group of passionate researchers determined to unlock
            the potential of blockchain technology for African communities. Today, we’ve grown into a continental hub for innovation,
            education, and policy advocacy.
          </p>
        </div>
        <Image src="/workshop3.png" alt="Our Story" width={500} height={350} className="rounded-lg shadow-lg" />
      </section>

      {/* Core Values */}
      <section className="bg-linear-to-br from-[#1A3A5C] to-[#0A1F44] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-8 md:text-4xl">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-semibold mb-2 text-xl text-black"><FontAwesomeIcon icon={faHandBackFist} className='text-blue-500'/>Integrity</h3>
              <p className="text-gray-600 text-sm md:text-md">We uphold transparency and ethical standards in all our work.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-semibold mb-2 text-xl text-black"><FontAwesomeIcon icon={faHandshake} className='text-teal-400' />Collaboration</h3>
              <p className="text-gray-600 text-sm md:text-md">We believe in partnerships that amplify impact across sectors.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-semibold mb-2 text-xl text-black"><FontAwesomeIcon icon={faLightbulb} className='text-yellow-400' />Innovation</h3>
              <p className="text-gray-600 text-sm md:text-md">We drive creative solutions to Africa’s most pressing challenges.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-semibold mb-2 text-xl text-black"><FontAwesomeIcon icon={faExplosion} className='text-red-500' />Impact</h3>
              <p className="text-gray-600 text-sm md:text-md">We measure success by the positive change we create.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Achievements */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center md:text-4xl">Impact & Achievements</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">50+ Research Papers</h3>
            <p className="text-gray-600 text-sm">Published in leading journals and conferences worldwide.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">20+ Partnerships</h3>
            <p className="text-gray-600 text-sm">Collaborations with universities, tech firms, and governments.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">10,000+ Students</h3>
            <p className="text-gray-600 text-sm">Trained through fellowships, boot-camps, and masterclasses.</p>
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="bg-[#ECF0F1] py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 md:text-4xl">Community Engagement</h2>
            <p className="text-gray-600 leading-relaxed md:text-xl">
              We actively engage with local communities, hosting workshops, hackathons, and policy roundtables. Our goal is to ensure
              blockchain solutions are inclusive, practical, and tailored to African realities.
            </p>
          </div>
          <Image src="/commpic.png" alt="Community Engagement" width={500} height={350} className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Future Goals */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-6 md:text-4xl">Future Goals</h2>
        <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed mb-8 md:text-xl">
          Looking ahead, we aim to expand our research fellowship programs, launch new innovation labs across Africa, and influence
          blockchain policy frameworks that foster sustainable growth.
        </p>
        <Link href="/Contact#partnership" className="inline-block px-6 py-3 bg-[#00BFA6] text-white font-semibold rounded-lg shadow hover:bg-teal-600 transition">
          Partner With Us
        </Link>
      </section>

      {/* Timeline / Milestones */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center md:text-4xl">Our Journey</h2>
        <div className="relative border-l border-gray-200 pl-6 space-y-12">
          <div>
            <h3 className="font-semibold text-xl">2020 – Founded</h3>
            <p className="text-gray-600 text-sm">Started as a small Web2 collective in Ondo.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">2021 – First Training</h3>
            <p className="text-gray-600 text-sm">Launched our Holiday BootCamp program with 50+ students.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">2022 – Ondo Cinematoragphy Program</h3>
            <p className="text-gray-600 text-sm">Taught Motion design and video editing to residents and students of Ondo State.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">2023 – Partnerships</h3>
            <p className="text-gray-600 text-sm">Collaborated with universities and tech firms across Africa.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">2024 – Spent Academy</h3>
            <p className="text-gray-600 text-sm">Starting our elevate training program with the aim of training 10,000 african in various tech skills.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">2025 – Re-branding & Global Recognition</h3>
            <p className="text-gray-600 text-sm">Re-branded & Recognized as a leading blockchain institute in Africa.</p>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="bg-linear-to-br from-[#1A3A5C] to-[#0A1F44] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-8 md:text-4xl">Advisory Board</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <Image src="/epert1.jpg" alt="Advisor" width={120} height={120} className="rounded-full mx-auto mb-4" />
              <h3 className="font-semibold text-black">Prof. Aminu Bello</h3>
              <p className="text-sm text-gray-500">Blockchain Policy Expert</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <Image src="/expert2.jpg" alt="Advisor" width={120} height={120} className="rounded-full mx-auto mb-4" />
              <h3 className="font-semibold text-black">Dr. Kwame Mensah</h3>
              <p className="text-sm text-gray-500">Cryptography Researcher</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <Image src="/philip.jpg" alt="Advisor" width={120} height={120} className="rounded-full mx-auto mb-4" />
              <h3 className="font-semibold text-black">Spirit Phillip</h3>
              <p className="text-sm text-gray-500">Tech Industry Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center md:text-4xl">What People Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <blockquote className="p-6 bg-gray-50 rounded-lg shadow">
            <p className="text-gray-600 italic">“The fellowship transformed my career. I gained hands-on blockchain skills and global exposure.”</p>
            <footer className="mt-4 text-sm font-semibold md:text-xl">– Chinedu, Research Fellow</footer>
          </blockquote>
          <blockquote className="p-6 bg-gray-50 rounded-lg shadow">
            <p className="text-gray-600 italic">“Partnering with the Institute helped us co-create impactful blockchain solutions for African markets.”</p>
            <footer className="mt-4 text-sm font-semibold md:text-xl">– Tech Partner</footer>
          </blockquote>
        </div>
      </section>

      {/* Global Reach */}
      <section className="bg-[#ECF0F1] py-16 text-center">
        <h2 className="text-2xl font-bold mb-6 md:text-4xl">Global Reach</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8 md:text-xl">
          Our programs and research have impacted communities in over 15 African countries and beyond.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <span className="px-4 py-2 bg-white rounded-lg shadow text-sm md:text-xl">Nigeria</span>
          <span className="px-4 py-2 bg-white rounded-lg shadow text-sm md:text-xl">Kenya</span>
          <span className="px-4 py-2 bg-white rounded-lg shadow text-sm md:text-xl">South Africa</span>
          <span className="px-4 py-2 bg-white rounded-lg shadow text-sm md:text-xl">Ghana</span>
          <span className="px-4 py-2 bg-white rounded-lg shadow text-sm md:text-xl">Uganda</span>
        </div>
      </section>

      {/* Sustainability & Ethics */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6 text-center md:text-4xl">Sustainability & Ethics</h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-center md:text-xl">
          We are committed to responsible innovation. Our research prioritizes sustainability, inclusivity, and ethical practices
          to ensure blockchain solutions benefit society without harm.
        </p>
      </section>

      {/* CTA */}
      <section className="py-16 bg-linear-to-br from-[#1A3A5C] to-[#0A1F44] text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Join Us in Shaping the Future</h2>
        <p className="max-w-2xl mx-auto mb-6 md:text-xl">
          Whether you’re a researcher, developer, or policymaker, there’s a place for you in our community. Let’s build the future of blockchain together.
        </p>
        <Link href="/Contact" className="inline-block px-6 py-3 bg-white text-[#00BFA6] font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Get Involved
        </Link>
      </section>
    </main>
  );
}
