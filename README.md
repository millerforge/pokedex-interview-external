# Full-Stack Interview: Pokédex

## Quick Start

This repository uses `pnpm`.

### Prerequisites

- Node.js `20.x` (recommended) or `>=18.12`
- `pnpm` (installed via Corepack)

```bash
# if needed
nvm install 20
nvm use 20

# enable pnpm
corepack enable
corepack prepare pnpm@latest --activate
```

### Install Dependencies

Install dependencies in both projects:

```bash
# from repo root
pnpm install

# install backend dependencies
cd backend
pnpm install
```

### Run The App

Use two terminals.

Terminal 1 (frontend):

```bash
cd /path/to/pokedex-interview-external
pnpm run dev
```

Terminal 2 (backend):

```bash
cd /path/to/pokedex-interview-external/backend
pnpm run dev
```

# Interview Instructions

You are tasked with building a React App that displays pokemon data (A Pokédex) for a logged-in Trainer. Both a backend and frontend are already running. One React component / template with static content has been provided.

## Terminology

_Candidate_

- You -- the person performing this coding challenge

_Trainer_

- The fictional "end user" for whom this feature is built

_Pokédex_

- The frontend list of Pokemon that you are building for this challenge

## Steps

### 1. Pokemon

- Send pokemon list (`src/data/pokemon.ts`) from backend to frontend
- Display Pokemon list in the frontend
- Using the PokeAPI, fetch additional Pokemon Data and display

| Field       | Source                                                   |
| ----------- | -------------------------------------------------------- |
| Name        | https://pokeapi.co/api/v2/pokemon/<pokemon_name>         |
| Height      | https://pokeapi.co/api/v2/pokemon/<pokemon_name>         |
| Weight      | https://pokeapi.co/api/v2/pokemon/<pokemon_name>         |
| ID          | https://pokeapi.co/api/v2/pokemon/<pokemon_name>         |
| Types       | https://pokeapi.co/api/v2/pokemon/<pokemon_name>         |
| Description | https://pokeapi.co/api/v2/pokemon-species/<pokemon_name> |

Note: See `src/pokeApi.ts`
Note: The description should be the first `flavor_text` in `flavor_text_entries` where the language.name = 'en'.

- Pokemon type (Fire, Water, Electric, etc.) badges in Pokédex should change color based on the type (see src/data/pokemon.ts for different types and colors)

### 2. Login

- Implement `/login` route in the backend
- Enable JWT Login flow
  - Send Username and Password to Backend
  - Backend should respond with JWT Token with `first_name` and `email` (at minimum)
  - Display `first_name` and `email` in welcome header
  - Dynamically Show / Hide contend depending on User state:

| Component      | Visible Condition |
| -------------- | ----------------- |
| Welcome Header | Logged In         |
| Login Form     | Not Logged In     |
| Pokedex        | Logged In         |

## Extras

1. Implement client-side pagination and only show five Pokemon per page
2. How can the Pokédex be "generified" for other kinds of lists? Imagine you are tasked with adding this list to a component library where various parts are optional (image, title, description, tags, etc.)
3. Add backend logic to protect all future routes with the same auth strategy as the /pokemon route
4. Implement logout functionality

# Links

[PokeAPI Docs](https://pokeapi.co/docs/v2#pokemon-section)

# Notes

- All necessary backend + frontend libraries have been provided
- Hot-reloading has been configured for both the frontend and the backend, but dev servers may need to be restarted manually:
  - The frontend can be (re)started with `pnpm run dev`
  - The backend can be restarted with `pnpm run dev` from the `/backend` directory
- Assume all users share the same list of Pokemon (see `backend/src/data/pokemon.ts`)
- See `backend/src/data/users` for "in-memory database" of valid users and passwords
- Not all pokemon types need a different badge color -- only the types that are returned from the backend
- The backend express app has already been configured with necessary middleware / CORS logic
- Remember to mark this repo as "Unlisted" in Codesandbox to avoid CORS issues
