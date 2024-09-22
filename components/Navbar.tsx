"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo-white.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import NavItems from "./NavItems";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((s) => (s = !s));
  };
  return (
    <div>
      <header className="fixed top-0 left-0 w-full h-20 z-40 bg-gradient-to-b from-zinc-900 to-zinc-700/0">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="flex justify-between items-center -ml-4">
            <Link href="/">
              <div className="flex items-center">
                <Image src={Logo} alt="Logo" height={50} width={50} />
                <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent font-bold text-xl -ml-2">
                  Gulshan
                </span>
              </div>
            </Link>

            {isOpen && (
              <div className="bg-zinc-600 p-2 rounded-md block absolute top-14 right-4 space-y-8 text-center">
                <div>
                  <nav className="rounded-md text-center">
                    <ul className="space-y-4">
                      <li>
                        <Link href="#about" className="active">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link href="#projects">Projects</Link>
                      </li>
                      <li>
                        <Link href="#skills">Skills</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div>
                  <button className="p-2 text-zinc-50 bg-zinc-700 border-2 rounded-md">
                    <Link href="#contact">Contact Me</Link>
                  </button>
                </div>
              </div>
            )}
            <div className="hidden sm:flex">
              <NavItems />
            </div>
            <div className="sm:hidden" onClick={handleMenu}>
              {isOpen ? (
                <button>
                  <X />
                </button>
              ) : (
                <button>
                  <Menu />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
