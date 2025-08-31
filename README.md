# Rails with React Boilerplate

## Introduction

This repository contains a single Rails 8 application that also serves a small
React frontend. The React code is delivered through the Rails stack so only one
server is required.

## Prerequisites

- Ruby and Bundler
- PostgreSQL
- Docker (optional, used by Kamal for container-based deployment)

## Setup

```bash
cd apps/backend
bundle install
bin/setup            # prepare database and other assets
bin/rails db:migrate # run database migrations
bin/rails server     # start the Rails server
```

## Tests and Linters

```bash
cd apps/backend
bin/rails test   # run Rails test suite
bin/rubocop      # lint with RuboCop
```

## Deployment Notes

The backend includes [Kamal](https://github.com/basecamp/kamal) for Docker-based
deployment. Typical flow:

```bash
cd apps/backend
bundle exec kamal setup
bundle exec kamal deploy
```

Refer to the Kamal documentation for server prerequisites and additional
commands.
