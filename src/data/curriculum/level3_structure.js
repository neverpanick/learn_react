export const level3 = {
    'Component Patterns': {
        title: 'Container vs Presentational',
        level: 3,
        module: 'Structure',
        description: 'Separation of concerns.',
        explanation: 'Presentational components care about how things look (UI). Container components care about how things work (Data/Logic).',
        tips: ['Presentational: receives data via props', 'Container: fetches data, manages state']
    },
    'Controlled vs Uncontrolled': {
        title: 'Controlled vs Uncontrolled',
        level: 3,
        module: 'Structure',
        description: 'Form data handling.',
        explanation: 'Controlled: React state drives the input value. Uncontrolled: DOM handles the data (accessed via ref).',
        tips: ['Prefer controlled components for validation']
    },
    'Lifting State Up': {
        title: 'Lifting State Up',
        level: 3,
        module: 'Structure',
        description: 'Sharing state.',
        explanation: 'When multiple components need the same data, move the state to their closest common ancestor.',
        tips: ['Pass state down as props', 'Pass setters down as callbacks']
    },
    'Composition': {
        title: 'Composition vs Inheritance',
        level: 3,
        module: 'Structure',
        description: 'Code reuse.',
        explanation: 'React prefers composition (using `children` prop) over class inheritance to reuse code between components.',
        tips: ['Use {props.children} to create wrapper components']
    },
    'Error Boundaries': {
        title: 'Error Boundaries',
        level: 3,
        module: 'Structure',
        description: 'Handling crashes.',
        explanation: 'Class components that catch JavaScript errors anywhere in their child component tree.',
        tips: ['Use static getDerivedStateFromError() to render fallback UI']
    }
};
