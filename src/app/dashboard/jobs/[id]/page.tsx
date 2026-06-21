import { notFound } from "next/navigation"

import { dataProvider } from "@/lib/data-provider"
import { formatCurrency, formatDate } from "@/lib/utils"
import { StatusBadge } from "@/components/status-badge"

export default async function JobDetailPage(props: {
  params: Promise<{ id: string }>
}) {
  const { id } = await props.params
  const job = await dataProvider.getJob(id)

  if (!job) {
    notFound()
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-[2rem] bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          Job detail
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">{job.title}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <StatusBadge status={job.status} />
          <StatusBadge status={job.invoiceStatus} />
        </div>
        <p className="mt-4 text-sm text-slate-600">{job.description}</p>
        <div className="mt-6 h-2 rounded-full bg-slate-200">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-amber-500"
            style={{ width: `${job.progress}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-slate-500">{job.progress}% complete</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["Client", job.clientName],
            ["Service", job.service],
            ["Status", job.status],
            ["Permit", job.permit],
            ["Contract", formatCurrency(job.contractValue)],
            ["Invoice", job.invoiceStatus],
            ["Start", formatDate(job.startDate)],
            ["Target", formatDate(job.targetDate)],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                {label}
              </p>
              <p className="mt-2 font-medium text-slate-950">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="rounded-[2rem] bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
          <h2 className="text-xl font-semibold text-slate-950">Crew</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {job.crew.map((member) => (
              <span
                key={member}
                className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700"
              >
                {member}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
          <h2 className="text-xl font-semibold text-slate-950">Milestones</h2>
          <div className="mt-4 space-y-3">
            {job.milestones.map((milestone) => (
              <div
                key={milestone.label}
                className="flex items-center justify-between rounded-[1.25rem] bg-slate-50 p-4"
              >
                <p className="font-medium text-slate-900">{milestone.label}</p>
                <StatusBadge
                  status={milestone.completed ? "Completed" : "Pending"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
