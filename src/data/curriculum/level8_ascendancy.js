export const level8 = {
    'Memoization': {
        title: 'Memoization (useMemo/memo)',
        level: 8,
        module: 'Ascendancy',
        description: 'Performance optimization.',
        explanation: 'Cache expensive calculations or component renders to avoid unnecessary work.',
        tips: ['Don\'t optimize prematurely', 'React.memo prevents re-renders if props haven\'t changed']
    },
    'Suspense': {
        title: 'Suspense & Concurrent',
        level: 8,
        module: 'Ascendancy',
        description: 'Async rendering.',
        explanation: 'Declaratively wait for anything (code, data, images) to load.',
        tips: ['Combine with Error Boundaries']
    },
    'Portals': {
        title: 'Portals',
        level: 8,
        module: 'Ascendancy',
        description: 'DOM escape hatch.',
        explanation: 'Render children into a DOM node that exists outside the DOM hierarchy of the parent component.',
        tips: ['Perfect for Modals and Tooltips']
    },
    'HOC': {
        title: 'Higher-Order Components',
        level: 8,
        module: 'Ascendancy',
        description: 'Advanced pattern.',
        explanation: 'A function that takes a component and returns a new component. Used for cross-cutting concerns.',
        tips: ['Hooks have largely replaced HOCs']
    }
};
