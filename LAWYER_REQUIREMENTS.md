# Lawyer Management Application Requirements

**Frontend**: Next.js
**Backend**: Supabase
**Authentication**: Clerk
**Interface Language**: Arabic (RTL)

## Objective
Develop a modern, secure, Arabic-language application to help law firms manage their day-to-day operations including clients, legal cases, court sessions, documents, appointments, and financials, with full access for users with the "lawyer" role.

## Core Features
1. **User Authentication (Clerk)**
   - Register / Login with Clerk using email & password
   - Arabic interface (fully localized Clerk UI)
   - Password recovery in Arabic
   - Role-based access
     - Only one role: lawyer with full admin access
   - Role stored in Clerk metadata (`publicMetadata.role = 'lawyer'`)
   - Optional: Super admin flag for multi-lawyer environments

2. **Client Management**
   - Create, edit, delete client profiles
   - Fields: full name, ID (CIN), phone, email, address, notes
   - Link client to multiple legal cases
   - View full client history (appointments, cases, documents)

3. **Case Management**
   - Create, edit, archive legal cases
   - Link multiple clients to one case
   - Assign internal case number
   - Track status (Open, Closed, On Hold) and case type
   - Upload documents per case
   - View linked court sessions and documents

4. **Court Session Management**
   - Schedule court sessions
   - Fields: date, time, court name, judge, location, notes
   - Link session to a specific case
   - Automatic notifications/reminders

5. **Appointment Management**
   - Create appointments (internal or with client)
   - Date, time, purpose, location
   - Link to a client and/or case
   - View calendar of upcoming appointments

6. **Document Management**
   - Upload, view, download, and delete documents
   - Supported formats: PDF, Word, images
   - Organize documents by client or case
   - Store securely in Supabase Storage
   - View permissions restricted to lawyers

7. **Financial Management**
   - Add legal fees per case
   - Track client payments (paid/unpaid)
   - Generate Arabic invoices (PDF)
   - Filter by case, client, or date
   - Revenue reporting

8. **Dashboard & Reporting**
   - Key performance indicators (KPIs):
     - Total clients
     - Active cases
     - Upcoming court sessions
     - Monthly revenue
   - Visual reports (charts/tables in Arabic)
   - Exportable reports (PDF, Excel)

9. **Global Search & Filtering**
   - Search bar for clients, cases, sessions, etc.
   - Filters by case status, type, client, session dates, payment status

10. **Arabic Interface (RTL)**
    - All screens, forms, alerts, and buttons in Arabic
    - Right-to-left layout
    - Arabic font support
    - Arabic date/time formatting
    - Arabic PDFs and invoices

## User Roles
- **Lawyer**: Full access (admin-level). All users are trusted lawyers with full privileges.

## Tech Stack
| Layer     | Technology              |
|-----------|-------------------------|
| Frontend  | Next.js + Tailwind CSS |
| Auth      | Clerk                   |
| Backend   | Supabase (PostgreSQL + Storage) |
| PDF Generation | react-pdf / pdf-lib |
| Notifications | Email (Arabic template) |
| Language  | Arabic (RTL)            |

## User Flow Summary
1. Login via Clerk (Arabic).
2. Redirect to Arabic RTL dashboard.
3. Access sidebar: Clients, Cases, Sessions, Appointments, Financials.
4. Perform CRUD operations based on full-access role.
5. Receive notifications and access reports.
6. Logout.
