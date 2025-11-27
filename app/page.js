'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % publications.length);
    }, 5000);
    return () => clearInterval(timer);
  }, );

const handleNewsletterSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  alert('Thank you for subscribing!');
  setEmail('');
  setIsSubmitting(false);
};


  const researchAreas = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}>
          <path d="M256 160L256 224L384 224L384 160C384 124.7 355.3 96 320 96C284.7 96 256 124.7 256 160zM192 224L192 160C192 89.3 249.3 32 320 32C390.7 32 448 89.3 448 160L448 224C483.3 224 512 252.7 512 288L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 288C128 252.7 156.7 224 192 224z" fill="#2C3E50" />
        </svg>
      ),
      title: 'Blockchain Security',
      description: 'Advancing cryptographic protocols and security frameworks for decentralized systems.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}>
          <path d="M384 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L398.4 160C393.2 185.8 375.5 207.1 352 217.3L352 512L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L128 576C110.3 576 96 561.7 96 544C96 526.3 110.3 512 128 512L288 512L288 217.3C264.5 207 246.8 185.7 241.6 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L256 96C270.6 76.6 293.8 64 320 64C346.2 64 369.4 76.6 384 96zM439.6 384L584.4 384L512 259.8L439.6 384zM512 480C449.1 480 396.8 446 386 401.1C383.4 390.1 387 378.8 392.7 369L487.9 205.8C492.9 197.2 502.1 192 512 192C521.9 192 531.1 197.3 536.1 205.8L631.3 369C637 378.8 640.6 390.1 638 401.1C627.2 445.9 574.9 480 512 480zM126.8 259.8L54.4 384L199.3 384L126.8 259.8zM.9 401.1C-1.7 390.1 1.9 378.8 7.6 369L102.8 205.8C107.8 197.2 117 192 126.9 192C136.8 192 146 197.3 151 205.8L246.2 369C251.9 378.8 255.5 390.1 252.9 401.1C242.1 445.9 189.8 480 126.9 480C64 480 11.7 446 .9 401.1z" fill="#2C3E50" />
        </svg>
      ),
      title: 'Regulatory & Policy',
      description: 'Shaping blockchain governance and compliance frameworks across Africa.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}>
          <path d="M392 176L248 176L210.7 101.5C208.9 97.9 208 93.9 208 89.9C208 75.6 219.6 64 233.9 64L406.1 64C420.4 64 432 75.6 432 89.9C432 93.9 431.1 97.9 429.3 101.5L392 176zM233.6 224L406.4 224L455.1 264.6C521.6 320 560 402 560 488.5C560 536.8 520.8 576 472.5 576L167.4 576C119.2 576 80 536.8 80 488.5C80 402 118.4 320 184.9 264.6L233.6 224zM324 288C313 288 304 297 304 308L304 312C275.2 312.3 252 335.7 252 364.5C252 390.2 270.5 412.1 295.9 416.3L337.6 423.3C343.6 424.3 348 429.5 348 435.6C348 442.5 342.4 448.1 335.5 448.1L280 448C269 448 260 457 260 468C260 479 269 488 280 488L304 488L304 492C304 503 313 512 324 512C335 512 344 503 344 492L344 487.3C369 483.2 388 461.6 388 435.5C388 409.8 369.5 387.9 344.1 383.7L302.4 376.7C296.4 375.7 292 370.5 292 364.4C292 357.5 297.6 351.9 304.5 351.9L352 351.9C363 351.9 372 342.9 372 331.9C372 320.9 363 311.9 352 311.9L344 311.9L344 307.9C344 296.9 335 287.9 324 287.9z" fill="#2C3E50" />
        </svg>
      ),
      title: 'DeFi & Financial Inclusion',
      description: 'Exploring decentralized finance solutions for under-served communities.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}>
          <path d="M335.9 84.2C326.1 78.6 314 78.6 304.1 84.2L80.1 212.2C67.5 219.4 61.3 234.2 65 248.2C68.7 262.2 81.5 272 96 272L128 272L128 480L128 480L76.8 518.4C68.7 524.4 64 533.9 64 544C64 561.7 78.3 576 96 576L544 576C561.7 576 576 561.7 576 544C576 533.9 571.3 524.4 563.2 518.4L512 480L512 272L544 272C558.5 272 571.2 262.2 574.9 248.2C578.6 234.2 572.4 219.4 559.8 212.2L335.8 84.2zM464 272L464 480L400 480L400 272L464 272zM352 272L352 480L288 480L288 272L352 272zM240 272L240 480L176 480L176 272L240 272zM320 160C337.7 160 352 174.3 352 192C352 209.7 337.7 224 320 224C302.3 224 288 209.7 288 192C288 174.3 302.3 160 320 160z" fill="#2C3E50" />
        </svg>
      ),
      title: 'Digital Identity',
      description: 'Building self-sovereign identity systems for enhanced privacy and control.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}>
          <path d="M576 96C576 204.1 499.4 294.3 397.6 315.4C389.7 257.3 363.6 205 325.1 164.5C365.2 104 433.9 64 512 64L544 64C561.7 64 576 78.3 576 96zM64 160C64 142.3 78.3 128 96 128L128 128C251.7 128 352 228.3 352 352L352 544C352 561.7 337.7 576 320 576C302.3 576 288 561.7 288 544L288 384C164.3 384 64 283.7 64 160z" fill="#2C3E50" />
        </svg>
      ),
      title: 'Supply Chain & Agriculture',
      description: 'Implementing blockchain traceability in African agricultural systems.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}>
          <path d="M80 259.8L289.2 345.9C299 349.9 309.4 352 320 352C330.6 352 341 349.9 350.8 345.9L593.2 246.1C602.2 242.4 608 233.7 608 224C608 214.3 602.2 205.6 593.2 201.9L350.8 102.1C341 98.1 330.6 96 320 96C309.4 96 299 98.1 289.2 102.1L46.8 201.9C37.8 205.6 32 214.3 32 224L32 520C32 533.3 42.7 544 56 544C69.3 544 80 533.3 80 520L80 259.8zM128 331.5L128 448C128 501 214 544 320 544C426 544 512 501 512 448L512 331.4L369.1 390.3C353.5 396.7 336.9 400 320 400C303.1 400 286.5 396.7 270.9 390.3L128 331.4z" fill="#2C3E50" />
        </svg>
      ),
      title: 'Education & Certification',
      description: 'Developing verifiable credential systems for academic achievements.',
    },
  ];

  const innovationProjects = [
    { name: 'AfriChain Identity', description: 'A decentralized identity platform for African citizens ensuring data sovereignty.', status: 'Ongoing', statusColor: 'blue' },
    { name: 'AgriTrace Protocol', description: 'Blockchain-based supply chain solution for agricultural product tracking.', status: 'In Review', statusColor: 'amber' },
    { name: 'DeFi Literacy Toolkit', description: 'Open-source educational resources for understanding decentralized finance.', status: 'Published', statusColor: 'green' },
    { name: 'SmartVote Nigeria', description: 'Transparent and verifiable voting system leveraging blockchain technology.', status: 'Ongoing', statusColor: 'blue' },
  ];

  const programs = [
    { name: 'Blockchain Research Fellowship', duration: '6 Months', description: 'Intensive research program for emerging blockchain scholars.', link: '/education#fellowship' },
    { name: 'Web3 Developer BootCamp', duration: '12 Weeks', description: 'Hands-on training in smart contract development and dApp building.', link: '/education#bootcamp' },
    { name: 'Policy & Governance Masterclass', duration: '8 Weeks', description: 'Executive program on blockchain regulation and policy frameworks.', link: '/education#policy' },
    { name: 'Applied Blockchain Workshop', duration: '4 Weeks', description: 'Industry-specific blockchain implementation workshops.', link: '/education#workshop' },
  ];

  const publications = [
    {
      title: 'Blockchain Adoption in African Financial Systems: Opportunities and Challenges',
      author: 'Dr. Amina Okoye',
      date: '2024-10-15',
      downloadUrl: '/publications/blockchain-adoption-africa.pdf',
    },
    {
      title: 'Smart Contracts for Land Registry: A Nigerian Case Study',
      author: 'Prof. Chukwuma Nwosu',
      date: '2024-09-22',
      downloadUrl: '/publications/smart-contracts-land-registry.pdf',
    },
    {
      title: 'Decentralized Identity Solutions for Sub-Saharan Africa',
      author: 'Dr. Fatima Ibrahim',
      date: '2024-08-30',
      downloadUrl: '/publications/decentralized-identity-ssa.pdf',
    },
  ];

  const stats = [
    { value: '150+', label: 'Students Trained' },
    { value: '45', label: 'Research Papers' },
    { value: '20+', label: 'Innovation Projects' },
    { value: '15', label: 'Partner Institutions' },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-linear-to-br from-[#0A1F44] via-[#1A3A5C] to-[#0A1F44] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#00BFA6] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00BFA6] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
              Advancing Blockchain Research, Innovation & Policy in Africa
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Empowering the next generation of blockchain innovators through cutting-edge research, practical education, and collaborative innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/research" className="inline-flex items-center justify-center rounded-md bg-[#00BFA6] px-6 py-3 text-base font-semibold text-white shadow hover:bg-[#00a790] transition">
                Explore Research
              </Link>
              <Link href="/education" className="inline-flex items-center justify-center rounded-md border border-white/70 px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-[#0A1F44] transition">
                Join Our Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="main-content" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Who We Are</h2>
            <p className="mt-4 text-lg text-gray-600 mx-auto max-w-3xl">
              Born from a visionary blockchain agency, we’ve evolved into Africa’s leading blockchain research institute. We bridge the gap between academic research and real-world blockchain applications, fostering innovation that transforms industries across the continent.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20">
                {/* icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width={100} height={100}>
                  <path d="M176 0c-26.5 0-48 21.5-48 48l0 208c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64 32 0c70.7 0 128 57.3 128 128S390.7 448 320 448L32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16.9 0c30.4-34 48.9-78.8 48.9-128 0-106-86-192-192-192l-32 0 0-80c0-26.5-21.5-48-48-48L176 0zM120 352c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z" fill="#2C3E50" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold">Research Excellence</h3>
              <p className="mt-2 text-gray-600">Publishing groundbreaking research that shapes blockchain adoption across Africa.</p>
            </div>

            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width={100} height={100}>
                  <path d="M80 259.8L289.2 345.9C299 349.9 309.4 352 320 352C330.6 352 341 349.9 350.8 345.9L593.2 246.1C602.2 242.4 608 233.7 608 224C608 214.3 602.2 205.6 593.2 201.9L350.8 102.1C341 98.1 330.6 96 320 96C309.4 96 299 98.1 289.2 102.1L46.8 201.9C37.8 205.6 32 214.3 32 224L32 520C32 533.3 42.7 544 56 544C69.3 544 80 533.3 80 520L80 259.8zM128 331.5L128 448C128 501 214 544 320 544C426 544 512 501 512 448L512 331.4L369.1 390.3C353.5 396.7 336.9 400 320 400C303.1 400 286.5 396.7 270.9 390.3L128 331.4z" fill="#2C3E50" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold">Education & Training</h3>
              <p className="mt-2 text-gray-600">Empowering the next generation with comprehensive blockchain education programs.</p>
            </div>

            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width={100} height={100}>
                  <path d="M300.9 149.2L184.3 278.8C179.7 283.9 179.9 291.8 184.8 296.7C215.3 327.2 264.8 327.2 295.3 296.7L327.1 264.9C331.3 260.7 336.6 258.4 342 258C348.8 257.4 355.8 259.7 361 264.9L537.6 440L608 384L608 96L496 160L472.2 144.1C456.4 133.6 437.9 128 418.9 128L348.5 128C347.4 128 346.2 128 345.1 128.1C328.2 129 312.3 136.6 300.9 149.2zM148.6 246.7L255.4 128L215.8 128C190.3 128 165.9 138.1 147.9 156.1L144 160L32 96L32 384L188.4 514.3C211.4 533.5 240.4 544 270.3 544L286 544L279 537C269.6 527.6 269.6 512.4 279 503.1C288.4 493.8 303.6 493.7 312.9 503.1L353.9 544.1L362.9 544.1C382 544.1 400.7 539.8 417.7 531.8L391 505C381.6 495.6 381.6 480.4 391 471.1C400.4 461.8 415.6 461.7 424.9 471.1L456.9 503.1L474.4 485.6C483.3 476.7 485.9 463.8 482 452.5L344.1 315.7L329.2 330.6C279.9 379.9 200.1 379.9 150.8 330.6C127.8 307.6 126.9 270.7 148.6 246.6z" fill="#2C3E50" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold">Collaboration</h3>
              <p className="mt-2 text-gray-600">Building partnerships with institutions, governments, and innovators worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="bg-[#ECF0F1]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Research Focus Areas</h2>
            <p className="mt-4 text-lg text-gray-600 mx-auto max-w-3xl">
              Exploring blockchain’s potential across diverse domains to drive meaningful impact.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="group cursor-pointer rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition flex flex-col items-center"
              >
                <div className="mb-4 transform transition group-hover:scale-110">{area.icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">{area.title}</h4>
                <p className="text-gray-600 text-center">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/research" className="inline-flex items-center justify-center rounded-md bg-[#00BFA6] px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#00a790] transition">
              Explore Our Research
            </Link>
          </div>
        </div>
      </section>

      {/* Innovation Lab */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold">The Innovation Lab</h2>
            <p className="mt-4 text-lg text-gray-600 mx-auto max-w-3xl">
              Transforming research into practical blockchain solutions that address real-world challenges.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {innovationProjects.map((project, index) => (
              <div key={index} className="rounded-xl bg-white p-6 shadow-md ring-1 ring-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-semibold text-gray-900">{project.name}</h4>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-black`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="text-[#0A1F44] font-medium hover:underline inline-flex items-center">
                  View Details <span aria-hidden className="ml-1">→</span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/Innovation-Lab" className="inline-flex items-center justify-center rounded-md bg-[#00BFA6] px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#00a790] transition">
              View Innovation Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Education & Programs */}
      <section className="bg-linear-to-br from-[#1A3A5C] to-[#0A1F44] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Education & Programs</h2>
            <p className="mt-4 text-lg text-gray-200 mx-auto max-w-3xl">
              Comprehensive training programs designed to build blockchain expertise at every level.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="rounded-lg bg-white/10 backdrop-blur-sm p-6 hover:bg-white/20 transition"
              >
                <div className="text-[#00BFA6] text-xs font-semibold mb-2 uppercase tracking-wide">{program.duration}</div>
                <h4 className="text-xl font-bold mb-3 text-white">{program.name}</h4>
                <p className="text-gray-200 text-sm mb-4">{program.description}</p>
                <Link href={program.link} className="text-[#00BFA6] font-medium hover:underline inline-flex items-center">
                  Learn More <span aria-hidden className="ml-1">→</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/education" className="inline-flex items-center justify-center rounded-md bg-[#00BFA6] px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#00a790] transition">
              Join a Program
            </Link>
          </div>
        </div>
      </section>

      {/* Publications Carousel */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Latest Publications</h2>
            <p className="mt-4 text-lg text-gray-600 mx-auto max-w-3xl">
              Explore our most recent research contributions to the blockchain ecosystem.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl mt-12">
            <div className="overflow-hidden rounded-xl border shadow-xl border-gray-200">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {publications.map((pub, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div className="flex flex-col items-center justify-between text-center rounded-xl bg-white p-6">
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900">{pub.title}</h4>
                      <div className="mt-3 flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-2">
                          <span className="text-[#515656]" aria-hidden><FontAwesomeIcon icon={faFileAlt}/></span>
                          {pub.author}
                        </span>
                        <span className="flex items-center gap-2">
                          <span className="text-[#00BFA6]" aria-hidden><FontAwesomeIcon icon={faCalendarAlt}/></span>
                          {new Date(pub.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <a
                          href={pub.downloadUrl}
                          className="inline-flex items-center justify-center rounded-md bg-[#00BFA6] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#00a790] transition"
                          download
                        >
                          Download PDF
                        </a>
                        <Link
                          href="/publications"
                          className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {publications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-[#00BFA6] w-8' : 'bg-gray-300 w-3 hover:bg-gray-400'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/publications" className="inline-flex items-center justify-center rounded-md bg-[#00BFA6] px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#00a790] transition">
              View All Publications
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#ECF0F1]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-extrabold text-[#00BFA6] mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Collaborate With Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              Join forces with leading blockchain researchers, innovators, and educators. Together, we can shape Africa’s blockchain future.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/Contact#partnership" className="inline-flex items-center justify-center rounded-md bg-[#00BFA6] px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#00a790] transition">
                Become a Partner
              </Link>
              <Link href="/Contact" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition">
                Learn About Partnerships
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-linear-to-br from-[#0A1F44] to-[#1A3A5C] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join the Blockchain Research Revolution</h2>
            <p className="text-gray-200 mb-8">
              Get the latest research insights, project updates, and program announcements delivered to your inbox.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="mx-auto flex max-w-xl flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full flex-1 rounded-md border border-white/30 bg-white/95 px-4 py-2 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
                required
                aria-label="Email address"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-[#00BFA6] px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#00a790] transition disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Subscribing...
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>

            <p className="text-sm text-gray-300 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
