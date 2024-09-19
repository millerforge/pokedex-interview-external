# Full-Stack Interview: Pokédex

You are tasked with building a React App that displays pokemon data (A Pokédex) for a logged-in Trainer. Both a backend and frontend are already running. One React component / template with static content has been provided.

# Terminology

_Candidate_

- You -- the person performing this coding challenge

_Trainer_

- The fictional "end user" for whom this feature is built

_Pokédex_

- The frontend list of Pokemon that you are building for this challenge

# Acceptance Criteria

## Frontend Tasks

1. Add JWT Login Flow
2. Display First Name + Email Address from JWT
3. Query backend to get list of Pokemon names for displaying in Pokedex
4. Call PokeAPI (v2) to fetch necessary data for Pokedex (Name, Height, Weight, ID, Description / Flavor Text, Type(s))
5. Dynamically show content based on user state (if they're logged in, hide login form. If they're not logged in, hide Pokedex + Welcome banner.)
6. Pokemon type (Fire, Water, Electric, etc.) badges in Pokédex should change color based on the type (see `src/data/pokemon.ts` for different types and colors)

## Backend Tasks

1. Implement `/login` route
2. Implement `/pokemon` route and only return data if user is logged-in (see `backend/src/data/pokemon.ts`)

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
  - The frontend can be (re)started with `npm run dev`
  - The backend can be restarted with `npm run dev` from the `/backend` directory
- Assume all users share the same list of Pokemon (see `backend/src/data/pokemon.ts`)
- See `backend/src/data/users` for "in-memory database" of valid users and passwords
- Not all pokemon types need a different badge color -- only the types that are returned from the backend
- The backend express app has already been configured with necessary middleware / CORS logic
- Remember to mark this repo as "Unlisted" in Codesandbox to avoid CORS issues
