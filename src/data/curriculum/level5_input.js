export const level5 = {
    'Controlled Forms': {
        title: 'Controlled Inputs',
        level: 5,
        module: 'Input',
        description: 'React-managed state.',
        explanation: 'Input value is bound to state. `onChange` updates state. Single source of truth.',
        tips: ['value={state} onChange={handleChange}']
    },
    'React Hook Form': {
        title: 'React Hook Form',
        level: 5,
        module: 'Input',
        description: 'Performant forms.',
        explanation: 'Library for managing complex forms with minimal re-renders. Uses uncontrolled inputs with refs.',
        tips: ['register() connects input to hook']
    },
    'Validation': {
        title: 'Form Validation (Zod/Yup)',
        level: 5,
        module: 'Input',
        description: 'Schema validation.',
        explanation: 'Define a schema for your data (e.g., email required, min length) and validate inputs against it.',
        tips: ['Integrates well with React Hook Form']
    },
    'Formik': {
        title: 'Formik',
        level: 5,
        module: 'Input',
        description: 'Form library alternative.',
        explanation: 'Popular library for handling form state, validation, and submission.',
        tips: ['Good for smaller forms, but RHF is more performant']
    }
};
