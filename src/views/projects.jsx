import Flex from "@/components/base/flex"
import Typography from "@/components/base/typography"
import Page, { Chip, PageHeading } from "@/components/modules/page"
import { PROJECTS } from "@/utils/constants"
import { Card, CardContent } from "@/components/ui/card"

const Projects = () => {
  return (
    <Page file="projects.done">
      <PageHeading
        title="Projects"
        description="A selection of things I've built — responsive, user-friendly web applications spanning front-end and back-end work."
      />

      <div className="space-y-4">
        {PROJECTS.map((project, index) => (
          <Card key={project.name}>
            <CardContent>
              <div className="min-w-0 space-y-3">
                <div className="space-y-1">
                  <Flex align={"center"} gap={2}>
                    <Typography
                      variant={"xs"}
                      className="text-muted-foreground tabular-nums"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Typography variant={"h5"}>{project.name}</Typography>
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
            </CardContent>
          </Card>
        ))}
      </div>
    </Page>
  )
}

export default Projects
