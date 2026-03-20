# Blueprint

## Overview

Latravel Tours is a static-first Astro project configured for Firebase Studio. The site uses Astro pages, a shared layout, and content collections for tour data. The repository now also includes project-specific workflow guidance for combining Firebase CLI, GitHub Copilot, Google AI Studio, and Gemini 2.5 Pro in a fast editing and validation loop.

## Current project outline

- Homepage rendered from `/home/runner/work/latraveltours/latraveltours/src/pages/index.astro`
- Shared presentation in `/home/runner/work/latraveltours/latraveltours/src/components/Welcome.astro`
- Base HTML shell in `/home/runner/work/latraveltours/latraveltours/src/layouts/Layout.astro`
- Structured tour content defined in `/home/runner/work/latraveltours/latraveltours/src/content.config.ts`
- Tour entries stored under `/home/runner/work/latraveltours/latraveltours/src/content/tours/`
- Firebase Studio environment configured in `/home/runner/work/latraveltours/latraveltours/.idx/dev.nix`
- Firebase hosting configuration stored in `/home/runner/work/latraveltours/latraveltours/firebase.json`
- Repository guidance stored in `/home/runner/work/latraveltours/latraveltours/README.md` and `/home/runner/work/latraveltours/latraveltours/GEMINI.md`

## Current change plan

1. Replace the starter README with a project-specific workflow guide
2. Add a clear tool split for Firebase CLI, GitHub Copilot, Google AI Studio, and Gemini 2.5 Pro
3. Extend the existing Gemini guidance with repository-specific workflow recommendations
4. Validate the repository build after documentation changes
