"use client";




import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useMemo, useState } from "react";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";


const publications = [
  // 2025
  { slug: "pos-consensus-security", title: "Security Trade-offs in PoS", authors: "Jane Doe, J. Smith", date: "2025-09-15", abstract: "Validator incentives and long-range attack analysis.", tags: ["Consensus","PoS"], pdf: "/files/pos-consensus-security.pdf" },
  { slug: "layer2-rollups", title: "Scalability of Layer-2 Rollups", authors: "A. Nguyen", date: "2025-08-22", abstract: "Benchmarks optimistic and ZK rollups.", tags: ["Layer-2","Scalability"], pdf: "/files/layer2-rollups.pdf" },
  { slug: "account-abstraction", title: "Account Abstraction UX and Security", authors: "M. Rossi", date: "2025-07-05", abstract: "Smart wallets, session keys, and recovery.", tags: ["Wallets","UX"], pdf: "/files/account-abstraction.pdf" },
  { slug: "da-markets", title: "Data Availability Markets", authors: "R. Silva", date: "2025-06-18", abstract: "Incentive-compatible DA market designs.", tags: ["DA","Mechanism"], pdf: "/files/da-markets.pdf" },
  { slug: "zk-hw", title: "Hardware Acceleration for ZK", authors: "N. Petrova", date: "2025-05-27", abstract: "GPU and ASIC optimizations for provers.", tags: ["ZK","Hardware"], pdf: "/files/zk-hw.pdf" },
  { slug: "onchain-governance", title: "On-chain Governance Risks", authors: "C. Green", date: "2025-04-12", abstract: "Vote-buying and delegation capture.", tags: ["Governance","DAO"], pdf: "/files/onchain-governance.pdf" },
  { slug: "depin-tokenomics", title: "Tokenomics for DePIN", authors: "O. Haddad", date: "2025-03-30", abstract: "Incentives for decentralized infra.", tags: ["Tokenomics","DePIN"], pdf: "/files/depin-tokenomics.pdf" },
  { slug: "defi-risk", title: "Risk Engines for DeFi Lending", authors: "Z. Li", date: "2025-02-14", abstract: "Collateral factors and stress tests.", tags: ["DeFi","Risk"], pdf: "/files/defi-risk.pdf" },
  { slug: "privacy-analytics", title: "Privacy-Preserving Analytics", authors: "D. Kim", date: "2025-01-22", abstract: "ZK queries and MPC for analytics.", tags: ["Privacy","ZK"], pdf: "/files/privacy-analytics.pdf" },

  // 2024
  { slug: "supply-chain", title: "Blockchain Traceability", authors: "A. Brown", date: "2024-11-08", abstract: "Logistics and food safety case studies.", tags: ["Supply Chain"], pdf: "/files/supply-chain.pdf" },
  { slug: "stablecoin-architecture", title: "Compliant Stablecoin Architecture", authors: "M. Laurent", date: "2024-10-19", abstract: "Proof-of-reserves and AML controls.", tags: ["Stablecoins","Compliance"], pdf: "/files/stablecoin-architecture.pdf" },
  { slug: "crosschain-bridges", title: "Security of Cross-Chain Bridges", authors: "W. Zhou", date: "2024-09-03", abstract: "Bridge failure modes and mitigations.", tags: ["Bridges","Security"], pdf: "/files/crosschain-bridges.pdf" },
  { slug: "audit-automation", title: "Automating Smart Contract Audits", authors: "S. Mendes", date: "2024-07-28", abstract: "Static analysis and fuzzing pipelines.", tags: ["Auditing","Testing"], pdf: "/files/audit-automation.pdf" },
  { slug: "nft-royalties", title: "NFT Royalties and Market Dynamics", authors: "J. Armand", date: "2024-06-10", abstract: "Creator incentives and enforcement.", tags: ["NFT","Markets"], pdf: "/files/nft-royalties.pdf" },
  { slug: "energy-l2", title: "Energy Consumption of Layer-2", authors: "A. Singh", date: "2024-04-21", abstract: "Energy profiles for sequencers and provers.", tags: ["Energy","Sustainability"], pdf: "/files/energy-l2.pdf" },
  { slug: "dao-eu", title: "DAO Legal Landscape EU", authors: "C. Moreau", date: "2024-03-12", abstract: "Recognition and liability across jurisdictions.", tags: ["DAO","Law"], pdf: "/files/dao-eu.pdf" },

  // 2023
  { slug: "oracles-robust", title: "Robust Oracle Designs", authors: "E. Park", date: "2023-12-02", abstract: "TWAPs and multi-source fusion.", tags: ["Oracles","DeFi"], pdf: "/files/oracles-robust.pdf" },
  { slug: "zk-identity", title: "ZK Identity Credentials", authors: "F. Noor", date: "2023-10-18", abstract: "Selective disclosure and revocation.", tags: ["Identity","Privacy"], pdf: "/files/zk-identity.pdf" },
  { slug: "fork-choice", title: "Fork Choice Rules Analysis", authors: "T. Becker", date: "2023-08-07", abstract: "GHOST variants and LMD heuristics.", tags: ["Consensus"], pdf: "/files/fork-choice.pdf" },
  { slug: "tokenomics-growth", title: "Tokenomics for Sustainable Growth", authors: "R. Patel", date: "2023-06-29", abstract: "Emission schedules and sinks.", tags: ["Tokenomics"], pdf: "/files/tokenomics-growth.pdf" },
  { slug: "security-checklist", title: "Security Audit Checklist", authors: "V. Ivanov", date: "2023-05-15", abstract: "Practical checklist for Solidity.", tags: ["Security","Solidity"], pdf: "/files/security-checklist.pdf" }
];

