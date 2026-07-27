import { cn } from "@/lib/utils"
import { forwardRef } from "react"

const Grid = forwardRef(
  (
    { children, className, cols, gap, responsive, align, justify, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid",
          align != null && `items-${align}`,
          justify != null && `justify-${justify}`,
          cols != null && `grid-cols-${cols}`,
          gap != null && `gap-${gap}`,
          responsive?.sm?.cols && `sm:grid-cols-${responsive.sm.cols}`,
          responsive?.sm?.gap && `sm:gap-${responsive.sm.gap}`,
          responsive?.md?.cols && `md:grid-cols-${responsive.md.cols}`,
          responsive?.md?.gap && `md:gap-${responsive.md.gap}`,
          responsive?.lg?.cols && `lg:grid-cols-${responsive.lg.cols}`,
          responsive?.lg?.gap && `lg:gap-${responsive.lg.gap}`,
          responsive?.xl?.cols && `xl:grid-cols-${responsive.xl.cols}`,
          responsive?.xl?.gap && `xl:gap-${responsive.xl.gap}`,
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Grid.displayName = "Grid"

export default Grid
