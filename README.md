# Monorepo Boilerplate

## Introduction

This repository uses a monorepo layout with two applications:

- **apps/backend** – a Rails 8 API/backend.
- **apps/frontend** – a React application bundled with Vite.

Keeping both apps in the same repository simplifies dependency management and allows coordinated deployments.

## Prerequisites

Make sure the following dependencies are installed:

- Ruby and Bundler
- Node.js and npm
- PostgreSQL
- Docker (optional, used by Kamal for container-based deployment)

## Backend Installation (`apps/backend`)

```bash
cd apps/backend
bundle install
bin/setup            # prepare database and other assets
bin/rails db:migrate # run database migrations
bin/rails server     # start the Rails server
```

## Frontend Installation (`apps/frontend`)

```bash
cd apps/frontend
npm install
npm run dev          # start Vite development server
```

## Tests and Linters

### Backend

```bash
cd apps/backend
bin/rails test   # run Rails test suite
bin/rubocop      # lint with RuboCop
```

### Frontend

```bash
cd apps/frontend
npm test         # run frontend tests (if configured)
npm run lint     # run ESLint
```

## Deployment Notes

The backend includes [Kamal](https://github.com/basecamp/kamal) for Docker-based deployment.
Typical flow:

```bash
cd apps/backend
bundle exec kamal setup
bundle exec kamal deploy
```

Refer to the Kamal documentation for server prerequisites and additional commands.

## Further Reading

For more detailed information, consult the app-specific READMEs:

- [apps/backend/README.md](apps/backend/README.md)
- [apps/frontend/README.md](apps/frontend/README.md)