# Latravel Tours

Static-first Astro site for Firebase Studio with a simple workflow guide for using Firebase CLI, GitHub Copilot, Google AI Studio, and Gemini 2.5 Pro together without duplicating effort.

## Project overview

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Runtime:** Node.js 20 in Firebase Studio
- **Hosting:** Firebase

## Local commands

Run commands from the project root.

| Command | Purpose |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the Astro dev server |
| `npm run build` | Build the production site |
| `npm run preview` | Preview the production build |

## Recommended Firebase Studio workflow

Use each tool for one clear job:

| Tool | Best use | Avoid using it for |
| --- | --- | --- |
| **Firebase CLI** | Local dev server, emulators, hosting deploys, environment validation | Long architectural discussions |
| **GitHub Copilot** | Inline edits, refactors, test updates, repetitive code changes inside the editor | Large planning sessions across many files |
| **Google AI Studio / Gemini 2.5 Pro** | Planning, code review, prompt drafting, trade-off analysis, debugging strategy | Directly replacing the editor workflow for small edits |

### Best screen layout

For a fast loop inside Firebase Studio:

1. **Center:** code editor with GitHub Copilot enabled
2. **Bottom terminal:** Firebase CLI and Astro commands
3. **Right side:** Google AI Studio with **Gemini 2.5 Pro** for planning, reviewing diffs, and troubleshooting

That setup keeps:

- **Gemini** focused on thinking
- **Copilot** focused on typing
- **Firebase CLI** focused on running and validating

### Fast working loop

1. **Ask Gemini for a short plan**
   - Example: _"Summarize the smallest change needed for this issue, affected files, risks, and validation steps."_
2. **Implement with Copilot in the editor**
   - Accept inline completions for the exact file you are editing
   - Use Copilot Chat for file-local changes, not for broad product strategy
3. **Validate with Firebase CLI / Astro**
   - `npm run dev`
   - `npm run build`
   - `firebase emulators:start`
   - `firebase deploy --only hosting`
4. **Review with Gemini again**
   - Paste the diff or summarize the change
   - Ask for missed edge cases, UX issues, and copy improvements

## Practical division of labor

### Use Gemini 2.5 Pro for:

- turning a vague request into a 3-5 step plan
- comparing implementation options
- reviewing diffs before committing
- debugging errors when the stack trace is long or spans multiple files
- writing better prompts for Copilot

### Use GitHub Copilot for:

- filling in repetitive markup
- completing component props and interfaces
- writing small refactors from comments or TODOs
- updating nearby code after a targeted change

### Use Firebase CLI for:

- running the local app
- checking Hosting and emulator behavior
- verifying Firebase config before deploy
- shipping the final update

## Prompt templates

### Prompt for Gemini 2.5 Pro

> I am working in Firebase Studio on an Astro project. Give me the smallest safe plan for this task, list affected files, suggest validation commands, and tell me what should be done by Gemini, GitHub Copilot, and Firebase CLI.

### Prompt for Copilot Chat

> Update only this file to implement the agreed plan. Keep the change minimal, preserve existing styles, and do not modify unrelated code.

## Workflow rules that keep things fast

- Start in **Gemini** when the request is unclear
- Start in **Copilot** when you already know the exact file and change
- Run **Firebase CLI** after every meaningful change, not just at the end
- Send **small diffs** back to Gemini for review instead of pasting the whole codebase
- Keep one tool responsible for one step so the workflow stays predictable

## Suggested daily flow

1. Open the task in Firebase Studio
2. Ask Gemini 2.5 Pro for a minimal plan in the right-side panel
3. Apply the edit in the editor with Copilot
4. Validate in the terminal with Astro or Firebase CLI
5. Ask Gemini for a final review of the diff
6. Deploy with Firebase CLI when the build is clean

This division usually gives the fastest feedback loop with the least context switching.
