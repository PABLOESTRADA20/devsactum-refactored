"use client"
import React from "react"
import { cn } from "@/src/lib/utils"

interface ToggleProps {
  enabled: boolean
  onChange: () => void
  size?: "sm" | "md"
}

export function Toggle({ enabled, onChange, size = "md" }: ToggleProps) {
  return (
    <button
      onClick={onChange}
      role="switch"
      aria-checked={enabled}
      className={cn(
        "relative rounded-full border transition-colors duration-200 cursor-pointer shrink-0",
        size === "md" ? "w-10 h-[22px]" : "w-8 h-[18px]",
        enabled ? "bg-accent border-accent" : "bg-bg-hover border-border"
      )}
    >
      <div
        className={cn(
          "absolute bg-white rounded-full transition-transform duration-200",
          size === "md" ? "w-4 h-4 top-[3px]" : "w-3 h-3 top-[2.5px]"
        )}
        style={{
          transform: enabled
            ? `translateX(${size === "md" ? 18 : 14}px)`
            : "translateX(3px)",
        }}
      />
    </button>
  )
}
