import React from "react";
import booktesseraImg from "@/public/booktesseraImg.png";
import spicelabImg from "@/public/spicelabImg.png";
import scrapmallImg from "@/public/scrapMallImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Private Tutor",
//     location: "Remote (CA)",
//     description:
//       " I taught Python programming and algebra concepts to students, enhancing their problem-solving and coding skills. I designed engaging lesson plans for students aged 12-17, fostering creativity and logical thinking. I also assisted students with coursework, projects and helped them develop better studying habits.",
//     icon: React.createElement(LuGraduationCap),
//     date: "Aug 2023 - Present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "BookTessera",
    description:
      "A platform that aims to eliminate stressful and unfair ticket purchasing experiences.",
    tags: ["React", "Firestore", "JavaScript", "Python", "Express.js"],
    imageUrl: booktesseraImg,
  },
  {
    title: "SpiceLab",
    description:
      "A recipe website where users can add or edit their own recipes, and explore other recipes.",
    tags: ["Python", "JavaScript", "HTML", "CSS", "SCSS"],
    imageUrl: spicelabImg,
  },
  {
    title: "Scrap Mall",
    description:
      "A 2D cyberpunk-themed video game I developed and designed at Global Game Jam with a small team of other developers and artists!",
    tags: ["Python", "Godot"],
    imageUrl: scrapmallImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
