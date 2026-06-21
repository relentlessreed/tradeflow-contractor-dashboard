"use client"

import type { ReactNode } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useToast } from "@/components/toast-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const estimateSchema = z.object({
  customerName: z.string().min(2, "Customer name is required."),
  projectType: z.string().min(2, "Project type is required."),
  address: z.string().min(5, "Project address is required."),
  estimatedValue: z.number().min(1000, "Value must be at least $1,000."),
  depositPercent: z.number().min(10).max(80),
  scope: z.string().min(20, "Add enough scope detail for the crew."),
})

type EstimateFormValues = z.infer<typeof estimateSchema>

export default function NewEstimatePage() {
  const { showToast } = useToast()
  const form = useForm<EstimateFormValues>({
    resolver: zodResolver(estimateSchema),
    defaultValues: {
      customerName: "Jordan Ramirez",
      projectType: "Roof replacement",
      address: "1840 W School St, Chicago, IL",
      estimatedValue: 21400,
      depositPercent: 40,
      scope:
        "Tear off existing roofing, install ice and water shield, synthetic underlayment, architectural shingles, flashing, and ridge vent.",
    },
  })

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
      <section className="rounded-[2rem] bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          New estimate
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">
          Build a TradeFlow Pro proposal
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Use RHF and Zod to stage an estimate while the app runs entirely from
          mock data.
        </p>

        <form
          onSubmit={form.handleSubmit(() =>
            showToast({
              title: "Estimate saved",
              description: "TradeFlow Pro saved your estimate draft.",
            })
          )}
          className="mt-8 grid gap-5"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field
              label="Customer name"
              error={form.formState.errors.customerName?.message}
            >
              <Input {...form.register("customerName")} className="h-11 rounded-2xl" />
            </Field>
            <Field
              label="Project type"
              error={form.formState.errors.projectType?.message}
            >
              <Input {...form.register("projectType")} className="h-11 rounded-2xl" />
            </Field>
          </div>
          <Field
            label="Project address"
            error={form.formState.errors.address?.message}
          >
            <Input {...form.register("address")} className="h-11 rounded-2xl" />
          </Field>
          <div className="grid gap-5 md:grid-cols-2">
            <Field
              label="Estimated value"
              error={form.formState.errors.estimatedValue?.message}
            >
              <Input
                type="number"
                {...form.register("estimatedValue", { valueAsNumber: true })}
                className="h-11 rounded-2xl"
              />
            </Field>
            <Field
              label="Deposit percent"
              error={form.formState.errors.depositPercent?.message}
            >
              <Input
                type="number"
                {...form.register("depositPercent", { valueAsNumber: true })}
                className="h-11 rounded-2xl"
              />
            </Field>
          </div>
          <Field label="Scope of work" error={form.formState.errors.scope?.message}>
            <Textarea {...form.register("scope")} className="min-h-32 rounded-2xl" />
          </Field>
          <div className="flex flex-wrap gap-3">
            <Button type="submit" className="h-11 rounded-2xl px-5">
              Save draft
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-11 rounded-2xl px-5"
              onClick={() =>
                showToast({
                  title: "Estimate sent",
                  description: "The estimate has been shared with the client.",
                })
              }
            >
              Email proposal
            </Button>
          </div>
        </form>
      </section>

      <aside className="rounded-[2rem] bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
        <h2 className="text-xl font-semibold text-slate-950">Suggested scope</h2>
        <div className="mt-4 space-y-3 text-sm text-slate-600">
          <p className="rounded-[1.25rem] bg-slate-50 p-4">
            Roof replacement with upgraded shingles and chimney flashing.
          </p>
          <p className="rounded-[1.25rem] bg-slate-50 p-4">
            Kitchen remodel with permit allowance and appliance rough-in.
          </p>
          <p className="rounded-[1.25rem] bg-slate-50 p-4">
            HVAC install with thermostat commissioning and haul-away.
          </p>
        </div>
      </aside>
    </div>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm text-red-600">{error}</span> : null}
    </label>
  )
}
