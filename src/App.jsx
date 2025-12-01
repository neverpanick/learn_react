import { useState, useEffect } from 'react'
import './App.css'
import TutorialNav from './components/TutorialNav'
import Intro from './components/Intro'
import TopicDetail from './components/TopicDetail'
import HelpModal from './components/HelpModal'
import IndexPage from './components/IndexPage'
import PropsDemo from './components/PropsDemo'
import StateDemo from './components/StateDemo'
import EventsDemo from './components/EventsDemo'
import ListDemo from './components/ListDemo'
import CompositionDemo from './components/CompositionDemo'
import ControlledInput from './components/ControlledInput'
import LifecycleDemo from './components/LifecycleDemo'
import HooksDeepDive from './components/HooksDeepDive'
import UseRefDemo from './components/UseRefDemo'
import UseReducerDemo from './components/UseReducerDemo'
import MemoCallbackDemo from './components/MemoCallbackDemo'
import CssModulesDemo from './components/CssModulesDemo'
import FormDemo from './components/FormDemo'
import PortalsDemo from './components/PortalsDemo'
import SuspenseDemo from './components/SuspenseDemo'
import RouterDemo from './components/RouterDemo'
import ForwardRefDemo from './components/ForwardRefDemo'
import HOCDemo from './components/HOCDemo'
import ContextDemo from './components/ContextDemo'
import PerformanceDemo from './components/PerformanceDemo'
import TestingDemo from './components/TestingDemo'
import ProgressControls from './components/ProgressControls'
import NotesPanel from './components/NotesPanel'
import topicData from './data/topicData'
import CyborgFox from './components/illustrations/CyborgFox'
import CyborgOwl from './components/illustrations/CyborgOwl'
import CyborgCat from './components/illustrations/CyborgCat'

const TOPICS = [
  'React Home',
  'Intro',
  'Get Started',
  'First App',
  'Render HTML',
  'Upgrade',
  'ES6',
  'JSX Intro',
  'JSX Expressions',
  'JSX Attributes',
  'JSX If Statements',
  'Components',
  'Class Components',
  'Props',
  'Props Destructuring',
  'Props Children',
  'Events',
  'Conditionals',
  'Lists',
  'Forms',
  'Form Submit',
  'Textarea',
  'Select',
  'Multiple Inputs',
  'Checkbox',
  'Radio',
  'Portals',
  'Suspense',
  'CSS Styling',
  'CSS Modules',
  'CSS-in-JS',
  'Router',
  'Transitions',
  'Forward Ref',
  'HOC',
  'Sass',
  'What is Hooks?',
  'useState',
  'useEffect',
  'useContext',
  'useRef',
  'useReducer',
  'useCallback',
  'useMemo',
  'Custom Hooks',
  'Composition',
  'Controlled Input',
  'Lifecycle',
  'Hooks Deep Dive',
  'Context',
  'Performance',
  'Testing',
]

function Content({ topic, userName, setTopic, topics }) {
  // Map a subset of topics to interactive demo components while falling back to TopicDetail
  switch (topic) {
    case 'Props':
      return <PropsDemo />
    case 'State':
      return <StateDemo />
    case 'useRef':
      return <UseRefDemo />
    case 'useReducer':
      return <UseReducerDemo />
    case 'useCallback':
    case 'useMemo':
      return <MemoCallbackDemo />
    case 'CSS Modules':
      return <CssModulesDemo />
    case 'Forms':
      return <FormDemo />
    case 'Form Submit':
      return <FormDemo />
    case 'Textarea':
      return <FormDemo />
    case 'Select':
      return <FormDemo />
    case 'Multiple Inputs':
      return <FormDemo />
    case 'Checkbox':
      return <FormDemo />
    case 'Radio':
      return <FormDemo />
    case 'Events':
      return <EventsDemo />
    case 'Lists':
      return <ListDemo />
    case 'Composition':
      return <CompositionDemo />
    case 'Controlled Input':
      return <ControlledInput />
    case 'Lifecycle':
      return <LifecycleDemo />
    case 'Hooks Deep Dive':
      return <HooksDeepDive />
    case 'Context':
      return <ContextDemo />
    case 'Performance':
      return <PerformanceDemo />
    case 'Portals':
      return <PortalsDemo />
    case 'Suspense':
      return <SuspenseDemo />
    case 'Router':
      return <RouterDemo />
    case 'Forward Ref':
      return <ForwardRefDemo />
    case 'HOC':
      return <HOCDemo />
    case 'Testing':
      return <TestingDemo />
    case 'React Home':
      return <IndexPage topics={topics} onOpen={(t) => setTopic(t)} />
    default:
      // If we have a topic key inside topicData, show the TopicDetail panel with the content
      if (topicData[topic]) return <TopicDetail topicKey={topic} index={topics.indexOf(topic) + 1} />
      return <Intro userName={userName} />
  }
}

