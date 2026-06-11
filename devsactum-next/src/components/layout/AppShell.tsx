"use client"
import React, { useState } from "react"
import { NavContext } from "@/src/store/nav"
import { Navbar }    from "./Navbar"
import { Topbar }    from "./Topbar"
import { RightPanel } from "./RightPanel"
import { PageRouter } from "./PageRouter"
import { ToastProvider } from "@/src/components/ui"
import type { Page }  from "@/src/types"

const PAGES_WITH_PANEL: Page[] = ["Feed"]

export function AppShell() {
  const [activePage, setActivePage] = useState<Page>("Feed")
  const showPanel = PAGES_WITH_PANEL.includes(activePage)

  return (
    <NavContext.Provider value={{ activePage, setActivePage }}>
      <ToastProvider>
        {/* Root: full viewport, no overflow */}
        <div className="flex h-dvh w-full overflow-hidden bg-bg">
          <Navbar />
          <div className="flex flex-col flex-1 min-w-0 h-full overflow-hidden">
            <Topbar />
            <div className="flex flex-1 overflow-hidden">
              <main className="flex-1 overflow-y-auto overflow-x-hidden animate-fade-in">
                <PageRouter />
              </main>
              {showPanel && <RightPanel />}
            </div>
          </div>
        </div>
      </ToastProvider>
    </NavContext.Provider>
  )
}
