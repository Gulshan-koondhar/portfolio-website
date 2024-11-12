import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

const NavItems = () => {
  const [activeLink, setActiveLink] = useState("");

  // Handle click and set active link
  const handleClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      className="p-2 rounded-md flex sm:gap-32 lg:gap-64 xl:gap-64"
    >
      <div>
        <nav className="bg-zinc-600 py-2 px-4 rounded-md text-center">
          <ul className="flex gap-4">
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
                onClick={() => handleClick("#about")}
                className={activeLink === "#about" ? "active" : ""}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="#skills"
                onClick={() => handleClick("#skills")}
                className={activeLink === "#skills" ? "active" : ""}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                onClick={() => handleClick("#projects")}
                className={activeLink === "#projects" ? "active" : ""}
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="sm:flex">
        <button className="p-2 text-zinc-50 bg-zinc-700 border-2 sm:bg-zinc-50 sm:text-zinc-700 rounded-md">
          <Link href="#contact">Contact Me</Link>
        </button>
      </div>
    </motion.div>
  );
};

export default NavItems;
