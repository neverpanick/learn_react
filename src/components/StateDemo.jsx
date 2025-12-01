import React, { useState } from 'react'
import TopicDetail from './TopicDetail'

export default function StateDemo() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>State Example</h3>
      <p>State holds local data that changes over time. This example demonstrates a counter using <code>useState</code>.</p>
      <div style={{display:'flex', gap: '8px', alignItems: 'center'}}>
        <button onClick={() => setCount(c => c - 1)}>-</button>
        <strong>{count}</strong>
        <button onClick={() => setCount(c => c + 1)}>+</button>
      </div>
      <div className="card" style={{ marginTop: 12 }}>
        <h4>Short code example</h4>
        <div className="code-snippet">{`const [count, setCount] = useState(0)
setCount(prev => prev + 1)`}</div>
      </div>
      <div className="card" style={{ marginTop: 16 }}>
      <h4>Study Tips & Interview Questions</h4>
      <ul>
        <li>Use the <code>useState</code> hook to add local (per-component) state in functional components.</li>
        <li>When the next state depends on the previous state, pass an updater function to <code>setState</code> (e.g., <code>{'setCount(c => c + 1)'}</code>).</li>
        <li>Avoid mutating state directly — always create a new object/array for React to detect changes.</li>
      </ul>
      <h5>Common interview questions</h5>
      <ul>
        <li>Q: Why not mutate state directly? A: React relies on immutability to detect changes and schedule updates.</li>
        <li>Q: What happens if you call setState multiple times in one function? A: React may batch updates; use updater functions when needed.</li>
      </ul>
      </div>
      <TopicDetail topicKey={'State'} />
    </div>
  )
}
