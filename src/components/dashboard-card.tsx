import { ArrowDownRight, ArrowUpRight } from "lucide-react"

import type { Metric } from "@/lib/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardCard({ metric }: { metric: Metric }) {
  const TrendIcon = metric.trend === "up" ? ArrowUpRight : ArrowDownRight

  return (
    <Card className="border border-slate-200/80 bg-white/96 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
      <CardHeader className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          {metric.label}
        </p>
        <CardTitle className="text-3xl font-semibold text-slate-950">
          {metric.value}
        </CardTitle>
        <p className="text-sm leading-6 text-slate-500">{metric.context}</p>
      </CardHeader>
      <CardContent className="flex items-center justify-between gap-3 text-sm text-slate-600">
        <p className="font-medium text-slate-500">Business trend</p>
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
            metric.trend === "up"
              ? "bg-blue-50 text-blue-700"
              : "bg-emerald-50 text-emerald-700"
          }`}
        >
          <TrendIcon className="size-3.5" />
          {metric.delta}
        </span>
      </CardContent>
    </Card>
  )
}
