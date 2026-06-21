"use client"

import { Bell, Search } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

export function DashboardHeader() {
  return (
    <header className="flex flex-col gap-4 rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.45)] sm:flex-row sm:items-center sm:justify-between lg:p-5">
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          Demo workspace
        </p>
        <h1 className="truncate text-lg font-semibold text-slate-950 sm:text-xl">
          TradeFlow Contractor Operations
        </h1>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative min-w-0 flex-1 sm:w-72 lg:w-96">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400" />
          <Input
            aria-label="Search"
            placeholder="Search leads, jobs, invoices..."
            className="h-11 rounded-2xl border-slate-200 bg-slate-50 pl-9"
          />
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-600 transition hover:bg-slate-100"
          aria-label="Notifications"
        >
          <Bell className="size-4" />
        </button>
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
          <Avatar className="size-9">
            <AvatarFallback className="bg-slate-950 font-semibold text-white">
              TF
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-950">
              TradeFlow Pro
            </p>
            <p className="truncate text-xs text-slate-500">Contractor workspace</p>
          </div>
        </div>
      </div>
    </header>
  )
}
