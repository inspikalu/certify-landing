import { Timeline } from "@/components/ui/timeline"

export default function TimelineComponent() {
  const roadmap = [
    {
      quarter: "Q2 2025",
      title: "Launch Certify Protocol v1",
      description: "Introduce the first version of our unified RWA token standard, enabling seamless asset tokenization on Solana.",
    },
    {
      quarter: "Q3 2025",
      title: "DEX & Marketplace Integration",
      description: "Partner with leading Solana DEXs and Metaplex marketplaces to enable trading of tokenized RWAs.",
    },
    {
      quarter: "Q4 2025",
      title: "Multi-Asset Support",
      description: "Expand support for diverse asset classes including commodities, real estate, and digital art.",
    },
    {
      quarter: "Q1 2026",
      title: "Advanced Privacy Features",
      description: "Implement zero-knowledge compression for private verification and enhanced community governance.",
    },
  ]

  return (
    <div className="relative w-full overflow-clip bg-black">
      <Timeline data={roadmap} />
    </div>
  )
}
