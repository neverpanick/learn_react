export const level7 = {
    'Fetch API': {
        title: 'Fetch API',
        level: 7,
        module: 'Grid',
        description: 'Native data fetching.',
        explanation: 'Browser built-in API for making HTTP requests. Returns a Promise.',
        tips: ['Remember to check response.ok', 'Use async/await for cleaner code']
    },
    'Axios': {
        title: 'Axios',
        level: 7,
        module: 'Grid',
        description: 'HTTP Client.',
        explanation: 'Popular library for HTTP requests. Automatically transforms JSON data and has better error handling.',
        tips: ['Supports interceptors for global config']
    },
    'Pagination': {
        title: 'Pagination & Infinite Scroll',
        level: 7,
        module: 'Grid',
        description: 'Handling large datasets.',
        explanation: 'Break data into pages or load more as user scrolls to improve performance.',
        tips: ['Use IntersectionObserver for infinite scroll']
    },
    'Debouncing': {
        title: 'Debouncing & Throttling',
        level: 7,
        module: 'Grid',
        description: 'Rate limiting.',
        explanation: 'Limit how often a function runs (e.g., search input). Debounce waits for pause; Throttle limits rate.',
        tips: ['Essential for search bars']
    }
};
