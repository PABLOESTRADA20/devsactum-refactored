"use client"
import React, { useState } from "react"
import { Terminal, Hash, Compass, Users, Bookmark, MessageCircle, User, Settings, Bell, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { useNav } from "@/src/store/nav"
import type { Page } from "@/src/types"

const ICON_MAP: Record<string, React.ElementType> = {
  Hash, Compass, Users, Bookmark, MessageCircle, User, Settings, Bell,
}

const NAV = [
  { label:"Navegación", items:[
    { name:"Feed"    as Page, icon:"Hash",          accent:"text-accent" },
    { name:"Explorar"as Page, icon:"Compass",       accent:"text-tertiary" },
  ]},
  { label:"Comunidad", items:[
    { name:"Comunidades"  as Page, icon:"Users",         badge:3 },
    { name:"Guardados"    as Page, icon:"Bookmark"              },
    { name:"Chat"         as Page, icon:"MessageCircle", badge:5 },
  ]},
  { label:"Cuenta", items:[
    { name:"Perfil"        as Page, icon:"User"               },
    { name:"Notificaciones"as Page, icon:"Bell",    badge:4   },
    { name:"Configuración" as Page, icon:"Settings"           },
  ]},
]

export function Navbar() {
  const { activePage, setActivePage } = useNav()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <nav
      aria-label="Navegación principal"
      className={`flex flex-col h-full shrink-0 overflow-hidden bg-bg-surface border-r border-border transition-[width] duration-250 ease ${collapsed ? "w-16 min-w-[64px]" : "w-[220px] min-w-[220px]"}`}
    >
      {/* Logo */}
      <div className={`flex items-center gap-2.5 px-[14px] py-[18px] border-b border-border ${collapsed ? "justify-center" : ""}`}>
        <div className="w-8 h-8 rounded-lg bg-accent-bg border border-accent-border flex items-center justify-center shrink-0">
          <Terminal size={15} className="text-accent" strokeWidth={2} />
        </div>
        {!collapsed && (
          <span className="text-[15px] font-black text-accent tracking-[-0.3px] whitespace-nowrap">
            Devsanctum
          </span>
        )}
      </div>

      {/* Nav items */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden px-2 py-2.5">
        {NAV.map(section => (
          <div key={section.label}>
            {!collapsed && (
              <div className="text-[9px] font-extrabold uppercase tracking-[1.2px] text-text-secondary opacity-45 px-2 pt-3.5 pb-1 mt-0.5">
                {section.label}
              </div>
            )}
            {collapsed && <div className="h-2" />}
            {section.items.map(({ name, icon, badge, accent }: any) => {
              const Icon = ICON_MAP[icon]
              const isActive = activePage === name
              return (
                <button
                  key={name}
                  onClick={() => setActivePage(name)}
                  title={collapsed ? name : undefined}
                  className={`w-full flex items-center ${collapsed ? "justify-center px-0 py-[9px]" : "justify-start px-2.5 py-2"} gap-2.5 rounded-[8px] border mb-0.5 text-sm font-medium cursor-pointer transition-colors duration-150 ${
                    isActive
                      ? "bg-accent-bg border-accent-border text-accent font-bold"
                      : "border-transparent text-text-secondary hover:bg-accent-bg/50 hover:text-text-h"
                  }`}
                >
                  {Icon && <Icon size={15} strokeWidth={1.8} className="shrink-0 opacity-85" />}
                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left">{name}</span>
                      {badge != null && (
                        <span className="bg-accent text-[#1a0033] text-[10px] font-extrabold px-1.5 rounded-full min-w-[18px] text-center leading-[18px]">
                          {badge}
                        </span>
                      )}
                    </>
                  )}
                </button>
              )
            })}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-2 py-2.5 border-t border-border flex flex-col gap-1.5">
        {!collapsed && (
          <button
            onClick={() => setActivePage("Login" as Page)}
            className="flex items-center justify-center gap-2 bg-accent text-[#1a0033] border-none rounded-lg px-3 py-[9px] text-sm font-extrabold cursor-pointer w-full hover:opacity-85 transition-opacity"
          >
            <Sparkles size={14} strokeWidth={2} /> Iniciar sesión
          </button>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center gap-1.5 bg-transparent border border-border rounded-lg px-3 py-[7px] text-[11px] font-medium text-text-secondary cursor-pointer w-full hover:bg-bg-hover hover:text-text-h transition-colors duration-150"
        >
          {collapsed
            ? <ChevronRight size={14} strokeWidth={2} />
            : <><ChevronLeft size={14} strokeWidth={2} /> <span>Colapsar</span></>
          }
        </button>
      </div>
    </nav>
  )
}
