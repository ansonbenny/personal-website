import { IconArrowUpRight } from "@tabler/icons-react"

import Flex from "@/components/base/flex"
import Typography from "@/components/base/typography"
import Page, { Chip, PageHeading } from "@/components/modules/page"
import { PROJECTS } from "@/utils/constants"

const Projects = () => {
  return (
    <Page file="projects.done">
      <PageHeading
        title="Projects"
        description="A selection of things I've built — responsive, user-friendly web applications spanning front-end and back-end work."
      />

      <div className="space-y-4">
        {PROJECTS.map((project, index) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-md border border-border bg-background p-4 transition-colors hover:border-blue-400/40 md:p-5"
          >
            <Flex justify={"between"} align={"start"} gap={4}>
              <div className="min-w-0 space-y-3">
                <div className="space-y-1">
                  <Flex align={"center"} gap={2}>
                    <Typography
                      variant={"xs"}
                      className="text-muted-foreground tabular-nums"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Typography
                      variant={"h5"}
                      className="transition-colors group-hover:text-blue-400"
                    >
                      {project.name}
                    </Typography>
                  </Flex>
                  <Typography
                    variant={"xs"}
                    className="block text-muted-foreground sm:pl-7"
                  >
                    {project.tagline}
                  </Typography>
                </div>

                <Typography className="text-muted-foreground sm:pl-7">
                  {project.description}
                </Typography>

                <Flex gap={1.5} className="flex-wrap sm:pl-7">
                  {project.stack.map((tech) => (
                    <Chip key={tech}>{tech}</Chip>
                  ))}
                </Flex>
              </div>

              <Flex
                align={"center"}
                gap={1}
                className="shrink-0 text-xs text-muted-foreground transition-colors group-hover:text-blue-400"
              >
                <span className="hidden sm:inline">{project.linkLabel}</span>
                <IconArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Flex>
            </Flex>
          </a>
        ))}
      </div>
    </Page>
  )
}

export default Projects
