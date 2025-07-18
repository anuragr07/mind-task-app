This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Folder structure for the app
mind-task-frontend/
│
├── app/                            # App routes directory (Next.js 13+)
│   ├── (auth)/                     # Route group for authentication
│   │   ├── login/                  # /login page
│   │   └── signup/                 # /signup page
│   ├── dashboard/                 # Protected routes after login
│   │   └── page.tsx
│   ├── page.tsx                   # Root landing page
│   └── layout.tsx                 # Root layout
│
├── components/                    # Reusable UI components
│   ├── ui/                        # ShadCN components
│   ├── layout/                    # Header, Footer, Sidebar etc.
│   └── common/                    # Buttons, Form fields, Modal wrappers
│
├── features/                      # Feature-based modules (domain-specific)
│   ├── tasks/                     # Task-related UI + logic
│   │   ├── components/            # Feature-specific components
│   │   ├── services/              # API functions related to tasks
│   │   └── hooks.ts               # React hooks for tasks
│   ├── auth/
│   └── labels/
│
├── lib/                           # Utility libraries & helpers
│   ├── api.ts                     # API base client (fetch wrapper / axios)
│   ├── auth.ts                    # Token handling (access, refresh)
│   ├── validators.ts              # Input validation utilities
│   └── constants.ts               # Global constants
│
├── services/                      # Shared service functions (API, Auth, etc.)
│   ├── authService.ts
│   ├── taskService.ts
│   └── labelService.ts
│
├── hooks/                         # Global custom React hooks
│   ├── useAuth.ts
│   └── useTheme.ts
│
├── types/                         # Global TypeScript types/interfaces
│   ├── task.d.ts
│   ├── user.d.ts
│   └── index.d.ts
│
├── styles/                        # Global and modular styles
│   ├── globals.css
│   └── tailwind.css
│
├── middleware.ts                  # Middleware (auth protection, etc.)
├── tailwind.config.ts             # Tailwind config
├── postcss.config.js              # PostCSS config
├── tsconfig.json                  # TypeScript config
├── .env.local                     # Environment variables
└── next.config.js                 # Next.js config
