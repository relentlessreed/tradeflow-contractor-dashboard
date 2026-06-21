import { notFound } from "next/navigation"

import { dataProvider } from "@/lib/data-provider"
import { formatCurrency, formatDate } from "@/lib/utils"
import { StatusBadge } from "@/components/status-badge"
import { ToastActionButton } from "@/components/toast-action-button"

export default async function LeadDetailPage(props: {
  params: Promise<{ id: string }>
}) {
  const { id } = await props.params
  const lead = await dataProvider.getLead(id)

  if (!lead) {
    notFound()
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
      <section className="rounded-[2rem] bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          Lead detail
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">
          {lead.customerName}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <p className="text-sm text-slate-600">{lead.projectType}</p>
          <StatusBadge status={lead.stage} />
          <ToastActionButton
            label="Update lead"
            title="Lead updated"
            description={`${lead.customerName} has been updated in TradeFlow Pro.`}
            variant="outline"
            className="rounded-full"
          />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["Stage", lead.stage],
            ["Status", lead.status],
            ["Estimated value", formatCurrency(lead.estimatedValue)],
            ["Budget", formatCurrency(lead.budget)],
            ["Assigned to", lead.assignedTo],
            ["Timeline", lead.timeline],
            ["Source", lead.source],
            ["Created", formatDate(lead.createdAt)],
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
          <h2 className="text-xl font-semibold text-slate-950">Contact</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p>{lead.phone}</p>
            <p>{lead.email}</p>
            <p>{lead.address}</p>
          </div>
        </div>
        <div className="rounded-[2rem] bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
          <h2 className="text-xl font-semibold text-slate-950">Next action</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">{lead.nextAction}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.14em] text-slate-400">
            Last contacted {formatDate(lead.lastContacted)}
          </p>
        </div>
        <div className="rounded-[2rem] bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
          <h2 className="text-xl font-semibold text-slate-950">Notes</h2>
          <div className="mt-4 space-y-3">
            {lead.notes.map((note) => (
              <p
                key={note}
                className="rounded-[1.25rem] bg-slate-50 p-4 text-sm leading-7 text-slate-600"
              >
                {note}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
