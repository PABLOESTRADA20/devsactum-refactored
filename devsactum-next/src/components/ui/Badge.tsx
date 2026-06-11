"use client"
import React from "react"
import { cn } from "@/src/lib/utils"

type Variant = "accent" | "tertiary" | "success" | "warning" | "danger" | "neutral"

interface BadgeProps {
  children: React.ReactNode
  variant?: Variant
  dot?: boolean
  className?: string
}

const V: Record<Variant, string> = {
  accent:   "bg-accent-bg text-accent border-accent-border",
  tertiary: "bg-tertiary-bg text-tertiary border-tertiary-border",
  success:  "bg-success-bg text-success border-success-border",
  warning:  "bg-warning-bg text-warning border-warning-border",
  danger:   "bg-danger-bg text-danger border-danger-border",
  neutral:  "bg-bg-hover text-text-secondary border-border",
}

export function Badge({ children, variant = "accent", dot = false, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full",
        "text-[10px] font-extrabold uppercase tracking-[1px] border",
        V[variant], className
      )}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
      {children}
    </span>
  )
}
