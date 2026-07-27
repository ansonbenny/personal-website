import {
  CONTACTS,
  EXPERIENCES,
  LANGUAGES,
  NAME,
  POSITION,
  PROJECTS,
  RESUME_URL,
  SKILLS,
  SUMMARY,
} from "@/utils/constants"

/**
 * Terminal output is described as plain data so commands stay free of JSX and
 * the renderer in terminal.jsx owns all the styling.
 *
 * line = { text?, label?, href?, external?, tone?, bullet?, spacer? }
 * tone = "muted" | "highlight" | "error" | undefined
 */
const text = (value, tone) => ({ text: value, tone })
const kv = (label, value) => ({ label, text: value })
const bullet = (value) => ({ text: value, bullet: true })
const link = (value, href, external = true) => ({
  text: value,
  href,
  external,
})
const spacer = () => ({ spacer: true })

const FIRST_NAME = NAME.split(" ")[0]

export const COMMANDS = [
  {
    name: "help",
    description: "list available commands",
    run: () => [
      text("Available commands:", "muted"),
      ...COMMANDS.map((command) => kv(command.name, command.description)),
      spacer(),
      text("Tip: press ↑ / ↓ to browse previous commands.", "muted"),
    ],
  },
  {
    name: "about",
    description: `who ${FIRST_NAME} is`,
    run: () => [
      text(NAME),
      text(POSITION, "highlight"),
      spacer(),
      text(SUMMARY, "muted"),
    ],
  },
  {
    name: "skills",
    description: "tech I work with",
    run: () => SKILLS.map((group) => kv(group.label, group.items.join(", "))),
  },
  {
    name: "experience",
    description: "where I have worked",
    run: () =>
      EXPERIENCES.flatMap((experience, index) => [
        ...(index ? [spacer()] : []),
        text(`${experience.position} — ${experience.company}`),
        text(`${experience.start} — ${experience.end}`, "muted"),
        ...experience.highlights.map(bullet),
      ]),
  },
  {
    name: "projects",
    description: "what I have built",
    run: () => [
      ...PROJECTS.flatMap((project, index) => [
        ...(index ? [spacer()] : []),
        text(project.name),
        text(project.tagline, "muted"),
        text(project.stack.join(" · "), "highlight"),
      ]),
      spacer(),
      link("open projects.done →", "/projects", false),
    ],
  },
  {
    name: "contact",
    description: "how to reach me",
    run: () =>
      CONTACTS.map((contact) => ({
        label: contact.label.toLowerCase(),
        text: contact.value,
        href: contact.href,
        external: contact.external,
      })),
  },
  {
    name: "languages",
    description: "languages I speak",
    run: () => [text(LANGUAGES.join(", "))],
  },
  {
    name: "resume",
    description: "open my resume",
    run: () => [
      link("resume.pdf", RESUME_URL),
      text("Opens in a new tab.", "muted"),
    ],
  },
  {
    name: "whoami",
    description: "the short answer",
    run: () => [text(`${NAME} — ${POSITION}`)],
  },
  {
    name: "clear",
    description: "clear the terminal",
    run: () => [],
  },
]

/**
 * Resolves raw input to output lines. Returns `clear` so the caller can reset
 * its history instead of appending an entry.
 */
export const runCommand = (input) => {
  const name = input.trim().toLowerCase()

  if (!name) return { lines: [] }

  const command = COMMANDS.find((entry) => entry.name === name)

  if (!command) {
    return {
      lines: [
        text(`command not found: ${input.trim()}`, "error"),
        text("Type 'help' to see available commands.", "muted"),
      ],
    }
  }

  return { clear: name === "clear", lines: command.run() }
}
