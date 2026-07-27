import { cn } from "@/lib/utils"

const Flex = ({
  children,
  vertical,
  horizontal,
  gap,
  align,
  justify,
  className,
  textAlign,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex",
        vertical && "flex-col",
        horizontal && "flex-row",
        gap && `gap-${gap}`,
        align && `items-${align}`,
        justify && `justify-${justify}`,
        textAlign && `text-${textAlign}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Flex
