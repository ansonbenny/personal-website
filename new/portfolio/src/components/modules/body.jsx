import { cn } from "@/lib/utils"
import Flex from "../base/flex"
import Typography from "../base/typography"
import { IconMenu, IconTerminal, IconX } from "@tabler/icons-react"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import { Sheet, SheetContent } from "../ui/sheet"
import { TABS, WELCOME_MESSAGE } from "@/utils/constants"
import Terminal, { TerminalHeader } from "./terminal"
import Menu from "./menu"

const Body = ({ children, activeTab = "/" }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches)

    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches)
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const [sheetOpen, setSheetOpen] = useState(false) // 'left' or 'right'

  return (
    <div className="min-h-[100svh] overflow-hidden bg-background">
      <Flex className="sticky top-0 z-10 h-[var(--h-header)] w-full border-b border-border bg-inherit">
        <Flex
          align={"center"}
          className="h-inherit hidden w-[var(--w-sidebar)] shrink-0 border-r border-border px-[var(--px-container)] md:block md:flex"
        >
          <Typography variant={"xs"}>{WELCOME_MESSAGE}</Typography>
        </Flex>

        <Button
          onClick={() => setSheetOpen("left")}
          size="icon-xs"
          variant="ghost"
          className={
            "my-auto mr-1 ml-[var(--px-container)] inline-flex rounded border border-border md:hidden"
          }
        >
          <IconMenu />
        </Button>

        <Flex className={"overflow-x-auto"}>
          {TABS.map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              aria-current={activeTab === tab.href ? "page" : undefined}
              className={cn(
                "flex items-center justify-center gap-1.5 px-[var(--px-container)] text-xs whitespace-nowrap transition-colors [&>svg]:size-3",
                activeTab === tab.href
                  ? "-mb-1 border-t-2 border-blue-400 bg-[#333] pb-1"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <tab.icon />
              {tab.label}
            </a>
          ))}
        </Flex>

        {sheetOpen === "right" ? (
          <TerminalHeader
            setSheetOpen={setSheetOpen}
            className={"ml-auto border-l"}
          />
        ) : (
          <Button
            onClick={() => setSheetOpen("right")}
            size="icon-xs"
            variant="ghost"
            className={
              "my-auto mr-[var(--px-container)] ml-auto rounded border border-border"
            }
          >
            <IconTerminal />
          </Button>
        )}
      </Flex>
      <Flex className={cn("h-[var(--h-inner)]")}>
        <div
          className={
            "h-inherit hidden w-[var(--w-sidebar)] shrink-0 border-r border-border md:flex"
          }
        >
          <Menu activeTab={activeTab} />
        </div>
        <Flex className={"h-inherit w-full bg-[#333] p-[var(--px-container)]"}>
          {children}
        </Flex>

        {sheetOpen === "right" && (
          <div
            className={
              "h-inherit hidden w-[var(--w-sidebar)] shrink-0 border-l border-border md:flex"
            }
          >
            <Terminal />
          </div>
        )}
      </Flex>

      {isMobile && (
        <Sheet open={!!sheetOpen} onOpenChange={setSheetOpen}>
          <SheetContent
            side={sheetOpen === "left" ? "left" : "right"}
            className={"[&>button]:hidden"}
          >
            <div className="w-full">
              {sheetOpen === "left" ? (
                <>
                  <Flex
                    justify={"between"}
                    align={"center"}
                    className={
                      "h-[var(--h-header)] w-full border-b border-border px-[var(--px-container)] md:hidden"
                    }
                  >
                    <Typography variant={"xs"}>{WELCOME_MESSAGE}</Typography>
                    <Button
                      onClick={() => setSheetOpen(null)}
                      size="icon-xs"
                      variant="ghost"
                    >
                      <IconX />
                    </Button>
                  </Flex>
                  <Menu activeTab={activeTab} />
                </>
              ) : (
                <>
                  <Flex className={"h-[var(--h-header)]"}>
                    <TerminalHeader
                      setSheetOpen={setSheetOpen}
                      className={"w-full border-b"}
                    />
                  </Flex>
                  <Terminal setSheetOpen={setSheetOpen} />
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      )}
    </div>
  )
}

export default Body
