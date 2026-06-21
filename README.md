# TradeFlow

TradeFlow is a contractor management SaaS dashboard for tracking leads, jobs, estimates, invoices, project status, and contractor follow-up. It is designed as a polished portfolio demo with a dark navy/charcoal product UI, realistic mock contractor workflows, and a Supabase-compatible data abstraction with a local mock fallback.

## Portfolio description

TradeFlow is a contractor management SaaS dashboard for tracking leads, jobs, estimates, invoices, and project status. Built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, React Hook Form, Zod, and a Supabase-compatible data layer with local mock fallback.

## Features

- Marketing homepage with SaaS-style hero, feature grid, preview area, CTA section, and footer
- Demo login screen with prefilled credentials
- Responsive dashboard shell with mobile navigation and professional top header
- KPI cards with pipeline, operations, and business context
- Revenue summary and contractor operations overview
- Lead pipeline list and lead detail pages
- Job production board, job list, and job detail pages
- Estimate builder using React Hook Form and Zod
- Invoice tracking with clear status badges
- Settings page with company profile and team summary
- Shared mock data layer routed through `src/lib/data-provider.ts`

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Zod
- Recharts
- Local mock data with Supabase-ready abstraction

## Demo credentials

- Email: `demo@tradeflow.app`
- Password: `password123`

## Local setup

```bash
npm install
npm run dev
```

Open:

`http://localhost:3000`

## Screenshot checklist

- `/`
- `/login`
- `/dashboard`
- `/dashboard/leads`
- `/dashboard/jobs`
- `/dashboard/estimates/new`
- `/dashboard/invoices`

Store exported images in `public/screenshots/` using the filenames documented in [public/screenshots/README.md](/mnt/c/Users/Edwar/Desktop/code/tradeflow/public/screenshots/README.md).

## Deployment

This project is ready to deploy on Vercel as a standard Next.js App Router app. After pushing the repository, import it into Vercel and use the default build settings.
