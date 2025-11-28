# Rails + React application

This Rails 8 application renders the React SPA directly from Rails. The React source lives in `frontend/` and is bundled with Vite into `public/vite` for production/test runs.

## Setup
1. Install Ruby gems: `bundle install`
2. Install Node dependencies: `npm install`
3. Prepare the database: `bin/rails db:prepare`

## Development
- Start everything (Rails + Vite dev server) with a single command: `bin/rails server`.
- Rails will automatically boot the Vite dev server in development unless you disable it with `VITE_DEV_SERVER_AUTO_START=false`.
- If you prefer to run Vite yourself or need hot reloading tweaks, you can still start it manually with `npm run dev -- --host`.
- If the Vite dev server is not running but you have built assets, Rails will automatically serve the compiled files from `public/vite`.

## Building assets
Run `npm run build` to output compiled assets to `public/vite`. Rails reads the manifest from that directory when the Vite dev server is not running. Set `RAILS_SERVE_STATIC_FILES=1` in production so the compiled files are served.

## Tests
- Run all Rails tests: `bin/rails test`
- Lint Ruby files: `bin/rubocop -f github`
