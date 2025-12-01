import React from 'react'

export default function Intro({ userName }) {
  return (
    <div>
      <h3>Welcome to the Components Tutorial, {userName || 'friend'} 👋</h3>
      <p>React components allow you to split the UI into independent, reusable pieces.</p>
      <ul>
        <li><strong>Props</strong> — inputs passed into components (read-only).</li>
        <li><strong>State</strong> — local, mutable data inside a component.</li>
        <li><strong>Events</strong> — respond to user actions like clicks and typing.</li>
        <li><strong>Composition</strong> — combine components together.</li>
        <li><strong>Lifecycle</strong> — useEffect to respond to mount/update/unmount.</li>
      </ul>
      <p>Click the topics on the left to view short examples and try them out.</p>
    </div>
  )
}
