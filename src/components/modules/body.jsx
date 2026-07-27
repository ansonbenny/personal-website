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
  const [sheetOpen, setSheetOpen] = useState(false) // 'left' or 'right'

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const matches = window.matchMedia("(max-width: 768px)").matches
    setIsMobile(matches)

    // if not mobile, check if there is a saved status in session storage
    if (!matches) {
      const currentStatus = window.sessionStorage.getItem("sheetOpen")

      if (currentStatus) {
        setSheetOpen(currentStatus)
      } else {
        setSheetOpen("right")
      }
    }

    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches)
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // save the sheet open status to session storage
  useEffect(() => {
    window.sessionStorage.setItem("sheetOpen", sheetOpen)
  }, [sheetOpen])

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
                "relative flex items-center justify-center gap-1.5 px-[var(--px-container)] text-xs whitespace-nowrap transition-colors [&>svg]:size-3",
                activeTab === tab.href
                  ? "bg-[#333] text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <tab.icon />
              {tab.label}

              {activeTab === tab.href && (
                <span className="absolute top-0 left-0 block h-[2px] w-full bg-highlight"></span>
              )}
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

        {/* the sheet renders its own Terminal, so only mount one at a time */}
        {sheetOpen === "right" && !isMobile && (
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
            <div className="flex min-h-0 w-full flex-1 flex-col">
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
                  <Flex className={"h-[var(--h-header)] shrink-0"}>
                    <TerminalHeader
                      setSheetOpen={setSheetOpen}
                      className={"w-full border-b"}
                    />
                  </Flex>
                  <Terminal />
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
