"use client"
import React, { createContext, useContext, useState, useCallback } from "react"
import { CheckCircle, XCircle, AlertCircle, Info, X } from "lucide-react"

type ToastType = "success" | "error" | "warning" | "info"
interface ToastItem { id: string; type: ToastType; title: string; message?: string }
interface ToastCtx  { success(t: string, m?: string): void; error(t: string, m?: string): void; warning(t: string, m?: string): void; info(t: string, m?: string): void }

const Ctx = createContext<ToastCtx>({ success:()=>{}, error:()=>{}, warning:()=>{}, info:()=>{} })

const ICONS = { success:CheckCircle, error:XCircle, warning:AlertCircle, info:Info }

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const remove = useCallback((id: string) => setToasts(p => p.filter(t => t.id !== id)), [])

  const add = useCallback((type: ToastType, title: string, message?: string) => {
    const id = Math.random().toString(36).slice(2)
    setToasts(p => [...p.slice(-3), { id, type, title, message }])
    setTimeout(() => remove(id), 4000)
  }, [remove])

  const ctx: ToastCtx = {
    success: (t,m) => add("success",t,m),
    error:   (t,m) => add("error",t,m),
    warning: (t,m) => add("warning",t,m),
    info:    (t,m) => add("info",t,m),
  }

  return (
    <Ctx.Provider value={ctx}>
      {children}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex flex-col gap-2 pointer-events-none items-center">
        {toasts.map(t => {
          const Icon = ICONS[t.type]
          const borderMap = {
            success: "border-[rgba(59,165,93,0.3)]",
            error: "border-[rgba(239,68,68,0.3)]",
            warning: "border-[rgba(245,158,11,0.3)]",
            info: "border-accent-border",
          }
          const iconColorMap = {
            success: "text-online",
            error: "text-[#ef4444]",
            warning: "text-away",
            info: "text-accent",
          }
          return (
            <div key={t.id} className={cn("pointer-events-auto animate-fade-in flex items-start gap-3 px-4 py-3 rounded-xl border min-w-[280px] max-w-[380px] shadow-2xl glass", borderMap[t.type])}>
              <Icon size={15} strokeWidth={2} className={cn("shrink-0 mt-0.5", iconColorMap[t.type])} />
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-bold text-text-h">{t.title}</div>
                {t.message && <div className="text-[11px] text-text-secondary mt-0.5">{t.message}</div>}
              </div>
              <button onClick={() => remove(t.id)} className="bg-transparent border-none cursor-pointer text-text-secondary p-0.5 shrink-0 flex">
                <X size={12} strokeWidth={2} />
              </button>
            </div>
          )
        })}
      </div>
    </Ctx.Provider>
  )
}

export function useToast() { return useContext(Ctx) }

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}
