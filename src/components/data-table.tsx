import type { ReactNode } from "react"
import { ChevronRight, SearchX } from "lucide-react"
import Link from "next/link"

import { EmptyState } from "@/components/empty-state"
import { cn } from "@/lib/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Column<T> {
  key: string
  header: string
  className?: string
  render: (item: T) => ReactNode
}

export function DataTable<T extends { id: string }>({
  columns,
  data,
  rowHref,
}: {
  columns: Column<T>[]
  data: T[]
  rowHref?: (item: T) => string
  emptyState?: {
    title: string
    description: string
    actionLabel?: string
    actionHref?: string
  }
}) {
  if (data.length === 0) {
    return (
      <EmptyState
        icon={SearchX}
        title={emptyState?.title ?? "No results found"}
        description={
          emptyState?.description ??
          "There is no data to display in this table yet."
        }
        actionLabel={emptyState?.actionLabel}
        actionHref={emptyState?.actionHref}
      />
    )
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
      <Table>
        <TableHeader className="bg-slate-50/90">
          <TableRow className="hover:bg-transparent">
            {columns.map((column) => (
              <TableHead
                key={column.key}
                className={cn("px-4 text-slate-500", column.className)}
              >
                {column.header}
              </TableHead>
            ))}
            {rowHref ? <TableHead className="w-12 px-4" /> : null}
          </TableRow>
        </TableHeader>
        <TableBody className="[&_td]:whitespace-normal [&_th]:whitespace-normal">
          {data.map((item) => (
            <TableRow key={item.id} className="border-slate-100">
              {columns.map((column) => (
                <TableCell key={column.key} className="px-4 py-4 align-top">
                  {column.render(item)}
                </TableCell>
              ))}
              {rowHref ? (
                <TableCell className="px-4 py-4 text-right">
                  <Link
                    href={rowHref(item)}
                    className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-slate-950"
                  >
                    View
                    <ChevronRight className="size-4" />
                  </Link>
                </TableCell>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
