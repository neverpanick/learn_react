import React from 'react'
import TopicDetail from './TopicDetail'

export default function ListDemo() {
  const todos = [
    { id: 1, text: 'Learn components' },
    { id: 2, text: 'Practice props & state' },
    { id: 3, text: 'Build small apps' },
  ]

  return (
    <div>
      <h3>Lists & Keys Example</h3>
      <p>When rendering lists in React, use a unique <code>key</code> so React can track items.</p>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <div className="card" style={{ marginTop: 16 }}>
        <h4>Study Tips & Interview Questions</h4>
        <ul>
          <li>Always provide a stable <code>key</code> when rendering lists — use an id when possible, not the array index.</li>
          <li>Keys let React match elements between renders and avoid unnecessary DOM updates.</li>
        </ul>
        <h5>Common interview questions</h5>
        <ul>
          <li>Q: What happens if you use the index as key? A: Reordering items may lead to incorrect preserved state and re-renders.</li>
        </ul>
      </div>
      <TopicDetail topicKey={'Lists'} />
    </div>
  )
}
