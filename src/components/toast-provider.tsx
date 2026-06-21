"use client"

import type { ReactNode } from "react"
import { createContext, useCallback, useContext, useMemo, useState } from "react"
import { CheckCircle2, X } from "lucide-react"

type Toast = {
  id: number
  title: string
  description?: string
}

type ToastContextValue = {
  showToast: (toast: Omit<Toast, "id">) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = useCallback((toast: Omit<Toast, "id">) => {
    const id = Date.now() + Math.random()
    setToasts((current) => [...current, { id, ...toast }])

    window.setTimeout(() => {
      setToasts((current) => current.filter((item) => item.id !== id))
    }, 2600)
  }, [])

  const dismissToast = useCallback((id: number) => {
    setToasts((current) => current.filter((item) => item.id !== id))
  }, [])

  const value = useMemo(() => ({ showToast }), [showToast])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed right-4 bottom-4 z-50 flex w-[min(92vw,380px)] flex-col gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto rounded-[1.5rem] border border-slate-200 bg-white p-4 text-slate-950 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.45)]"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-emerald-50 p-2 text-emerald-600">
                <CheckCircle2 className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">{toast.title}</p>
                {toast.description ? (
                  <p className="mt-1 text-sm text-slate-500">{toast.description}</p>
                ) : null}
              </div>
              <button
                type="button"
                className="rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                onClick={() => dismissToast(toast.id)}
                aria-label="Dismiss toast"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error("useToast must be used within ToastProvider")
  }

  return context
}
