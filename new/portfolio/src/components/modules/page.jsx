import { cn } from "@/lib/utils"
import { NAME } from "@/utils/constants"
import Flex from "../base/flex"
import Typography from "../base/typography"

const ROOT = `~/${NAME.split(" ")[0].toLowerCase()}`

/**
 * Scrollable editor pane. The shell (Body) owns the viewport height, so every
 * view stretches to it and scrolls internally instead of scrolling the page.
 */
const Page = ({ file, children, className }) => {
  return (
    <div className="min-h-0 w-full self-stretch overflow-y-auto">
      <div className={cn("mx-auto w-full max-w-3xl pb-16", className)}>
        <Flex
          align={"center"}
          gap={1.5}
          className="pb-8 text-xs text-muted-foreground"
        >
          <span>{ROOT}</span>
          <span className="opacity-40">/</span>
          <span className="text-foreground">{file}</span>
        </Flex>

        {children}
      </div>
    </div>
  )
}

export const PageHeading = ({ title, description, action, className }) => {
  return (
    <header className={cn("mb-10", className)}>
      <Flex
        justify={"between"}
        className="flex-col gap-4 sm:flex-row sm:items-center"
      >
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {title}
          </h1>
          <div className="h-[2px] w-8 bg-blue-400" />
        </div>
        {action}
      </Flex>

      {description && (
        <Typography className="mt-4 max-w-xl text-muted-foreground">
          {description}
        </Typography>
      )}
    </header>
  )
}

export const Section = ({ label, children, className }) => {
  return (
    <section className={cn("mt-10 space-y-4", className)}>
      <Flex align={"center"} gap={3}>
        <Typography variant={"xs"} className="shrink-0 text-muted-foreground">
          {`// ${label}`}
        </Typography>
        <div className="h-px flex-1 bg-border" />
      </Flex>
      {children}
    </section>
  )
}

export const Chip = ({ children, className }) => {
  return (
    <span
      className={cn(
        "rounded border border-border bg-background px-2 py-1 text-xs text-muted-foreground transition-colors hover:border-blue-400/40 hover:text-foreground",
        className
      )}
    >
      {children}
    </span>
  )
}

export default Page
