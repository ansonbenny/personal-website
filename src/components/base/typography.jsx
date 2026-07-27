import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Typography = ({ variant, children, className, ...props }) => {
  switch (variant) {
    case "h1":
      return (
        <h1
          className={cn(
            "text-center text-4xl font-extrabold tracking-tight text-balance",
            className
          )}
          {...props}
        >
          {children}
        </h1>
      )
    case "h2":
      return (
        <h2
          className={cn("text-3xl font-bold tracking-tight", className)}
          {...props}
        >
          {children}
        </h2>
      )

    case "h3":
      return (
        <h3
          className={cn("text-2xl font-semibold tracking-tight", className)}
          {...props}
        >
          {children}
        </h3>
      )
    case "h4":
      return (
        <h4
          className={cn("text-xl font-semibold tracking-tight", className)}
          {...props}
        >
          {children}
        </h4>
      )
    case "h5":
      return (
        <h5
          className={cn("text-lg font-semibold tracking-tight", className)}
          {...props}
        >
          {children}
        </h5>
      )
    case "h6":
      return (
        <h6
          className={cn("text-base leading-7 font-medium", className)}
          {...props}
        >
          {children}
        </h6>
      )
    case "sm":
      return (
        <span
          className={cn("text-sm leading-normal font-normal", className)}
          {...props}
        >
          {children}
        </span>
      )
    case "xs":
      return (
        <span
          className={cn("text-xs leading-relaxed font-normal", className)}
          {...props}
        >
          {children}
        </span>
      )
    case "label":
      return (
        <Label className={className} {...props}>
          {children}
        </Label>
      )
    default:
      return (
        <p
          className={cn("text-sm leading-normal font-normal", className)}
          {...props}
        >
          {children}
        </p>
      )
  }
}

export default Typography
