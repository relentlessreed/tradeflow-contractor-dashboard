import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  ClipboardList,
  FileText,
  Hammer,
  Star,
  type LucideIcon,
  Users,
  Wrench,
} from "lucide-react"
import Link from "next/link"

const featureCards: Array<{
  title: string
  copy: string
  icon: LucideIcon
}> = [
  {
    title: "Lead Pipeline",
    copy: "Track every inquiry from first call through estimate sent and awaiting deposit.",
    icon: ClipboardList,
  },
  {
    title: "Estimate Builder",
    copy: "Create polished proposals with scope, pricing, and deposit terms in minutes.",
    icon: FileText,
  },
  {
    title: "Production Scheduling",
    copy: "Coordinate jobs, permits, crews, and active field progress from one board.",
    icon: Hammer,
  },
  {
    title: "Invoice Tracking",
    copy: "See sent, paid, draft, and overdue invoices without chasing spreadsheets.",
    icon: BadgeDollarSign,
  },
  {
    title: "Crew Management",
    copy: "Know which crews are booked, what is blocked, and what ships next.",
    icon: Users,
  },
  {
    title: "Customer Follow-Up",
    copy: "Keep callbacks, reminders, and estimate nudges organized across the pipeline.",
    icon: CheckCircle2,
  },
]

const socialProof = [
  { value: "1,200+", label: "projects tracked" },
  { value: "$42M", label: "annual volume" },
  { value: "98%", label: "customer satisfaction" },
  { value: "4.9", label: "average rating" },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.24),_transparent_18%),radial-gradient(circle_at_left,_rgba(59,130,246,0.24),_transparent_30%),linear-gradient(180deg,#08101f_0%,#111827_44%,#0f172a_100%)] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.75rem] border border-white/10 bg-white/6 p-8 shadow-[0_24px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur lg:p-12">
        <header className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-200/85">
              TradeFlow Pro
            </p>
            <p className="mt-2 max-w-md text-sm text-slate-300">
              Premium contractor operations software for leads, jobs, billing, and crews.
            </p>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#preview" className="transition hover:text-white">Preview</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </header>

        <section className="grid gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
              Built for modern contractor teams
            </span>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Run your entire contracting business from one dashboard.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Manage leads, jobs, estimates, invoices, crews, and project status
              without spreadsheets.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-slate-100"
              >
                Start Demo
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/8"
              >
                View Dashboard
              </Link>
            </div>
          </div>

          <div id="preview" className="rounded-[2.25rem] border border-white/10 bg-slate-950/60 p-5 shadow-[0_20px_70px_-45px_rgba(0,0,0,0.95)]">
            <div className="rounded-[1.9rem] border border-white/10 bg-white p-5 text-slate-950">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Dashboard Preview
                  </p>
                  <h2 className="mt-2 text-lg font-semibold">
                    TradeFlow Contractor Operations
                  </h2>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Demo workspace
                </div>
              </div>
              <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-4">
                  <div className="rounded-[1.5rem] bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-900">Revenue this month</p>
                      <BadgeDollarSign className="size-4 text-amber-600" />
                    </div>
                    <p className="mt-3 text-3xl font-semibold">$84,200</p>
                    <p className="mt-2 text-sm text-slate-500">Collected $51,300 with $42,850 outstanding.</p>
                  </div>
                  <div className="rounded-[1.5rem] bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-900">Lead pipeline</p>
                      <ClipboardList className="size-4 text-blue-600" />
                    </div>
                    <p className="mt-3 text-3xl font-semibold">$184K</p>
                    <p className="mt-2 text-sm text-slate-500">24 opportunities across estimate and deposit stages.</p>
                  </div>
                </div>
                <div className="rounded-[1.5rem] bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-900">Production board</p>
                    <Wrench className="size-4 text-blue-600" />
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      ["Roof Replacement", "In Progress", "68%"],
                      ["HVAC Install", "Permit Pending", "46%"],
                      ["Kitchen Remodel", "Change Order", "52%"],
                    ].map(([job, status, progress]) => (
                      <div key={job} className="rounded-[1.2rem] bg-white p-3 shadow-sm">
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-medium text-slate-900">{job}</p>
                          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
                            {status}
                          </p>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-slate-200">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-amber-500"
                            style={{ width: progress }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {socialProof.map((item) => (
            <div
              key={item.label}
              className="rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-[0_20px_70px_-45px_rgba(0,0,0,0.95)]"
            >
              <div className="flex items-center gap-2 text-amber-300">
                <Star className="size-4 fill-current" />
                <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                  TradeFlow Pro
                </span>
              </div>
              <p className="mt-4 text-4xl font-semibold text-white">{item.value}</p>
              <p className="mt-2 text-sm text-slate-300">{item.label}</p>
            </div>
          ))}
        </section>

        <section id="features" className="mt-14">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
              Features
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Commercial-grade contractor workflow tools
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-[0_20px_70px_-45px_rgba(0,0,0,0.95)] backdrop-blur"
                >
                  <Icon className="size-5 text-amber-300" />
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.copy}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mt-14 rounded-[2.5rem] border border-blue-300/15 bg-[linear-gradient(135deg,rgba(30,41,59,0.92),rgba(15,23,42,0.96))] p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                Ready to streamline operations?
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Replace fragmented tools with one premium contractor workspace.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                Use TradeFlow Pro to manage pipeline, production, collections, and client communication from one dashboard.
              </p>
            </div>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-slate-100"
            >
              Start Demo
            </Link>
          </div>
        </section>

        <footer
          id="contact"
          className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>TradeFlow Pro</p>
          <div className="flex flex-wrap gap-4">
            <span>Product</span>
            <span>Features</span>
            <span>Pricing</span>
            <span>Contact</span>
          </div>
        </footer>
      </div>
    </main>
  )
}
