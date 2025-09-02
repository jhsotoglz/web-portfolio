## Overview
**Agropecuaria RG – Web App** is a full-stack platform that unifies a modern **public marketing site** with a secure **private admin dashboard** for internal finance and operations.  
It was designed to strengthen the company’s **brand presence** while also providing practical tools to manage day-to-day business activities.

🔗 [Visit Website](https://agropecuariarg.vercel.app/)

---

## Tech Stack
- **Frontend:** Next.js (App Router), TypeScript, React, Tailwind CSS, shadcn/ui, Framer Motion  
- **Backend:** Supabase (Auth, Database, Storage)  
- **Validation:** Zod  

---

## Features

### 🌐 Public Marketing Site
- Showcases the **family-owned farming business**.  
- Includes a **video hero banner** with high-quality media hosted in the app.  
- Sections for **company history, services, and metrics**.  
- Styled **contact section with Google Maps integration**.  
- Responsive, **mobile-friendly UI** enhanced with **Framer Motion animations**.  

### 🔐 Private Admin Dashboard (Herramientas)
- **Invite-only access** with Supabase authentication and route protection.  
- **Land rent management** with automatic calculation of hectares, annual pricing, and contract durations.  
- **Renter registry** storing INE (ID) numbers, pricing per hectare, and historical records.  
- **Employee tracking and payroll support** with configurable terms.  
- Secure **password reset flow** with localized **Spanish-language forms/messages**.  
- Robust **form validation** powered by **Zod + React Hook Form** for clean and consistent data.  

---

## Architecture & Technical Choices
- Built with **Next.js (App Router)** and **TypeScript** for scalability and type safety.  
- **Supabase** powers the backend for authentication, database, and file storage.  
- **Tailwind CSS + shadcn/ui** deliver a responsive, modern UI with reusable components.  
- **Zod schemas** provide unified client- and server-side validation.  
- **Framer Motion** enhances the marketing site with polished animations.  
- Deployed on **Vercel**, leveraging CI/CD pipelines and a global edge network for fast performance.  

---

## Impact
The Agropecuaria RG Web App provides:  
- A **professional-grade online presence** for customers, enhancing trust and visibility.  
- A **secure internal dashboard** for land, renter, and employee management.  
- Improved **operational efficiency** by centralizing records and automating calculations.  

This dual-purpose approach ensures both **brand visibility** and **streamlined internal operations**, driving growth and sustainability for the business.  
