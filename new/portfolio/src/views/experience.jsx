import { IconDownload } from "@tabler/icons-react"

import Flex from "@/components/base/flex"
import Typography from "@/components/base/typography"
import Page, { PageHeading } from "@/components/modules/page"
import { buttonVariants } from "@/components/ui/button"
import { EXPERIENCES, RESUME_URL } from "@/utils/constants"
import { Card, CardContent } from "@/components/ui/card"

const Experience = () => {
  return (
    <Page file="experience.info">
      <PageHeading
        title="Experience"
        description="Roles where I've shipped production web applications — from freelance client work to full-time engineering."
        action={
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "sm", variant: "outline" })}
          >
            <IconDownload className="size-3.5" />
            resume.pdf
          </a>
        }
      />

      <ol className="ml-1 space-y-4 border-l border-border pl-6">
        {EXPERIENCES.map((experience) => (
          <li key={experience.company} className="relative">
            <span className="absolute top-6 -left-[1.8rem] size-2 rounded-full bg-blue-400 ring-4 ring-[#333]" />

            <Card>
              <CardContent className="space-y-4">
                <Flex
                  justify={"between"}
                  className="flex-col gap-1 md:flex-row md:items-baseline md:gap-4"
                >
                  <div className="space-y-1">
                    <Typography variant={"h5"}>
                      {experience.position}
                    </Typography>
                    <Typography variant={"sm"} className="block text-highlight">
                      {experience.company}
                    </Typography>
                  </div>
                  <Typography
                    variant={"xs"}
                    className="shrink-0 text-muted-foreground"
                  >
                    {experience.start} — {experience.end}
                  </Typography>
                </Flex>

                <ul className="space-y-2">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2.5 text-sm leading-normal text-muted-foreground"
                    >
                      <span className="text-highlight select-none">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </Page>
  )
}

export default Experience
