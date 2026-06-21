import { BellRing, ClipboardList, FileText, Hammer, Users } from "lucide-react"

import type { ActivityItem } from "@/lib/types"
import { formatRelativeDateTime } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const icons = {
  lead: Users,
  job: Hammer,
  estimate: ClipboardList,
  invoice: FileText,
  system: BellRing,
} as const

export function ActivityFeed({ items }: { items: ActivityItem[] }) {
  return (
    <Card className="border border-slate-200/80 bg-white/96 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
      <CardHeader>
        <CardTitle className="text-slate-950">Recent activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item) => {
          const Icon = icons[item.type]
          return (
            <div key={item.id} className="flex gap-3">
              <div className="mt-1 rounded-full bg-slate-100 p-2 text-slate-700">
                <Icon className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                  <span className="shrink-0 text-xs text-slate-500">
                    {formatRelativeDateTime(item.timestamp)}
                  </span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">
                  {item.actor}
                </p>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
