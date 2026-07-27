import { cn } from "@/lib/utils"
import { NAME } from "@/utils/constants"
import Flex from "../base/flex"
import Typography from "../base/typography"

const ROOT = `~/${NAME.split(" ")[0].toLowerCase()}`

/**
 * Upper bound of numbers rendered. Views are passed to Body as Astro slot
 * content, so Page is static HTML and cannot measure anything at runtime —
 * instead we render more rows than any view needs and let the gutter's
 * overflow clip them to the real content height.
 */
const MAX_LINES = 400

const LINES = Array.from({ length: MAX_LINES }, (_, index) => index + 1)

/**
 * Editor-style line numbers, one per 24px band of content (h-6 rows). The
 * content is arbitrary markup, so a "line" is a slice of rendered height
 * rather than a source line.
 */
const LineNumbers = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-y-0 left-0 w-10 overflow-hidden border-r border-border pr-3 text-right text-xs text-muted-foreground/40 select-none"
    >
      {LINES.map((line) => (
        <div key={line} className="h-6 leading-6 tabular-nums">
          {line}
        </div>
      ))}
    </div>
  )
}

/**
 * Scrollable editor pane. The shell (Body) owns the viewport height, so every
 * view stretches to it and scrolls internally instead of scrolling the page.
 */
const Page = ({ file, children, className }) => {
  return (
    <div className="min-h-0 w-full self-stretch overflow-y-auto">
      {/* min-h-full keeps the gutter running the full pane on short views */}
      <div className="relative min-h-full w-full">
        <LineNumbers />

        <div
          className={cn(
            "w-full max-w-3xl pb-16 pl-[calc(var(--spacing)*10+var(--px-container))]",
            className
          )}
        >
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
