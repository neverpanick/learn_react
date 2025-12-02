export const level4 = {
    'React Router': {
        title: 'React Router Basics',
        level: 4,
        module: 'Nexus',
        description: 'Client-side routing.',
        explanation: 'Enables navigation without page reloads. Core components: BrowserRouter, Routes, Route, Link.',
        tips: ['Wrap app in <BrowserRouter>', 'Use <Link> instead of <a> tags']
    },
    'Dynamic Routes': {
        title: 'Dynamic Routing',
        level: 4,
        module: 'Nexus',
        description: 'URL Parameters.',
        explanation: 'Routes can accept parameters (e.g., /user/:id). Access them with `useParams()`.',
        tips: ['Useful for detail pages']
    },
    'Nested Routes': {
        title: 'Nested Routes',
        level: 4,
        module: 'Nexus',
        description: 'Layouts within layouts.',
        explanation: 'Render child routes inside a parent route using <Outlet />. Great for dashboards with shared sidebars.',
        tips: ['Parent route path should not have trailing slash']
    },
    'Protected Routes': {
        title: 'Protected Routes',
        level: 4,
        module: 'Nexus',
        description: 'Auth guards.',
        explanation: 'A wrapper component that checks for authentication. If not auth, redirect to login.',
        tips: ['Use <Navigate to="/login" /> for redirection']
    },
    'Lazy Loading': {
        title: 'Lazy Loading Routes',
        level: 4,
        module: 'Nexus',
        description: 'Code splitting.',
        explanation: 'Load route components only when needed using `React.lazy` and `Suspense`. Reduces initial bundle size.',
        tips: ['const Home = React.lazy(() => import("./Home"))']
    }
};
