'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function EducationPage() {
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const applyRef = useRef(null);

    // Main Programs
    const programs = [
        {
            id: 'fellowship',
            name: 'Blockchain Research Fellowship',
            duration: '6 Months',
            type: 'Full-Time',
            level: 'Advanced',
            description: 'An intensive research program for emerging blockchain scholars. Fellows work on cutting-edge research projects under the guidance of experienced researchers, publish papers, and contribute to the advancement of blockchain knowledge.',
            eligibility: [
                'Master\'s degree or higher in Computer Science, Engineering, Economics, or related field',
                'Strong research background with published work (preferred)',
                'Demonstrable interest in blockchain technology',
                'Commitment to full-time engagement for 6 months'
            ],
            curriculum: [
                'Advanced Cryptography & Consensus Mechanisms',
                'Research Methodology & Academic Writing',
                'Blockchain Architecture & Design Patterns',
                'Independent Research Project',
                'Publication & Peer Review Process',
                'Conference Presentation Skills'
            ],
            outcomes: [
                'Published research paper in academic journal or conference',
                'Deep expertise in specialized blockchain domain',
                'Professional research network',
                'Research Fellowship Certificate',
                'Potential PhD pathway recommendations'
            ],
            applicationDeadline: 'Rolling Admissions',
            startDate: 'Quarterly Cohorts',
            tuition: 'Fully Funded with Stipend',
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}>
                <path d="M176 0c-26.5 0-48 21.5-48 48l0 208c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64 32 0c70.7 0 128 57.3 128 128S390.7 448 320 448L32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16.9 0c30.4-34 48.9-78.8 48.9-128 0-106-86-192-192-192l-32 0 0-80c0-26.5-21.5-48-48-48L176 0zM120 352c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z" fill="#2C3E50" />
            </svg>)
        },
        {
            id: 'bootcamp',
            name: 'Web3 Developer Bootcamp',
            duration: '12 Weeks',
            type: 'Intensive',
            level: 'Intermediate',
            description: 'A comprehensive hands-on training program in smart contract development and decentralized application building. Transform from a traditional developer into a Web3 expert through practical projects and real-world applications.',
            eligibility: [
                'Basic programming experience (any language)',
                'Understanding of web development fundamentals',
                'Passion for decentralized technologies',
                'Ability to commit 40+ hours per week'
            ],
            curriculum: [
                'Blockchain Fundamentals & Web3 Concepts',
                'Solidity Smart Contract Development',
                'Ethereum & EVM-Compatible Chains',
                'Frontend Integration (Web3.js, ethers.js)',
                'Testing, Security & Auditing',
                'DApp Development & Deployment',
                'IPFS & Decentralized Storage',
                'Final Capstone Project'
            ],
            outcomes: [
                'Professional portfolio of deployed smart contracts',
                'Understanding of DeFi, NFTs, and DAOs',
                'Industry-ready development skills',
                'Web3 Developer Certificate',
                'Job placement assistance',
                'Access to developer community'
            ],
            applicationDeadline: 'Monthly Cohorts',
            startDate: 'First Monday of Each Month',
            tuition: '$2,500 (Scholarships Available)',
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}><path d="M128 96C92.7 96 64 124.7 64 160L64 400L128 400L128 160L512 160L512 400L576 400L576 160C576 124.7 547.3 96 512 96L128 96zM19.2 448C8.6 448 0 456.6 0 467.2C0 509.6 34.4 544 76.8 544L563.2 544C605.6 544 640 509.6 640 467.2C640 456.6 631.4 448 620.8 448L19.2 448z" fill="#2C3E50" /></svg>)
        },
        {
            id: 'policy',
            name: 'Policy & Governance Masterclass',
            duration: '8 Weeks',
            type: 'Part-Time',
            level: 'Executive',
            description: 'An executive program designed for policy makers, regulators, and legal professionals. Gain comprehensive understanding of blockchain regulation, governance frameworks, and policy development strategies.',
            eligibility: [
                'Professional experience in policy, law, or regulation',
                'Government officials, legal practitioners, or compliance officers',
                'Business leaders involved in regulatory strategy',
                'No technical background required'
            ],
            curriculum: [
                'Blockchain Technology Overview for Non-Technical Professionals',
                'Global Regulatory Landscape & Comparative Analysis',
                'Cryptocurrency Regulation & AML/KYC Requirements',
                'Smart Contract Legal Implications',
                'Central Bank Digital Currencies (CBDCs)',
                'Data Privacy & Consumer Protection',
                'Policy Framework Development',
                'Case Studies: Successful Regulatory Approaches'
            ],
            outcomes: [
                'Comprehensive understanding of blockchain regulation',
                'Ability to develop balanced policy frameworks',
                'Network of global regulators and policy experts',
                'Policy Masterclass Certificate',
                'Consultation opportunities',
                'Access to ongoing policy briefs'
            ],
            applicationDeadline: 'Bi-Monthly Intake',
            startDate: 'January & July',
            tuition: '$3,500 (Government Discounts Available)',
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}>
                <path d="M384 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L398.4 160C393.2 185.8 375.5 207.1 352 217.3L352 512L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L128 576C110.3 576 96 561.7 96 544C96 526.3 110.3 512 128 512L288 512L288 217.3C264.5 207 246.8 185.7 241.6 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L256 96C270.6 76.6 293.8 64 320 64C346.2 64 369.4 76.6 384 96zM439.6 384L584.4 384L512 259.8L439.6 384zM512 480C449.1 480 396.8 446 386 401.1C383.4 390.1 387 378.8 392.7 369L487.9 205.8C492.9 197.2 502.1 192 512 192C521.9 192 531.1 197.3 536.1 205.8L631.3 369C637 378.8 640.6 390.1 638 401.1C627.2 445.9 574.9 480 512 480zM126.8 259.8L54.4 384L199.3 384L126.8 259.8zM.9 401.1C-1.7 390.1 1.9 378.8 7.6 369L102.8 205.8C107.8 197.2 117 192 126.9 192C136.8 192 146 197.3 151 205.8L246.2 369C251.9 378.8 255.5 390.1 252.9 401.1C242.1 445.9 189.8 480 126.9 480C64 480 11.7 446 .9 401.1z" fill="#2C3E50" />
            </svg>)
        },
        {
            id: 'workshop',
            name: 'Applied Blockchain Workshop',
            duration: '4 Weeks',
            type: 'Part-Time',
            level: 'Beginner to Intermediate',
            description: 'Industry-specific blockchain implementation workshops tailored to real estate, agriculture, supply chain, and other sectors. Learn how to apply blockchain solutions to solve specific industry challenges.',
            eligibility: [
                'Industry professionals seeking blockchain solutions',
                'Entrepreneurs exploring blockchain applications',
                'Technical managers and project leads',
                'Basic understanding of business processes'
            ],
            curriculum: [
                'Blockchain Fundamentals & Use Cases',
                'Industry-Specific Applications (Choose Track)',
                'Feasibility Assessment & ROI Analysis',
                'Vendor Selection & Technology Stack',
                'Implementation Planning & Change Management',
                'Pilot Project Design',
                'Scaling & Integration Strategies',
                'Final Project: Industry Solution Proposal'
            ],
            outcomes: [
                'Practical blockchain implementation roadmap',
                'Industry-specific use case expertise',
                'Cost-benefit analysis skills',
                'Applied Blockchain Certificate',
                'Implementation toolkit',
                'Ongoing technical support'
            ],
            applicationDeadline: 'Open Enrollment',
            startDate: 'Monthly Start Dates',
            tuition: '$1,200 per track',
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}><path d="M128 160C128 124.7 156.7 96 192 96L544 96C579.3 96 608 124.7 608 160L608 400L512 400L512 384C512 366.3 497.7 352 480 352L416 352C398.3 352 384 366.3 384 384L384 400L254.9 400C265.8 381.2 272 359.3 272 336C272 265.3 214.7 208 144 208C138.6 208 133.2 208.3 128 209L128 160zM333 512C327.9 487.8 316.7 465.9 300.9 448L608 448C608 483.3 579.3 512 544 512L333 512zM64 336C64 291.8 99.8 256 144 256C188.2 256 224 291.8 224 336C224 380.2 188.2 416 144 416C99.8 416 64 380.2 64 336zM0 544C0 491 43 448 96 448L192 448C245 448 288 491 288 544C288 561.7 273.7 576 256 576L32 576C14.3 576 0 561.7 0 544z" fill="#2C3E50" /></svg>)
        }
    ];

    // Learning Approach
    const learningApproach = [
        {
            title: 'Research-Driven',
            description: 'All programs are grounded in cutting-edge research and evidence-based methodologies.',
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}><path d="M480 576L192 576C139 576 96 533 96 480L96 160C96 107 139 64 192 64L496 64C522.5 64 544 85.5 544 112L544 400C544 420.9 530.6 438.7 512 445.3L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L480 576zM192 448C174.3 448 160 462.3 160 480C160 497.7 174.3 512 192 512L448 512L448 448L192 448zM224 216C224 229.3 234.7 240 248 240L424 240C437.3 240 448 229.3 448 216C448 202.7 437.3 192 424 192L248 192C234.7 192 224 202.7 224 216zM248 288C234.7 288 224 298.7 224 312C224 325.3 234.7 336 248 336L424 336C437.3 336 448 325.3 448 312C448 298.7 437.3 288 424 288L248 288z" fill="#2C3E50" /></svg>)
        },
        {
            title: 'Practical Labs',
            description: 'Hands-on experience with real blockchain networks, tools, and development environments.',
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}><path d="M434.8 54.1C446.7 62.7 451.1 78.3 445.7 91.9L367.3 288L512 288C525.5 288 537.5 296.4 542.1 309.1C546.7 321.8 542.8 336 532.5 344.6L244.5 584.6C233.2 594 217.1 594.5 205.2 585.9C193.3 577.3 188.9 561.7 194.3 548.1L272.7 352L128 352C114.5 352 102.5 343.6 97.9 330.9C93.3 318.2 97.2 304 107.5 295.4L395.5 55.4C406.8 46 422.9 45.5 434.8 54.1z" fill="#2C3E50" /></svg>)
        },
        {
            title: 'Expert Mentorship',
            description: 'One-on-one guidance from experienced researchers and industry practitioners.',
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}><path d="M96 192C96 130.1 146.1 80 208 80C269.9 80 320 130.1 320 192C320 253.9 269.9 304 208 304C146.1 304 96 253.9 96 192zM32 528C32 430.8 110.8 352 208 352C305.2 352 384 430.8 384 528L384 534C384 557.2 365.2 576 342 576L74 576C50.8 576 32 557.2 32 534L32 528zM464 128C517 128 560 171 560 224C560 277 517 320 464 320C411 320 368 277 368 224C368 171 411 128 464 128zM464 368C543.5 368 608 432.5 608 512L608 534.4C608 557.4 589.4 576 566.4 576L421.6 576C428.2 563.5 432 549.2 432 534L432 528C432 476.5 414.6 429.1 385.5 391.3C408.1 376.6 435.1 368 464 368z" fill="#2C3E50" /></svg>)
        },
        {
            title: 'Community Impact',
            description: 'Projects focused on solving real African challenges and creating measurable impact.',
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}><path d="M511.6 239C480 164.4 406.1 112 320 112C297.9 112 276.6 115.5 256.6 121.8C256.2 123.8 256 125.9 256 128L256 201.4C256 213.9 266.1 224 278.6 224C284.6 224 290.4 221.6 294.6 217.4L310.6 201.4C316.6 195.4 324.7 192 333.2 192L338.7 192C367.2 192 381.5 226.5 361.3 246.6C355.3 252.6 347.2 256 338.7 256L277.2 256C268.7 256 260.6 259.4 254.6 265.4L233.3 286.7C227.3 292.7 223.9 300.8 223.9 309.3L223.9 352C223.9 369.7 238.2 384 255.9 384L287.9 384C305.6 384 319.9 398.3 319.9 416L319.9 448C319.9 465.7 334.2 480 351.9 480L354.6 480C363.1 480 371.2 476.6 377.2 470.6L406.5 441.3C412.5 435.3 415.9 427.2 415.9 418.7L415.9 400C415.9 391.2 423.1 384 431.9 384C440.7 384 447.9 376.8 447.9 368L447.9 333.3C447.9 324.8 444.5 316.7 438.5 310.7L422.5 294.7C418.3 290.5 415.9 284.7 415.9 278.7C415.9 266.2 426 256.1 438.5 256.1L483.5 256.1C495.9 256.1 506.2 249 511.5 239.1zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z" fill="#2C3E50" /></svg>)
        }
    ];

    // Who Can Enroll
    const enrollmentCategories = [
        {
            category: 'Students',
            description: 'Undergraduate and graduate students seeking to specialize in blockchain technology.',
            programs: ['Research Fellowship', 'Developer Bootcamp', 'Applied Workshop'],
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}>
                <path d="M80 259.8L289.2 345.9C299 349.9 309.4 352 320 352C330.6 352 341 349.9 350.8 345.9L593.2 246.1C602.2 242.4 608 233.7 608 224C608 214.3 602.2 205.6 593.2 201.9L350.8 102.1C341 98.1 330.6 96 320 96C309.4 96 299 98.1 289.2 102.1L46.8 201.9C37.8 205.6 32 214.3 32 224L32 520C32 533.3 42.7 544 56 544C69.3 544 80 533.3 80 520L80 259.8zM128 331.5L128 448C128 501 214 544 320 544C426 544 512 501 512 448L512 331.4L369.1 390.3C353.5 396.7 336.9 400 320 400C303.1 400 286.5 396.7 270.9 390.3L128 331.4z" fill="#2C3E50" />
            </svg>)
        },
        {
            category: 'Developers',
            description: 'Software engineers transitioning to Web3 and blockchain development.',
            programs: ['Developer Bootcamp', 'Applied Workshop'],
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}><path d="M64 160C64 124.7 92.7 96 128 96L512 96C547.3 96 576 124.7 576 160L576 400L512 400L512 160L128 160L128 400L64 400L64 160zM0 467.2C0 456.6 8.6 448 19.2 448L620.8 448C631.4 448 640 456.6 640 467.2C640 509.6 605.6 544 563.2 544L76.8 544C34.4 544 0 509.6 0 467.2zM281 273L250 304L281 335C290.4 344.4 290.4 359.6 281 368.9C271.6 378.2 256.4 378.3 247.1 368.9L199.1 320.9C189.7 311.5 189.7 296.3 199.1 287L247.1 239C256.5 229.6 271.7 229.6 281 239C290.3 248.4 290.4 263.6 281 272.9zM393 239L441 287C450.4 296.4 450.4 311.6 441 320.9L393 368.9C383.6 378.3 368.4 378.3 359.1 368.9C349.8 359.5 349.7 344.3 359.1 335L390.1 304L359.1 273C349.7 263.6 349.7 248.4 359.1 239.1C368.5 229.8 383.7 229.7 393 239.1z" fill="#2C3E50" /></svg>)
        },
        {
            category: 'Professionals',
            description: 'Business leaders, policy makers, and industry experts exploring blockchain applications.',
            programs: ['Policy Masterclass', 'Applied Workshop'],
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}><path d="M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 160L128 160C92.7 160 64 188.7 64 224L64 320L576 320L576 224C576 188.7 547.3 160 512 160L432 160L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM576 368L384 368L384 384C384 401.7 369.7 416 352 416L288 416C270.3 416 256 401.7 256 384L256 368L64 368L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 368z" fill="#2C3E50" /></svg>)
        },
        {
            category: 'Institutions',
            description: 'Universities, government agencies, and organizations seeking group training.',
            programs: ['All Programs (Custom Arrangements)'],
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}>
                <path d="M335.9 84.2C326.1 78.6 314 78.6 304.1 84.2L80.1 212.2C67.5 219.4 61.3 234.2 65 248.2C68.7 262.2 81.5 272 96 272L128 272L128 480L128 480L76.8 518.4C68.7 524.4 64 533.9 64 544C64 561.7 78.3 576 96 576L544 576C561.7 576 576 561.7 576 544C576 533.9 571.3 524.4 563.2 518.4L512 480L512 272L544 272C558.5 272 571.2 262.2 574.9 248.2C578.6 234.2 572.4 219.4 559.8 212.2L335.8 84.2zM464 272L464 480L400 480L400 272L464 272zM352 272L352 480L288 480L288 272L352 272zM240 272L240 480L176 480L176 272L240 272zM320 160C337.7 160 352 174.3 352 192C352 209.7 337.7 224 320 224C302.3 224 288 209.7 288 192C288 174.3 302.3 160 320 160z" fill="#2C3E50" />
            </svg>)
        }
    ];

    // Expected Outcomes
    const expectedOutcomes = [
        'Industry-recognized certification',
        'Practical blockchain skills and knowledge',
        'Professional network of peers and mentors',
        'Portfolio of completed projects',
        'Job placement and career support',
        'Access to ongoing resources and community'
    ];

    // helper to open form and scroll to apply section
    const openApplyForm = () => {
        setShowForm(true);
        setSubmitted(false);
        if (applyRef.current) {
            applyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            // fallback: try to scroll to element by id
            const el = document.getElementById('apply');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-linear-to-br from-[#0A1F44] via-[#1A3A5C] to-[#0A1F44] text-white py-20 md:py-32">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-64 h-64 bg-[#00BFA6] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00BFA6] rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Empowering the Next Generation of Blockchain Innovators
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                            From research fellowships to intensive bootcamps, our programs combine academic rigor with practical application to build blockchain expertise at every level.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#programs"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00BFA6] text-white font-medium rounded-lg hover:bg-[#009688] transition-colors shadow-lg"
                            >
                                Explore Programs
                            </a>

                            {/* Header Apply Now now opens the form and scrolls */}
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    openApplyForm();
                                }}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-white/10 transition-colors"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Educational Vision */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-6">
                            Our Educational Vision
                        </h2>
                        <p className="text-lg text-[#2C3E50] leading-relaxed mb-4">
                            We believe education should bridge theory and practice. Our programs are designed not just to teach blockchain concepts, but to create confident practitioners who can drive real-world adoption and innovation across Africa.
                        </p>
                        <p className="text-lg text-[#2C3E50] leading-relaxed">
                            Every graduate leaves equipped with practical skills, industry connections, and the confidence to lead blockchain initiatives in their communities and organizations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Programs Overview */}
            <section id="programs" className="py-16 md:py-24 bg-[#ECF0F1]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
                            Our Programs
                        </h2>
                        <p className="text-lg text-[#2C3E50] max-w-3xl mx-auto">
                            Choose the program that matches your goals, experience level, and time commitment.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {programs.map((program) => (
                            <div
                                key={program.id}
                                id={program.id}
                                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                {/* Program Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-5xl">{program.icon}</div>
                                    <div className="flex flex-col gap-2">
                                        <span className="inline-block px-3 py-1 bg-[#00BFA6]/10 text-[#00BFA6] text-xs font-semibold rounded-full">
                                            {program.duration}
                                        </span>
                                        <span className="inline-block px-3 py-1 bg-[#3498DB]/10 text-[#3498DB] text-xs font-semibold rounded-full">
                                            {program.level}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-[#0A1F44] mb-3">{program.name}</h3>

                                <div className="flex flex-wrap gap-3 mb-4 text-sm">
                                    <span className="flex items-center gap-1 text-[#7F8C8D]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={20} height={20}><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z" fill="#2C3E50" /></svg>
                                        {program.type}
                                    </span>
                                    <span className="flex items-center gap-1 text-[#7F8C8D]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={20} height={20}><path d="M392 176L248 176L210.7 101.5C208.9 97.9 208 93.9 208 89.9C208 75.6 219.6 64 233.9 64L406.1 64C420.4 64 432 75.6 432 89.9C432 93.9 431.1 97.9 429.3 101.5L392 176zM233.6 224L406.4 224L455.1 264.6C521.6 320 560 402 560 488.5C560 536.8 520.8 576 472.5 576L167.4 576C119.2 576 80 536.8 80 488.5C80 402 118.4 320 184.9 264.6L233.6 224zM324 288C313 288 304 297 304 308L304 312C275.2 312.3 252 335.7 252 364.5C252 390.2 270.5 412.1 295.9 416.3L337.6 423.3C343.6 424.3 348 429.5 348 435.6C348 442.5 342.4 448.1 335.5 448.1L280 448C269 448 260 457 260 468C260 479 269 488 280 488L304 488L304 492C304 503 313 512 324 512C335 512 344 503 344 492L344 487.3C369 483.2 388 461.6 388 435.5C388 409.8 369.5 387.9 344.1 383.7L302.4 376.7C296.4 375.7 292 370.5 292 364.4C292 357.5 297.6 351.9 304.5 351.9L352 351.9C363 351.9 372 342.9 372 331.9C372 320.9 363 311.9 352 311.9L344 311.9L344 307.9C344 296.9 335 287.9 324 287.9z" fill="#2C3E50" /></svg>
                                        {program.tuition}
                                    </span>
                                </div>

                                <p className="text-[#2C3E50] leading-relaxed mb-6">
                                    {program.description}
                                </p>

                                {/* Toggle Details Button */}
                                <button
                                    onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
                                    className="w-full px-4 py-3 bg-[#00BFA6] text-white font-medium rounded-lg hover:bg-[#009688] transition-colors mb-4"
                                >
                                    {selectedProgram === program.id ? 'Hide Details' : 'View Full Details'}
                                </button>

                                {/* Expandable Details */}
                                {selectedProgram === program.id && (
                                    <div className="mt-6 pt-6 border-t border-[#ECF0F1] space-y-6 animate-fadeIn">
                                        {/* Eligibility */}
                                        <div>
                                            <h4 className="text-lg font-bold text-[#0A1F44] mb-3">Eligibility Requirements</h4>
                                            <ul className="space-y-2">
                                                {program.eligibility.map((item, index) => (
                                                    <li key={index} className="flex items-start gap-2 text-sm text-[#2C3E50]">
                                                        <span className="text-[#00BFA6] mt-0.5">✓</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Curriculum */}
                                        <div>
                                            <h4 className="text-lg font-bold text-[#0A1F44] mb-3">Curriculum Highlights</h4>
                                            <ul className="space-y-2">
                                                {program.curriculum.map((item, index) => (
                                                    <li key={index} className="flex items-start gap-2 text-sm text-[#2C3E50]">
                                                        <span className="text-[#00BFA6] mt-0.5">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Outcomes */}
                                        <div>
                                            <h4 className="text-lg font-bold text-[#0A1F44] mb-3">What you&apos;ll Achieve</h4>
                                            <ul className="space-y-2">
                                                {program.outcomes.map((item, index) => (
                                                    <li key={index} className="flex items-start gap-2 text-sm text-[#2C3E50]">
                                                        <span className="text-[#00BFA6] mt-0.5">🎯</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Important Dates */}
                                        <div className="bg-[#ECF0F1] rounded-lg p-4">
                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div>
                                                    <div className="text-[#7F8C8D] mb-1">Application Deadline</div>
                                                    <div className="font-semibold text-[#0A1F44]">{program.applicationDeadline}</div>
                                                </div>
                                                <div>
                                                    <div className="text-[#7F8C8D] mb-1">Program Start</div>
                                                    <div className="font-semibold text-[#0A1F44]">{program.startDate}</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Apply Button */}
                                        <button
                                            onClick={() => openApplyForm()}
                                            className="block w-full text-center px-6 py-3 bg-linear-to-r from-[#00BFA6] to-[#0A1F44] text-white font-medium rounded-lg hover:shadow-lg transition-all"
                                        >
                                            Apply for {program.name}
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Approach */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
                            Our Learning Approach
                        </h2>
                        <p className="text-lg text-[#2C3E50] max-w-3xl mx-auto">
                            We combine multiple pedagogical approaches to ensure deep understanding and practical mastery.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {learningApproach.map((approach, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-xl hover:bg-[#ECF0F1] transition-colors"
                            >
                                <div className="text-5xl mb-4">{approach.icon}</div>
                                <h3 className="text-xl font-bold text-[#0A1F44] mb-2">{approach.title}</h3>
                                <p className="text-[#2C3E50] text-sm">{approach.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who Can Enroll */}
            <section className="py-16 md:py-24 bg-[#ECF0F1]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
                            Who Can Enroll
                        </h2>
                        <p className="text-lg text-[#2C3E50] max-w-3xl mx-auto">
                            Our programs are designed for diverse audiences at different stages of their blockchain journey.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {enrollmentCategories.map((category, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-5xl mb-4">{category.icon}</div>
                                <h3 className="text-xl font-bold text-[#0A1F44] mb-2">{category.category}</h3>
                                <p className="text-[#2C3E50] text-sm mb-4 leading-relaxed">
                                    {category.description}
                                </p>
                                <div className="pt-4 border-t border-[#ECF0F1]">
                                    <div className="text-xs text-[#7F8C8D] mb-2">Recommended Programs:</div>
                                    <div className="flex flex-wrap gap-1">
                                        {category.programs.map((prog, idx) => (
                                            <span
                                                key={idx}
                                                className="inline-block px-2 py-1 bg-[#00BFA6]/10 text-[#00BFA6] text-xs rounded"
                                            >
                                                {prog}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expected Outcomes */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
                            Expected Outcomes
                        </h2>
                        <p className="text-lg text-[#2C3E50] max-w-3xl mx-auto">
                            Every program graduate receives comprehensive support and tangible outcomes to advance their career.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-4">
                            {expectedOutcomes.map((outcome, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-4 bg-[#ECF0F1] rounded-lg hover:bg-[#00BFA6]/10 transition-colors"
                                >
                                    <span className="text-[#00BFA6] text-2xl mt-1">✓</span>
                                    <span className="text-[#2C3E50] font-medium">{outcome}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* TechXcellence Program */}
            <section className="py-16 md:py-24 bg-linear-to-br from-[#1A3A5C] to-[#0A1F44] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-4 py-2 bg-white text-[#1A3A5C] text-sm font-semibold rounded-full mb-4">
                                Flagship Student Event
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                TechXcellence Program
                            </h2>
                            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                                Our annual flagship event brings together students, researchers, and industry leaders for a week of workshops, hackathons, and networking. Participants work on real blockchain challenges and compete for prizes and mentorship opportunities.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3">
                                    <span className="text-[#00BFA6] text-xl">✓</span>
                                    <span>5-day intensive blockchain hackathon</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-[#00BFA6] text-xl">✓</span>
                                    <span>Mentorship from industry experts</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-[#00BFA6] text-xl">✓</span>
                                    <span>Cash prizes and internship opportunities</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-[#00BFA6] text-xl">✓</span>
                                    <span>Portfolio-building projects</span>
                                </li>
                            </ul>
                            <Link
                                href="/events/techxcellence"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00BFA6] text-white font-medium rounded-lg hover:bg-[#009688] transition-colors shadow-lg"
                            >
                                Learn More About TechXcellence
                            </Link>
                        </div>

                        {/* Placeholder for event images/gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg aspect-square flex items-center justify-center text-6xl">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}><path d="M208.3 64L432.3 64C458.8 64 480.4 85.8 479.4 112.2C479.2 117.5 479 122.8 478.7 128L528.3 128C554.4 128 577.4 149.6 575.4 177.8C567.9 281.5 514.9 338.5 457.4 368.3C441.6 376.5 425.5 382.6 410.2 387.1C390 415.7 369 430.8 352.3 438.9L352.3 512L416.3 512C434 512 448.3 526.3 448.3 544C448.3 561.7 434 576 416.3 576L224.3 576C206.6 576 192.3 561.7 192.3 544C192.3 526.3 206.6 512 224.3 512L288.3 512L288.3 438.9C272.3 431.2 252.4 416.9 233 390.6C214.6 385.8 194.6 378.5 175.1 367.5C121 337.2 72.2 280.1 65.2 177.6C63.3 149.5 86.2 127.9 112.3 127.9L161.9 127.9C161.6 122.7 161.4 117.5 161.2 112.1C160.2 85.6 181.8 63.9 208.3 63.9zM165.5 176L113.1 176C119.3 260.7 158.2 303.1 198.3 325.6C183.9 288.3 172 239.6 165.5 176zM444 320.8C484.5 297 521.1 254.7 527.3 176L475 176C468.8 236.9 457.6 284.2 444 320.8z" fill="#fff" /></svg>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg aspect-square flex items-center justify-center text-6xl">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}><path d="M420.9 448C428.2 425.7 442.8 405.5 459.3 388.1C492 353.7 512 307.2 512 256C512 150 426 64 320 64C214 64 128 150 128 256C128 307.2 148 353.7 180.7 388.1C197.2 405.5 211.9 425.7 219.1 448L420.8 448zM416 496L224 496L224 512C224 556.2 259.8 592 304 592L336 592C380.2 592 416 556.2 416 512L416 496zM312 176C272.2 176 240 208.2 240 248C240 261.3 229.3 272 216 272C202.7 272 192 261.3 192 248C192 181.7 245.7 128 312 128C325.3 128 336 138.7 336 152C336 165.3 325.3 176 312 176z" fill='#fff' /></svg>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg aspect-square flex items-center justify-center text-6xl">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}>
                                    <path d="M300.9 149.2L184.3 278.8C179.7 283.9 179.9 291.8 184.8 296.7C215.3 327.2 264.8 327.2 295.3 296.7L327.1 264.9C331.3 260.7 336.6 258.4 342 258C348.8 257.4 355.8 259.7 361 264.9L537.6 440L608 384L608 96L496 160L472.2 144.1C456.4 133.6 437.9 128 418.9 128L348.5 128C347.4 128 346.2 128 345.1 128.1C328.2 129 312.3 136.6 300.9 149.2zM148.6 246.7L255.4 128L215.8 128C190.3 128 165.9 138.1 147.9 156.1L144 160L32 96L32 384L188.4 514.3C211.4 533.5 240.4 544 270.3 544L286 544L279 537C269.6 527.6 269.6 512.4 279 503.1C288.4 493.8 303.6 493.7 312.9 503.1L353.9 544.1L362.9 544.1C382 544.1 400.7 539.8 417.7 531.8L391 505C381.6 495.6 381.6 480.4 391 471.1C400.4 461.8 415.6 461.7 424.9 471.1L456.9 503.1L474.4 485.6C483.3 476.7 485.9 463.8 482 452.5L344.1 315.7L329.2 330.6C279.9 379.9 200.1 379.9 150.8 330.6C127.8 307.6 126.9 270.7 148.6 246.6z" fill="#fff" />
                                </svg>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg aspect-square flex items-center justify-center text-6xl">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={100} height={100}><path d="M512 320C512 214 426 128 320 128C214 128 128 214 128 320C128 426 214 512 320 512C426 512 512 426 512 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 400C364.2 400 400 364.2 400 320C400 275.8 364.2 240 320 240C275.8 240 240 275.8 240 320C240 364.2 275.8 400 320 400zM320 176C399.5 176 464 240.5 464 320C464 399.5 399.5 464 320 464C240.5 464 176 399.5 176 320C176 240.5 240.5 176 320 176zM288 320C288 302.3 302.3 288 320 288C337.7 288 352 302.3 352 320C352 337.7 337.7 352 320 352C302.3 352 288 337.7 288 320z" fill='#fff' /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certification */}
            <section className="py-16 md:py-24 bg-[#ECF0F1]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-6">
                                Industry-Recognized Certification
                            </h2>
                            <p className="text-lg text-[#2C3E50] mb-6 leading-relaxed">
                                Upon successful completion of any program, you&apos;ll receive a certificate that validates your blockchain expertise. Our certificates are recognized by leading technology companies and institutions across Africa and globally.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#00BFA6] text-xl mt-1">✓</span>
                                    <div>
                                        <div className="font-semibold text-[#0A1F44]">Blockchain-Verified Credentials</div>
                                        <div className="text-[#2C3E50] text-sm">Your certificate is permanently recorded on the blockchain</div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#00BFA6] text-xl mt-1">✓</span>
                                    <div>
                                        <div className="font-semibold text-[#0A1F44]">Digital & Physical Certificates</div>
                                        <div className="text-[#2C3E50] text-sm">Receive both formats for maximum flexibility</div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#00BFA6] text-xl mt-1">✓</span>
                                    <div>
                                        <div className="font-semibold text-[#0A1F44]">Lifetime Verification</div>
                                        <div className="text-[#2C3E50] text-sm">Employers can instantly verify your credentials</div>
                                    </div>
                                </li>
                            </ul>
                        </div>








                        {/* Certificate Preview */}
                        <div className="relative max-w-4xl mx-auto">
                            <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
                                {/* Diagonal Corner Designs */}
                                <div className="absolute top-0 right-0 w-24 h-24 md:w-48 md:h-48 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-full h-full" style={{ background: 'linear-gradient(135deg, #00BFA6 0%, #61f9e5 50%, #00BFA6 100%)', clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}></div>
                                    <div className="absolute top-4 right-0 md:top-8 w-full h-full" style={{ background: 'linear-gradient(135deg, rgba(10, 31, 68, 0.1) 0%, rgba(10, 31, 68, 0.05) 100%)', clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}></div>
                                </div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 overflow-hidden">
                                    <div className="absolute bottom-0 left-0 w-full h-full" style={{ background: 'linear-gradient(135deg, #00BFA6 0%, #61f9e5 50%, #00BFA6 100%)', clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>
                                    <div className="absolute bottom-4 left-0 md:bottom-8 w-full h-full" style={{ background: 'linear-gradient(135deg, rgba(10, 31, 68, 0.1) 0%, rgba(10, 31, 68, 0.05) 100%)', clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>
                                </div>

                                {/* Watermark Laurel */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="w-40 h-40 md:w-60 md:h-60">
                                        {/* SVG paths remain the same */}
                                    </svg>
                                </div>

                                {/* Certificate Content */}
                                <div className="relative z-10 p-4 md:p-10 mt-5 md:mt-10">
                                    {/* Header */}
                                    <div className="text-center mb-4 md:mb-5">
                                        <h1 className="text-3xl md:text-5xl font-bold text-[#0a4443] mb-1 md:mb-2" style={{ fontFamily: 'Georgia, serif' }}> Certificate </h1>
                                        <div className="flex items-center justify-center gap-2 md:gap-3 mb-1 md:mb-2">
                                            <div className="w-5 h-0.5 md:w-10 md:h-0.5 bg-[#a3aab2]"></div>
                                            <p className="text-xs md:text-xl tracking-[0.3em] text-[#00BFA6] font-semibold uppercase"> of completion </p>
                                            <div className="w-5 h-0.5 md:w-10 md:h-0.5 bg-[#a3aab2]"></div>
                                        </div>
                                    </div>

                                    {/* Body */}
                                    <div className="text-center mb-4 md:mb-5">
                                        <p className="text-xs md:text-sm text-[#2C3E50] mb-2 md:mb-4"> This certificate is awarded to: </p>
                                        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 italic mt-5 md:mt-10" style={{ background: 'linear-gradient(135deg, #00BFA6 0%, #61f9e5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: 'Playfair Display, Georgia, serif' }}> Dr. Alexander Akosile </h2>
                                        <div className="h-0.5 w-40 md:w-65 bg-[#a3aab2] mx-auto mb-3 md:mb-6"></div>
                                        <p className="text-xs md:text-sm text-[#2C3E50] leading-relaxed max-w-md mx-auto mb-2 md:mb-3"> has successfully completed the distinguished professional training in </p>
                                        <p className="text-sm md:text-xl font-bold text-[#556176] mb-2 md:mb-3"> Blockchain Development Program </p>
                                        <p className="text-[10px] md:text-xs text-[#7F8C8D] leading-relaxed max-w-lg mx-auto"> Demonstrating exceptional proficiency in blockchain technology,<br /> smart contract development, and decentralized application architecture </p>

                                        {/* Signature Section */}
                                        <div className="text-center mt-8 md:mt-15">
                                            <div className="h-0.5 w-20 md:w-35 bg-[#a3aab2] mx-auto mb-1 md:mb-2"></div>
                                            <p className="text-[10px] md:text-sm font-semibold text-[#00BFA6] uppercase tracking-wider">Spirit Phillip</p>
                                            <p className="text-[8px] md:text-xs text-[#7F8C8D] tracking-wide">Director</p>
                                        </div>
                                    </div>

                                    {/* Signature Section with Medal */}
                                    <div className="flex flex-col md:flex-row items-center justify-between mt-8 md:mt-20 px-4 md:px-8">
                                        {/* Left Signature */}
                                        <div className="mb-2 md:mb-3">
                                            <p className="text-[8px] md:text-[10px] text-[#7F8C8D] uppercase tracking-widest mb-1">Issue Date</p>
                                            <p className="text-[10px] md:text-xs font-medium text-[#0A1F44]">DD/MM/YYYY</p>
                                        </div>

                                        {/* Center Medal */}
                                        <div className="relative md:-top-15">
                                            <div className="w-16 h-16 md:w-30 md:h-30 rounded-full border-[#0A1F44] bg-white flex items-center justify-center shadow-lg">
                                                <Image src="/elevate-white-logo.png" alt='' width={10000} height={40} className='md:m-10 w-20h-4 md:h-10 md:w-100' />
                                            </div>
                                        </div>

                                        {/* Right - Date & ID */}
                                        <div className="text-center">
                                            <div className='mt-5 md:mt-0'>
                                                <p className="text-[8px] md:text-[10px] text-[#7F8C8D] uppercase tracking-widest mb-1">Certificate ID</p>
                                                <p className="text-[10px] md:text-xs font-mono font-medium text-[#0A1F44]">BRIA-2025-001</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership CTA */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-6">
                            Institutional Partnerships
                        </h2>
                        <p className="text-lg text-[#2C3E50] mb-8">
                            We partner with universities, government agencies, and organizations to deliver customized blockchain training programs. Contact us to discuss partnership opportunities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/Contact#partnership"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00BFA6] text-white font-medium rounded-lg hover:bg-[#009688] transition-colors shadow-lg"
                            >
                                Explore Partnership Opportunities
                            </a>
                            <a
                                href="/Contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-[#0A1F44] font-medium rounded-lg border-2 border-[#0A1F44] hover:bg-[#0A1F44]/10 transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application CTA + Dropdown Form */}
            <section id="apply" ref={applyRef} className="py-16 md:py-24 text-[#0A1F44] flex flex-col items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Start Your Blockchain Journey?
                        </h2>
                        <p className="text-lg text-[#0A1F44] mb-8">
                            Applications are open for our upcoming cohorts. Choose your program and take the first step toward becoming a blockchain expert.
                        </p>

                        {/* Quick Application Links */}
                        <div className="flex gap-8 justify-between items-center mb-8 max-w-4xl mx-auto flex-wrap">
                            {programs.map((program) => (
                                <button
                                    key={program.id}
                                    onClick={() => {
                                        openApplyForm();
                                    }}
                                    className="p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all text-left border border-white/20"
                                >
                                    <div className="text-2xl mb-2">{program.icon}</div>
                                    <div className="font-semibold mb-1">{program.name}</div>
                                    <div className="text-sm text-[#0A1F44]">{program.duration} • {program.level}</div>
                                </button>
                            ))}
                        </div>

                        {/* Toggle Dropdown Form Button */}
                        <button
                            onClick={() => {
                                setShowForm(!showForm);
                                setSubmitted(false);
                                if (!showForm && applyRef.current) {
                                    applyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00BFA6] text-white font-semibold text-lg rounded-lg hover:bg-[#009688] transition-colors shadow-xl"
                        >
                            {showForm ? 'Hide Form' : 'Apply Now'}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>

                        {/* Static Dropdown Form */}
                        {showForm && !submitted && (
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    setSubmitted(true);
                                }}
                                className="mt-8 bg-white rounded-lg shadow-md p-6 text-left space-y-4 animate-fadeIn"
                            >
                                <div className="flex justify-center mb-6">
                                    <Image
                                        src="/elevate-white-logo.png"
                                        alt="Elevate Logo"
                                        width={120}
                                        height={40}
                                        className="h-10 w-auto"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#0A1F44] mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter your name"
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-[#00BFA6] focus:border-[#00BFA6]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#0A1F44] mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your email"
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-[#00BFA6] focus:border-[#00BFA6]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#0A1F44] mb-1">Select Program</label>
                                    <select
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-[#00BFA6] focus:border-[#00BFA6]"
                                    >
                                        <option>Blockchain Research Fellowship</option>
                                        <option>Web3 Developer Bootcamp</option>
                                        <option>Policy & Governance Masterclass</option>
                                        <option>Applied Blockchain Workshop</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#0A1F44] mb-1">Motivation Statement</label>
                                    <textarea
                                        rows="4"
                                        required
                                        placeholder="Tell us why you want to join..."
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-[#00BFA6] focus:border-[#00BFA6]"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-4 py-3 bg-[#00BFA6] text-white font-medium rounded-lg hover:bg-[#009688] transition-colors shadow-md"
                                >
                                    Submit Application
                                </button>
                            </form>
                        )}

                        {/* Success Message */}
                        {submitted && (
                            <div className="mt-8 bg-green-100 border border-green-300 text-green-800 rounded-lg p-6 shadow-md animate-fadeIn">
                                <h3 className="text-xl font-bold mb-2">🎉 Application Submitted!</h3>
                                <p>Thank you for applying. Our admissions team will review your application and contact you soon.</p>
                                <button
                                    onClick={() => {
                                        setShowForm(false);
                                        setSubmitted(false);
                                    }}
                                    className="mt-4 px-4 py-2 bg-[#00BFA6] text-white rounded-lg hover:bg-[#009688] transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        )}

                        <p className="text-sm mt-6">
                            Questions? <Link href="/contact" className="text-[#00BFA6] hover:underline">Contact our admissions team</Link>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
