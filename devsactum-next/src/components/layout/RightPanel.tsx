"use client"
import React from "react"

const TRENDS = [
  { cat:"Diseño · Popular", name:"#sistemaDiseño",  count:"84 posts"       },
  { cat:"Dev · Activo",     name:"#typescript",     count:"230 posts"      },
  { cat:"Evento · Hoy",     name:"Sprint Review",   count:"18 asistentes"  },
]

const ONLINE = [
  { name:"Juan Pérez",   role:"Developer", status:"online",  init:"JP", bg:"#3b82f6"                                  },
  { name:"María García", role:"Designer",  status:"away",    init:"MG", bg:"linear-gradient(135deg,#8b5cf6,#c49aff)"  },
  { name:"Carlos López", role:"PM",        status:"offline", init:"CL", bg:"#ec4899"                                  },
]

const STATUS_DOT: Record<string, string> = { online:"#3ba55d", away:"#f59e0b", offline:"#6b7280" }

export function RightPanel() {
  return (
    <aside aria-label="Panel de tendencias" className="w-[260px] min-w-[260px] h-full overflow-y-auto bg-bg-surface border-l border-border shrink-0 flex flex-col">

      {/* Tendencias */}
      <div className="px-5 pt-5 pb-0">
        <p className="text-[9px] font-extrabold uppercase tracking-[1.8px] text-text-secondary opacity-55 mb-3">Tendencias</p>
        {TRENDS.map((t, i) => (
          <div key={t.name} className={`py-3 ${i < TRENDS.length - 1 ? "border-b border-border" : ""} cursor-pointer`}>
            <p className="text-[9px] font-bold uppercase tracking-[1px] text-text-secondary opacity-50 m-0 mb-0.5">{t.cat}</p>
            <p className="text-[13px] font-bold text-text-h m-0 mb-0.5">{t.name}</p>
            <p className="text-[11px] text-text-secondary m-0">{t.count}</p>
          </div>
        ))}
      </div>

      <div className="h-px bg-border mx-5 my-4" />

      {/* En línea */}
      <div className="px-5 pb-5">
        <p className="text-[9px] font-extrabold uppercase tracking-[1.8px] text-text-secondary opacity-55 mb-3">En línea</p>
        {ONLINE.map(m => (
          <div key={m.name} className="flex items-center gap-2.5 py-2 border-b border-border">
            <div className="relative shrink-0">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
                style={{ background: m.bg }}
              >
                {m.init}
              </div>
              <div
                className="absolute bottom-0 right-0 w-[9px] h-[9px] rounded-full border-2 border-bg-surface"
                style={{ background: STATUS_DOT[m.status] }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-text-h m-0 leading-[1.3]">{m.name}</p>
              <p className="text-[10px] text-text-secondary m-0">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
