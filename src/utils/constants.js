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

export const SUMMARY = `Software Engineer with 3+ years of experience building scalable SaaS products and full-stack web applications using
the MERN stack. Skilled in React, Next.js, Node.js, MongoDB, REST APIs, AI integrations, payment gateways, and
modern UI development. Passionate about building high-performance, user-centric products`

export const SKILLS = [
  {
    label: "languages",
    items: ["JavaScript", "TypeScript"],
  },
  {
    label: "frontend",
    items: ["React", "Next.js", "Astro"],
  },
  {
    label: "backend",
    items: ["Node.js", "MongoDB", "REST APIs"],
  },
  {
    label: "tooling",
    items: ["Git", "GitHub", "and more"],
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
      "Develop and maintain scalable SaaS products using the MERN stack.",
      "Design and build responsive user interfaces and RESTful APIs.",
      "Integrate AI services, payment gateways, authentication, and third-party APIs.",
      "Optimize application performance, scalability, and user experience.",
      "Collaborate with cross-functional teams to deliver production-ready features.",
    ],
  },
  {
    position: "Freelance Full Stack Engineer",
    company: "Self Employed",
    start: "Dec 2022",
    end: "Present",
    highlights: [
      "Designed and developed custom web applications for international clients using the MERN stack.",
      "Built responsive, SEO-friendly websites and business applications.",
      "Integrated payment gateways, authentication systems, and third-party APIs.",
      "Delivered end-to-end solutions from requirement analysis to deployment and maintenance.",
      "Worked directly with clients to translate business requirements into scalable software solutions.",
    ],
  },
]

export const PROJECTS = [
  {
    name: "Course.link",
    tagline: "SaaS course website builder — Micro.company",
    description:
      "A SaaS platform that lets creators build and publish professional course websites, supporting free, paid and invite-only courses with secure access control. Handles YouTube, Vimeo and direct video uploads, Stripe and Razorpay payments, webhooks, and third-party integrations such as WATI.",
    stack: ["MERN", "Stripe", "Razorpay", "Webhooks"],
  },
  {
    name: "CRM",
    tagline: "AI-powered SaaS CRM — under development",
    description:
      "An AI-powered SaaS CRM focused on customer relationship management, workflow automation and modern user experience, built on scalable backend services and a responsive frontend architecture.",
    stack: ["MERN", "AI"],
  },
  {
    name: "Store263",
    tagline: "E-commerce platform — Zimbabwe, Africa",
    description:
      "A full-featured e-commerce platform for the African market with customer, admin and vendor dashboards. Integrates PayStack payments, Google and Facebook login, and currency exchange APIs, plus SEO optimization, PWA support, product variants, blogs, wishlist and cart.",
    stack: ["MERN", "PayStack", "PWA", "SEO"],
  },
  {
    name: "SoftChat",
    tagline: "Real-time messaging & calling",
    description:
      "A real-time messaging platform supporting one-to-one and group conversations, with video/audio calling over WebRTC, file sharing, user presence and authentication. Scalable real-time communication is built on Socket.IO.",
    stack: ["MERN", "WebRTC", "Socket.IO"],
  },
  {
    name: "ChatGPT Clone",
    tagline: "AI chat application",
    description:
      "An AI-powered chat application built on the OpenAI API, with chat history, conversation management, Google OAuth authentication and account management behind a responsive UI.",
    stack: ["MERN", "OpenAI", "Google OAuth"],
  },
  {
    name: "Music Streamer",
    tagline: "Music streaming platform",
    description:
      "A music streaming platform built on the Spotify API, with playlists, collections, search, recommendations and authentication, wrapped in a responsive UI with light and dark themes.",
    stack: ["MERN", "Spotify API"],
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
