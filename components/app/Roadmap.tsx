import React from "react";

const roadmap = [
  {
    quarter: "Q2 2025",
    title: "Launch Certify Protocol v1",
    description: "Launch Certify Protocol v1 with unified RWA standards.",
  },
  {
    quarter: "Q3 2025",
    title: "Integrate with Solana DEXs",
    description: "Integrate with Solana DEXs and Metaplex marketplaces.",
  },
  {
    quarter: "Q4 2025",
    title: "Support Diverse Assets",
    description: "Support diverse assets (e.g., commodities, art).",
  },
  {
    quarter: "Q1 2026",
    title: "Explore zk Compression",
    description: "Explore zk compression for private verification and community governance.",
  },
];

export default function Roadmap() {
  return (
    <div className="w-full px-4 md:px-12 py-16 bg-black text-white">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-12 text-center">Roadmap</h2>
        {/* Timeline */}
        <div className="relative w-full flex flex-col md:flex-row items-center justify-center">
          {/* Line */}
          <div className="absolute md:top-1/2 md:left-0 md:right-0 md:h-1 md:w-full h-full w-1 left-1/2 top-0 md:translate-y-[-50%] bg-[#222] z-0" style={{ minHeight: '120px' }} />
          {/* Milestones */}
          {roadmap.map((item, idx) => (
            <div
              key={item.quarter}
              className="relative z-10 flex flex-col items-center md:w-1/4 w-full mb-12 md:mb-0"
            >
              {/* Circle */}
              <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${idx === 1 || idx === 2 ? 'bg-gradient-to-tr from-yellow-400 to-pink-500 border-none' : 'border-white bg-black'} mb-4 md:mb-8`}>
                {/* Empty for now, could add icon */}
              </div>
              {/* Content */}
              <div className="text-center">
                <div className="text-sm font-mono tracking-widest text-[#aaa] mb-1">{item.quarter}</div>
                <div className="font-bold text-lg mb-2 uppercase tracking-wide">{item.title}</div>
                <div className="text-[#aaa] text-base max-w-xs mx-auto">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 