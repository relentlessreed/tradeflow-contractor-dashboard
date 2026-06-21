import { CardGridSkeleton, MetricSkeletons } from "@/components/loading-state"

export default function DashboardLoading() {
  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] bg-slate-900/90 p-8">
        <div className="h-4 w-28 animate-pulse rounded-full bg-white/20" />
        <div className="mt-4 h-10 w-80 animate-pulse rounded-2xl bg-white/20" />
        <div className="mt-3 h-4 w-full max-w-2xl animate-pulse rounded-full bg-white/15" />
      </div>
      <MetricSkeletons />
      <CardGridSkeleton cards={4} />
    </div>
  )
}
