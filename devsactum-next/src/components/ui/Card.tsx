"use client"
import React from "react"
import { cn } from "@/src/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  accent?: boolean
  padding?: "none" | "sm" | "md" | "lg"
}

const PAD = { none:"", sm:"p-4", md:"p-5", lg:"p-7" }

export function Card({ hover, accent, padding = "md", className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-bg-surface border border-border rounded-xl",
        hover && "transition-colors duration-200 cursor-pointer hover:border-accent-border",
        accent && "border-accent-border bg-accent-bg",
        PAD[padding], className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
