# Blueprint

## Overview

Latravel Tours is a static-first Astro project configured for Firebase Studio. The site uses Astro pages, a shared layout, and content collections for tour data. The repository now also includes project-specific workflow guidance for combining Firebase CLI, GitHub Copilot, Google AI Studio, and Gemini 2.5 Pro in a fast editing and validation loop.

## Current project outline

- Homepage rendered from `src/pages/index.astro`
- Shared presentation in `src/components/Welcome.astro`
- Base HTML shell in `src/layouts/Layout.astro`
- Structured tour content defined in `src/content.config.ts`
- Tour entries stored under `src/content/tours/`
- Firebase Studio environment configured in `.idx/dev.nix`
- Firebase hosting configuration stored in `firebase.json`
- Repository guidance stored in `README.md` and `GEMINI.md`

## Current change plan

1. Replace the starter README with a project-specific workflow guide
2. Add a clear tool split for Firebase CLI, GitHub Copilot, Google AI Studio, and Gemini 2.5 Pro
3. Extend the existing Gemini guidance with repository-specific workflow recommendations
4. Validate the repository build after documentation changes
