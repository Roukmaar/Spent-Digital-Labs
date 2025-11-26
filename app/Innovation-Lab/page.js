"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFlask,
    faRocket,
    faUsers,
    faLightbulb,
    faCompass,
    faHandshake,
    faLock,
    faLink,
    faChartLine,
    faFileCode,
    faCoins,
    faIdCard,
    faTimes,
    faEnvelope,
    faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faFlaskVial } from "@fortawesome/free-solid-svg-icons";


const PROJECTS = [
    {
        id: "zk-toolkit",
        title: "Zero Knowledge Toolkit",
        icon: faLock,
        summary: "Library and demos for building and benchmarking zk proofs.",
        details:
            "Circuit design experiments, prover/verifier performance benchmarks, and proof aggregation research. Includes a developer SDK for rapid prototyping.",
        status: "Prototyping",
        progress: 40,
        demo: "https://example.com/zk-demo",
    },
    {
        id: "crosschain-hub",
        title: "Cross-Chain Messaging Hub",
        icon: faLink,
        summary: "Secure protocol for verifiable messaging and asset transfers across chains.",
        details:
            "Light-client verification, relayer economics, finality assumptions, and security proofs for heterogeneous chain interoperability.",
        status: "Lab Testing",
        progress: 55,
        demo: "https://example.com/crosschain-demo",
    },
    {
        id: "onchain-analytics",
        title: "On-Chain Analytics Engine",
        icon: faChartLine,
        summary: "Scalable indexer and dashboards for real-time blockchain metrics.",
        details:
            "High-throughput ingestion pipelines, queryable time-series, anomaly detection, and research-grade visualization components.",
        status: "Live Prototype",
        progress: 70,
        demo: "https://example.com/analytics-demo",
    },
    {
        id: "secure-contracts",
        title: "Secure Smart Contract Patterns",
        icon: faFileCode,
        summary: "Formally verified smart contract templates and automated audit tooling.",
        details:
            "Formal verification, symbolic analysis, fuzzing harnesses, and gas-optimized patterns for safer on-chain development.",
        status: "Research",
        progress: 35,
        demo: "https://example.com/audit-demo",
    },
    {
        id: "tokenomics-sandbox",
        title: "Tokenomics Sandbox",
        icon: faCoins,
        summary: "Interactive simulator for designing and stress-testing token models.",
        details:
            "Agent-based simulations, governance scenarios, inflation/deflation dynamics, and incentive mechanism exploration.",
        status: "Early Prototype",
        progress: 50,
        demo: "https://example.com/tokenomics-demo",
    },
    {
        id: "privacy-identity",
        title: "Privacy-Preserving Identity Layer",
        icon: faIdCard,
        summary: "Decentralized identity with selective disclosure and revocation.",
        details:
            "DIDs, verifiable credentials, selective disclosure protocols, revocation registries, and privacy guarantees.",
        status: "Research & Integration",
        progress: 30,
        demo: "https://example.com/identity-demo",
    },
];

