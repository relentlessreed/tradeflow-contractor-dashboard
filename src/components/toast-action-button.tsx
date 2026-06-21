"use client"

import type { LucideIcon } from "lucide-react"

import { useToast } from "@/components/toast-provider"
import { Button } from "@/components/ui/button"

export function ToastActionButton({
  label,
  title,
  description,
  variant = "default",
  size = "default",
  icon: Icon,
  className,
}: {
  label: string
  title: string
  description?: string
  variant?: "default" | "outline" | "secondary" | "ghost"
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg"
  icon?: LucideIcon
  className?: string
}) {
  const { showToast } = useToast()

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={className}
      onClick={() => showToast({ title, description })}
    >
      {Icon ? <Icon className="size-4" /> : null}
      {label}
    </Button>
  )
}
