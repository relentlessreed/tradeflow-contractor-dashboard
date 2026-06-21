import { cn } from "@/lib/utils"

export function Skeleton({
  className,
}: {
  className?: string
}) {
  return <div className={cn("animate-pulse rounded-2xl bg-slate-200/80", className)} />
}

export function MetricSkeletons() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)]"
        >
          <Skeleton className="h-3 w-28" />
          <Skeleton className="mt-4 h-10 w-24" />
          <Skeleton className="mt-3 h-4 w-full" />
          <Skeleton className="mt-6 h-7 w-28" />
        </div>
      ))}
    </div>
  )
}

export function TableSkeleton({
  rows = 5,
}: {
  rows?: number
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)]">
      <div className="grid grid-cols-5 gap-4 border-b border-slate-200 bg-slate-50 px-4 py-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="h-4 w-24" />
        ))}
      </div>
      <div className="space-y-4 p-4">
        {Array.from({ length: rows }).map((_, index) => (
          <div key={index} className="grid grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((__, cellIndex) => (
              <Skeleton key={cellIndex} className="h-12 w-full" />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function CardGridSkeleton({
  cards = 3,
}: {
  cards?: number
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: cards }).map((_, index) => (
        <div
          key={index}
          className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.35)]"
        >
          <Skeleton className="h-4 w-24" />
          <Skeleton className="mt-4 h-8 w-32" />
          <Skeleton className="mt-3 h-4 w-full" />
          <Skeleton className="mt-2 h-4 w-3/4" />
        </div>
      ))}
    </div>
  )
}
