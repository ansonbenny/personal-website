import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconCode,
  IconMail,
  IconUser,
} from "@tabler/icons-react"

export const POSITION = "Fullstack Engineer"
export const NAME = "Anson Benny"
export const EMAIL = "ansonbenny166@gmail.com"

export const WELCOME_MESSAGE = "Welcome to my portfolio!"

export const PROFILE_IMAGE = "/profile.png"
export const RESUME_URL = "/resume.pdf"

export const SUMMARY = [
  "Full Stack Developer with hands-on experience in developing and deploying web applications. Proven track record in crafting multiple highly-scalable applications across the stack.",
  "I'm happiest when I'm creating, learning, exploring, and thinking about how to make things better. Always eager to adapt and take on new challenges.",
]

export const SKILLS = [
  {
    label: "languages",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS"],
  },
  {
    label: "frontend",
    items: ["React", "Next.js", "Redux", "React Hook Form"],
  },
  {
    label: "backend",
    items: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    label: "realtime",
    items: ["Socket.IO", "WebRTC"],
  },
  {
    label: "tooling",
    items: ["Git", "GitHub"],
  },
]

export const LANGUAGES = ["English", "Malayalam"]

export const EXPERIENCES = [
  {
    position: "Software Engineer",
    company: "Micro.company",
    start: "Feb 2024",
    end: "Present",
    highlights: [
      "Utilised a diverse array of technologies to drive successful project outcomes.",
      "Enhanced user experience through meticulous attention to design and functionality.",
      "Troubleshot and resolved complex technical issues to ensure system reliability and performance.",
      "Continuously advanced my development skills to stay at the cutting edge of new technology.",
    ],
  },
  {
    position: "Full Stack Developer",
    company: "Freelancing",
    start: "Dec 2022",
    end: "Present",
    highlights: [
      "Architected web applications using Node.js, Express.js, MongoDB, React, Redux, Next.js, HTML5 and CSS.",
      "Developed a variety of websites, including multi-vendor e-commerce platforms for clients in Zimbabwe, Africa.",
      "Implemented SEO best practices to optimise website performance and visibility on search engines.",
      "Received consistently positive feedback from clients.",
    ],
  },
]

export const PROJECTS = [
  {
    name: "Store263",
    tagline: "Multi-vendor e-commerce",
    description:
      "A dynamic marketplace where both vendors and administrators can list products for sale, with payments handled end to end.",
    stack: ["MERN", "TypeScript", "Paystack"],
    href: "https://store263.com/",
    linkLabel: "Live site",
  },
  {
    name: "Social Media WebApp",
    tagline: "Live chat & calling",
    description:
      "A social platform built for private and group chat, video/audio calls and story sharing. Socket.IO powers live messaging, while WebRTC / PeerJS handles peer-to-peer calls.",
    stack: ["MERN", "WebRTC", "Socket.IO"],
    href: "https://github.com/ansonbenny/Social-Media",
    linkLabel: "Source",
  },
  {
    name: "Music Streamer",
    tagline: "Digital music platform",
    description:
      "Listen to music and build your favourite collection. The Spotify API supplies millions of tracks, albums and artists.",
    stack: ["MERN", "Spotify API"],
    href: "https://github.com/ansonbenny/Music-Streamer",
    linkLabel: "Source",
  },
  {
    name: "ChatGPT Clone",
    tagline: "Conversational AI",
    description:
      "A clone of ChatGPT built on the OpenAI API, allowing human-like conversations with streamed responses.",
    stack: ["MERN", "OpenAI"],
    href: "https://github.com/ansonbenny/ChatGPT",
    linkLabel: "Source",
  },
]

export const CONTACTS = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: IconMail,
    external: false,
  },
  {
    label: "Github",
    value: "github.com/ansonbenny",
    href: "https://github.com/ansonbenny",
    icon: IconBrandGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/anson-benny",
    href: "https://www.linkedin.com/in/anson-benny/",
    icon: IconBrandLinkedin,
    external: true,
  },
]

export const TABS = [
  {
    label: "about.info",
    href: "/",
    icon: IconUser,
  },
  {
    label: "experience.info",
    href: "/experience",
    icon: IconBriefcase,
  },
  {
    label: "projects.done",
    href: "/projects",
    icon: IconCode,
  },
  {
    label: "contact.connect",
    href: "/contact",
    icon: IconMail,
  },
]
