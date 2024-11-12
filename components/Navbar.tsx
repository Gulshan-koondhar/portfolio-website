"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo-white.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import NavItems from "./NavItems";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Handle click and set active link
  const handleClick = (link: string) => {
    setActiveLink(link);
  };
  const handleMenu = () => {
    setIsOpen((s) => (s = !s));
  };
  return (
    <div>
      <header className="fixed top-0 left-0 w-full h-20 z-40 bg-gradient-to-b from-zinc-900 to-zinc-700/0">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="flex justify-between items-center -ml-4">
            <Link href="/">
              <motion.div
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                className="flex items-center"
              >
                <Image src={Logo} alt="Logo" height={50} width={50} />
                <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent font-bold text-xl -ml-2">
                  Gulshan
                </span>
              </motion.div>
            </Link>

            {isOpen && (
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                className=" p-2  w-screen h-screen absolute top-14 left-0 flex flex-col items-center justify-center  "
              >
                <div className="bg-zinc-600 p-16 space-y-8 text-center rounded-md text-xl">
                  <div>
                    <nav className="rounded-md text-center">
                      <ul className="space-y-4">
                        <li>
                          <Link
                            href="/"
                            onClick={() => handleClick("/")}
                            className={activeLink === "/" ? "active" : ""}
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#about"
                            onClick={() => handleClick("about")}
                            className={activeLink === "about" ? "active" : ""}
                          >
                            About
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="#skills"
                            onClick={() => handleClick("skills")}
                            className={activeLink === "skills" ? "active" : ""}
                          >
                            Skills
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#projects"
                            onClick={() => handleClick("projects")}
                            className={
                              activeLink === "projects" ? "active" : ""
                            }
                          >
                            Projects
                          </Link>
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
              </motion.div>
            )}
            <div className="hidden sm:flex">
              <NavItems />
            </div>
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              className="sm:hidden"
              onClick={handleMenu}
            >
              {isOpen ? (
                <button>
                  <X />
                </button>
              ) : (
                <button>
                  <Menu />
                </button>
              )}
            </motion.div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
