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

export const WELCOME_MESSAGE = "Welcome to my portfolio!"

export const CONTACTS = [
  {
    label: "Email",
    value: "ansonbenny@gmail.com",
    icon: IconMail,
  },
  {
    label: "Github",
    value: "https://github.com/ansonbenny",
    icon: IconBrandGithub,
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/ansonbenny",
    icon: IconBrandLinkedin,
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
