import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { demoCredentials } from "@/lib/data"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.2),_transparent_26%),linear-gradient(180deg,#0b1120_0%,#111827_48%,#0f172a_100%)] px-4 py-6 text-white">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-6xl gap-6 rounded-[2.5rem] border border-white/10 bg-white/6 p-6 shadow-[0_24px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
        <section className="flex flex-col justify-between rounded-[2rem] bg-[linear-gradient(180deg,rgba(30,41,59,0.92),rgba(15,23,42,0.92))] p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200/85">
              TradeFlow
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight">
              Sign in to the contractor command center.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">
              Review live pipeline, project status, estimates, invoices, permit
              blockers, and awaiting deposit items from a single workspace.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/8 p-5">
            <p className="text-sm font-medium text-white">Demo credentials</p>
            <p className="mt-3 text-sm text-slate-300">
              Email: {demoCredentials.email}
            </p>
            <p className="text-sm text-slate-300">
              Password: {demoCredentials.password}
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 text-slate-950 shadow-[0_18px_60px_-36px_rgba(15,23,42,0.85)]">
          <div className="max-w-md">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Demo access
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Welcome back</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              This demo uses a mock data provider today, with a Supabase-ready
              abstraction for later.
            </p>
          </div>
          <form className="mt-8 space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </span>
              <input
                defaultValue={demoCredentials.email}
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-blue-500"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </span>
              <input
                type="password"
                defaultValue={demoCredentials.password}
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-blue-500"
              />
            </label>
            <Link
              href="/dashboard"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 font-medium text-white transition hover:bg-slate-800"
            >
              Continue to dashboard
              <ArrowRight className="size-4" />
            </Link>
          </form>
        </section>
      </div>
    </main>
  )
}
