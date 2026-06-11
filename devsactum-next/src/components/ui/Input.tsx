"use client"
import React, { forwardRef } from "react"
import { cn } from "@/src/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, leftIcon, rightIcon, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-xs font-extrabold uppercase tracking-[1.5px] text-text-secondary">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              "w-full h-10 bg-bg border rounded-md text-sm text-text-h",
              "outline-none transition-colors duration-150",
              "placeholder:text-text-secondary placeholder:opacity-60",
              "focus:border-accent-border focus:shadow-[0_0_0_3px_rgba(196,154,255,0.08)]",
              error ? "border-danger-border" : "border-border",
              leftIcon  ? "pl-9"   : "px-3.5",
              rightIcon ? "pr-9"   : "pr-3.5",
              className
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p className="text-xs text-danger">{error}</p>}
        {hint && !error && <p className="text-xs text-text-secondary opacity-70">{hint}</p>}
      </div>
    )
  }
)
Input.displayName = "Input"
