import { dataProvider } from "@/lib/data-provider"
import { formatCurrency } from "@/lib/utils"
import { ActivityFeed } from "@/components/activity-feed"
import { DashboardCard } from "@/components/dashboard-card"
import { Pipeline } from "@/components/pipeline"
import { StatusBadge } from "@/components/status-badge"
import { FileText, FolderPlus, Receipt, Wrench } from "lucide-react"
import Link from "next/link"

export default async function DashboardPage() {
  const data = await dataProvider.getDashboardData()
  const recentWins = [
    { label: "Kitchen Remodel", value: 62400 },
    { label: "Roof Replacement", value: 21400 },
    { label: "Deck Rebuild", value: 30150 },
  ]

  return (
    <div className="space-y-6">
      <section className="grid gap-6 rounded-[2rem] bg-[linear-gradient(135deg,#0f172a_0%,#1e3a8a_50%,#f59e0b_135%)] p-8 text-white shadow-[0_30px_90px_-50px_rgba(15,23,42,0.8)] xl:grid-cols-[1fr_320px]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-100/80">
            Overview
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            TradeFlow Contractor Operations
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-200">
            Monitor roofing, HVAC, remodeling, deposits, permits, and billing
            activity from a single commercial-grade contractor workspace.
          </p>
        </div>
        <div className="grid gap-3 rounded-[1.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-200">Today&apos;s blockers</p>
              <p className="text-xs uppercase tracking-[0.14em] text-slate-300/80">
                Priority queue
              </p>
            </div>
            <StatusBadge
              status="Permit pending"
              className="border-white/10 bg-white/10 text-amber-100"
            />
          </div>
          <p className="text-sm leading-6 text-slate-100/90">
            3 jobs need deposits or permit approvals before crews can be fully
            released to production.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data.metrics.map((metric) => (
          <DashboardCard key={metric.label} metric={metric} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Revenue summary
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                TradeFlow Pro financial snapshot
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Realistic contractor SaaS summary for current month performance.
              </p>
            </div>
            <StatusBadge status="Paid" />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {[
              ["Revenue this month", "$84,200"],
              ["Collected", "$51,300"],
              ["Outstanding", "$42,850"],
              ["Average job value", "$18,400"],
              ["Win rate", "38%"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[1.5rem] bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {label}
                </p>
                <p className="mt-3 text-2xl font-semibold text-slate-950">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Operations pulse
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">
            What needs attention
          </h2>
          <div className="mt-6 space-y-4">
            {[
              [
                "Awaiting deposit",
                "2 signed proposals need deposit collection before scheduling.",
              ],
              [
                "Permit pending",
                "Mechanical and zoning approvals are holding up production starts.",
              ],
              ["Overdue", "1 deposit invoice remains outstanding past the due date."],
            ].map(([status, copy]) => (
              <div key={status} className="rounded-[1.5rem] bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-slate-950">{status}</p>
                  <StatusBadge status={status} />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pipeline pipeline={data.pipeline} revenue={data.revenue} jobs={data.jobs} />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-950">
                Field production board
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Active jobs requiring attention this week.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {data.jobs.map((job) => (
              <article
                key={job.id}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <StatusBadge status={job.status} />
                  <span className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    {job.service}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">
                  {job.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{job.description}</p>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="text-slate-500">Progress</span>
                  <span className="font-medium text-slate-950">{job.progress}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-200">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-amber-500"
                    style={{ width: `${job.progress}%` }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
        <ActivityFeed items={data.activity} />
      </div>

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Quick actions
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">
            Move work forward
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                href: "/dashboard/leads",
                label: "New Lead",
                copy: "Create and qualify a new opportunity.",
                icon: FolderPlus,
              },
              {
                href: "/dashboard/estimates/new",
                label: "New Estimate",
                copy: "Draft a proposal and deposit terms.",
                icon: FileText,
              },
              {
                href: "/dashboard/invoices",
                label: "Create Invoice",
                copy: "Send progress or final billing.",
                icon: Receipt,
              },
              {
                href: "/dashboard/jobs",
                label: "Schedule Job",
                copy: "Place production work on the board.",
                icon: Wrench,
              },
            ].map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-950">{action.label}</p>
                  <action.icon className="size-4 text-blue-600" />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-500">{action.copy}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Recent wins
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                Closed revenue momentum
              </h2>
            </div>
            <StatusBadge status="Won" />
          </div>
          <div className="mt-6 space-y-4">
            {recentWins.map((job) => (
              <div
                key={job.label}
                className="flex items-center justify-between rounded-[1.5rem] bg-slate-50 p-4"
              >
                <div>
                  <p className="font-semibold text-slate-950">{job.label}</p>
                  <p className="text-sm text-slate-500">Closed revenue</p>
                </div>
                <p className="text-lg font-semibold text-slate-950">
                  {formatCurrency(job.value)}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-500">
            Kitchen Remodel - $62,400, Roof Replacement - $21,400, Deck Rebuild - $30,150.
          </p>
        </div>
      </section>
    </div>
  )
}
