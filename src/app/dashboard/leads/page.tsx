import Link from "next/link"

import { dataProvider } from "@/lib/data-provider"
import { formatCurrency, formatDate } from "@/lib/utils"
import { DataTable } from "@/components/data-table"
import { StatusBadge } from "@/components/status-badge"

export default async function LeadsPage() {
  const { leads } = await dataProvider.getDashboardData()

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Leads
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950">
              Estimate pipeline
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Track inbound inquiries, walkthrough scheduling, sent proposals,
              and jobs waiting on signature or deposit.
            </p>
          </div>
          <Link
            href="/dashboard/estimates/new"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            New estimate
          </Link>
        </div>
      </section>

      <DataTable
        data={leads}
        rowHref={(lead) => `/dashboard/leads/${lead.id}`}
        emptyState={{
          title: "No leads found",
          description:
            "There are no pipeline opportunities in this workspace yet.",
          actionLabel: "Create estimate",
          actionHref: "/dashboard/estimates/new",
        }}
        columns={[
          {
            key: "customer",
            header: "Customer",
            render: (lead) => (
              <div>
                <p className="font-medium text-slate-950">{lead.customerName}</p>
                <p className="text-sm text-slate-500">{lead.email}</p>
              </div>
            ),
          },
          {
            key: "project",
            header: "Project",
            render: (lead) => (
              <div>
                <p className="font-medium text-slate-900">{lead.projectType}</p>
                <p className="text-sm text-slate-500">{lead.address}</p>
              </div>
            ),
          },
          {
            key: "stage",
            header: "Stage",
            render: (lead) => (
              <div className="space-y-2">
                <StatusBadge status={lead.stage} />
                <p className="text-sm text-slate-500">{lead.status} lead</p>
              </div>
            ),
          },
          {
            key: "value",
            header: "Value",
            render: (lead) => (
              <div>
                <p className="font-medium text-slate-900">
                  {formatCurrency(lead.estimatedValue)}
                </p>
                <p className="text-sm text-slate-500">
                  Budget {formatCurrency(lead.budget)}
                </p>
              </div>
            ),
          },
          {
            key: "followup",
            header: "Follow-up",
            render: (lead) => (
              <div>
                <p className="font-medium text-slate-900">{lead.nextAction}</p>
                <p className="text-sm text-slate-500">
                  Last touched {formatDate(lead.lastContacted)}
                </p>
              </div>
            ),
          },
        ]}
      />
    </div>
  )
}
