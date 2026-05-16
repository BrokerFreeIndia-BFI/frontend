# BFI Frontend Monorepo

Turborepo + pnpm monorepo for the BFI frontend platform.

## Structure

```
frontend/
├── apps/
│   └── web/                    # React 18 + Vite landing page
│
├── packages/
│   ├── shared/
│   │   ├── ui/                 # Shared components (Web + RN compatible)
│   │   ├── utils/              # Pure utility functions
│   │   ├── config/             # Business config, feature flags, Zod schemas
│   │   ├── hooks/              # Shared React hooks
│   │   └── types/              # Global TS types & interfaces
│   │
│   ├── api/
│   │   ├── client/             # Axios base client, interceptors
│   │   ├── services/           # Typed microservice endpoint wrappers
│   │   ├── query-hooks/        # TanStack Query hooks
│   │   ├── mocks/              # MSW handlers for dev/test
│   │   └── types/              # Request/response types
│   │
│   ├── web/
│   │   └── ui/                 # Web-only components
│   │
│   ├── eslint-config/          # Shared ESLint configs
│   └── typescript-config/      # Shared TS configs
│
├── turbo.json
├── pnpm-workspace.yaml
├── tsconfig.base.json          # Path aliases
├── .env.example
└── package.json
```

## Getting Started

```sh
pnpm install
pnpm dev:web     # Run the landing page
```

## Path Aliases

All cross-package imports use `@bfi/` scoped aliases:

| Alias                  | Package                  |
| ---------------------- | ------------------------ |
| `@bfi/shared-ui`       | `packages/shared/ui`     |
| `@bfi/shared-utils`    | `packages/shared/utils`  |
| `@bfi/shared-config`   | `packages/shared/config` |
| `@bfi/shared-hooks`    | `packages/shared/hooks`  |
| `@bfi/types`           | `packages/shared/types`  |
| `@bfi/api`             | `packages/api/client`    |
| `@bfi/api-services`    | `packages/api/services`  |
| `@bfi/api-query-hooks` | `packages/api/query-hooks` |
| `@bfi/api-types`       | `packages/api/types`     |
| `@bfi/web-ui`          | `packages/web/ui`        |

## Tech Stack (Web)

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- React Hook Form + Zod
