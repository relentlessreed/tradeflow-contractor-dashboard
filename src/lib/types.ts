export type LeadStage =
  | "New inquiry"
  | "Site visit scheduled"
  | "Estimate sent"
  | "Awaiting deposit"
  | "Won"

export type LeadStatus = "Hot" | "Warm" | "Cold"

export type JobStatus =
  | "In progress"
  | "Awaiting deposit"
  | "Permit pending"
  | "Change order"
  | "Completed"

export type InvoiceStatus = "Paid" | "Sent" | "Overdue" | "Draft"

export type ActivityType =
  | "lead"
  | "job"
  | "estimate"
  | "invoice"
  | "system"

export interface Lead {
  id: string
  customerName: string
  company?: string
  projectType: string
  stage: LeadStage
  status: LeadStatus
  source: string
  phone: string
  email: string
  address: string
  budget: number
  estimatedValue: number
  timeline: string
  assignedTo: string
  lastContacted: string
  nextAction: string
  createdAt: string
  notes: string[]
}

export interface JobMilestone {
  label: string
  completed: boolean
}

export interface Job {
  id: string
  leadId?: string
  title: string
  clientName: string
  service: string
  status: JobStatus
  address: string
  startDate: string
  targetDate: string
  contractValue: number
  depositStatus: string
  invoiceStatus: InvoiceStatus
  progress: number
  priority: "Low" | "Medium" | "High"
  permit: string
  projectManager: string
  crew: string[]
  description: string
  milestones: JobMilestone[]
}

export interface Invoice {
  id: string
  jobId: string
  clientName: string
  amount: number
  status: InvoiceStatus
  issuedAt: string
  dueAt: string
  description: string
}

export interface ActivityItem {
  id: string
  type: ActivityType
  title: string
  description: string
  actor: string
  timestamp: string
}

export interface Metric {
  label: string
  value: string
  context: string
  delta: string
  trend: "up" | "down"
}

export interface RevenuePoint {
  month: string
  revenue: number
  collected: number
}

export interface PipelinePoint {
  stage: LeadStage
  count: number
  value: number
}

export interface TeamMember {
  id: string
  name: string
  role: string
  initials: string
}

export interface CompanySettings {
  companyName: string
  ownerName: string
  officeEmail: string
  officePhone: string
  license: string
  defaultTerms: string
  serviceArea: string[]
}

export interface TradeFlowData {
  metrics: Metric[]
  revenue: RevenuePoint[]
  pipeline: PipelinePoint[]
  leads: Lead[]
  jobs: Job[]
  invoices: Invoice[]
  activity: ActivityItem[]
  team: TeamMember[]
  settings: CompanySettings
}
