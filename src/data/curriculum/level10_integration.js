export const level10 = {
    'REST APIs': {
        title: 'REST API Integration',
        level: 10,
        module: 'Integration',
        description: 'Connecting to backend.',
        explanation: 'Standard architecture for web APIs. Use HTTP methods (GET, POST) to interact with resources.',
        tips: ['Understand status codes (200, 404, 500)']
    },
    'Authentication': {
        title: 'Auth & JWT',
        level: 10,
        module: 'Integration',
        description: 'Security.',
        explanation: 'JSON Web Tokens (JWT) are used for stateless authentication. Store tokens securely (HttpOnly cookies).',
        tips: ['Never store sensitive data in localStorage']
    },
    'Firebase': {
        title: 'Firebase / Supabase',
        level: 10,
        module: 'Integration',
        description: 'Backend-as-a-Service.',
        explanation: 'Provides auth, database, and storage out of the box. Great for rapid prototyping.',
        tips: ['Real-time updates with Firestore/Supabase']
    }
};
