import { IconArrowUpRight } from "@tabler/icons-react"

import Flex from "@/components/base/flex"
import Typography from "@/components/base/typography"
import Page, { PageHeading } from "@/components/modules/page"
import { CONTACTS, NAME } from "@/utils/constants"

const Contact = () => {
  return (
    <Page file="contact.connect">
      <PageHeading
        title="Contact"
        description="Have an idea, a role, or a project in mind? Any of these reach me directly."
      />

      <div className="space-y-3">
        {CONTACTS.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            {...(contact.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group flex items-center gap-4 rounded-md border border-border bg-background p-4 transition-colors hover:border-blue-400/40"
          >
            <Flex
              align={"center"}
              justify={"center"}
              className="size-9 shrink-0 rounded border border-border text-muted-foreground transition-colors group-hover:border-blue-400/40 group-hover:text-blue-400"
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
                className="block truncate transition-colors group-hover:text-blue-400"
              >
                {contact.value}
              </Typography>
            </div>

            <IconArrowUpRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-400" />
          </a>
        ))}
      </div>

      <div className="mt-10 rounded-md border border-dashed border-border p-4">
        <Flex className="text-xs" gap={1}>
          <span className="text-blue-400 lowercase">
            {NAME.split(" ")[0]}@portfolio
          </span>
          <span className="text-muted-foreground">:~$</span>
          <span className="text-muted-foreground">
            echo &quot;let&apos;s build something&quot;
          </span>
        </Flex>
      </div>
    </Page>
  )
}

export default Contact
