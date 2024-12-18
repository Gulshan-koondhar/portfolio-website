"use client";
import Image from "next/image";
import React from "react";
import hero from "@/public/Hero-banner.png";
import { Download, ArrowDown } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Hero = () => {
  return (
    <div>
      <section className="mt-20 " id="home">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="flex flex-col sm:flex-row w-full sm:items-center">
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex-1"
            >
              <h3 className="text-xs bg-gradient-to-r from-[#fafafa] to-[#a1a1aa] text-transparent bg-clip-text sm:text-sm mb-4">
                Crafting Exceptional Digital Experiences
              </h3>
              <h2 className="text-3xl bg-gradient-to-r from-[#fafafa] to-[#a1a1aa] text-transparent bg-clip-text sm:text-4xl mb-4">
                Front-end Web Developer
              </h2>
              <p className="text-lg bg-gradient-to-r from-[#fafafa] to-[#a1a1aa] text-transparent bg-clip-text sm:text-xl mb-4">
                Expertise in creating visually stunning and user-centric web
                applications with modern technologies
              </p>

              <div className="flex gap-8 mt-8">
                <button className="text-sm  border-gray-700  px-2 rounded-md bg-sky-400 text-zinc-900 hover:bg-sky-300">
                  <Link href="/my-resume.pdf" className="flex items-center">
                    Download CV
                    <Download width={15} height={15} className="ml-2" />
                  </Link>
                </button>
                <button className="text-sm border-2 py-2 px-2 rounded-md flex items-center border-gray-700">
                  <Link href="#about" className="flex items-center">
                    Scroll down
                    <ArrowDown width={18} height={18} className="ml-2" />
                  </Link>
                </button>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex-1 items-center justify-center"
            >
              <figure className="flex items-center justify-center bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-full">
                <Image src={hero} alt="GMK" className="rounded-full" />
              </figure>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
