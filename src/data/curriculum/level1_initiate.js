export const level1 = {
    'React Intro': {
        title: 'What is React?',
        level: 1,
        module: 'Initiate',
        description: 'Library vs Framework.',
        explanation: 'React is a JS library for building UIs. It uses a Virtual DOM to optimize rendering and follows a unidirectional data flow.',
        interview: [{ q: 'What is the Virtual DOM?', a: 'A lightweight copy of the DOM. React compares it with the real DOM to make minimal updates.' }]
    },
    'JSX': {
        title: 'JSX & Components',
        level: 1,
        module: 'Initiate',
        description: 'Writing markup in JavaScript.',
        explanation: 'JSX is syntax sugar for React.createElement. Components are functions that return JSX.',
        tips: ['Components must start with a capital letter', 'Return a single parent element or Fragment']
    },
    'Props': {
        title: 'Props & State',
        level: 1,
        module: 'Initiate',
        description: 'Data flow.',
        explanation: 'Props are arguments passed to components (read-only). State is internal data managed by the component (mutable via setters).',
        tips: ['Props flow down', 'State stays local (unless lifted)']
    },
    'Lists': {
        title: 'Rendering Lists',
        level: 1,
        module: 'Initiate',
        description: 'Mapping arrays to UI.',
        explanation: 'Use `.map()` to convert data arrays into arrays of JSX elements. Always provide a unique `key` prop.',
        tips: ['Keys help React identify which items changed', 'Do not use index as key if list can reorder']
    },
    'Events': {
        title: 'Event Handling',
        level: 1,
        module: 'Initiate',
        description: 'Interactivity.',
        explanation: 'React events are camelCase (onClick). Pass a function, don\'t call it immediately.',
        tips: ['onClick={handleClick} not onClick={handleClick()}']
    },
    'Conditionals': {
        title: 'Conditional Rendering',
        level: 1,
        module: 'Initiate',
        description: 'Logic in UI.',
        explanation: 'Use ternary operators (`cond ? true : false`) or logical AND (`&&`) to render content conditionally.',
        tips: ['Avoid complex logic in JSX; extract to variables']
    }
};
