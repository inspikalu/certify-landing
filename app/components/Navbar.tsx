import Image from "next/image"
import { ArrowUp } from "lucide-react"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full text-white">
      <div className="flex items-center gap-3">
        <div className="relative w-[5rem] aspect-square">
          <Image src={"/logo.png"} alt="Certify Logo" fill />
        </div>
        <span className="inline-block md:hidden font-bold text-3xl">Certify</span>
      </div>
      <ul className="hidden md:flex items-center justify-center gap-6">
        <li><Link href="/#key_features">Key Features</Link></li>
        <li><Link href="/#why_certify">Why <span className="underline" style={{ fontStyle: "italic", fontSize: "1.2rem", fontWeight: "800" }}>Certify</span>?</Link></li>
        <li><Link href="/#the_team">The Team</Link></li>
      </ul>
      <div className="bg-[#6C3ACA] flex items-center p-3 rounded-full border-2 border-white cursor-pointer gap-3">Get Started <div className="rotate-45"><ArrowUp /></div></div>
    </nav>
  )
}

export default Navbar
