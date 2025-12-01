# AI Agent Guide — learn_react

Purpose: Help AI coding agents be productive immediately in this Vite + React learning app.

Summary
- Small single-page app (Vite + React 19) demonstrating React component concepts via small demo components.
- No backend; all state persists to browser localStorage.
- Main UI: `src/App.jsx` (sidebar + main content) using the `TOPICS` array to drive routing/selection.

Why this matters
- The app uses a single `TOPICS` array and a `topicData` object to populate UI content; keep these synchronized when adding topics.
- `localStorage` stores per-user state using `learn_progress_<userName>` and `learn_notes_<userName>`. Changing `userName` switches the stored datasets.
- PDF export is implemented with `jsPDF` in `src/components/ProgressControls.jsx`. Any content to export should live in `topicData.js` or the `NotesPanel` state.

Key Files (quick references)
- `src/App.jsx` — Main layout, global app state, `TOPICS` list, `topicsStatus` & `notesByTopic` persistence.
- `src/data/topicData.js` — Centralized content for explanation, study tips, interview Q&A, and exercises.
 - `src/data/topicData.js` — Centralized content for explanation, study tips, interview Q&A, and exercises. The topic list was expanded to match a beginner → advanced progression (e.g., JSX, Forms, Router, Hooks, Suspense, Portals).
- `src/components/ProgressControls.jsx` — Status buttons, PDF generation using `jsPDF`, and reset logic.
- `src/components/NotesPanel.jsx` — Notes UI; debounced update pattern and clipboard helpers.
- `src/components/TutorialNav.jsx` — Sidebar navigation that relies on the `TOPICS` list and `topicsStatus` map.
 - `src/components/FormDemo.jsx` — New interactive Forms demo demonstrating controlled inputs (text, textarea, select, checkboxes, radios) and form submission.
 - `src/components/PortalsDemo.jsx` — Example modal using `createPortal`.
 - `src/components/SuspenseDemo.jsx` — Shows `React.Suspense` with a lazy-loaded component and fallback UI.
 - `src/components/RouterDemo.jsx` — Lightweight hash-based routing example demonstrating programmatic navigation.
 - `src/components/ForwardRefDemo.jsx` — Example showing `React.forwardRef` usage.
 - `src/components/HOCDemo.jsx` — Small HOC (Higher-Order Component) demo.
 - `src/components/IndexPage.jsx` — A searchable index page listing all topics with serial numbers and quick links.
 - Misc UX: Keyboard navigation for the sidebar (arrow up/down, Enter to open); `Index` and `Share` buttons in the sidebar header; the current topic is synced to URL hash for deep linking.
- `eslint.config.js` — Linting rules and global ignores (e.g., `dist`), `no-unused-vars` ignoring variables starting uppercase.
- `package.json` — Scripts: `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`.

Getting started — commands (Windows PowerShell)
```powershell
npm install
npm run dev
# open http://localhost:5173 in a browser
```

Conventions & Patterns to preserve
- Components: Function components (JSX). Keep filenames and component names PascalCase: e.g., `PropsDemo.jsx` exporting `PropsDemo`.
- `TOPICS` array in `src/App.jsx` is the single source-of-order. It must contain keys that exist in `src/data/topicData.js`.
- Data content lives in `topicData.js`. Reuse `TopicDetail` for rendering study content; prefer editing `topicData` over building a unique component unless you need custom UI.
- Local persistence keys use `learn_progress_<userName>` and `learn_notes_<userName>`; use the same pattern if creating other local storage items.
- Styling: The project mixes simple CSS classes in `App.css` and inline style objects for convenience; preserve the existing look and classnames unless you're refactoring the entire UI.
- No backend / API integration — avoid introducing network requests unless adding mock/demo integration with MSW (preferred) if building tests or examples.

