# Todo List Web Application

This repository contains a simple web-based Todo list application.

## Running locally

1. Start a lightweight web server from this directory:

   ```bash
   python3 -m http.server 8000
   ```

2. Open `http://localhost:8000/index.html` in your browser.

You can add and remove tasks, and they will be saved in your browser's local storage.

## Additional Documentation

For requirements of the upcoming Lawyer Management Application, see [LAWYER_REQUIREMENTS.md](LAWYER_REQUIREMENTS.md).

## Lawyer Management Application

A new Next.js application is provided in the `lawyer-app` directory. It is a skeleton based on [LAWYER_REQUIREMENTS.md](LAWYER_REQUIREMENTS.md).

### Running locally

1. Install dependencies (requires Node.js):
   ```bash
   cd lawyer-app
   npm install
   ```
2. Set environment variables for Supabase and Clerk in a `.env.local` file:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
   CLERK_PUBLISHABLE_KEY=your-clerk-key
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser to view the Arabic interface.
