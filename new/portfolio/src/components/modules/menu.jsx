import { CONTACTS, NAME, POSITION, TABS } from "@/utils/constants"
import Space from "../base/space"
import Typography from "../base/typography"
import Flex from "../base/flex"

const Menu = () => {
  return (
    <div className="w-full p-[var(--px-container)]">
      <Space y={3} className={"w-full"}>
        <Space>
          <Typography variant={"h6"}>{NAME}</Typography>
          <Typography variant={"xs"}>{POSITION}</Typography>
        </Space>

        <Flex gap={2}>
          {CONTACTS.map((contact) => (
            <a
              key={contact.value}
              href={contact.value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <contact.icon className={"size-4"} />
            </a>
          ))}
        </Flex>
      </Space>

      <div className="-mx-[var(--px-container)] my-6 h-[1px] w-[calc(100%+2*var(--px-container))] bg-border" />

      <Space y={3}>
        {TABS.map((tab) => (
          <a
            key={tab.href}
            href={tab.href}
            className="flex items-center justify-start gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground [&>svg]:size-3"
          >
            <tab.icon />
            {tab.label}
          </a>
        ))}
      </Space>
    </div>
  )
}

export default Menu
