# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Project Custom Tutorial: Components + Progress Tracker

This project includes a beginner-friendly components tutorial that demonstrates props, state, events, lists/keys, composition, controlled inputs, and lifecycle hooks.

- The left sidebar contains the topics; click any topic to view an example.
- Personalize the app with your name (defaults to `Surya`) and track progress per topic using the status buttons.
- Use "Save & Export PDF" to generate a PDF report of your progress that will be downloaded to your machine.

To run the project locally:
```powershell
npm install
npm run dev
```

The project uses `jspdf` to export progress as a PDF, so make sure to re-run `npm install` if you change dependencies.

Notes & Interview Preparation
--------------------------------
- Each topic includes a "Study Tips & Interview Questions" card to help you prepare for interviews.
- Use the Notes panel on the right to take your personal notes — these are saved in localStorage under `learn_notes_<your name>`.
- When you export the PDF, your notes get included after the status summary so you can download a single file containing both your progress and notes.
