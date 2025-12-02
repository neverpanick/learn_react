export const level6 = {
    'Context API': {
        title: 'Context API',
        level: 6,
        module: 'Core',
        description: 'Built-in global state.',
        explanation: 'Share data like theme or auth across the tree. Avoid using for frequently changing data to prevent re-renders.',
        tips: ['Split contexts to optimize performance']
    },
    'Redux Toolkit': {
        title: 'Redux Toolkit (RTK)',
        level: 6,
        module: 'Core',
        description: 'Standard Redux.',
        explanation: 'Opinionated, batteries-included toolset for efficient Redux development. Includes createSlice and configureStore.',
        tips: ['Immer is built-in for mutable state logic']
    },
    'Zustand': {
        title: 'Zustand',
        level: 6,
        module: 'Core',
        description: 'Minimalist state.',
        explanation: 'Small, fast and scalable bearbones state-management solution. No boilerplate.',
        tips: ['Great for simple global state']
    },
    'React Query': {
        title: 'TanStack Query',
        level: 6,
        module: 'Core',
        description: 'Server state.',
        explanation: 'Manages async data (caching, fetching, synchronizing). Replaces useEffect for data fetching.',
        tips: ['Separates server state from client state']
    }
};
