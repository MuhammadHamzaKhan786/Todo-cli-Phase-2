# Frontend Application - Task Management

This is a Next.js frontend application for the secure task management system. It provides a responsive user interface that integrates with the authenticated backend API.

## Features

- User authentication (sign-up and sign-in)
- Protected routes for authenticated users
- Task management (create, read, update, delete)
- Task completion toggling
- JWT token management
- Responsive design for desktop and mobile

## Tech Stack

- Next.js 16+ with App Router
- React 18
- TypeScript
- Tailwind CSS for styling
- Better Auth for authentication
- AXIOS for API requests

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create environment variables file `.env.local`:
```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:8000
```

3. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages and layouts
│   ├── layout.tsx       # Root layout with AuthProvider
│   ├── page.tsx         # Home page
│   ├── signin/          # Sign-in page
│   ├── signup/          # Sign-up page
│   └── dashboard/       # Protected dashboard page
├── components/          # Reusable UI components
├── contexts/            # React context providers
│   └── auth-context.tsx # Authentication state management
├── lib/                 # Utility functions and API client
│   └── api.ts           # Centralized API client
└── types/               # Type definitions
```

## Authentication Flow

1. Users visit the home page which redirects to sign-in if not authenticated
2. Users can sign up or sign in using email and password
3. JWT token is stored in localStorage after successful authentication
4. All protected routes check for valid authentication
5. API requests include the JWT token in the Authorization header
6. Users can log out to clear authentication state

## API Integration

The application uses a centralized API client that:
- Attaches JWT tokens to all authenticated requests
- Handles authentication errors by redirecting to sign-in
- Provides consistent error handling
- Manages loading states for API operations