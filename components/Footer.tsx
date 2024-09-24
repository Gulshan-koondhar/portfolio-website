import { Facebook, Github, Linkedin, PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <footer className="mt-20 border-t-2 border-zinc-500">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-zinc-600 my-10">
          <ul className="flex gap-8">
            <li>
              <Link
                href="https://www.facebook.com/profile.php?id=100007180598060"
                className=" hover:text-zinc-300"
              >
                <Facebook />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/gulshanmk1"
                className=" hover:text-zinc-300"
              >
                <Linkedin />
              </Link>
            </li>
            <li>
              <Link href="tel:+923113969283" className=" hover:text-zinc-300">
                <PhoneCall />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Gulshan-koondhar"
                className=" hover:text-zinc-300"
              >
                <Github />
              </Link>
            </li>
          </ul>
          <ul className="flex gap-8">
            <li>
              <Link href="#about" className=" hover:text-zinc-300">
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className=" hover:text-zinc-300">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#projects" className=" hover:text-zinc-300">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className=" hover:text-zinc-300">
                Contact
              </Link>
            </li>
          </ul>
          <h1 className="text-lg">
            &copy; 2024 <span className="text-zinc-300">GMK Inc.</span>
          </h1>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
