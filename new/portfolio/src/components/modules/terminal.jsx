import { IconTerminal, IconX } from "@tabler/icons-react"
import Flex from "../base/flex"
import { Button } from "../ui/button"
import Typography from "../base/typography"
import { NAME } from "@/utils/constants"
import { cn } from "@/lib/utils"

export const TerminalHeader = ({ setSheetOpen, className }) => {
  return (
    <Flex
      align={"center"}
      justify={"between"}
      className={cn(
        "w-[var(--w-sidebar)] shrink-0 border-border px-[var(--px-container)]",
        className
      )}
    >
      <Flex className={"text-xs"} gap={1.5}>
        <IconTerminal className={"size-3"} /> Terminal
      </Flex>
      <Button onClick={() => setSheetOpen(null)} size="icon-xs" variant="ghost">
        <IconX />
      </Button>
    </Flex>
  )
}

const Terminal = () => {
  return (
    <div className="w-full">
      <Flex
        align={"center"}
        className="h-[var(--h-header)] w-full border-b border-border px-[var(--px-container)]"
      >
        <Typography variant={"xs"}>TRY:</Typography>
        {[
          {
            label: "help",
            id: "help",
          },
          {
            label: "experience",
            id: "experience",
          },
          {
            label: "projects",
            id: "projects",
          },
          {
            label: "contact",
            id: "contact",
          },
        ].map((item) => (
          <Button key={item.id} variant="ghost" size="xs" className={"px-1"}>
            {item.label}
          </Button>
        ))}
      </Flex>
      <div className="p-[var(--px-container)]">
        <Flex className="text-xs">
          <span className="text-blue-400 lowercase">
            {NAME.split(" ")[0]}@portfolio
          </span>
          <span>:~$</span>
          <span
            contentEditable
            className="w-full border-border pl-1 hover:border-b focus:outline-none"
          ></span>
        </Flex>
      </div>
    </div>
  )
}

export default Terminal
