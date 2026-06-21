import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const statusClasses: Record<string, string> = {
  won: "border-emerald-200 bg-emerald-50 text-emerald-700",
  paid: "border-emerald-200 bg-emerald-50 text-emerald-700",
  completed: "border-emerald-200 bg-emerald-50 text-emerald-700",
  "estimate sent": "border-blue-200 bg-blue-50 text-blue-700",
  sent: "border-blue-200 bg-blue-50 text-blue-700",
  "in progress": "border-blue-200 bg-blue-50 text-blue-700",
  "awaiting deposit": "border-amber-200 bg-amber-50 text-amber-700",
  "permit pending": "border-amber-200 bg-amber-50 text-amber-700",
  pending: "border-amber-200 bg-amber-50 text-amber-700",
  overdue: "border-rose-200 bg-rose-50 text-rose-700",
  lost: "border-rose-200 bg-rose-50 text-rose-700",
  draft: "border-slate-200 bg-slate-100 text-slate-700",
  "new inquiry": "border-slate-200 bg-slate-100 text-slate-700",
  "change order": "border-violet-200 bg-violet-50 text-violet-700",
}

export function StatusBadge({
  status,
  className,
}: {
  status: string
  className?: string
}) {
  const key = status.toLowerCase()

  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em]",
        statusClasses[key] ?? "border-slate-200 bg-slate-100 text-slate-700",
        className
      )}
    >
      {status}
    </Badge>
  )
}
