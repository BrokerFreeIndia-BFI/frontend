# BFI Frontend — Architecture Overview

> **Monorepo powered by [Turborepo](https://turbo.build/) · pnpm 11 · Node 22**

---

## Quick Start

```bash
# Install dependencies (from root)
pnpm install

# Start the web/landing app only (recommended during dev)
pnpm dev:web         # → http://localhost:3000

# Start everything in the monorepo
pnpm dev

# Type-check all packages
pnpm check-types

# Lint all packages
pnpm lint

# Build for production
pnpm build

# Nuke all node_modules + build outputs
pnpm clean
```

---

## Directory Structure

```
frontend/
├── apps/
│   ├── web/                   # React web application (Vite + React 18)
│   └── app/                   # React Native app (placeholder — not yet scaffolded)
│
├── packages/
│   ├── api/
│   │   ├── client/            # @bfi/api          — Axios HTTP client factory
│   │   ├── services/          # @bfi/api-services  — Typed service wrappers per domain
│   │   ├── query-hooks/       # @bfi/api-query-hooks — TanStack Query hooks
│   │   ├── mocks/             # @bfi/api-mocks     — MSW mock handlers (dev/test)
│   │   └── types/             # @bfi/api-types (inferred) — API-level TypeScript types
│   │
│   ├── shared/
│   │   ├── ui/                # @bfi/shared-ui     — Platform-agnostic UI components (Web + RN)
│   │   ├── hooks/             # @bfi/shared-hooks  — Platform-agnostic React hooks
│   │   ├── utils/             # @bfi/shared-utils  — Pure utility functions
│   │   ├── config/            # @bfi/shared-config — Shared runtime config (env vars etc.)
│   │   └── types/             # @bfi/types         — Global TypeScript types/interfaces
│   │
│   ├── web/
│   │   └── ui/                # @bfi/web-ui        — Web-only UI components (DOM-specific)
│   │
│   ├── eslint-config/         # @repo/eslint-config      — Shared ESLint rules
│   └── typescript-config/     # @repo/typescript-config  — Shared tsconfig presets
│
├── turbo.json                 # Turborepo task pipeline
├── pnpm-workspace.yaml        # pnpm workspace declaration
├── tsconfig.base.json         # Base TypeScript config with path aliases
├── .npmrc                     # pnpm settings
└── .nvmrc                     # Node version pin (22.13.0)
```

---

## Package-by-Package Breakdown

### 🖥️ `apps/web` — The Web Application
- **Stack**: React 18, Vite 6, React Router v6, Tailwind CSS, Framer Motion
- **Runs on**: `http://localhost:3000`
- **Entry**: `src/main.tsx` → `src/app.tsx`
- **Routing**: `src/app.tsx` (BrowserRouter + Routes)
- **Pages**: `src/pages/home.tsx` (currently the only page)
- **Components**: `src/components/` (currently empty, ready to fill)
- **Styles**: `src/styles/` + Tailwind CSS

### 📱 `apps/app` — React Native App *(placeholder)*
- **Status**: Not yet scaffolded. `.gitkeep` only.
- **Future**: Will share `@bfi/shared-*` packages with the web app.

---

### API Layer (`packages/api/*`)

| Package | Name | Purpose |
|---|---|---|
| `api/client` | `@bfi/api` | Axios instance factory. Configure base URL, interceptors, auth headers here. |
| `api/services` | `@bfi/api-services` | Domain-specific typed service functions (e.g. `authService.login()`). Calls the client. |
| `api/query-hooks` | `@bfi/api-query-hooks` | TanStack Query (`useQuery`, `useMutation`) hooks that wrap services. |
| `api/mocks` | `@bfi/api-mocks` | MSW (Mock Service Worker) handlers for local dev / unit tests without a live backend. |
| `api/types` | `@bfi/api-types` | Shared TypeScript types specific to API request/response shapes. |

**Data flow**:
```
Component → useXxxQuery (query-hooks) → XxxService (services) → apiClient (client) → Backend
```

---

### Shared Layer (`packages/shared/*`)

| Package | Name | Purpose |
|---|---|---|
| `shared/ui` | `@bfi/shared-ui` | **Platform-agnostic** components. Must work on both Web and React Native (no DOM APIs). |
| `shared/hooks` | `@bfi/shared-hooks` | **Platform-agnostic** React hooks (e.g. `useDebounce`, `useLocalStorage`). |
| `shared/utils` | `@bfi/shared-utils` | Pure functions with zero dependencies (formatters, validators, helpers). |
| `shared/config` | `@bfi/shared-config` | Runtime config (env var accessors, feature flags, constants). |
| `shared/types` | `@bfi/types` | Global TypeScript types used across the whole monorepo. |

---

### Web Layer (`packages/web/*`)

| Package | Name | Purpose |
|---|---|---|
| `web/ui` | `@bfi/web-ui` | **Web-only** UI components (can use DOM APIs, CSS, etc.). Not for React Native. |

---

### Config Packages

| Package | Name | Purpose |
|---|---|---|
| `packages/eslint-config` | `@repo/eslint-config` | Shared ESLint rule presets (`base.js`, `vite.js`, `react-internal.js`, `next.js`) |
| `packages/typescript-config` | `@repo/typescript-config` | Shared `tsconfig` presets (`base.json`, `vite.json`, `react-library.json`, `nextjs.json`) |

---

## Build Pipeline (Turborepo)

Turbo runs tasks in dependency order:

```
build       → depends on ^build (builds dependencies first)
lint        → depends on ^lint
check-types → depends on ^check-types
dev         → persistent, no cache (live dev servers)
clean       → no cache
```

---

## Things You Probably Still Need 🔧

### 💡 Nice to Have

| What | Why |
|---|---|
| **Storybook** | For visually developing and documenting `@bfi/shared-ui` and `@bfi/web-ui` components in isolation. |
| **Husky + lint-staged** | Enforce linting/type-checking on commit before pushing bad code. |
| **`apps/web` — SEO/meta tags** | `index.html` likely has generic placeholder title/meta. Set up proper meta for each page. |

---

## Path Aliases (tsconfig)

Defined in `tsconfig.base.json`, available across all packages:

```
@bfi/api            → packages/api/client/src
@bfi/api-services   → packages/api/services/src
@bfi/api-query-hooks→ packages/api/query-hooks/src
@bfi/api-mocks      → packages/api/mocks/src
@bfi/shared-ui      → packages/shared/ui/src
@bfi/shared-hooks   → packages/shared/hooks/src
@bfi/shared-utils   → packages/shared/utils/src
@bfi/shared-config  → packages/shared/config/src
@bfi/types          → packages/shared/types/src
@bfi/web-ui         → packages/web/ui/src
```