export default function App() {
  const [topic, setTopic] = useState(() => {
    // Determine the initial topic from hash or last visited; hash takes precedence
    try {
      const hash = (window.location.hash || '').replace(/^#/, '')
      if (hash) return hash
      const last = window.localStorage.getItem('learn_last_topic')
      if (last) return last
    } catch { /* ignore */ }
    return 'Intro'
  })
  const [userName, setUserName] = useState('Surya')
  const [showNotes, setShowNotes] = useState(false)
  const [showHelp, setShowHelp] = useState(false)

  const defaultStatus = Object.fromEntries(TOPICS.map(t => [t, 'not-started']))
  const defaultNotes = Object.fromEntries(TOPICS.map(t => [t, '']))
  const [topicsStatus, setTopicsStatus] = useState(() => {
    try {
      const raw = window.localStorage.getItem(`learn_progress_${userName}`)
      if (raw) return JSON.parse(raw)
    } catch (e) { console.error(e) }
    return defaultStatus
  })
  const [notesByTopic, setNotesByTopic] = useState(() => {
    try {
      const raw = window.localStorage.getItem(`learn_notes_${userName}`)
      if (raw) return JSON.parse(raw)
    } catch (e) { console.error(e) }
    return defaultNotes
  })

  // Persist progress to localStorage when topicsStatus changes or name changes
  useEffect(() => {
    try {
      window.localStorage.setItem(`learn_progress_${userName}`, JSON.stringify(topicsStatus))
    } catch (e) { console.error(e) }
  }, [topicsStatus, userName])

  // Keep the hash synced with the current topic for deep link support
  useEffect(() => {
    try {
      if (topic) window.location.hash = topic
      window.localStorage.setItem('learn_last_topic', topic)
    } catch { /* ignore */ }
  }, [topic])

  // When userName changes, load their saved progress (if any)
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(`learn_progress_${userName}`)
      if (!raw) return
      const parsed = JSON.parse(raw)
      // only update if different to avoid cascading renders
      try {
        // Apply parsed state asynchronously to avoid synchronous setState in an effect
        setTimeout(() => setTopicsStatus(parsed), 0)
      } catch { /* ignore stringification errors */ }
    } catch (e) { console.error(e) }
  }, [userName])

  // Persist notes to localStorage when notes change or user changes
  useEffect(() => {
    try {
      window.localStorage.setItem(`learn_notes_${userName}`, JSON.stringify(notesByTopic))
    } catch (e) { console.error(e) }
  }, [notesByTopic, userName])

  // When userName changes, load their saved notes (if any)
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(`learn_notes_${userName}`)
      if (!raw) return
      const parsed = JSON.parse(raw)
      try {
        setTimeout(() => setNotesByTopic(parsed), 0)
      } catch { /* ignore stringification errors */ }
    } catch (e) { console.error(e) }
  }, [userName])

  return (
    <div className="tutorial-root">
      <aside>
        <div className="header-neon" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(90deg, #64ffda, #7c9fff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#041b2d', fontWeight: '700' }}>AI</div>
          <div>
            <div style={{ fontSize: 16, color: '#cfe6ff' }}>AI Mentor</div>
            <div style={{ fontSize: 12, color: '#9db3ff' }}>Cyborg Learning Hub</div>
          </div>
        </div>
        <h2 style={{ marginBottom: 8 }}>⚙️ AI Components — {userName}</h2>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <label style={{ fontSize: 12, color: '#bbb' }}>Name:</label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ padding: '6px', borderRadius: 6, background: '#111', color: '#fff', border: '1px solid #333' }}
          />
        </div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 12 }}>
          <CyborgFox width={84} height={84} className="decor-fox" />
          <CyborgOwl width={84} height={84} className="decor-owl" />
          <CyborgCat width={84} height={84} className="decor-cat" />
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 8 }}>
          <button onClick={() => setTopic('React Home')} title="Back to Index">Index</button>
          <button onClick={() => { navigator.clipboard?.writeText(window.location.href); }} title="Copy link to topic">Share</button>
        </div>
        <TutorialNav topics={TOPICS} current={topic} onSelect={setTopic} topicsStatus={topicsStatus} />
        <div style={{ marginTop: 12 }}>
          <div style={{ fontSize: 12, color: '#9fb7ff', marginBottom: 6 }}>Overall Progress</div>
          <div style={{ width: '100%', background: 'rgba(255,255,255,0.03)', borderRadius: 8, height: 12 }}>
            <div style={{ height: '100%', borderRadius: 8, background: 'linear-gradient(90deg,#64ffda,#7c9fff)', width: `${(Object.values(topicsStatus).filter(s => s === 'completed').length / TOPICS.length) * 100}%` }} />
          </div>
        </div>
        <div style={{ marginTop: 12 }}>
          <label style={{ fontSize: 12, color: '#aab3ff', display: 'flex', gap: 8, alignItems: 'center' }}>
            <input type="checkbox" checked={showNotes} onChange={(e) => setShowNotes(e.target.checked)} />
            <span>Show Notes Panel</span>
          </label>
        </div>
      </aside>
      <main>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <div>
            <div className="hero-title">Components Deep Dive — {topic}</div>
            <div className="hero-sub">Interactive examples, study tips and interview practice <span style={{ opacity: 0.7 }}>|</span> Futuristic Cyborg UI</div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {topic !== 'React Home' && <button onClick={() => setTopic('React Home')}>Index</button>}
            <button onClick={() => { navigator.clipboard?.writeText(window.location.href); }} title="Copy link to this topic">Share</button>
            <button onClick={() => setShowHelp(true)} title="Help">?</button>
          </div>
        </div>
        <Content topic={topic} userName={userName} setTopic={setTopic} topics={TOPICS} />
        {showNotes && (
          <NotesPanel topic={topic} notes={notesByTopic[topic]} setNotes={(val) => setNotesByTopic(prev => ({ ...prev, [topic]: val }))} />
        )}
        {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
        <ProgressControls
          userName={userName}
          topic={topic}
          status={topicsStatus[topic]}
          setStatus={(s) => setTopicsStatus(prev => ({ ...prev, [topic]: s }))}
          allStatus={topicsStatus}
          setAllStatus={setTopicsStatus}
          allNotes={notesByTopic}
          allContents={topicData}
        />
      </main>
    </div>
  )
}
