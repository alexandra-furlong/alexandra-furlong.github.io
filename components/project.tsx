"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  // The scrollYProgress will go from 0 to 1 & the scaling starts at 0.8 & up to 1
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  // The opacity will gradually change from 0.6 to 1
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb:0"
    >
      <section
        className="relative bg-secondary/80 max-w-[42rem] 
      border border-black/15 rounded-lg overflow-hidden sm:pr-8 sm:h-[20rem] 
      hover:bg-secondaryFocus transition group-even:pl-8"
      >
        {/* This section contains the title, descrip. and skills related to the project */}
        <div
          className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] 
      flex flex-col h-full group-even:ml-[18rem]"
        >
          <h3 className="text-2x1 font-semibold text-primary">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-50">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-primary/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* This section contains the image still of the project */}
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
        transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] 
        group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
