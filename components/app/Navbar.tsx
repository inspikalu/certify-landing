"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  {
    label: "Developers",
    url: "/",
  },
  {
    label: "Community",
    url: "/",
  },
  {
    label: "About",
    url: "/",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.60; // 84vh from Hero component
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .navTransparent{
          background-color: transparent;
          transition: background-color 0.3s ease;
        }
        .navFill{
          background-color: black;
          transition: background-color 0.3s ease;
        }
        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: white;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link:hover {
          color: #e5e5e5;
        }
      `}</style>
      <div className={`flex justify-between items-center py-6 px-4 md:px-12 fixed top-0 left-0 w-full z-50 ${isScrolled ? 'navFill' : 'navTransparent'}`}>
        {/*Logo*/}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="font-bold text-xl">Certify</span>
        </div>

        {/*Desktop Navigation*/}
        <div className="hidden md:flex items-center justify-center flex-1">
          <ul className="flex items-center justify-center gap-8 bg-black text-white py-3 px-7 rounded-full border border-[#808080]/20 border-solid">
            {navLinks.map((item, index) => (
              <li key={`${index} ${item.label}`}>
                <Link href={item.url} className="nav-link">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/*Desktop Button*/}
        <div className="hidden md:block">
          <Button
            variant={"outline"}
            className="bg-transparent border-white rounded-full text-white"
          >
            Ecosystem
          </Button>
        </div>

        {/*Mobile Navigation*/}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white border-l border-[#808080] p-8">
              <div className="flex flex-col gap-8 mt-8">
                {navLinks.map((item, index) => (
                  <Link 
                    key={`${index} ${item.label}`}
                    href={item.url}
                    className="text-lg hover:text-gray-300 transition-colors nav-link"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  variant={"outline"}
                  className="bg-transparent border-white rounded-full text-white mt-4"
                >
                  Ecosystem
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}
