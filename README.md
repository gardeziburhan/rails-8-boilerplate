# Rails + React application

This Rails 8 application renders the React SPA directly from Rails. The React source lives in `frontend/` and is bundled with Vite into `public/vite` for production/test runs.

## Setup
1. Install Ruby gems: `bundle install`
2. Install Node 20.19+ (Vite 7 / React Router 7 engines require it). With `nvm`, run `nvm install && nvm use` (project includes `.nvmrc`); with `asdf`, run `asdf install` (project includes `.node-version`).
3. Install Node dependencies: `npm install`
3. Prepare the database: `bin/rails db:prepare`

## Development
- Start both Rails and the Vite dev server with a single command: `bin/dev`. This launches `npm run dev -- --host` alongside `bin/rails server` so the frontend assets load without connection errors.
- If you prefer to run Vite yourself or need hot reloading tweaks, you can still start it manually with `npm run dev -- --host`. When Vite is down and no compiled assets exist, the browser will show `ERR_CONNECTION_REFUSED` because `http://localhost:5173` isn’t reachable.
- If the Vite dev server is not running but you have built assets, Rails will automatically serve the compiled files from `public/vite`.
- If your shell reports `permission denied: bin/dev`, mark it executable once with `chmod +x bin/dev` or run `bash bin/dev`. Running `bin/setup` will also set the executable bit.


## Building assets
Run `npm run build` to output compiled assets to `public/vite`. Rails reads the manifest from that directory when the Vite dev server is not running. Set `RAILS_SERVE_STATIC_FILES=1` in production so the compiled files are served.

## Tests
- Run all Rails tests: `bin/rails test`
- Lint Ruby files: `bin/rubocop -f github`
