import PropsDemo from './PropsDemo'
import StateDemo from './StateDemo'
import EventsDemo from './EventsDemo'
import ListDemo from './ListDemo'
import CompositionDemo from './CompositionDemo'
import ControlledInput from './ControlledInput'
import LifecycleDemo from './LifecycleDemo'
import HooksDeepDive from './HooksDeepDive'
import UseRefDemo from './UseRefDemo'
import UseReducerDemo from './UseReducerDemo'
import MemoCallbackDemo from './MemoCallbackDemo'
import CssModulesDemo from './CssModulesDemo'
import FormDemo from './FormDemo'
import PortalsDemo from './PortalsDemo'
import SuspenseDemo from './SuspenseDemo'
import RouterDemo from './RouterDemo'
import ForwardRefDemo from './ForwardRefDemo'
import HOCDemo from './HOCDemo'
import ContextDemo from './ContextDemo'
import PerformanceDemo from './PerformanceDemo'
import TestingDemo from './TestingDemo'

export default function DemoMapper({ topic }) {
    switch (topic) {
        case 'Props': return <PropsDemo />
        case 'State': return <StateDemo />
        case 'useRef': return <UseRefDemo />
        case 'useReducer': return <UseReducerDemo />
        case 'useCallback':
        case 'useMemo': return <MemoCallbackDemo />
        case 'CSS Modules': return <CssModulesDemo />
        case 'Forms':
        case 'Form Submit':
        case 'Textarea':
        case 'Select':
        case 'Multiple Inputs':
        case 'Checkbox':
        case 'Radio': return <FormDemo />
        case 'Events': return <EventsDemo />
        case 'Lists': return <ListDemo />
        case 'Composition': return <CompositionDemo />
        case 'Controlled Input': return <ControlledInput />
        case 'Lifecycle': return <LifecycleDemo />
        case 'Hooks Deep Dive': return <HooksDeepDive />
        case 'Context': return <ContextDemo />
        case 'Performance': return <PerformanceDemo />
        case 'Portals': return <PortalsDemo />
        case 'Suspense': return <SuspenseDemo />
        case 'Router': return <RouterDemo />
        case 'Forward Ref': return <ForwardRefDemo />
        case 'HOC': return <HOCDemo />
        case 'Testing': return <TestingDemo />
        default: return null
    }
}
