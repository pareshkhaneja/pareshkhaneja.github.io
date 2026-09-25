# pareshkhaneja.github.io

Modern personal site for [Paresh Khaneja](https://pareshkhaneja.github.io), built with Astro 5, React islands, and Tailwind CSS v4. Deployed to GitHub Pages via GitHub Actions.

## Stack

- Astro 5 (static output)
- React (theme toggle + mobile navigation)
- Tailwind CSS v4
- Playwright smoke tests
- GitHub REST API at build time (with `src/data/projects.json` fallback)

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:4320`.

## Quality checks

```bash
npm run lint
npm run check
npm run build
npm run preview
npm run test
```

Optional: set `GITHUB_TOKEN` locally to raise GitHub API rate limits during `npm run build`.

## Deploy (GitHub Pages)

1. In repo **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**.
2. Push to `develop` (or `main`). Workflow `.github/workflows/deploy.yml` builds, tests, and deploys `dist/`.

Production URL: https://pareshkhaneja.github.io/

## Project structure

- `src/pages/index.astro` — single-page layout
- `src/config/site.ts` — profile copy, social links, featured repos
- `src/lib/github.ts` — build-time repo fetch + cache
- `src/components/` — UI sections and React islands

## License

See `LICENSE.txt` in this repository.
