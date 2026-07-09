# 🧠 MindForge — Full Stack Agentic App Builder

MindForge is a next-generation, full-stack AI-driven application generator. By leveraging state-of-the-art LLMs and agentic workflows, it converts simple natural language descriptions into fully functional, high-fidelity React web applications in real-time.

---

## 🛠️ Technology Stack

MindForge is built with a modern, high-performance, and secure tech stack:

*   **Frontend & Core:** [Next.js 16 (App Router)](https://nextjs.org/) using Turbopack for ultra-fast compilation.
*   **Agentic Orchestration:** [Cline SDK](https://github.com/cline/sdk) for managing multi-step AI-agent workflows.
*   **Database & Storage:** [Supabase](https://supabase.com/) (PostgreSQL) for user data and workspaces storage.
*   **ORM:** [Prisma ORM](https://www.prisma.io/) with optimized pg-pooling for serverless deployments.
*   **Authentication:** [Clerk Auth](https://clerk.com/) managing user accounts and subscription plans (Free/Pro/Starter).
*   **Security & Rate Limiting:** [Arcjet](https://arcjet.com/) protecting routes with smart rate limits (token buckets), bot detection, and prompt injection filters.
*   **Styling & UI:** Tailwind CSS, [Shadcn UI](https://ui.shadcn.com/) components, and [Motion](https://motion.dev/) for smooth micro-animations.

---

## ✨ Features

*   **Instant AI Code Generation:** Describe your application (e.g., "A weather app with animated icons"), and watch MindForge build it file-by-file in real-time.
*   **Live Preview Sandbox:** Render and interact with the generated React app inside a Sandpack previewer.
*   **Interactive Chat Workspace:** Command the agent to add features, fix bugs, or patch files.
*   **Dynamic Billing & Credits:** Clerk-integrated credit system. Users consume credits per code generation, with tiered plans.
*   **Production-Ready Routing:** Premium dark-themed user layouts with contextual navigation bars.

---

## ⚙️ Getting Started

### 1. Prerequisites
Ensure you have Node.js installed on your machine.

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables Setup
Create a `.env` file in the root directory and configure the following:

```env
# Clerk Authentication Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Database Connection (Supabase)
# Transaction pooler connection string (used by Prisma client at runtime)
DATABASE_URL="postgresql://...pooler.supabase.com:6543/postgres?pgbouncer=true"
# Direct connection string (used for schema migrations and CLI commands)
DIRECT_URL="postgresql://...supabase.com:5432/postgres"

# Arcjet Key (Shield, Bot & Injection detection)
ARCJET_KEY=your_arcjet_key

# Gemini API Key (Core LLM Generation Engine)
GEMINI_API_KEY=your_gemini_api_key

# Supabase Storage Details
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Setup Database Schema
Generate the local Prisma Client and run migrations:
```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Run the Application
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

---

## 🚀 Production Deployment on Vercel

When deploying this project to Vercel, note the following configurations:

1.  **Environment Variables:** Add all environment variables listed in the `.env` section to your **Vercel Settings ➜ Environment Variables**.
2.  **Next.js 16 Router Proxy:** Global routing guards and authentication checks run on the new Next.js `proxy.ts` middleware standard.
3.  **Prisma serverless binary:** The client generates statically utilizing native file-tracing so that the Linux query engine binary (`rhel-openssl-3.0.x`) is bundled correctly within Vercel's serverless functions.
