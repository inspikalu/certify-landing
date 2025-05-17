"use client"
import { Button } from "../ui/button";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const discoverUrls = [
  { label: "Unified Token Standard", url: "#features" },
  { label: "Developer Toolkit", url: "#features" },
  { label: "Low-Cost Transactions", url: "#features" },
  { label: "Compressed Tokens", url: "#features" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const particles: { x: number; y: number; speed: number; size: number }[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.5 + Math.random() * 1.5,
        size: 1 + Math.random() * 2
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';

      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.y += particle.speed;
        if (particle.y > canvas.height) {
          particle.y = 0;
          particle.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />
      <div className="min-h-[84vh] px-12 pb-10 flex flex-col relative z-10">
        <div className="mt-auto flex items-end justify-between gap-8">
          <div className="flex flex-col items-start gap-6">
            <h2 className="text-4xl font-bold max-w-[31ch] animate-fade-in">
              CERTIFY: A Solana-Native Standard for Tokenizing Real-World Assets
            </h2>
            <p className="text-lg max-w-[42ch] animate-fade-in animation-delay-200">
              CERTIFY is an open protocol that empowers developers and
              enterprises to digitize, verify, and manage physical assets
              on-chain — all through a unified token standard built for Solana.
            </p>

            <Button 
              variant={"outline"} 
              className="rounded-full group transition-all duration-300 hover:bg-white/10"
            >
              Use Certify 
              <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </div>
          <div className="min-w-[20rem] md:flex flex-col gap-4 hidden font-mono animate-fade-in animation-delay-400">
            <h3 className="py-4 border-b text-2xl flex gap-4"><span className="italic">///</span> Discover Certify</h3>
            <ul className="w-full flex flex-col gap-4">
              {discoverUrls.map((item, index) => (
                <li
                  className="flex w-full items-center justify-between group border-b-[.2px] border-b-[#808080] pb-3 hover:border-b-white hover:border-b transition-all"
                  key={index}
                >
                  <a href={item.url} className="hover:text-white transition-colors duration-300">
                    {item.label}
                  </a>
                  <ArrowRight
                    className="transition-all duration-500 group-hover:rotate-90 group-hover:text-white"
                    size={18}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
