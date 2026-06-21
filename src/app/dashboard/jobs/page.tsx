import { dataProvider } from "@/lib/data-provider"
import { formatCurrency, formatDate } from "@/lib/utils"
import { DataTable } from "@/components/data-table"
import { StatusBadge } from "@/components/status-badge"

export default async function JobsPage() {
  const { jobs } = await dataProvider.getDashboardData()

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          Jobs
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">
          Production schedule
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Follow project managers, permit status, deposit blockers, and current
          crew progress across active contractor jobs.
        </p>
      </section>

      <DataTable
        data={jobs}
        rowHref={(job) => `/dashboard/jobs/${job.id}`}
        emptyState={{
          title: "No jobs scheduled",
          description:
            "Production jobs will appear here once leads are won and scheduled.",
          actionLabel: "Back to dashboard",
          actionHref: "/dashboard",
        }}
        columns={[
          {
            key: "job",
            header: "Job",
            render: (job) => (
              <div>
                <p className="font-medium text-slate-950">{job.title}</p>
                <p className="text-sm text-slate-500">{job.clientName}</p>
              </div>
            ),
          },
          {
            key: "status",
            header: "Status",
            render: (job) => (
              <div className="space-y-2">
                <StatusBadge status={job.status} />
                <p className="text-sm text-slate-500">{job.depositStatus}</p>
              </div>
            ),
          },
          {
            key: "dates",
            header: "Dates",
            render: (job) => (
              <div>
                <p className="font-medium text-slate-900">
                  Start {formatDate(job.startDate)}
                </p>
                <p className="text-sm text-slate-500">
                  Target {formatDate(job.targetDate)}
                </p>
              </div>
            ),
          },
          {
            key: "value",
            header: "Contract",
            render: (job) => (
              <div>
                <p className="font-medium text-slate-900">
                  {formatCurrency(job.contractValue)}
                </p>
                <div className="mt-2">
                  <StatusBadge status={job.invoiceStatus} />
                </div>
              </div>
            ),
          },
          {
            key: "pm",
            header: "Project manager",
            render: (job) => (
              <div>
                <p className="font-medium text-slate-900">{job.projectManager}</p>
                <p className="text-sm text-slate-500">{job.crew.join(", ")}</p>
              </div>
            ),
          },
        ]}
      />
    </div>
  )
}
