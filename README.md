# Portfolio

Personal site at [arohandutt.com](https://arohandutt.com). A Yarn-workspaces monorepo:

- **`web/`** — Gatsby (React + TypeScript) site, deployed to Netlify.
- **`studio/`** — Sanity Studio for managing content. Photography lives in Sanity and is fetched at runtime by the gallery.

## Getting started

Requires Node 22 (`nvm use`) and Yarn 1.

```bash
yarn install       # installs both workspaces
```

Create `web/.env.development`:

```
GATSBY_SANITY_PROJECT_ID=<your project id>
GATSBY_SANITY_DATASET=production
```

Then run:

```bash
yarn dev           # web + studio together
yarn develop       # web only    -> http://localhost:8000
yarn studio        # studio only -> http://localhost:3333
```

## Accessing Sanity locally

`yarn studio` opens the content admin at http://localhost:3333 (needs `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET` in `studio/.env`).

The web app reads the hosted Sanity API directly, so your dev origin must be allowlisted. If the gallery shows a CORS / "Couldn't load photos" error, run it once:

```bash
cd studio && npx sanity cors add http://localhost:8000
```

## Deploying

`web` deploys to Netlify from git (see `netlify.toml`). Deploy the Studio with `cd studio && yarn deploy`.
