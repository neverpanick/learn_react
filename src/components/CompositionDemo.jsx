import React from 'react'
import TopicDetail from './TopicDetail'

function Card({ title, children }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <div>{children}</div>
    </div>
  )
}

export default function CompositionDemo() {
  return (
    <div>
      <h3>Composition Example</h3>
      <p>Use composition to build complex UIs from smaller pieces.</p>
      <Card title="Card 1">This is a reusable card content.</Card>
      <Card title="Card 2">
        Content can include other elements and even other components.
      </Card>
      <div className="card" style={{ marginTop: 16 }}>
        <h4>Study Tips & Interview Questions</h4>
        <ul>
          <li>Prefer composition over inheritance — compose UI by passing children or props to reusable components.</li>
          <li>Higher-order components and render props are ways to reuse component logic.</li>
        </ul>
        <h5>Common interview questions</h5>
        <ul>
          <li>Q: What is the difference between HOC and render props? A: HOCs wrap components, render props pass a function to render content dynamically.</li>
        </ul>
      </div>
      <TopicDetail topicKey={'Composition'} />
    </div>
  )
}
