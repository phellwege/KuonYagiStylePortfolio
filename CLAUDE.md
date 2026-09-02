# Portfolio Project

Personal portfolio site for Peter Hellwege — deployed to GitHub Pages at https://peters-portfolio.net

## Tech Stack

- React 18 (Create React App) with JavaScript
- React Router v6 (HashRouter)
- Swiper, react-spring, framer-motion for UI
- CSS files per component (no CSS framework)

## Project Structure

Source code lives in `portfolio4.0/`:
- `src/views/` — page-level components (home, projectsPage, aboutMe)
- `src/components/` — reusable components (header, navbar, sections)
- `src/static/` — images, resume PDF, project screenshots
- `public/` — index.html and static assets

## Commands

- `npm start` — local dev server (run from `portfolio4.0/`)
- `npm run build` — production build
- `npm run deploy` — build + deploy to GitHub Pages via gh-pages

## Conventions

- Components are `.js` files (not TypeScript despite TS being installed)
- CSS is co-located with components in `src/components/`
- Routing uses HashRouter (required for GitHub Pages)
