"use client"
import React from "react"

interface EmptyStateProps {
  icon: React.ReactNode
  title: string
  description: string
  action?: { label: string; onClick: () => void }
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center animate-fade-in">
      <div className="w-16 h-16 rounded-2xl bg-bg-surface border border-border flex items-center justify-center mb-5 opacity-60 animate-float">
        {icon}
      </div>
      <p className="text-lg font-bold text-text-h m-0 mb-2">{title}</p>
      <p className="text-sm text-text-secondary m-0 max-w-[260px] leading-[1.6]">{description}</p>
      {action && (
        <button onClick={action.onClick} className="mt-6 bg-accent text-[#1a0033] border-none rounded-lg px-5 py-2.5 text-sm font-bold cursor-pointer hover:opacity-85 transition-opacity">
          {action.label}
        </button>
      )}
    </div>
  )
}
