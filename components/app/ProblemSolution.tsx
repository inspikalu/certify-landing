"use client"
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function ProblemSolution() {
  const problemRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (problemRef.current) observer.observe(problemRef.current);
    if (solutionRef.current) observer.observe(solutionRef.current);

    return () => {
      if (problemRef.current) observer.unobserve(problemRef.current);
      if (solutionRef.current) observer.unobserve(solutionRef.current);
    };
  }, []);

  return (
    <div className="w-full min-h-[50vh] px-12 border-y">
      <div className="flex flex-col md:flex-row gap-12 h-full">
        {/* Problem Section */}
        <div 
          ref={problemRef}
          className="flex-1 flex flex-col gap-8 py-20 opacity-0 translate-y-10 transition-all duration-1000"
        >
          <h2 className="text-3xl font-bold">The Problem</h2>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4 group">
              <div className="mt-1">
                <ArrowRight
                  className="text-[#808080] group-hover:text-white transition-colors"
                  size={20}
                />
              </div>
              <div>
                <h3 className="text-xl mb-2">No Standard Token Protocol</h3>
                <p className="text-[#808080]">
                  Solana lacks a public token standard for Real-World Assets
                  (RWAs), creating fragmentation and inconsistency across the
                  ecosystem.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="mt-1">
                <ArrowRight
                  className="text-[#808080] group-hover:text-white transition-colors"
                  size={20}
                />
              </div>
              <div>
                <h3 className="text-xl mb-2">Technical Barriers</h3>
                <p className="text-[#808080]">
                  Developers face high technical barriers and have to implement
                  extensive customizations when building RWA solutions, slowing
                  down innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block bg-[#808080] w-[1px] rounded-full" />

        {/* Solution Section */}
        <div 
          ref={solutionRef}
          className="flex-1 flex flex-col gap-8 py-20 opacity-0 translate-y-10 transition-all duration-1000 delay-300"
        >
          <h2 className="text-3xl font-bold">Our Solution</h2>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4 group">
              <div className="mt-1">
                <ArrowRight
                  className="text-[#808080] group-hover:text-white transition-colors"
                  size={20}
                />
              </div>
              <div>
                <h3 className="text-xl mb-2">Unified Token Standard</h3>
                <p className="text-[#808080]">
                  CERTIFY provides a comprehensive token standard for RWAs on
                  Solana, enabling seamless integration and interoperability
                  across the ecosystem.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="mt-1">
                <ArrowRight
                  className="text-[#808080] group-hover:text-white transition-colors"
                  size={20}
                />
              </div>
              <div>
                <h3 className="text-xl mb-2">All-in-One Toolkit</h3>
                <p className="text-[#808080]">
                  A complete suite of tools and APIs for tokenizing real-world
                  assets, reducing development time and technical complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
