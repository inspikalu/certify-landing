"use client";
import React, { useState } from "react";

const features = [
  {
    title: "Unified Token Standard",
    tagline: "/// SEAMLESS INTEROPERABILITY \\\\",
    description:
      "Provides a standardized protocol for tokenizing RWAs on Solana, ensuring compatibility and seamless interaction across assets like real estate, art, and commodities.",
  },
  {
    title: "Developer-Friendly Toolkit",
    tagline: "/// EASY INTEGRATION \\\\",
    description:
      "Offers intuitive SDKs and documentation, enabling developers to easily integrate RWA tokenization into their applications, reducing technical barriers.",
  },
  {
    title: "Low-Cost Transactions",
    tagline: "/// AFFORDABLE SCALABILITY \\\\",
    description:
      "Leverages Solana's high-throughput, low-fee infrastructure (fees often under $0.01) to make token creation and trading affordable for diverse assets.",
  },
  {
    title: "Compressed Token Support",
    tagline: "/// EFFICIENT STORAGE \\\\",
    description:
      "Utilizes Solana's state compression to minimize on-chain storage costs, enabling efficient, scalable tokenization of RWAs with rich metadata.",
  },
  {
    title: "Privacy-Enhanced Verification",
    tagline: "/// SECURE AND COMPLIANT \\\\",
    description:
      "Plans to explore zk compression for private, secure RWA verification, ensuring compliance without compromising user privacy (future roadmap).",
  },
  {
    title: "Fractional Ownership",
    tagline: "/// BROAD ACCESS \\\\",
    description:
      "Enables fractionalization of high-value assets, allowing broader access to investments in real estate, art, or luxury goods.",
  },
  {
    title: "Metaplex Ecosystem Integration",
    tagline: "/// ENHANCED LIQUIDITY \\\\",
    description:
      "Designed to integrate with Metaplex-powered marketplaces, enhancing liquidity and accessibility of tokenized RWAs in Solana's ecosystem.",
  },
  {
    title: "Open-Source and Community-Driven",
    tagline: "/// COLLABORATIVE GROWTH \\\\",
    description:
      "Built as an open-source protocol, fostering community contributions and rapid adoption among developers and asset issuers.",
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full py-20" id="features">
      <div className="max-w-7xl mx-auto flex flex-col">
        <h2 className="text-3xl font-bold px-12 animate-fade-in mb-12">
          Key Features
        </h2>
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center gap-4 pb-8 border-b border-[#808080] px-12 group relative overflow-hidden transition-all duration-500 hover:bg-gradient-to-r hover:from-black hover:to-purple-900/20 py-8"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <div className="flex-1 relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-[#808080] font-mono group-hover:text-white/80 transition-colors duration-300">
                {feature.tagline}
              </p>
            </div>
            <p
              className={`text-base md:text-lg text-[#808080] transition-all duration-300 flex-1 relative z-10
              md:opacity-0 md:group-hover:opacity-100 md:max-h-0 md:group-hover:max-h-96 md:group-hover:translate-x-2
              ${
                activeIndex === index
                  ? "opacity-100 max-h-96"
                  : "opacity-0 max-h-0"
              } overflow-hidden`}
            >
              {feature.description}
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}
