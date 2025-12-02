export const level2 = {
    'useState': {
        title: 'useState Hook',
        level: 2,
        module: 'Synapse',
        description: 'Managing local state.',
        explanation: '`const [state, setState] = useState(initial)`. Returns the current value and a function to update it.',
        tips: ['Updates are asynchronous (batched)', 'Use functional update for previous state dependency']
    },
    'useEffect': {
        title: 'useEffect Hook',
        level: 2,
        module: 'Synapse',
        description: 'Side effects.',
        explanation: 'Handles side effects like fetching, subscriptions, or DOM manipulation. Runs after render.',
        tips: ['Dependency array controls when it runs', 'Return a cleanup function to avoid leaks']
    },
    'useRef': {
        title: 'useRef Hook',
        level: 2,
        module: 'Synapse',
        description: 'Mutable references.',
        explanation: 'Persists values between renders without causing re-renders. Commonly used for DOM access.',
        tips: ['ref.current holds the value']
    },
    'useContext': {
        title: 'useContext Hook',
        level: 2,
        module: 'Synapse',
        description: 'Consuming context.',
        explanation: 'Accesses global data provided by a Context Provider without prop drilling.',
        tips: ['Great for theme, auth, language']
    },
    'useReducer': {
        title: 'useReducer Hook',
        level: 2,
        module: 'Synapse',
        description: 'Complex state logic.',
        explanation: 'Alternative to useState. Uses a reducer function `(state, action) => newState`. Good for complex state transitions.',
        tips: ['Similar to Redux pattern']
    },
    'Custom Hooks': {
        title: 'Custom Hooks',
        level: 2,
        module: 'Synapse',
        description: 'Reusing logic.',
        explanation: 'Functions starting with `use` that call other hooks. Allows extracting component logic.',
        tips: ['Share logic, not state']
    }
};
