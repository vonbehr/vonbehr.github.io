# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Jekyll static site (Florian von Behr's personal site, `vonbehr.github.io`), built with the `minimal-mistakes-jekyll` theme and deployed to GitHub Pages via GitHub Actions. The repo is currently a freshly scaffolded Jekyll site — most content (`about.markdown`, the sample post, `_config.yml` title/description) is still default boilerplate and has not been customized yet.

## Commands

```bash
bundle install                                  # install gems (Jekyll, theme, plugins)
bundle exec jekyll serve                        # run local dev server with live rebuild (http://localhost:4000)
bundle exec jekyll build                        # build the static site into _site/
```

There is no test suite, linter, or JS/CSS build step in this repo — it's Ruby/Jekyll only.

Note: `_config.yml` is **not** reloaded by `jekyll serve` — restart the server after editing it.

## Deployment

Pushing to `main` triggers `.github/workflows/pages.yml`, which builds the site with `bundle exec jekyll build` (Ruby 3.3, `JEKYLL_ENV=production`) and deploys `_site/` to GitHub Pages. There is no separate staging environment; a merge to `main` deploys straight to production. The workflow can also be run manually via `workflow_dispatch`.

## Architecture

- **Theme**: `minimal-mistakes-jekyll` (v4.28.0) is a gem-based theme — its layouts, includes, and default assets are **not** in this repo; they live in the installed gem. To override a theme file (a layout, include, or Sass partial), copy it from the gem into the matching path here (e.g. `_layouts/`, `_includes/`, `_sass/`) and Jekyll will prefer the local copy.
- **`_config.yml`**: single source of truth for site-wide settings — title, description, URL, theme skin, plugins, author, footer, pagination, and `defaults:` (front-matter defaults applied per content type, e.g. all `_posts`/pages get `layout: single`, `author_profile: true`).
- **`_posts/`**: blog posts, filenames must follow Jekyll's `YEAR-MONTH-DAY-title.MARKUP` convention; front matter sets `title`, `date`, `categories`.
- **`_data/navigation.yml`**: drives the site's `main` nav links (referenced by the theme's header include).
- **Root pages** (`about.markdown`, `index.html`, `404.html`): standalone pages with their own front matter (`layout`, `permalink`, `title`).
- **`_site/`**: generated build output — gitignored, never edit directly.
