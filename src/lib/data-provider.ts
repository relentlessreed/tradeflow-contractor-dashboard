import { tradeFlowData } from "@/lib/data"

export const dataProvider = {
  async getDashboardData() {
    return tradeFlowData
  },
  async getLead(id: string) {
    return tradeFlowData.leads.find((lead) => lead.id === id) ?? null
  },
  async getJob(id: string) {
    return tradeFlowData.jobs.find((job) => job.id === id) ?? null
  },
}
