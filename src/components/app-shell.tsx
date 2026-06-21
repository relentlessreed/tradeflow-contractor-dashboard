"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import { Building2, ClipboardList, FileText, LayoutDashboard, Menu, Settings2, X, Wrench } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { DashboardHeader } from "@/components/dashboard-header"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/leads", label: "Leads", icon: ClipboardList },
  { href: "/dashboard/jobs", label: "Jobs", icon: Wrench },
  { href: "/dashboard/estimates/new", label: "Estimates", icon: Building2 },
  { href: "/dashboard/invoices", label: "Invoices", icon: FileText },
  { href: "/dashboard/settings", label: "Settings", icon: Settings2 },
]

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(29,78,216,0.18),_transparent_30%),linear-gradient(180deg,#0f172a_0%,#111827_38%,#0b1120_100%)] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[1800px] px-4 py-4 lg:px-6">
        <div className="mb-4 flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/6 px-4 py-3 backdrop-blur lg:hidden">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200/80">
              TradeFlow
            </p>
            <p className="text-sm text-slate-200">TradeFlow Contractor Operations</p>
          </div>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8"
            onClick={() => setMobileNavOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {mobileNavOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {mobileNavOpen ? (
          <button
            type="button"
            className="fixed inset-0 z-30 bg-slate-950/50 lg:hidden"
            onClick={() => setMobileNavOpen(false)}
            aria-label="Close navigation"
          />
        ) : null}
        <div className="grid min-h-[calc(100vh-2rem)] gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
        <aside
          className={cn(
            "rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.7)] backdrop-blur lg:block",
            mobileNavOpen
              ? "fixed inset-y-4 left-4 z-40 block w-[min(88vw,320px)] overflow-y-auto"
              : "hidden",
            "lg:static lg:z-auto lg:block lg:w-auto"
          )}
        >
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-200/80">
              TradeFlow
            </p>
            <h1 className="mt-3 text-2xl font-semibold">TradeFlow Pro</h1>
            <p className="mt-2 text-sm text-slate-300">
              Contractor operations, billing, and client follow-up in one place.
            </p>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/dashboard" && pathname.startsWith(item.href))
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition",
                    active
                      ? "bg-white text-slate-950 shadow-lg"
                      : "text-slate-200 hover:bg-white/8 hover:text-white"
                  )}
                >
                  <Icon className="size-4" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <div className="mt-8 rounded-3xl border border-amber-300/20 bg-amber-300/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
              Demo login
            </p>
            <p className="mt-2 text-sm text-amber-50">demo@tradeflow.app</p>
            <p className="text-sm text-amber-100/90">password123</p>
          </div>
        </aside>
        <main className="min-w-0 rounded-[2rem] border border-white/10 bg-slate-100/95 p-4 text-slate-950 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.7)] lg:p-6">
          <div className="space-y-6">
            <DashboardHeader />
            {children}
          </div>
        </main>
        </div>
      </div>
    </div>
  )
}
