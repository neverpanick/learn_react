import React from 'react'
import topicData from '../data/topicData'
import TopicDetail from './TopicDetail'

export default function HooksDeepDive() {
  const data = topicData['Hooks Deep Dive']
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.explanation}</p>
      <div className="card" style={{ marginTop: 12 }}>
        <h4>Key practical examples</h4>
        <ul>
          <li>useMemo: memoize expensive calculations</li>
          <li>useCallback: memoize event handlers passed to children</li>
          <li>useRef: keep DOM references or mutable values without re-render</li>
          <li>useReducer: manage complex state transitions</li>
        </ul>
      </div>
      <TopicDetail topicKey={'Hooks Deep Dive'} />
    </div>
  )
}