function ProjectModal({ project, onClose }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") onClose();
        }
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [onClose]);

    useEffect(() => {
        dialogRef.current?.focus();
    }, []);

    if (!project) return null;

    return (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div ref={dialogRef} tabIndex={-1} className="bg-white rounded-xl max-w-2xl w-full p-6 shadow-xl outline-none">
                <div className="flex justify-between items-start">
                    <div className="pr-6">
                        <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={project.icon} className="text-teal-600" />
                            <h3 className="text-2xl font-bold text-blue-950">{project.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">{project.summary}</p>
                    </div>
                    <button onClick={onClose} aria-label="Close project details" className="text-gray-500 hover:text-gray-700">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                <div className="mt-5 space-y-4">
                    <p className="text-gray-700">{project.details}</p>

                    <div>
                        <div className="text-xs text-gray-500 mb-1">Progress</div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-teal-500 h-3 rounded-full transition-all" style={{ width: `${project.progress}%` }} />
                        </div>
                        <div className="text-xs text-gray-600 mt-1">{project.progress}%</div>
                    </div>

                    <div className="flex gap-3">
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 bg-linear-to-r from-teal-500 to-blue-600 text-white px-4 py-2 rounded-md shadow"
                        >
                            <FontAwesomeIcon icon={faPlayCircle} />
                            Live Demo
                        </a>
                        <button onClick={onClose} className="px-4 py-2 rounded-md border border-gray-200">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function InnovationLab() {
    const [selected, setSelected] = useState(null);
    const [newsletterStatus, setNewsletterStatus] = useState("");

    function handleNewsletterSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        fetch("https://formspree.io/f/mdkvrppy", {
            method: "POST",
            body: data,
            headers: { Accept: "application/json" },
        })
            .then((res) => {
                if (res.ok) {
                    setNewsletterStatus("Thanks — you’re on the list!");
                    form.reset();
                } else {
                    setNewsletterStatus("Something went wrong. Try again.");
                }
            })
            .catch(() => setNewsletterStatus("Network error. Try again."));
    }

    return (
        <main className="font-sans bg-[#0A1F44] min-h-screen flex flex-col items-center">
            {/* Hero with animated gradient */}
            <section className="relative w-full h-[56vh] flex flex-col justify-center items-center text-center overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-teal-500 via-blue-600 to-purple-600 opacity-40 blur-3xl animate-[pulse_6s_infinite]"></div>
                <div className="relative z-10 flex flex-col items-center gap-4 px-6">
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faLightbulb} className="text-amber-500 text-4xl md:text-5xl" />
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white">Innovation Lab</h1>
                    </div>
                    <p className="text-gray-200 max-w-2xl mx-auto mt-2 md:text-xl">
                        Exploring distributed ledgers, cryptography, and future-proof digital ecosystems.
                    </p>

                    {/* Newsletter */}
                    <form
                        onSubmit={handleNewsletterSubmit}
                        className="mt-6 flex w-full max-w-xl gap-2 bg-white rounded-full p-1 shadow"
                        aria-label="Newsletter signup"
                    >
                        <input
                            name="email"
                            type="email"
                            required
                            placeholder="Your email"
                            className="flex-1 px-4 py-2 rounded-full outline-none"
                            aria-label="Email address"
                        />
                        <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-full font-medium">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            Join
                        </button>
                    </form>
                    {newsletterStatus && <p className="text-sm text-white/90 mt-2">{newsletterStatus}</p>}
                </div>
            </section>

            {/* Main content container */}
            <div className="w-full max-w-6xl bg-white rounded-t-2xl shadow-2xl shadow-cyan-800 p-10 space-y-12 -mt-12 relative z-20">
                {/* Highlights */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: faFlask, title: "Research", text: "Experimenting with cutting-edge chains, proofs, and protocols." },
                        { icon: faRocket, title: "Prototyping", text: "Rapidly validating ideas on testnets and sandboxes." },
                        { icon: faUsers, title: "Collaboration", text: "Co-creating with academia, builders, and communities." },
                        { icon: faCompass, title: "Vision", text: "Designing resilient, equitable, and open infrastructure." },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <FontAwesomeIcon icon={item.icon} className="text-teal-500 text-3xl" />
                            <h3 className="font-semibold text-lg md:text-2xl text-blue-950">{item.title}</h3>
                            <p className="text-gray-500 text-sm md:text-base">{item.text}</p>
                        </div>
                    ))}
                </section>

                {/* Principles */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-blue-950 text-center">Our Principles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 rounded-xl shadow-md bg-teal-50">
                            <FontAwesomeIcon icon={faLightbulb} className="text-teal-500 text-2xl mb-2" />
                            <h3 className="font-semibold text-lg md:text-2xl text-blue-950">Curiosity</h3>
                            <p className="text-gray-600 text-sm md:text-base">Bold questions and boundary-pushing exploration.</p>
                        </div>
                        <div className="p-6 rounded-xl shadow-md bg-teal-50">
                            <FontAwesomeIcon icon={faCoins} className="text-teal-500 text-2xl mb-2" />
                            <h3 className="font-semibold text-lg md:text-2xl text-blue-950">Impact</h3>
                            <p className="text-gray-600 text-sm md:text-base">Solutions that serve real communities at scale.</p>
                        </div>
                        <div className="p-6 rounded-xl shadow-md bg-teal-50">
                            <FontAwesomeIcon icon={faHandshake} className="text-teal-500 text-2xl mb-2" />
                            <h3 className="font-semibold text-lg md:text-2xl text-blue-950">Collaboration</h3>
                            <p className="text-gray-600 text-sm md:text-base">Interdisciplinary teamwork and open research.</p>
                        </div>
                    </div>
                </section>

                {/* Stories */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-blue-950 text-center">Innovation Stories</h2>
                    <div className="space-y-4">
                        <article className="bg-gray-50 p-6 rounded-xl shadow-md">
                            <div className="flex items-center gap-2 mb-2">
                                <FontAwesomeIcon icon={faLock} className="text-teal-500" />
                                <h3 className="font-semibold text-lg  text-blue-950">Private Payments with ZK</h3>
                            </div>
                            <p className="text-gray-600 text-sm md:text-base">
                                We built a proof-of-concept enabling private transfers using zkSNARKs with sub-second verification.
                            </p>
                        </article>
                        <article className="bg-gray-50 p-6 rounded-xl shadow-md">
                            <div className="flex items-center gap-2 mb-2">
                                <FontAwesomeIcon icon={faLink} className="text-teal-500" />
                                <h3 className="font-semibold text-lg text-blue-950">Bridging Testnets Safely</h3>
                            </div>
                            <p className="text-gray-600 text-sm md:text-base">
                                Our cross-chain prototype uses light clients and challenge windows to minimize bridge risk.
                            </p>
                        </article>
                    </div>
                </section>

                {/* Team (uses next/image) */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-blue-950 text-center">Meet the Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { name: "Dr. Amina Khan", role: "Cryptography Lead", img: "/team2.jpg" },
                            { name: "Raji Roqeeb", role: "Protocol Engineer", img: "/raji.jpeg" },
                            { name: "Maria Lopez", role: "Research Strategist", img: "/expert2.jpg" },
                        ].map((member, i) => (
                            <div key={i} className="p-6 rounded-xl shadow-md bg-white">
                                <div className="mx-auto mb-3 relative w-28 h-35">
                                    <Image src={member.img} alt={member.name} fill className="rounded-full object-cover" />
                                </div>
                                <h3 className="font-semibold text-lg text-blue-950">{member.name}</h3>
                                <p className="text-gray-600 text-sm">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Cooking: Blockchain projects (cards open modal) */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-blue-950 text-center flex items-center justify-center gap-2">
                        <FontAwesomeIcon icon={faFlaskVial} className="text-teal-600" />
                        <span>What the Lab is Cooking</span>
                    </h2>          <p className="text-gray-600 text-center max-w-2xl mx-auto md:text-lg">
                        Sneak peek into blockchain prototypes and experiments bubbling in our research kitchen.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {PROJECTS.map((p) => (
                            <article
                                key={p.id}
                                onClick={() => setSelected(p)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === "Enter" && setSelected(p)}
                                className="cursor-pointer bg-linear-to-br from-white to-slate-50 p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
                                aria-label={`Open details for ${p.title}`}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <FontAwesomeIcon icon={p.icon} className="text-teal-500" />
                                        <h3 className="font-semibold text-lg text-blue-950">{p.title}</h3>
                                    </div>
                                    <div className="text-xs text-gray-500">{p.status}</div>
                                </div>

                                <p className="text-gray-600 text-sm mb-4">{p.summary}</p>

                                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                    <div className="bg-teal-500 h-2 rounded-full" style={{ width: `${p.progress}%` }} />
                                </div>
                                <div className="flex justify-between items-center text-xs text-gray-500">
                                    <span>{p.progress}%</span>
                                    <span className="text-teal-600 font-medium">Learn more →</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>



                {/* Timeline */}
                <section className="space-y-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-blue-950 text-center">Innovation Timeline</h2>
                    <ul className="border-l-2 border-teal-500 pl-6 space-y-6 max-w-xl mx-auto text-gray-600">
                        <li className="flex gap-2 items-center">
                            <FontAwesomeIcon icon={faLightbulb} className="text-teal-500" />
                            <span>
                                <span className="text-teal-600 font-bold">2023</span> — Lab founded
                            </span>
                        </li>
                        <li className="flex gap-2 items-center">
                            <FontAwesomeIcon icon={faRocket} className="text-teal-500" />
                            <span>
                                <span className="text-teal-600 font-bold">2024</span> — First cross-chain prototype launched
                            </span>
                        </li>
                        <li className="flex gap-2 items-center">
                            <FontAwesomeIcon icon={faChartLine} className="text-teal-500" />
                            <span>
                                <span className="text-teal-600 font-bold">2025</span> — Real-time on-chain analytics in the wild
                            </span>
                        </li>
                    </ul>
                </section>

                {/* CTA */}
                <section className="text-center space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-950">Join the Innovation Journey</h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Whether you’re a researcher, builder, or partner — there’s a place for you in our lab.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href=" /Contact#partnership" className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 inline-flex items-center gap-2">
                            <FontAwesomeIcon icon={faHandshake} />
                            Collaborate
                        </Link>
                        <Link href="/Contact" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 inline-flex items-center gap-2">
                            <FontAwesomeIcon icon={faCoins} />
                            Support Us
                        </Link>
                    </div>

                    {/* Footer newsletter */}
                    <div className="mt-6 max-w-xl mx-auto">
                        <form onSubmit={handleNewsletterSubmit} className="flex gap-2 bg-gray-100 rounded-full p-1" aria-label="Footer newsletter signup">
                            <input name="email" type="email" required placeholder="Your email" className="flex-1 px-4 py-2 rounded-full bg-white outline-none" />
                            <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-full">Join</button>
                        </form>
                        {newsletterStatus && <p className="text-sm text-gray-600 mt-2">{newsletterStatus}</p>}
                    </div>
                </section>
            </div>

            {/* Project modal */}
            {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
        </main>
    );
}
