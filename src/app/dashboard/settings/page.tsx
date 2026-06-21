import { dataProvider } from "@/lib/data-provider"
import { ToastActionButton } from "@/components/toast-action-button"

export default async function SettingsPage() {
  const { settings, team } = await dataProvider.getDashboardData()

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
      <section className="rounded-[2rem] bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          Settings
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">
          TradeFlow Pro company profile
        </h1>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["Company", settings.companyName],
            ["Owner", settings.ownerName],
            ["Office email", settings.officeEmail],
            ["Office phone", settings.officePhone],
            ["License", settings.license],
            ["Service area", settings.serviceArea.join(", ")],
          ].map(([label, value]) => (
            <div key={label} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                {label}
              </p>
              <p className="mt-2 font-medium text-slate-950">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Default payment terms
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {settings.defaultTerms}
          </p>
          <div className="mt-5">
            <ToastActionButton
              label="Save settings"
              title="Settings saved"
              description="TradeFlow Pro workspace settings have been updated."
              className="h-11 rounded-2xl px-5"
            />
          </div>
        </div>
      </section>

      <aside className="rounded-[2rem] bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)]">
        <h2 className="text-xl font-semibold text-slate-950">Team</h2>
        <div className="mt-4 space-y-3">
          {team.map((member) => (
            <div
              key={member.id}
              className="flex items-center gap-4 rounded-[1.25rem] bg-slate-50 p-4"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                {member.initials}
              </div>
              <div>
                <p className="font-medium text-slate-950">{member.name}</p>
                <p className="text-sm text-slate-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  )
}
