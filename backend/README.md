# Backend

## Setup

Prerequisites:

- Node.js `20.x` (recommended) or `>=18.12`
- `pnpm`

Install dependencies:

```bash
cd /path/to/pokedex-interview-external/backend
pnpm install
```

Run in development mode:

```bash
pnpm run dev
```

## File Guide

`src/index.ts`

Entry-point for the Express server.

`src/data/users.ts`

"In-memory" database with list of recognized users and passwords.
