import { IconArrowUpRight } from "@tabler/icons-react"

import Flex from "@/components/base/flex"
import Typography from "@/components/base/typography"
import Page, { PageHeading } from "@/components/modules/page"
import { CONTACTS, NAME } from "@/utils/constants"
import { Card, CardContent } from "@/components/ui/card"

const Contact = () => {
  return (
    <Page file="contact.connect">
      <PageHeading
        title="Contact"
        description="Have an idea, a role, or a project in mind? Any of these reach me directly."
      />

      <Flex vertical gap={4}>
        {CONTACTS.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            {...(contact.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <Card className={"transition-colors hover:border-blue-400/40"}>
              <CardContent className="group flex items-center gap-4">
                <Flex
                  align={"center"}
                  justify={"center"}
                  className="size-9 shrink-0 rounded border border-border text-muted-foreground transition-colors group-hover:border-highlight/40 group-hover:text-highlight"
                >
                  <contact.icon className="size-4" />
                </Flex>

                <div className="min-w-0">
                  <Typography
                    variant={"xs"}
                    className="block text-muted-foreground"
                  >
                    {contact.label}
                  </Typography>
                  <Typography
                    variant={"sm"}
                    className="block truncate transition-colors group-hover:text-highlight"
                  >
                    {contact.value}
                  </Typography>
                </div>

                <IconArrowUpRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-highlight" />
              </CardContent>
            </Card>
          </a>
        ))}
      </Flex>

      <Card className="mt-10 border border-dashed border-border bg-transparent ring-0">
        <CardContent>
          <Flex className="text-xs" gap={1}>
            <span className="text-highlight lowercase">
              {NAME.split(" ")[0]}@portfolio
            </span>
            <span className="text-muted-foreground">:~$</span>
            <span className="text-muted-foreground">
              echo &quot;let&apos;s build something&quot;
            </span>
          </Flex>
        </CardContent>
      </Card>
    </Page>
  )
}

export default Contact
