"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
// import Particles from "@/components/particles";

export default function Intro() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/pfp.png"
              alt="Alexandra Profile Icon"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.10rem] border-borderPrimary shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi there, I&apos;m{" "}
        <span className="font-bold text-primary">Alexandra</span>!
      </motion.p>

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        I&apos;m a recent graduate from the{" "}
        <span className="font-bold text-primary">
          University of California, Santa Cruz
        </span>
        . I enjoy finding ways to blend my passion for programming with
        storytelling, music & art!
      </motion.p>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Whether it&apos;s{" "}
        <span className="font-bold text-primary">animation</span>,{" "}
        <span className="font-bold text-primary">web</span> or{" "}
        <span className="font-bold text-primary">game development</span>, I love
        to collaborate with artists & other developers to bring impactful
        stories to life.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          href="https://github.com/alexandra-furlong"
          className="bg-secondary/80 text-primary px-7 py-3
         flex items-center gap-2 rounded-full outline-none focus:scale-110 
          hover:scale-110 active:scale-105 hover:text-white hover:bg-secondaryFocus 
          transition border border-secondaryFocus"
        >
          GitHub <FaGithub className="opacity-70" />
        </a>

        <a
          href="https://www.linkedin.com/in/alexandra-furlong-360813120/"
          className="bg-secondary/80 text-primary px-7 py-3 
        flex items-center gap-2 rounded-full outline-none focus:scale-110 
          hover:scale-110 active:scale-105 hover:text-white hover:bg-secondaryFocus 
          transition border border-secondaryFocus"
        >
          LinkedIn <FaLinkedin className="opacity-70" />
        </a>

        <Link
          href="mailto:alexandra.furlong99@gmail.com"
          className="bg-secondary/80 text-primary px-7 py-3 
          flex items-center gap-2 rounded-full outline-none focus:scale-110 
          hover:scale-110 active:scale-105 hover:text-white hover:bg-secondaryFocus
          transition border border-secondaryFocus"
        >
          {/* <Link
          href="#contact"
          className="bg-secondary/80 text-primary px-7 py-3 
          flex items-center gap-2 rounded-full outline-none focus:scale-110 
          hover:scale-110 active:scale-105 hover:text-white hover:bg-secondaryFocus
          transition border border-secondaryFocus"
        > */}{" "}
          Email <MdOutlineEmail className="opacity-70" />
        </Link>
      </motion.div>
    </section>
  );
}
