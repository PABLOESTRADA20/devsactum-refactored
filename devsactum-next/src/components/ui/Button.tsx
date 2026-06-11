"use client"
import React from "react"
import { cn } from "@/src/lib/utils"

type Variant = "primary" | "secondary" | "ghost" | "danger" | "outline"
type Size    = "xs" | "sm" | "md" | "lg"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
  icon?: React.ReactNode
  iconRight?: React.ReactNode
  fullWidth?: boolean
}

const V: Record<Variant, string> = {
  primary:   "bg-accent text-[#1a0033] hover:opacity-85 border-accent",
  secondary: "bg-bg-hover text-text-h hover:bg-border border-border",
  ghost:     "bg-transparent text-text-secondary hover:bg-bg-hover hover:text-text-h border-transparent",
  danger:    "bg-danger-bg text-danger hover:bg-danger-hover border-danger-border",
  outline:   "bg-transparent text-accent hover:bg-accent-bg border-accent-border",
}

const S: Record<Size, string> = {
  xs: "h-6  px-2.5 text-xs    gap-1   rounded-md",
  sm: "h-8  px-3.5 text-sm    gap-1.5 rounded-md",
  md: "h-9  px-4   text-sm    gap-2   rounded-md",
  lg: "h-11 px-5   text-base  gap-2.5 rounded-lg",
}

export function Button({
  variant = "primary", size = "md", loading = false,
  icon, iconRight, fullWidth = false,
  children, className, disabled, ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center font-bold border cursor-pointer select-none",
        "transition-colors duration-150 active:scale-[0.97]",
        "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
        V[variant], S[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {loading
        ? <span className="w-3.5 h-3.5 rounded-full border-2 border-current border-t-transparent animate-spin" />
        : <>{icon && <span className="shrink-0">{icon}</span>}{children}{iconRight && <span className="shrink-0">{iconRight}</span>}</>
      }
    </button>
  )
}
