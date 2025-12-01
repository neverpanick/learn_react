import React from 'react'
import TopicDetail from './TopicDetail'

function withTimestamp(Component) {
  const WrappedComponent = Component
  return function WithTimestamp(props) {
    return <WrappedComponent {...props} ts={Date.now()} />
  }
}

function Simple({ name, ts }) {
  return (
    <div>
      <div>Hello {name}</div>
      <div style={{ fontSize: 12, color: '#9bb' }}>Timestamp: {new Date(ts).toLocaleTimeString()}</div>
    </div>
  )
}

const Enhanced = withTimestamp(Simple)

export default function HOCDemo() {
  return (
    <div>
      <h3>Higher Order Component (HOC) Demo</h3>
      <p>HOCs wrap components to enhance props/behavior. Hooks often replace HOCs for simpler composition in modern apps.</p>
      <div className="card">
        <Enhanced name="Visitor" />
      </div>
      <TopicDetail topicKey={'HOC'} />
    </div>
  )
}
