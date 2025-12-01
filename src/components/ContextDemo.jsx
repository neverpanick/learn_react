import React, { useState, createContext, useContext } from 'react'
import topicData from '../data/topicData'
import TopicDetail from './TopicDetail'

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} })

function ThemeConsumerExample() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div>
      <div>Current theme: {theme}</div>
      <button onClick={toggleTheme} style={{ marginTop: 8 }}>Toggle Theme</button>
    </div>
  )
}

export default function ContextDemo() {
  const data = topicData['Context']
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <h3>{data.title}</h3>
        <p>{data.explanation}</p>
        <div className="card" style={{ marginTop: 12 }}>
          <h4>Interactive example</h4>
          <ThemeConsumerExample />
        </div>
        <div className="card" style={{ marginTop: 12 }}>
          <h4>Best practice</h4>
          <ul>
            <li>Use Context sparingly for global settings like theme or auth</li>
            <li>Context triggers re-renders for consumers, keep values stable (useMemo/useCallback)</li>
          </ul>
        </div>
        <TopicDetail topicKey={'Context'} />
      </div>
    </ThemeContext.Provider>
  )
}
