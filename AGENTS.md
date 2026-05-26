# Game of Life — AGENTS.md

## Toolchain

- **React 19** (v19.2.6), **Webpack 5**, **Babel 7**, **Less**, **ESLint 9** (flat config)
- `resolve.modules` includes `./src` — bare imports like `components/Pannel` resolve from `src/`
- React is bundled in all modes (no externals). `dist/vendor/` is obsolete — removed by `clean: true` in webpack.

## Commands

| Action | Command | Notes |
|--------|---------|-------|
| Dev server | `npm run dev` | Port 8888. Set `NODE_ENV=dev-HMR` for HMR |
| Prod build | `npm run build` | Outputs to `dist/` (committed to git, cleaned each build) |
| Lint | `npx eslint src/` | Flat config in `eslint.config.js` |

**`npm test` is a placeholder** — no test framework exists.

## ESLint conventions (enforced)

2-space indent, single quotes, semicolons required, `===`, no trailing commas, camelCase (except object properties), JSX double quotes, `consistent-this` = `that`, max 120 col width, max 600 lines/file, max 4 params, max 16 stmts/func, max depth 4.

## Architecture

`src/entry.jsx` → `App` → `Pannel` (game logic + state) → `Cell` (presentational).

Game loop is recursive `setTimeout` at 100ms. 4800-cell grid (80×60) in a flat array. Cell states: 0=dead, 1=alive, 2=died this gen, 3=born this gen.

## Quirks

- **No tests, no CI, no typechecker** in the repo
- `dist/` is committed (GitHub Pages deploy pattern). `clean: true` wipes it each build.
- `react/prop-types` rule is **off** in ESLint
- Dist files no longer include `vendor/` subdir — React is bundled into `game_of_life.bundle.js`
