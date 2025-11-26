"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export default function ResearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Research Focus Areas
  const researchAreas = [
    {
      id: 1,
      title: "Blockchain Security",
      description:
        "Advancing cryptographic protocols, consensus mechanisms, and security frameworks for decentralized systems. Our research explores vulnerabilities, attack vectors, and defense strategies.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={100}
          height={100}
        >
          <path
            d="M256 160L256 224L384 224L384 160C384 124.7 355.3 96 320 96C284.7 96 256 124.7 256 160zM192 224L192 160C192 89.3 249.3 32 320 32C390.7 32 448 89.3 448 160L448 224C483.3 224 512 252.7 512 288L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 288C128 252.7 156.7 224 192 224z"
            fill="#2C3E50"
          />
        </svg>
      ),
      projects: 5,
      publications: 12,
    },
    {
      id: 2,
      title: "Regulatory & Policy",
      description:
        "Shaping blockchain governance, legal frameworks, and compliance standards across Africa. We work with policymakers to develop pragmatic regulatory approaches.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={100}
          height={100}
        >
          <path
            d="M384 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L398.4 160C393.2 185.8 375.5 207.1 352 217.3L352 512L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L128 576C110.3 576 96 561.7 96 544C96 526.3 110.3 512 128 512L288 512L288 217.3C264.5 207 246.8 185.7 241.6 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L256 96C270.6 76.6 293.8 64 320 64C346.2 64 369.4 76.6 384 96zM439.6 384L584.4 384L512 259.8L439.6 384zM512 480C449.1 480 396.8 446 386 401.1C383.4 390.1 387 378.8 392.7 369L487.9 205.8C492.9 197.2 502.1 192 512 192C521.9 192 531.1 197.3 536.1 205.8L631.3 369C637 378.8 640.6 390.1 638 401.1C627.2 445.9 574.9 480 512 480zM126.8 259.8L54.4 384L199.3 384L126.8 259.8zM.9 401.1C-1.7 390.1 1.9 378.8 7.6 369L102.8 205.8C107.8 197.2 117 192 126.9 192C136.8 192 146 197.3 151 205.8L246.2 369C251.9 378.8 255.5 390.1 252.9 401.1C242.1 445.9 189.8 480 126.9 480C64 480 11.7 446 .9 401.1z"
            fill="#2C3E50"
          />
        </svg>
      ),
      projects: 8,
      publications: 15,
    },
    {
      id: 3,
      title: "DeFi & Financial Inclusion",
      description:
        "Exploring decentralized finance solutions for under-served communities. Research focuses on accessibility, usability, and economic impact of DeFi protocols.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={100}
          height={100}
        >
          <path
            d="M392 176L248 176L210.7 101.5C208.9 97.9 208 93.9 208 89.9C208 75.6 219.6 64 233.9 64L406.1 64C420.4 64 432 75.6 432 89.9C432 93.9 431.1 97.9 429.3 101.5L392 176zM233.6 224L406.4 224L455.1 264.6C521.6 320 560 402 560 488.5C560 536.8 520.8 576 472.5 576L167.4 576C119.2 576 80 536.8 80 488.5C80 402 118.4 320 184.9 264.6L233.6 224zM324 288C313 288 304 297 304 308L304 312C275.2 312.3 252 335.7 252 364.5C252 390.2 270.5 412.1 295.9 416.3L337.6 423.3C343.6 424.3 348 429.5 348 435.6C348 442.5 342.4 448.1 335.5 448.1L280 448C269 448 260 457 260 468C260 479 269 488 280 488L304 488L304 492C304 503 313 512 324 512C335 512 344 503 344 492L344 487.3C369 483.2 388 461.6 388 435.5C388 409.8 369.5 387.9 344.1 383.7L302.4 376.7C296.4 375.7 292 370.5 292 364.4C292 357.5 297.6 351.9 304.5 351.9L352 351.9C363 351.9 372 342.9 372 331.9C372 320.9 363 311.9 352 311.9L344 311.9L344 307.9C344 296.9 335 287.9 324 287.9z"
            fill="#2C3E50"
          />
        </svg>
      ),
      projects: 6,
      publications: 10,
    },
    {
      id: 4,
      title: "Digital Identity",
      description:
        "Building self-sovereign identity systems for enhanced privacy and control. Our work addresses identity verification, data protection, and interoperability.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={100}
          height={100}
        >
          <path
            d="M335.9 84.2C326.1 78.6 314 78.6 304.1 84.2L80.1 212.2C67.5 219.4 61.3 234.2 65 248.2C68.7 262.2 81.5 272 96 272L128 272L128 480L128 480L76.8 518.4C68.7 524.4 64 533.9 64 544C64 561.7 78.3 576 96 576L544 576C561.7 576 576 561.7 576 544C576 533.9 571.3 524.4 563.2 518.4L512 480L512 272L544 272C558.5 272 571.2 262.2 574.9 248.2C578.6 234.2 572.4 219.4 559.8 212.2L335.8 84.2zM464 272L464 480L400 480L400 272L464 272zM352 272L352 480L288 480L288 272L352 272zM240 272L240 480L176 480L176 272L240 272zM320 160C337.7 160 352 174.3 352 192C352 209.7 337.7 224 320 224C302.3 224 288 209.7 288 192C288 174.3 302.3 160 320 160z"
            fill="#2C3E50"
          />
        </svg>
      ),
      projects: 4,
      publications: 8,
    },
    {
      id: 5,
      title: "Supply Chain & Agriculture",
      description:
        "Implementing blockchain traceability in African agricultural systems. Research covers farm-to-market transparency, quality assurance, and fair trade.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={100}
          height={100}
        >
          <path
            d="M576 96C576 204.1 499.4 294.3 397.6 315.4C389.7 257.3 363.6 205 325.1 164.5C365.2 104 433.9 64 512 64L544 64C561.7 64 576 78.3 576 96zM64 160C64 142.3 78.3 128 96 128L128 128C251.7 128 352 228.3 352 352L352 544C352 561.7 337.7 576 320 576C302.3 576 288 561.7 288 544L288 384C164.3 384 64 283.7 64 160z"
            fill="#2C3E50"
          />
        </svg>
      ),
      projects: 7,
      publications: 11,
    },
    {
      id: 6,
      title: "Education & Certification",
      description:
        "Developing verifiable credential systems for academic achievements. Focus on transcript integrity, skill validation, and lifelong learning records.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={100}
          height={100}
        >
          <path
            d="M80 259.8L289.2 345.9C299 349.9 309.4 352 320 352C330.6 352 341 349.9 350.8 345.9L593.2 246.1C602.2 242.4 608 233.7 608 224C608 214.3 602.2 205.6 593.2 201.9L350.8 102.1C341 98.1 330.6 96 320 96C309.4 96 299 98.1 289.2 102.1L46.8 201.9C37.8 205.6 32 214.3 32 224L32 520C32 533.3 42.7 544 56 544C69.3 544 80 533.3 80 520L80 259.8zM128 331.5L128 448C128 501 214 544 320 544C426 544 512 501 512 448L512 331.4L369.1 390.3C353.5 396.7 336.9 400 320 400C303.1 400 286.5 396.7 270.9 390.3L128 331.4z"
            fill="#2C3E50"
          />
        </svg>
      ),
      projects: 3,
      publications: 6,
    },
  ];

  // Publications data
  const publications = [
    {
      id: 1,
      title:
        "Blockchain Adoption in African Financial Systems: Opportunities and Challenges",
      authors: ["Dr. Amina Okoye", "Prof. Chinedu Eze"],
      date: "2024-10-15",
      category: "DeFi & Financial Inclusion",
      abstract:
        "This paper examines the current state of blockchain adoption across African financial institutions, identifying key barriers and opportunities for growth. We analyze regulatory frameworks, infrastructure challenges, and cultural factors affecting implementation.",
      tags: ["DeFi", "Financial Inclusion", "Africa", "Adoption"],
      downloadUrl: "/publications/blockchain-adoption-africa.pdf",
      citations: 24,
    },
    {
      id: 2,
      title: "Smart Contracts for Land Registry: A Nigerian Case Study",
      authors: ["Prof. Chukwuma Nwosu", "Dr. Fatima Ibrahim"],
      date: "2024-09-22",
      category: "Blockchain Security",
      abstract:
        "We present a comprehensive study of implementing smart contracts for land registry management in Nigeria. The research covers technical implementation, legal considerations, and stakeholder acceptance.",
      tags: ["Smart Contracts", "Land Registry", "Nigeria", "Property Rights"],
      downloadUrl: "/publications/smart-contracts-land-registry.pdf",
      citations: 18,
    },
    {
      id: 3,
      title: "Decentralized Identity Solutions for Sub-Saharan Africa",
      authors: ["Dr. Fatima Ibrahim", "Dr. Kwame Mensah"],
      date: "2024-08-30",
      category: "Digital Identity",
      abstract:
        "This research explores the potential of self-sovereign identity systems in addressing identity challenges across Sub-Saharan Africa. We propose a framework tailored to regional needs and constraints.",
      tags: ["Digital Identity", "SSI", "Privacy", "Africa"],
      downloadUrl: "/publications/decentralized-identity-ssa.pdf",
      citations: 31,
    },
    {
      id: 4,
      title: "Agricultural Supply Chain Transparency Using Blockchain",
      authors: ["Dr. Amara Okonkwo", "Prof. Segun Adeyemi"],
      date: "2024-08-10",
      category: "Supply Chain & Agriculture",
      abstract:
        "An investigation into blockchain-based traceability systems for agricultural products. The study includes pilot implementations in cocoa and coffee supply chains.",
      tags: ["Supply Chain", "Agriculture", "Traceability", "Food Security"],
      downloadUrl: "/publications/agri-supply-chain.pdf",
      citations: 15,
    },
    {
      id: 5,
      title: "Regulatory Frameworks for Cryptocurrency in West Africa",
      authors: ["Prof. Chioma Nwankwo", "Dr. Abdul Rahman"],
      date: "2024-07-18",
      category: "Regulatory & Policy",
      abstract:
        "A comparative analysis of cryptocurrency regulations across West African nations. This paper proposes harmonized regulatory approaches that balance innovation with consumer protection.",
      tags: ["Regulation", "Policy", "Cryptocurrency", "West Africa"],
      downloadUrl: "/publications/regulatory-frameworks-wa.pdf",
      citations: 27,
    },
    {
      id: 6,
      title: "Blockchain-Based Academic Credentials: Implementation Framework",
      authors: ["Dr. Olusegun Adebayo", "Dr. Grace Mwangi"],
      date: "2024-06-25",
      category: "Education & Certification",
      abstract:
        "We present a practical framework for implementing blockchain-based academic credential systems in African universities. The research addresses technical, administrative, and adoption challenges.",
      tags: ["Education", "Credentials", "Verification", "Universities"],
      downloadUrl: "/publications/academic-credentials.pdf",
      citations: 12,
    },
    {
      id: 7,
      title: "Privacy-Preserving Blockchain Systems: A Survey",
      authors: ["Dr. Amina Okoye", "Prof. James Okoro"],
      date: "2024-05-30",
      category: "Blockchain Security",
      abstract:
        "A comprehensive survey of privacy-preserving techniques in blockchain systems, including zero-knowledge proofs, ring signatures, and confidential transactions.",
      tags: ["Privacy", "Security", "Zero-Knowledge", "Cryptography"],
      downloadUrl: "/publications/privacy-preserving-survey.pdf",
      citations: 42,
    },
    {
      id: 8,
      title: "DeFi Protocols for Microfinance: African Context",
      authors: ["Dr. Kwame Mensah", "Prof. Chioma Nwankwo"],
      date: "2024-04-12",
      category: "DeFi & Financial Inclusion",
      abstract:
        "This study explores how DeFi protocols can be adapted for microfinance applications in Africa, addressing unique challenges such as limited internet access and financial literacy.",
      tags: ["DeFi", "Microfinance", "Financial Inclusion", "Adaptation"],
      downloadUrl: "/publications/defi-microfinance.pdf",
      citations: 19,
    },
  ];

  // Ongoing research projects
  const ongoingProjects = [
    {
      id: 1,
      title: "Cross-Border Remittance Solutions",
      lead: "Dr. Amina Okoye",
      status: "Ongoing",
      duration: "Jan 2024 - Dec 2024",
      description:
        "Developing low-cost blockchain-based remittance systems for African diaspora communities.",
    },
    {
      id: 2,
      title: "Central Bank Digital Currency (CBDC) Framework",
      lead: "Prof. Chioma Nwankwo",
      status: "In Review",
      duration: "Mar 2024 - Nov 2024",
      description:
        "Research collaboration with central banks on CBDC design and implementation strategies.",
    },
    {
      id: 3,
      title: "Healthcare Data Management on Blockchain",
      lead: "Dr. Fatima Ibrahim",
      status: "Ongoing",
      duration: "May 2024 - Apr 2025",
      description:
        "Exploring secure and interoperable health record systems using distributed ledger technology.",
    },
  ];

  // Categories for filtering
  const categories = [
    "All",
    ...new Set(publications.map((pub) => pub.category)),
  ];

  // Filter and sort publications
  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.some((author) =>
        author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "All" || pub.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPublications = [...filteredPublications].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === "citations") {
      return b.citations - a.citations;
    }
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedPublications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPublications = sortedPublications.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}

      {/* Research Philosophy */}
      <section className="md:py-24 bg-linear-to-br from-[#1A3A5C] to-[#0A1F44] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Research Philosophy
            </h2>
            <p className="text-lg text-white leading-relaxed">
              We believe in research that matters. Every project we undertake
              addresses real-world challenges facing African communities and
              businesses. Our approach combines rigorous academic methodology
              with practical application, ensuring our findings translate into
              meaningful impact.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20">
                {/* icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="text-white"
                >
                  <path
                    d="M176 0c-26.5 0-48 21.5-48 48l0 208c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64 32 0c70.7 0 128 57.3 128 128S390.7 448 320 448L32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16.9 0c30.4-34 48.9-78.8 48.9-128 0-106-86-192-192-192l-32 0 0-80c0-26.5-21.5-48-48-48L176 0zM120 352c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold">Rigorous Methodology</h3>
              <p className="mt-2">
                Peer-reviewed research following international academic
                standards and best practices.
              </p>
            </div>

            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path
                    d="M511.6 239C480 164.4 406.1 112 320 112C297.9 112 276.6 115.5 256.6 121.8C256.2 123.8 256 125.9 256 128L256 201.4C256 213.9 266.1 224 278.6 224C284.6 224 290.4 221.6 294.6 217.4L310.6 201.4C316.6 195.4 324.7 192 333.2 192L338.7 192C367.2 192 381.5 226.5 361.3 246.6C355.3 252.6 347.2 256 338.7 256L277.2 256C268.7 256 260.6 259.4 254.6 265.4L233.3 286.7C227.3 292.7 223.9 300.8 223.9 309.3L223.9 352C223.9 369.7 238.2 384 255.9 384L287.9 384C305.6 384 319.9 398.3 319.9 416L319.9 448C319.9 465.7 334.2 480 351.9 480L354.6 480C363.1 480 371.2 476.6 377.2 470.6L406.5 441.3C412.5 435.3 415.9 427.2 415.9 418.7L415.9 400C415.9 391.2 423.1 384 431.9 384C440.7 384 447.9 376.8 447.9 368L447.9 333.3C447.9 324.8 444.5 316.7 438.5 310.7L422.5 294.7C418.3 290.5 415.9 284.7 415.9 278.7C415.9 266.2 426 256.1 438.5 256.1L483.5 256.1C495.9 256.1 506.2 249 511.5 239.1zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold">African Context</h3>
              <p className="mt-2 text">
                Research grounded in African realities, addressing
                continent-specific challenges and opportunities.
              </p>
            </div>

            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path
                    d="M192 384L88.5 384C63.6 384 48.3 356.9 61.1 335.5L114 247.3C122.7 232.8 138.3 224 155.2 224L250.2 224C326.3 95.1 439.8 88.6 515.7 99.7C528.5 101.6 538.5 111.6 540.3 124.3C551.4 200.2 544.9 313.7 416 389.8L416 484.8C416 501.7 407.2 517.3 392.7 526L304.5 578.9C283.2 591.7 256 576.3 256 551.5L256 448C256 412.7 227.3 384 192 384L191.9 384zM464 224C464 197.5 442.5 176 416 176C389.5 176 368 197.5 368 224C368 250.5 389.5 272 416 272C442.5 272 464 250.5 464 224z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold">Practical Impact</h3>
              <p className="mt-2">
                Translating research findings into actionable insights for
                industry and policy makers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section id="areas" className="py-16 md:py-24 bg-[#ECF0F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
              Research Focus Areas
            </h2>
            <p className="text-lg text-[#2C3E50] max-w-3xl mx-auto">
              Our research spans six core areas, each addressing critical
              aspects of blockchain technology and its applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area) => (
              <div
                key={area.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-[#0A1F44] mb-3">
                  {area.title}
                </h3>
                <p className="text-[#2C3E50] text-sm mb-4 leading-relaxed">
                  {area.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-[#7F8C8D]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    width={20}
                    height="auto"
                  >
                    <path
                      d="M96 96C113.7 96 128 110.3 128 128L128 464C128 472.8 135.2 480 144 480L544 480C561.7 480 576 494.3 576 512C576 529.7 561.7 544 544 544L144 544C99.8 544 64 508.2 64 464L64 128C64 110.3 78.3 96 96 96zM208 288C225.7 288 240 302.3 240 320L240 384C240 401.7 225.7 416 208 416C190.3 416 176 401.7 176 384L176 320C176 302.3 190.3 288 208 288zM352 224L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 224C288 206.3 302.3 192 320 192C337.7 192 352 206.3 352 224zM432 256C449.7 256 464 270.3 464 288L464 384C464 401.7 449.7 416 432 416C414.3 416 400 401.7 400 384L400 288C400 270.3 414.3 256 432 256zM576 160L576 384C576 401.7 561.7 416 544 416C526.3 416 512 401.7 512 384L512 160C512 142.3 526.3 128 544 128C561.7 128 576 142.3 576 160z"
                      fill="#2C3E50"
                    />
                  </svg>
                  <span className="flex items-center gap-1">
                    {area.projects} Projects
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    width={20}
                    height="auto"
                  >
                    <path
                      d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"
                      fill="#2C3E50"
                    />
                  </svg>
                  <span className="flex items-center gap-1">
                    {area.publications} Papers
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
              Publications
            </h2>
            <p className="text-lg text-[#2C3E50] max-w-3xl mx-auto">
              Explore our peer-reviewed research papers, technical reports, and
              academic contributions.
            </p>
          </div>

          {/* Filter & Search */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by title, author, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border-2 border-[#ECF0F1] rounded-lg focus:outline-none focus:border-[#00BFA6] transition-colors"
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7F8C8D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-[#00BFA6] text-white"
                        : "bg-[#ECF0F1] text-[#2C3E50] hover:bg-[#00BFA6]/10"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border-2 border-[#ECF0F1] rounded-lg focus:outline-none focus:border-[#00BFA6] text-[#2C3E50]"
              >
                <option value="date">Sort by Date</option>
                <option value="citations">Sort by Citations</option>
              </select>
            </div>
          </div>

          {/* Publications Grid */}
          {paginatedPublications.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {paginatedPublications.map((pub) => (
                <div
                  key={pub.id}
                  className="bg-white border-2 border-[#ECF0F1] rounded-xl p-6 hover:border-[#00BFA6] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-[#00BFA6]/10 text-[#00BFA6] text-xs font-semibold rounded-full">
                      {pub.category}
                    </span>
                    <span className="text-xs text-[#7F8C8D]">
                      {pub.citations} citations
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0A1F44] mb-2 leading-tight">
                    {pub.title}
                  </h3>

                  <div className="flex items-center gap-3 text-sm text-[#7F8C8D] mb-3">
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                        width={20}
                        height="auto"
                      >
                        <path
                          d="M256.1 312C322.4 312 376.1 258.3 376.1 192C376.1 125.7 322.4 72 256.1 72C189.8 72 136.1 125.7 136.1 192C136.1 258.3 189.8 312 256.1 312zM226.4 368C127.9 368 48.1 447.8 48.1 546.3C48.1 562.7 61.4 576 77.8 576L274.3 576L285.2 521.5C289.5 499.8 300.2 479.9 315.8 464.3L383.1 397C355.1 378.7 321.7 368.1 285.7 368.1L226.3 368.1zM332.3 530.9L320.4 590.5C320.2 591.4 320.1 592.4 320.1 593.4C320.1 601.4 326.6 608 334.7 608C335.7 608 336.6 607.9 337.6 607.7L397.2 595.8C409.6 593.3 421 587.2 429.9 578.3L548.8 459.4L468.8 379.4L349.9 498.3C341 507.2 334.9 518.6 332.4 531zM600.1 407.9C622.2 385.8 622.2 350 600.1 327.9C578 305.8 542.2 305.8 520.1 327.9L491.3 356.7L571.3 436.7L600.1 407.9z"
                          fill="#2C3E50"
                        />
                      </svg>
                      {pub.authors.slice(0, 2).join(", ")}
                      {pub.authors.length > 2 && " et al."}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                        width={20}
                        height="auto"
                      >
                        <path
                          d="M224 64C241.7 64 256 78.3 256 96L256 128L384 128L384 96C384 78.3 398.3 64 416 64C433.7 64 448 78.3 448 96L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 96C192 78.3 206.3 64 224 64zM160 304L160 336C160 344.8 167.2 352 176 352L208 352C216.8 352 224 344.8 224 336L224 304C224 295.2 216.8 288 208 288L176 288C167.2 288 160 295.2 160 304zM288 304L288 336C288 344.8 295.2 352 304 352L336 352C344.8 352 352 344.8 352 336L352 304C352 295.2 344.8 288 336 288L304 288C295.2 288 288 295.2 288 304zM432 288C423.2 288 416 295.2 416 304L416 336C416 344.8 423.2 352 432 352L464 352C472.8 352 480 344.8 480 336L480 304C480 295.2 472.8 288 464 288L432 288zM160 432L160 464C160 472.8 167.2 480 176 480L208 480C216.8 480 224 472.8 224 464L224 432C224 423.2 216.8 416 208 416L176 416C167.2 416 160 423.2 160 432zM304 416C295.2 416 288 423.2 288 432L288 464C288 472.8 295.2 480 304 480L336 480C344.8 480 352 472.8 352 464L352 432C352 423.2 344.8 416 336 416L304 416zM416 432L416 464C416 472.8 423.2 480 432 480L464 480C472.8 480 480 472.8 480 464L480 432C480 423.2 472.8 416 464 416L432 416C423.2 416 416 423.2 416 432z"
                          fill="#2C3E50"
                        />
                      </svg>
                      {new Date(pub.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <p className="text-[#2C3E50] text-sm mb-4 leading-relaxed line-clamp-3">
                    {pub.abstract}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#ECF0F1] text-[#2C3E50] text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={pub.downloadUrl}
                      download
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#00BFA6] text-white font-medium rounded-lg hover:bg-[#009688] transition-colors text-sm"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download PDF
                    </a>
                    <button className="px-4 py-2 border-2 border-[#00BFA6] text-[#00BFA6] font-medium rounded-lg hover:bg-[#00BFA6]/10 transition-colors text-sm">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#7F8C8D] text-lg">
                No publications found matching your criteria.
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border-2 border-[#ECF0F1] text-[#2C3E50] hover:border-[#00BFA6] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                    currentPage === index + 1
                      ? "bg-[#00BFA6] text-white"
                      : "border-2 border-[#ECF0F1] text-[#2C3E50] hover:border-[#00BFA6]"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border-2 border-[#ECF0F1] text-[#2C3E50] hover:border-[#00BFA6] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Ongoing Research Projects */}
      <section className="py-16 md:py-24 bg-[#ECF0F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
              Ongoing Research Projects
            </h2>
            <p className="text-lg text-[#2C3E50] max-w-3xl mx-auto">
              Current research initiatives addressing emerging challenges and
              opportunities in blockchain technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ongoingProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      project.status === "Ongoing"
                        ? "bg-[#3498DB]/10 text-[#3498DB]"
                        : "bg-[#F39C12]/10 text-[#F39C12]"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0A1F44] mb-2">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-[#7F8C8D] mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    width={20}
                    height="auto"
                  >
                    <path
                      d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"
                      fill="#2C3E50"
                    />
                  </svg>
                  <span>{project.lead}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-[#7F8C8D] mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    width={20}
                    height="auto"
                  >
                    <path
                      d="M224 64C241.7 64 256 78.3 256 96L256 128L384 128L384 96C384 78.3 398.3 64 416 64C433.7 64 448 78.3 448 96L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 96C192 78.3 206.3 64 224 64zM160 304L160 336C160 344.8 167.2 352 176 352L208 352C216.8 352 224 344.8 224 336L224 304C224 295.2 216.8 288 208 288L176 288C167.2 288 160 295.2 160 304zM288 304L288 336C288 344.8 295.2 352 304 352L336 352C344.8 352 352 344.8 352 336L352 304C352 295.2 344.8 288 336 288L304 288C295.2 288 288 295.2 288 304zM432 288C423.2 288 416 295.2 416 304L416 336C416 344.8 423.2 352 432 352L464 352C472.8 352 480 344.8 480 336L480 304C480 295.2 472.8 288 464 288L432 288zM160 432L160 464C160 472.8 167.2 480 176 480L208 480C216.8 480 224 472.8 224 464L224 432C224 423.2 216.8 416 208 416L176 416C167.2 416 160 423.2 160 432zM304 416C295.2 416 288 423.2 288 432L288 464C288 472.8 295.2 480 304 480L336 480C344.8 480 352 472.8 352 464L352 432C352 423.2 344.8 416 336 416L304 416zM416 432L416 464C416 472.8 423.2 480 432 480L464 480C472.8 480 480 472.8 480 464L480 432C480 423.2 472.8 416 464 416L432 416C423.2 416 416 423.2 416 432z"
                      fill="#2C3E50"
                    />
                  </svg>
                  <span>{project.duration}</span>
                </div>

                <p className="text-[#2C3E50] text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborative Research CTA */}
      <section
        id="submit"
        className="py-16 md:py-24 bg-gradient-to-br from-[#0A1F44] to-[#1A3A5C] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Research Community
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Whether you&apos;re a researcher, academic, or industry
              professional, we welcome collaboration. Submit your research
              proposal or join as a research fellow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?subject=research-proposal"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00BFA6] text-white font-medium rounded-lg hover:bg-[#009688] transition-colors shadow-lg"
              >
                Propose a Research Topic
              </Link>
              <Link
                href="/education#fellowship"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-white/10 transition-colors"
              >
                Join as a Research Fellow
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
