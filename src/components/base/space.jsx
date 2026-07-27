import { cn } from "@/lib/utils"
import { cloneElement } from "react"

const Space = ({
  asChild,
  className,
  x,
  y,
  children,
  responsive,
  ...props
}) => {
  const classes = cn(
    x && `space-x-${x}`,
    y && `space-y-${y}`,
    responsive?.md?.x && `md:space-x-${responsive.md.x}`,
    responsive?.md?.y && `md:space-y-${responsive.md.y}`,
    responsive?.lg?.x && `lg:space-x-${responsive.lg.x}`,
    responsive?.lg?.y && `lg:space-y-${responsive.lg.y}`,
    responsive?.xl?.x && `xl:space-x-${responsive.xl.x}`,
    responsive?.xl?.y && `xl:space-y-${responsive.xl.y}`,
    className
  )

  return !asChild ? (
    <div className={classes} {...props}>
      {children}
    </div>
  ) : (
    cloneElement(children, { className: classes, ...props })
  )
}

export default Space
