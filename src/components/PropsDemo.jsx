import React from 'react'
import TopicDetail from './TopicDetail'

function Welcome({ name }) {
  return <div>Hello, {name}!</div>
}

export default function PropsDemo() {
  return (
    <div>
      <h3>Props Example</h3>
      <p>Props are how you pass inputs to a component.</p>
      <p>Below are three uses of the <code>Welcome</code> component with different props.</p>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
      <div className="card" style={{ marginTop: 12 }}>
        <h4>Short code example</h4>
        <div className="code-snippet">
          {`function Welcome({ name }) {
  return <div>Hello, ${`{name}`}</div>
}`}
        </div>
      </div>
      <div className="card" style={{ marginTop: 16 }}>
        <h4>Study Tips & Interview Questions</h4>
        <ul>
          <li>Props are the way a parent component passes data to a child — they are read-only in the child.</li>
          <li>Pass functions as props if you want the child to notify the parent of events (callback props).</li>
          <li>Practice: pass data arrays, objects, and functions as props and see how the child uses them.</li>
        </ul>
        <h5>Common interview questions</h5>
        <ul>
          <li>Q: What's the difference between props and state? A: Props are external inputs to a component; state is internal to it.</li>
          <li>Q: How do you provide default values for props? A: Use defaultProps (older) or default parameters in the function signature.</li>
        </ul>
      </div>
      <TopicDetail topicKey={'Props'} />
    </div>
  )
}
