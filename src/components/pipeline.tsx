"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts"

import type { Job, PipelinePoint, RevenuePoint } from "@/lib/types"
import { formatCurrency } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const statusColors = ["#1d4ed8", "#f59e0b", "#0f172a", "#10b981", "#8b5cf6"]

type ChartValue = number | string | Array<number | string> | undefined

function getNumericValue(value: ChartValue) {
  if (typeof value === "number") {
    return value
  }

  if (Array.isArray(value)) {
    const first = value[0]
    return typeof first === "number" ? first : Number(first)
  }

  return typeof value === "string" ? Number(value) : Number.NaN
}

function formatCurrencyTooltip(value: ChartValue) {
  const numericValue = getNumericValue(value)
  return Number.isFinite(numericValue) ? formatCurrency(numericValue) : "-"
}

function formatPercentTooltip(value: ChartValue) {
  const numericValue = getNumericValue(value)
  return Number.isFinite(numericValue) ? `${numericValue}%` : "-"
}

function formatJobsTooltip(value: ChartValue) {
  const numericValue = getNumericValue(value)
  return Number.isFinite(numericValue) ? `${numericValue} jobs` : "-"
}

export function Pipeline({
  pipeline,
  revenue,
  jobs,
}: {
  pipeline: PipelinePoint[]
  revenue: RevenuePoint[]
  jobs: Job[]
}) {
  const conversionData = pipeline.map((stage, index) => ({
    stage: stage.stage.replace("scheduled", "sched."),
    rate: Math.max(18, 100 - index * 16),
  }))

  const jobsByStatus = Array.from(
    jobs.reduce((map, job) => {
      map.set(job.status, (map.get(job.status) ?? 0) + 1)
      return map
    }, new Map<string, number>())
  ).map(([name, value]) => ({ name, value }))

  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <Card className="border border-slate-200/80 bg-white/96 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
        <CardHeader>
          <CardTitle className="text-slate-950">Revenue trend</CardTitle>
          <p className="text-sm text-slate-500">
            Billed vs collected for the last 6 months.
          </p>
        </CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenue}>
              <CartesianGrid stroke="#e2e8f0" strokeDasharray="4 4" />
              <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
              <YAxis
                stroke="#64748b"
                fontSize={12}
                tickFormatter={(value) => `$${Math.round(value / 1000)}k`}
              />
              <Tooltip
                formatter={formatCurrencyTooltip}
                contentStyle={{ borderRadius: 16, border: "1px solid #e2e8f0" }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#1d4ed8"
                fill="rgba(29,78,216,0.18)"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="collected"
                stroke="#f59e0b"
                strokeWidth={3}
                dot={{ r: 4, fill: "#f59e0b" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="border border-slate-200/80 bg-white/96 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
        <CardHeader>
          <CardTitle className="text-slate-950">Lead conversion</CardTitle>
          <p className="text-sm text-slate-500">
            Estimated stage-to-close conversion through the funnel.
          </p>
        </CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={conversionData}>
              <CartesianGrid stroke="#e2e8f0" strokeDasharray="4 4" />
              <XAxis dataKey="stage" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} domain={[0, 100]} />
              <Tooltip
                formatter={formatPercentTooltip}
                contentStyle={{ borderRadius: 16, border: "1px solid #e2e8f0" }}
              />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="#0f172a"
                strokeWidth={3}
                dot={{ r: 4, fill: "#0f172a" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="border border-slate-200/80 bg-white/96 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
        <CardHeader>
          <CardTitle className="text-slate-950">Jobs by status</CardTitle>
          <p className="text-sm text-slate-500">
            Active contractor work mix across current production stages.
          </p>
        </CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={jobsByStatus}
                dataKey="value"
                nameKey="name"
                innerRadius={55}
                outerRadius={88}
                paddingAngle={4}
              >
                {jobsByStatus.map((entry, index) => (
                  <Cell key={entry.name} fill={statusColors[index % statusColors.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={formatJobsTooltip}
                contentStyle={{ borderRadius: 16, border: "1px solid #e2e8f0" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="border border-slate-200/80 bg-white/96 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
        <CardHeader>
          <CardTitle className="text-slate-950">Monthly collections</CardTitle>
          <p className="text-sm text-slate-500">
            Cash received from completed and active project billing.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenue}>
                <CartesianGrid stroke="#e2e8f0" strokeDasharray="4 4" />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip
                  formatter={formatCurrencyTooltip}
                  contentStyle={{ borderRadius: 16, border: "1px solid #e2e8f0" }}
                />
                <Bar dataKey="collected" fill="#f59e0b" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {revenue.map((month) => (
              <div key={month.month} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-900">{month.month}</p>
                  <p className="text-sm text-slate-500">Collected this month</p>
                </div>
                <p className="font-semibold text-slate-900">
                  {formatCurrency(month.collected)}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
