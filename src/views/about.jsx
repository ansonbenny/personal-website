import {
  IconArrowRight,
  IconDownload,
  IconPointFilled,
} from "@tabler/icons-react"

import Flex from "@/components/base/flex"
import Typography from "@/components/base/typography"
import Page, { Chip, Section } from "@/components/modules/page"
import { buttonVariants } from "@/components/ui/button"
import {
  LANGUAGES,
  NAME,
  POSITION,
  PROFILE_IMAGE,
  RESUME_URL,
  SKILLS,
  SUMMARY,
} from "@/utils/constants"

const About = () => {
  return (
    <Page file="about.info">
      <Flex className="flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
        {/* w-fit so the badge anchors to the avatar, not a stretched column */}
        <div className="relative w-fit shrink-0">
          <img
            src={PROFILE_IMAGE}
            alt={NAME}
            width={144}
            height={144}
            loading="eager"
            className="size-28 rounded-full border border-border object-cover md:size-36"
          />
          {/* <Flex
            align={"center"}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 gap-0.5 rounded border border-border bg-background py-0.5 pr-1.5 pl-0.5 text-[10px] whitespace-nowrap text-muted-foreground"
          >
            <IconPointFilled className="size-3 text-highlight" />
            open to work
          </Flex> */}
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {NAME}
            </h1>
            <Flex align={"center"} gap={2}>
              <span className="h-px w-6 bg-highlight" />
              <Typography variant={"sm"} className="text-highlight">
                {POSITION}
              </Typography>
            </Flex>
          </div>

          <Typography className="max-w-xl text-muted-foreground">
            {SUMMARY}
          </Typography>

          <Flex gap={2} className="flex-wrap">
            <a
              href="/contact"
              className={buttonVariants({ size: "sm", variant: "default" })}
            >
              contact.connect
              <IconArrowRight className="size-3.5" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "sm", variant: "outline" })}
            >
              <IconDownload className="size-3.5" />
              resume.pdf
            </a>
          </Flex>
        </div>
      </Flex>

      <Section label="skills">
        <div className="space-y-4">
          {SKILLS.map((group) => (
            <div
              key={group.label}
              className="grid gap-2 lg:grid-cols-[7rem_1fr] lg:gap-4"
            >
              <Typography
                variant={"xs"}
                className="pt-1.5 text-muted-foreground"
              >
                {group.label}
              </Typography>
              <Flex gap={2} className="flex-wrap">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </Flex>
            </div>
          ))}
        </div>
      </Section>

      <Section label="languages">
        <Flex gap={2} className="flex-wrap">
          {LANGUAGES.map((language) => (
            <Chip key={language}>{language}</Chip>
          ))}
        </Flex>
      </Section>
    </Page>
  )
}

export default About
