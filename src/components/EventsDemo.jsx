import React, { useState } from 'react'
import TopicDetail from './TopicDetail'

export default function EventsDemo() {
  const [message, setMessage] = useState('No event yet')

  return (
    <div>
      <h3>Events Example</h3>
      <p>Events are things like clicks and form submissions. This example demonstrates handling a click and keyboard typing.</p>
      <button onClick={() => setMessage('You clicked the button!')}>Click me</button>
      <div style={{marginTop: '1rem'}}>
        <input
          type="text"
          placeholder="Type something and press Enter"
          onKeyDown={(e) => e.key === 'Enter' && setMessage(`You typed: ${e.target.value}`)}
        />
      </div>
      <p style={{marginTop: '1rem'}}><em>Event result:</em> {message}</p>
      <div className="card" style={{ marginTop: 16 }}>
        <h4>Study Tips & Interview Questions</h4>
        <ul>
          <li>React events wrap native DOM events in a cross-browser SyntheticEvent — you can use stopPropagation and preventDefault.</li>
          <li>To pass extra arguments to handlers, wrap the handler in an arrow function: <code>{'onClick={(e) => handle(e, item)}'}</code>.</li>
        </ul>
        <h5>Common interview questions</h5>
        <ul>
          <li>Q: How do you stop a form from submitting? A: Use <code>e.preventDefault()</code> in the submit handler.</li>
          <li>Q: How to handle custom events? A: Use callbacks passed through props and call them when needed.</li>
        </ul>
      </div>
      <TopicDetail topicKey={'Events'} />
    </div>
  )
}
