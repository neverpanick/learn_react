import React, { useState } from 'react'
import TopicDetail from './TopicDetail'

export default function ControlledInput() {
  const [name, setName] = useState('')

  return (
    <div>
      <h3>Controlled Input Example</h3>
      <p>Controlled inputs use state to keep input values in React.</p>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, <strong>{name || 'friend'}</strong></p>
      <div className="card" style={{ marginTop: 16 }}>
        <h4>Study Tips & Interview Questions</h4>
        <ul>
          <li>Controlled components keep form values in React state — this gives you single-source truth and simpler validation.</li>
          <li>Uncontrolled components leave the DOM to maintain the input value and you use refs to read the value.</li>
        </ul>
        <h5>Common interview questions</h5>
        <ul>
          <li>Q: When to use controlled vs uncontrolled? A: Use controlled for complex forms (validation) and uncontrolled for simple inputs or performance-sensitive situations.</li>
        </ul>
      </div>
      <TopicDetail topicKey={'Controlled Input'} />
    </div>
  )
}
