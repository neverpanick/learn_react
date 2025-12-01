const topicData = {
  'React Home': {
    title: 'Welcome to the React Learning Hub',
    explanation: 'A short landing area that guides learners by topic. Use the left navigation to pick a topic, try the interactive examples, take notes on the right, and save/export your progress as PDF.',
    tips: [
      'Start at the top to build a solid foundation',
      'Switch user names to keep separate progress and notes'
    ],
    interview: [{ q: 'How do I use this tutorial?', a: 'Use the left navigation to explore topic demos, open the Notes panel to save personal notes, and check progress using the status buttons.' }]
  },
  'Intro': {
    title: 'Introduction to Components',
    explanation: `A React Component is a self-contained piece of UI that can be reused across your app. Components can be function components (recommended) or class components (legacy). React favors composition, props for input, and hooks for managing state and lifecycle.`,
    tips: [
      'Think of components as functions that return JSX',
      'Keep components small and focused on one responsibility',
    ],
    interview: [
      { q: 'What is a React component?', a: 'A reusable piece of UI defined as a function that return JSX. It can receive inputs via props and manage their own state.' },
      { q: 'Difference between function and class components?', a: 'Function components are modern, support hooks and are simpler. Class components are older and use lifecycle methods.' }
    ],
    exercises: [
      'Create a 2-column layout component with a header and content area',
      'Refactor a large component into smaller child components'
    ]
  },
  'Props': {
    title: 'Props (Properties)',
    explanation: 'Props are inputs to components. They are read-only inside the component; to change parent state from a child, the parent passes down a callback function as a prop.',
    tips: [
      'Validate props with PropTypes (or types with TypeScript)',
      'Prefer primitive props or stable objects; constant object literals can change identity and trigger re-renders'
    ],
    interview: [
      { q: 'How do you pass data from parent to child?', a: 'Passing props via JSX attributes', },
      { q: 'How do you let a child communicate with the parent?', a: 'Parent passes a callback as a prop (e.g., onChange), child invokes it.' }
    ],
    exercises: ['Create a List component that receives items as a prop and renders them', 'Pass a callback to a child button to toggle parent state']
  },
  'Get Started': {
    title: 'Getting Started with React',
    explanation: 'Install and run Vite to get a fast local dev server, use JSX in components, and focus on learning the component model.',
    tips: ['Start by building a static component tree, then add state and interactivity', 'Use the browser devtools to inspect components and state'],
    exercises: ['Create a small greeting component', 'Add a prop to change the message']
  },
  'First App': {
    title: 'Create Your First React App',
    explanation: 'Follow the basic flow: create a new Vite React project, add a root component and mount it using createRoot in `main.jsx`.',
    tips: ['Understand the entry point `main.jsx` and how the app is mounted', 'Keep a single App component to coordinate layout and global state'],
    exercises: ['Initialize a Vite project and add a welcome component']
  },
  'Render HTML': {
    title: 'Rendering HTML with JSX',
    explanation: 'JSX is a syntax extension that resembles HTML and compiles to React.createElement calls; use JSX to compose UI markup inside components.',
    tips: ['JSX requires a single parent element for a returned component', 'Class becomes className in JSX'],
    exercises: ['Render a list of elements using JSX']
  },
  'Upgrade': {
    title: 'Upgrading React and Tooling',
    explanation: 'When upgrading React or Vite, pay attention to breaking changes and test the app in dev and production builds.',
    tips: ['Read changelogs before upgrading major versions', 'Run `npm install` and verify dev server after upgrade'],
  },
  'ES6': {
    title: 'Modern JavaScript (ES6+) for React',
    explanation: 'React code uses modern language features like arrow functions, imports/exports, spread/rest operators, and template strings.',
    tips: ['Prefer `const` for declarations that don’t reassign', 'Use destructuring for props and state when helpful'],
    interview: [{ q: 'Why use ES modules?', a: 'They provide a standard, tree-shakable syntax for importing and exporting code.' }]
  },
  'JSX Intro': {
    title: 'Intro to JSX',
    explanation: 'JSX lets you write XML-like syntax inside JavaScript. It’s syntactic sugar that improves developer experience while preserving performance.',
    tips: ['Remember to import React for older versions; with modern setups it’s optional', 'Escaping values in JSX uses curly braces { }'],
    exercises: ['Build a simple JSX expression and observe rendering']
  },
  'JSX Expressions': {
    title: 'JSX Expressions',
    explanation: 'Use curly braces in JSX to embed JavaScript expressions, such as variables and function calls; keep expression results renderable (string, number, element).',
    tips: ['Keep expressions simple; heavy logic belongs outside JSX', 'Use conditional expressions for inline rendering']
  },
  'JSX Attributes': {
    title: 'JSX Attributes',
    explanation: 'Attributes in JSX look like HTML attributes but are implemented as props; className is used instead of class, and style takes an object.',
    tips: ['Use camelCase for DOM attributes that are multi-word (e.g., tabIndex)', 'Pass objects to style attribute'],
  },
  'JSX If Statements': {
    title: 'Conditional Rendering in JSX',
    explanation: 'Use logical && or ternary operators inside JSX to conditionally render elements; complex branching is easier to manage in code before JSX returns.',
    tips: ['Avoid deeply nested ternary operators — move logic outside JSX', 'Use early returns to simplify render logic']
  },
  'Components': {
    title: 'Component Basics',
    explanation: 'Components are JavaScript functions that return JSX. They receive props and maintain internal state with hooks.',
    tips: ['Keep components small and focused', 'Pass callbacks to children to lift state changes to parents']
  },
  'Class Components': {
    title: 'Class Components (Legacy)',
    explanation: 'Class components use lifecycle methods and internal state via `this.state`. Hooks are preferred today for function components, but understanding classes is helpful for legacy code.',
    tips: ['Use class components for reading old code; prefer function components for new code']
  },
  'Props Destructuring': {
    title: 'Props Destructuring',
    explanation: 'Use destructuring in function signatures to simplify prop access and provide default values.',
    tips: ['const MyComp = ({ name, onClick }) => { ... }', 'Provide defaults with `props = {}` to avoid undefined']
  },
  'Props Children': {
    title: 'Children Prop and Composition',
    explanation: 'The `children` prop allows components to accept nested elements; it’s key to creating composition-friendly components.',
    tips: ['Use `children` to let parent pass nested JSX', 'Combine `children` with other props for composable patterns']
  },
  'Conditionals': {
    title: 'Conditionals and Rendering',
    explanation: 'Use ternary expressions, `if` outside JSX, or short-circuit && to conditionally render elements based on state or props.',
  },
  'Forms': {
    title: 'Handling Forms',
    explanation: 'Forms are typically controlled by React state; update inputs with `onChange` handlers and maintain the value in state for predictable behavior.',
    tips: ['Use controlled inputs for validation', 'Consider `useReducer` for complex form state']
  },
  'Form Submit': {
    title: 'Handling Form Submit',
    explanation: 'Prevent default submission with `e.preventDefault()` and use the form data to update state or call APIs.',
  },
  'Textarea': {
    title: 'Textarea in React',
    explanation: 'Use controlled textarea by binding `value` to state and updating it on `onChange`.',
  },
  'Select': {
    title: 'Select Inputs',
    explanation: 'Handle `<select>` elements as controlled components: set `value` and handle `onChange` to update state.',
  },
  'Multiple Inputs': {
    title: 'Handling Multiple Inputs',
    explanation: 'Use a single state object and update fields using `setState(prev => ({ ...prev, [name]: value }))` to manage multiple form fields more succinctly.',
  },
  'Checkbox': {
    title: 'Checkbox Inputs',
    explanation: 'Checkboxes can be controlled with boolean state; for multiple choices, track an array of selected values.',
  },
  'Radio': {
    title: 'Radio Buttons',
    explanation: 'Manage radio inputs by using a single state value representing the selected option; ensure consistent `name` attribute across options.',
  },
  'Portals': {
    title: 'React Portals',
    explanation: 'Portals let you render children into a DOM node outside the parent component hierarchy — useful for modals and overlays.',
    tips: ['Use `createPortal` from `react-dom` and be mindful of accessibility and focus management']
  },
  'Suspense': {
    title: 'React Suspense',
    explanation: 'Suspense allows components to “wait” for async data to render; combined with concurrent features it helps handle loading states declaratively.',
  },
  'CSS Styling': {
    title: 'Styling React Components',
    explanation: 'You can style components with plain CSS, CSS modules, inline styles, or CSS-in-JS libraries (styled-components, emotion).',
  },
  'CSS Modules': {
    title: 'CSS Modules',
    explanation: 'CSS Modules scope class names by default, avoiding global conflicts. Import as `import styles from "./My.module.css"` and use `className={styles.myClass}`.',
  },
  'CSS-in-JS': {
    title: 'CSS-in-JS',
    explanation: 'CSS-in-JS libraries let you define styles in JavaScript, often with component-scoped theming and dynamic style logic.',
  },
  'Router': {
    title: 'React Router Basics',
    explanation: 'Routing breaks the app into pages and uses path-based rendering with `<Routes>` and `<Route>`; use `useNavigate` for programmatic navigation.',
  },
  'Transitions': {
    title: 'UI Transitions',
    explanation: 'Use transition libraries (like react-transition-group) or CSS transitions to animate UI changes and improve UX.',
  },
  'Forward Ref': {
    title: 'Forwarding Refs',
    explanation: 'Use `React.forwardRef` to forward refs from parent to child components for direct DOM access or imperative calls.',
  },
  'HOC': {
    title: 'Higher Order Components (HOC)',
    explanation: 'HOCs wrap components and return enhanced components; hooks often replace HOCs with simpler patterns.',
  },
  'Sass': {
    title: 'Sass (SCSS) Integration',
    explanation: 'You can use SCSS for nested styles and variables; set up a build step to compile SCSS into CSS (Vite supports SCSS out of the box).',
  },
  'What is Hooks?': {
    title: 'Intro to Hooks',
    explanation: 'Hooks provide function components with state and lifecycle features (useState, useEffect, etc.) while keeping code concise and easier to test.',
  },
  'useState': {
    title: 'useState Hook',
    explanation: '`useState` declares state for function components. Use lazy initialization when calculating the initial value is expensive or impure.',
    tips: ['Pass a callback to `useState(()=>initial)` if the initial is expensive', 'Use multiple state variables for unrelated data rather than a single large object']
  },
  'useEffect': {
    title: 'useEffect Hook',
    explanation: '`useEffect` manages side effects (like timers, subscriptions, or DOM updates) and can return a cleanup function for unmounting.',
  },
  'useContext': {
    title: 'useContext Hook',
    explanation: '`useContext` accesses values from Context providers without prop-drilling; prefer small, focused contexts for maintainability.',
  },
  'useRef': {
    title: 'useRef Hook',
    explanation: '`useRef` stores a mutable value that does not cause a re-render when updated and can hold DOM refs.',
  },
  'useReducer': {
    title: 'useReducer Hook',
    explanation: 'Use `useReducer` for complex state transitions or when state logic benefits from a reducer pattern over `useState`.',
  },
  'useCallback': {
    title: 'useCallback Hook',
    explanation: 'Memoize functions with `useCallback` to prevent unnecessary re-creation; useful to reduce child re-renders with dependencies kept stable.',
  },
  'useMemo': {
    title: 'useMemo Hook',
    explanation: 'Memoize computed values to avoid costly recalculations on every render when dependencies are unchanged.',
  },
  'Custom Hooks': {
    title: 'Building Custom Hooks',
    explanation: 'Encapsulate shared stateful logic into custom hooks (a function prefixed with `use`) for reuse across components.',
  },
  'State': {
    title: 'State and useState hook',
    explanation: 'State is local data owned by a component. Using useState creates a stateful value and an updater function. Put frequently-changing or UI state here; derived values can be calculated from props/state.',
    tips: [
      'Use updater function form when next state depends on prev state',
      'Reduce complex state logic with useReducer or split into multiple state variables'
    ],
    interview: [
      { q: 'Why should you not mutate state directly?', a: 'Mutating prevents React from detecting changes, causing stale UI and unexpected bugs.' },
    ],
    exercises: ['Build a counter with increment, decrement and reset', 'Create a todo input with add/remove actions']
  },
  'Events': {
    title: 'Handling Events',
    explanation: 'React event handlers use synthetic events for cross-browser compatibility. You can manage events like click, submit, or keyboard interactions and update component state accordingly.',
    tips: ['Use e.preventDefault on form submit if not posting', 'Bind handlers or use arrow functions for class components'],
    interview: [
      { q: 'How do you prevent default form submission?', a: 'Use e.preventDefault() in the handler' }
    ],
  },
  'Lists': {
    title: 'Lists and Keys',
    explanation: 'Rendering arrays via map() requires a stable key property so React can reconcile changes efficiently. Keys should be unique and stable across renders, the id is preferable to index.',
    tips: ['Avoid array index as key when order can change', 'Keys help React identify which items changed, moved, or removed'],
    interview: [
      { q: 'What is the purpose of key in lists?', a: 'Keys allow React to efficiently determine element identity and minimize DOM updates' }
    ]
  },
  'Composition': {
    title: 'Component Composition',
    explanation: 'Compose components to create complex UIs; use children prop and design small building blocks for reuse. Composition is a core pattern over inheritance.'
  },
  'Controlled Input': {
    title: 'Controlled Components (Forms)',
    explanation: 'Controlled inputs maintain their value in React state — this is the recommended way for forms that need validation and consistent state management.'
  },
  'Lifecycle': {
    title: 'Lifecycle & useEffect',
    explanation: 'useEffect replaces class lifecycle methods; you can run code on mount, update, and unmount by using different dependency arrays.'
  },
  'Hooks Deep Dive': {
    title: 'Hooks in Depth (useMemo, useCallback, useRef, useReducer)',
    explanation: 'Advanced hooks help optimize performance and manage complex state. useCallback and useMemo are for memoizing values/functions; useRef keeps a mutable value without re-rendering; useReducer organizes complex state updates.'
  },
  'Context': {
    title: 'Context API',
    explanation: 'Context provides a way to pass data through the component tree without props drilling. Use Context to share theme, auth state, or global settings.'
  },
  'Performance': {
    title: 'Performance Optimization',
    explanation: 'Use React DevTools profiler, memoization, and code-splitting (lazy + Suspense) to optimize performance. Avoid unnecessary renders by validating props and using keys properly.'
  },
  'Testing': {
    title: 'Testing and Debugging',
    explanation: 'Use React Testing Library for component testing and Jest for unit tests. Prefer testing user behavior over implementation details.'
  }
}

export default topicData