function uniqueTags(items) {
  const s = new Set();
  items.forEach((p) => p.tags.forEach((t) => s.add(t)));
  return Array.from(s).sort();
}

function sortPublications(items, option) {
  const copy = [...items];
  switch (option) {
    case "date-desc":
      return copy.sort((a, b) => new Date(b.date) - new Date(a.date));
    case "date-asc":
      return copy.sort((a, b) => new Date(a.date) - new Date(b.date));
    case "topic-asc":
      return copy.sort((a, b) => {
        const ta = (a.tags[0] || "").toLowerCase();
        const tb = (b.tags[0] || "").toLowerCase();
        if (ta === tb) return a.title.localeCompare(b.title);
        return ta.localeCompare(tb);
      });
    case "topic-desc":
      return copy.sort((a, b) => {
        const ta = (a.tags[0] || "").toLowerCase();
        const tb = (b.tags[0] || "").toLowerCase();
        if (ta === tb) return b.title.localeCompare(a.title);
        return tb.localeCompare(ta);
      });
    case "title-asc":
      return copy.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return copy.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
}

export default function PublicationsGridPage() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("");
  const [sortOption, setSortOption] = useState("date-desc");

  const tags = useMemo(() => uniqueTags(publications), []);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return publications.filter((p) => {
      const matchesQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.authors.toLowerCase().includes(q) ||
        p.abstract.toLowerCase().includes(q);
      const matchesTag = !activeTag || p.tags.includes(activeTag);
      return matchesQ && matchesTag;
    });
  }, [query, activeTag]);

  const sorted = useMemo(() => sortPublications(filtered, sortOption), [filtered, sortOption]);

  return (
    <div className="min-h-screen bg-[#ECF0F1] text-slate-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-medium text-black">Publications</h1>
            <p className="text-sm md:text-base text-slate-400 mt-1">Blockchain research — browse by date or topic</p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="text-sm text-slate-400">{sorted.length} results</div>
          </div>
        </header>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex-1">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search title, authors, abstract"
              className="w-full md:w-96 px-3 py-2 rounded-lg bg-slate-100 border border-slate-700 text-slate-500 placeholder-slate-800 focus:outline-none"
              aria-label="Search publications"
            />
          </div>

          <div className="flex items-center gap-3">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-3 py-2 rounded-lg bg-slate-100 border border-slate-700 text-slate-500 focus:outline-none"
              aria-label="Sort publications"
            >
              <option value="date-desc">Date: newest first</option>
              <option value="date-asc">Date: oldest first</option>
              <option value="topic-asc">Topic: A → Z</option>
              <option value="topic-desc">Topic: Z → A</option>
              <option value="title-asc">Title: A → Z</option>
            </select>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => { setActiveTag(""); setQuery(""); }}
                className={`px-3 py-2 rounded-lg text-sm ${activeTag === "" ? "bg-teal-600 text-white" : "bg-slate-800 text-slate-100"}`}
              >
                All
              </button>
            </div>
          </div>
        </div>

        <div className="mb-6 flex gap-2 flex-wrap">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTag((prev) => (prev === t ? "" : t))}
              className={`px-3 py-1.5 rounded-full text-sm border ${activeTag === t ? "bg-teal-400 text-slate-900 border-teal-400" : "bg-teal-700 text-slate-100"}`}
              aria-pressed={activeTag === t}
            >
              {t}
            </button>
          ))}
        </div>

        {sorted.length === 0 ? (
          <div className="py-20 text-center text-slate-400">No publications match your search or filters.</div>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((p) => (
              <article key={p.slug} className="bg-teal-50 rounded-xl p-5 border border-slate-200 shadow-lg flex flex-col">
                <header className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 truncate" title={p.title}>{p.title}</h3>
                    <div className="text-xs text-slate-500 mt-1 truncate">{p.authors} • {p.date}</div>
                  </div>
                </header>

                <p className="text-sm text-slate-500 mt-4 line-clamp-3 flex-1">{p.abstract}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs bg-teal-700 text-white px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>

                <div className="mt-4 flex justify-center items-center gap-3">
                  <a
                    href={p.pdf}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-teal-500 text-white text-sm font-semibold hover:bg-teal-600"
                  >
                  <FontAwesomeIcon icon={faFileAlt} />
                    Download
                  </a>

                  <button
                    onClick={() => {
                      // simple "view" behavior: scroll card into view and toggle a subtle highlight
                      const el = document.getElementById(`card-${p.slug}`);
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "center" });
                        el.animate([{ boxShadow: "0 0 0px rgba(31,182,255,0)" }, { boxShadow: "0 8px 30px rgba(31,182,255,0.08)" }], { duration: 600 });
                      }
                    }}
                    className="px-3 py-2 rounded-md border border-slate-700 bg-white text-black cursor-pointer text-sm hover:text-slate-100 hover:bg-slate-700"
                  >
                    View
                  </button>
                </div>

                <div id={`card-${p.slug}`} aria-hidden className="sr-only" />
              </article>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
