import { IconTerminal, IconX } from "@tabler/icons-react"
import { useEffect, useRef, useState } from "react"
import Flex from "../base/flex"
import { Button } from "../ui/button"
import Typography from "../base/typography"
import { NAME, WELCOME_MESSAGE } from "@/utils/constants"
import { runCommand } from "@/utils/commands"
import { cn } from "@/lib/utils"

const PROMPT = `${NAME.split(" ")[0].toLowerCase()}@portfolio`

const SUGGESTIONS = ["help", "experience", "projects", "contact"]

const TONES = {
  muted: "text-muted-foreground",
  highlight: "text-highlight",
  error: "text-destructive",
}

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
      <Flex className={"text-xs"} gap={1.5} align={"center"}>
        <IconTerminal className={"size-3 shrink-0"} /> Terminal
      </Flex>
      <Button onClick={() => setSheetOpen(null)} size="icon-xs" variant="ghost">
        <IconX />
      </Button>
    </Flex>
  )
}

const Line = ({ line }) => {
  if (line.spacer) return <div className="h-2" aria-hidden="true" />

  const body = line.href ? (
    <a
      href={line.href}
      {...(line.external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="underline underline-offset-2 transition-colors hover:text-highlight"
    >
      {line.text}
    </a>
  ) : (
    line.text
  )

  if (line.label) {
    return (
      <div className="grid grid-cols-[5.5rem_1fr] gap-x-2">
        <span className="truncate text-highlight">{line.label}</span>
        <span className={cn("break-words", TONES[line.tone] ?? TONES.muted)}>
          {body}
        </span>
      </div>
    )
  }

  if (line.bullet) {
    return (
      <Flex gap={1.5} className="text-muted-foreground">
        <span className="shrink-0 text-highlight select-none">▸</span>
        <span className="break-words">{body}</span>
      </Flex>
    )
  }

  return <div className={cn("break-words", TONES[line.tone])}>{body}</div>
}

const PromptLabel = () => (
  <>
    <span className="shrink-0 text-highlight lowercase">{PROMPT}</span>
    <span className="shrink-0 text-muted-foreground">:~$</span>
  </>
)

const Terminal = () => {
  const [history, setHistory] = useState([])
  const [value, setValue] = useState("")
  // index into previously entered commands while browsing with ↑ / ↓
  const [recall, setRecall] = useState(null)

  const inputRef = useRef(null)
  const outputRef = useRef(null)

  const entered = history.map((entry) => entry.input).filter(Boolean)

  useEffect(() => {
    const output = outputRef.current
    if (output) output.scrollTop = output.scrollHeight
  }, [history])

  const submit = (raw) => {
    const input = raw.trim()
    const result = runCommand(input)

    setValue("")
    setRecall(null)
    inputRef.current?.focus()

    if (result.clear) {
      setHistory([])
      return
    }

    setHistory((previous) => [...previous, { input, lines: result.lines }])
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
      submit(value)
      return
    }

    if (event.key === "ArrowUp") {
      event.preventDefault()
      if (!entered.length) return
      const next =
        recall === null ? entered.length - 1 : Math.max(0, recall - 1)
      setRecall(next)
      setValue(entered[next])
      return
    }

    if (event.key === "ArrowDown") {
      event.preventDefault()
      if (recall === null) return
      const next = recall + 1
      if (next >= entered.length) {
        setRecall(null)
        setValue("")
        return
      }
      setRecall(next)
      setValue(entered[next])
    }
  }

  return (
    <div className="flex min-h-0 w-full flex-1 flex-col self-stretch">
      <Flex
        align={"center"}
        gap={1}
        className="h-[var(--h-header)] w-full shrink-0 overflow-x-auto border-b border-border px-[var(--px-container)]"
      >
        <Typography variant={"xs"} className="shrink-0 text-muted-foreground">
          TRY:
        </Typography>
        {SUGGESTIONS.map((name) => (
          <Button
            key={name}
            onClick={() => submit(name)}
            variant="ghost"
            size="xs"
            className={"px-1"}
          >
            {name}
          </Button>
        ))}
      </Flex>

      <div
        ref={outputRef}
        onClick={() => inputRef.current?.focus()}
        className="min-h-0 flex-1 cursor-text space-y-1 overflow-y-auto p-[var(--px-container)] text-xs"
      >
        <div className="text-muted-foreground">{WELCOME_MESSAGE}</div>
        <div className="text-muted-foreground">
          Type <span className="text-highlight">help</span> to see what I can
          do.
        </div>

        {history.map((entry, index) => (
          <div key={index} className="space-y-1 pt-3">
            <Flex>
              <PromptLabel />
              <span className="pl-1 break-all">{entry.input}</span>
            </Flex>
            {entry.lines.map((line, lineIndex) => (
              <Line key={lineIndex} line={line} />
            ))}
          </div>
        ))}

        <Flex className="pt-3">
          <PromptLabel />
          <input
            ref={inputRef}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            aria-label="Terminal input"
            className="w-full min-w-0 bg-transparent pl-1 text-xs caret-highlight focus:outline-none"
          />
        </Flex>
      </div>
    </div>
  )
}

export default Terminal
