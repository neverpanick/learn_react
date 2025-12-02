export const level0 = {
    'HTML Basics': {
        title: 'HTML5 Semantic Structure',
        level: 0,
        module: 'Origin',
        description: 'The skeleton of the web.',
        explanation: 'Semantic HTML provides meaning to web content. Use <header>, <nav>, <main>, <article>, and <footer> instead of generic <div>s to improve accessibility and SEO.',
        tips: ['Always use alt text for images', 'Ensure heading hierarchy (h1 -> h2 -> h3) is logical'],
        interview: [{ q: 'Why is semantic HTML important?', a: 'It improves accessibility for screen readers and SEO for search engines.' }]
    },
    'CSS Box Model': {
        title: 'CSS Box Model & Flexbox',
        level: 0,
        module: 'Origin',
        description: 'Styling and layout fundamentals.',
        explanation: 'Every element is a box with content, padding, border, and margin. Flexbox is a one-dimensional layout method for laying out items in rows or columns.',
        tips: ['Use box-sizing: border-box to include padding/border in width', 'Flexbox is great for centering: justify-content: center; align-items: center;']
    },
    'ES6 Variables': {
        title: 'ES6 Variables (let/const)',
        level: 0,
        module: 'Origin',
        description: 'Modern JavaScript variable declaration.',
        explanation: '`let` is for mutable variables, `const` is for immutable references. Avoid `var` to prevent hoisting issues.',
        tips: ['Default to const, use let only when reassignment is needed']
    },
    'Arrow Functions': {
        title: 'Arrow Functions',
        level: 0,
        module: 'Origin',
        description: 'Concise function syntax.',
        explanation: 'Arrow functions provide a shorter syntax and lexically bind the `this` value. Syntax: `const add = (a, b) => a + b;`',
        tips: ['Implicit return is useful for one-liners', 'They do not have their own `this` context']
    },
    'Destructuring': {
        title: 'Destructuring & Spread',
        level: 0,
        module: 'Origin',
        description: 'Unpacking arrays and objects.',
        explanation: 'Destructuring allows extracting values from arrays/objects into variables. Spread operator (...) expands iterables.',
        tips: ['const { name } = user;', 'const newArr = [...oldArr, newItem];']
    },
    'Array Methods': {
        title: 'Array Methods (Map/Filter)',
        level: 0,
        module: 'Origin',
        description: 'Functional programming with arrays.',
        explanation: '`map` transforms elements, `filter` selects elements, `reduce` accumulates a value. These are crucial for rendering lists in React.',
        tips: ['map returns a new array', 'filter returns a new array based on condition']
    },
    'Modules': {
        title: 'ES Modules',
        level: 0,
        module: 'Origin',
        description: 'Import and Export.',
        explanation: 'Modules allow splitting code into files. Use `export` to expose and `import` to use code.',
        tips: ['Default export vs Named export']
    }
};
