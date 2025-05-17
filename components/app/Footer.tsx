import Image from "next/image";
import { Button } from "../ui/button";

const navLinks = [
  {
    header: "Product",
    links: ["#features", "#solutions", "#pricing"],
    labels: ["Features", "Solutions", "Pricing"],
  },
  {
    header: "Resources",
    links: ["#docs", "#blog", "#community"],
    labels: ["Documentation", "Blog", "Community"],
  },
  {
    header: "Company",
    links: ["#about", "#careers", "#contact"],
    labels: ["About Us", "Careers", "Contact"],
  },
];

export default function Footer() {
  return (
    <div>
      <div className="bg-black w-full min-h-7 py-12 px-12 text-background flex justify-between flex-wrap gap-5 border-y border-y-[#808080]">
        <div>
          <div className="flex flex-col items-start gap-3">
            <div className="flex gap-2 items-center group">
              <figure className="transition-transform duration-300 group-hover:rotate-12">
                <Image
                  src={"/logo.png"}
                  alt="Certify logo"
                  width={24}
                  height={24}
                />
              </figure>
              <span className="font-bold text-3xl group-hover:text-white transition-colors">Certify</span>
            </div>
            <p className="max-w-[60ch] text-[#808080]">
              Certify is an open protocol that empowers developers and enterprises to digitize, verify, and manage physical assets on Solana. We provide a comprehensive token standard and toolkit for seamless RWA integration across the ecosystem.
            </p>
            <Button className="rounded-full bg-transparent border px-5 hover:bg-white/10 transition-all duration-300">
              Sign up to NewsLetter
            </Button>
          </div>
        </div>
        <div className="flex items-start gap-5 flex-wrap">
          {navLinks.map((item, index) => (
            <div key={index}>
              <span className="text-[#808080] text-sm">{item.header}</span>
              <ul className="mt-2">
                {item.labels.map((label, index) => (
                  <li key={index} className="text-xl group">
                    <a 
                      href={item.links[index]} 
                      className="text-[#808080] hover:text-white transition-colors duration-300 inline-block relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="py-6 px-12 bg-black text-[#808080] flex items-start text-sm gap-5">
        <span className="cursor-pointer hover:text-white transition-colors duration-300">Terms of use</span>
        <span className="cursor-pointer hover:text-white transition-colors duration-300">Privacy Policy</span>
        <span className="inline-block ml-auto cursor-pointer hover:text-white transition-colors duration-300">
          &copy; {new Date().getFullYear()} Certify Corp. All rights reserved
        </span>
      </div>
    </div>
  );
}