Common Tasks & How to Do Them
- Add a new topic
  1. Add the topic key to `TOPICS` in `src/App.jsx`.
  2. Add the corresponding `topicData` entry in `src/data/topicData.js` with `title`, `explanation`, `tips`, and optionally `interview` and `exercises`.
  3. If you need custom markup beyond `TopicDetail`, add a component under `src/components/` and wire it in `App.jsx`'s `Content` switch.
  4. Verify the nav appears in the sidebar and that the PDF contains the new topic data.

- Persisting & resetting progress
  - `ProgressControls.update()` updates the `topicsStatus` and persists to localStorage using `learn_progress_${userName}`.
  - `ProgressControls.resetProgress()` sets all statuses to `not-started` and persists.

- Exporting content to PDF
  - `ProgressControls.exportPDF()` uses `jsPDF` and relies on `allStatus`, `allContents` (`topicData`), and `allNotes`.
  - If a new content region must be exported, add it to `topicData` or pass it to `ProgressControls` via props.

Patterns for agents to follow when modifying
- Respect `TOPICS` <-> `topicData` mapping. If you change keys, update both places.
- Prefer minimal, localized changes: components are intentionally small and focused — avoid large monolithic refactors without tests and visual verification.
- Use the existing localStorage keys and formats to maintain multi-user behavior.

Testing & Linting
- Lint: `npm run lint` (eslint config at project root).
- The project doesn't contain unit tests; a `TestingDemo` demonstrates recommended tooling (Jest + React Testing Library). If adding tests, follow the `TestingDemo` examples.

No hidden infrastructure
- This repo has no server/API endpoints — it is a static SPA. No CI or GH Actions currently exist (no `.github` folder) — if adding automation, include a simple `node` + `npm` job that runs lint and dev/build steps.

Troubleshooting Tips
- If a new dependency is added or updated, run `npm install` again; `jspdf` is used for PDF exports and must be installed.
- If the UI doesn't show a new topic: check that `TOPICS` and `topicData` keys match.
 - Topics are now displayed with serial numbers in the left nav; update `TutorialNav.jsx` if you add or reorder topics to keep numbering accurate.
- If progress doesn't persist as expected: ensure `userName` is set before saving; localStorage keys are per user.

Examples (copy/paste)
- Add a topic to `TOPICS` in `src/App.jsx`:
```js
const TOPICS = ['Intro', 'Props', /* new */ 'Reactive Patterns' /* ... */]
```
- Add a `topicData` entry in `src/data/topicData.js`:
```js
'Reactive Patterns': {
  title: 'Reactive Patterns',
  explanation: 'Short description',
  tips: ['Tip 1', 'Tip 2'],
  interview: [{ q: 'What is X?', a: 'Answer X' }],
}
```

Ask for feedback
- If you want examples for adding tests, CI workflows, or optional features (dark mode, export format alter), tell me which areas to expand.

---

If any of the assumptions look off (e.g., you already have a CI workflow or a different build script), tell me and I will update this guide and surface exact file edits or additions.

Known lint warnings / code issues (observed during lint run)
- EventsDemo.jsx: Inline example text includes braces such as `onClick={(e) => handle(e, item)}` which causes `no-undef` to trigger for `handle` and `item` in some lint parsers, since the code contains literal JS expressions inside JSX text. Use a string wrapper to show examples, e.g. `<code>{'onClick={(e) => handle(e, item)}'}</code>` or escape the braces.
- LifecycleDemo.jsx: Avoid calling impure functions during render; use lazy initialization for state: `useState(() => Date.now())` instead of `useState(Date.now())`.
- NotesPanel.jsx: Avoid unconditional `setState` inside effects — prefer a conditional update to prevent cascading renders (e.g., `if (draft !== notes) setDraft(notes || '')`) and include any missing deps in the dependency array.
- ProgressControls.jsx: `setAllNotes` is received as a prop but unused; remove it or use it as appropriate to avoid `no-unused-vars`.

Agents should not attempt sweeping refactors or to auto-fix unrelated lints without a test harness or confirmation from a human reviewer.