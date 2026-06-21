import { dataProvider } from "@/lib/data-provider"
import { formatCurrency, formatDate } from "@/lib/utils"
import { StatusBadge } from "@/components/status-badge"
import { EmptyState } from "@/components/empty-state"
import { ReceiptText } from "lucide-react"
import { ToastActionButton } from "@/components/toast-action-button"

export default async function InvoicesPage() {
  const { invoices } = await dataProvider.getDashboardData()

  if (invoices.length === 0) {
    return (
      <EmptyState
        icon={ReceiptText}
        title="No invoices available"
        description="Create your first invoice to start tracking collections and aging."
        actionLabel="Back to dashboard"
        actionHref="/dashboard"
      />
    )
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          Invoices
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">
          Billing and status
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Track sent, draft, paid, and overdue contractor invoices alongside
          current collection risk.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {invoices.map((invoice) => (
          <article
            key={invoice.id}
            className="rounded-[2rem] bg-white p-5 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-semibold text-slate-900">
                {invoice.clientName}
              </span>
              <StatusBadge status={invoice.status} />
            </div>
            <p className="mt-5 text-3xl font-semibold text-slate-950">
              {formatCurrency(invoice.amount)}
            </p>
            <p className="mt-2 text-sm text-slate-600">{invoice.description}</p>
            <div className="mt-5 space-y-2 text-sm text-slate-500">
              <p>Issued {formatDate(invoice.issuedAt)}</p>
              <p>Due {formatDate(invoice.dueAt)}</p>
            </div>
            <div className="mt-5">
              <ToastActionButton
                label="Send invoice"
                title="Invoice sent"
                description={`${invoice.clientName} was notified from TradeFlow Pro.`}
                variant="outline"
                className="h-10 w-full rounded-2xl"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
