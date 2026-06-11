"use client"
import React, { useState, useRef, useEffect } from "react"
import { Search, Bell, X, Command } from "lucide-react"
import { useNav } from "@/src/store/nav"
import type { Page } from "@/src/types"
import { Avatar } from "@/src/components/ui"
import { ME } from "@/src/lib/mock-data"

const SUGGESTIONS = [
  { label:"Feed principal",       page:"Feed"          as Page },
  { label:"Explorar comunidades", page:"Explorar"      as Page },
  { label:"Chat",                 page:"Chat"          as Page },
  { label:"Configuración",        page:"Configuración" as Page },
]

export function Topbar() {
  const { setActivePage } = useNav()
  const [q, setQ]           = useState("")
  const [open, setOpen]     = useState(false)
  const inputRef            = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); inputRef.current?.focus(); setOpen(true) }
      if (e.key === "Escape") { setOpen(false); setQ("") }
    }
    window.addEventListener("keydown", h)
    return () => window.removeEventListener("keydown", h)
  }, [])

  const results = SUGGESTIONS.filter(s => !q || s.label.toLowerCase().includes(q.toLowerCase()))

  return (
    <header className="h-14 min-h-[56px] flex items-center justify-between px-5 bg-bg-surface/85 backdrop-blur-[12px] border-b border-border shrink-0 z-30 relative">

      {/* Search */}
      <div className="flex-1 max-w-[480px] mx-auto relative">
        <div className={`flex items-center gap-2 border rounded-md px-3 py-[7px] bg-bg transition-[border-color,box-shadow] duration-200 ${open ? "border-accent-border shadow-[0_0_0_3px_rgba(196,154,255,0.08)]" : "border-border"}`}>
          <Search size={13} className="text-text-secondary opacity-60 shrink-0" />
          <input
            ref={inputRef}
            value={q}
            onChange={e => setQ(e.target.value)}
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 150)}
            placeholder="Buscar en Devsanctum..."
            className="bg-transparent border-none outline-none text-sm text-text-h w-full"
          />
          {q
            ? <button onClick={() => setQ("")} className="bg-none border-none cursor-pointer flex text-text-secondary p-0"><X size={12} strokeWidth={2} /></button>
            : <div className="flex items-center gap-0.5 opacity-30 shrink-0">
                <Command size={10} className="text-text-secondary" /><span className="text-[10px] font-mono text-text-secondary">K</span>
              </div>
          }
        </div>

        {/* Dropdown */}
        {open && results.length > 0 && (
          <div className="absolute top-[calc(100%+6px)] left-0 right-0 bg-bg-surface border border-border rounded-xl shadow-2xl overflow-hidden z-100 animate-fade-in">
            <div className="px-3 pt-2 pb-1 text-[9px] font-extrabold uppercase tracking-[1.5px] text-text-secondary opacity-50">
              {q ? "Resultados" : "Sugerencias"}
            </div>
            {results.length === 0 && q && (
              <div className="px-3 py-3 text-sm text-text-secondary text-center">
                Sin resultados para &ldquo;{q}&rdquo;
              </div>
            )}
            {results.map((s, i) => (
              <button key={i} onClick={() => { setActivePage(s.page); setOpen(false); setQ("") }}
                className="w-full flex items-center justify-between px-3 py-2.5 bg-transparent border-none cursor-pointer hover:bg-bg-hover transition-colors"
              >
                <span className="text-sm font-semibold text-text-h">{s.label}</span>
                <span className="text-[10px] text-text-secondary">Página</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Right */}
      <div className="flex items-center gap-1.5">
        <button onClick={() => setActivePage("Notificaciones" as Page)} className="relative w-8 h-8 bg-transparent border-none cursor-pointer flex items-center justify-center rounded-md text-text-secondary hover:bg-bg-hover hover:text-text-h transition-colors">
          <Bell size={15} strokeWidth={1.8} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-tertiary" />
        </button>
        <button onClick={() => setActivePage("Perfil" as Page)} className="bg-transparent border-none cursor-pointer p-0">
          <Avatar initials={ME.initials} color={ME.avatarColor} bg={ME.avatarBg} size="sm" shape="circle" />
        </button>
      </div>
    </header>
  )
}
