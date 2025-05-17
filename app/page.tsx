"use client"
import Footer from "@/components/app/Footer";
import Hero from "@/components/app/Hero";
import Navbar from "@/components/app/Navbar";
import Stats from "@/components/app/Stats";
import ProblemSolution from "@/components/app/ProblemSolution";
import TimelineComponent from "@/components/app/timeline";
import Features from "@/components/app/Features";
import AnimatedSection from "@/components/app/AnimatedSection";

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      <div className="relative bg-gradient-to-b from-[#2E1A47] to-[#3B0080] text-white">
        <div className="absolute inset-0 noise-texture opacity-20" />
        <Navbar />
        <div className="w-full h-[6rem]" />
        <Hero />
      </div>
      
      <AnimatedSection>
        <Stats />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <ProblemSolution />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <Features />
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <TimelineComponent />
      </AnimatedSection>

      <Footer />
    </div>
  );
}
