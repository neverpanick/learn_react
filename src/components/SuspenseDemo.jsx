import React, { lazy, Suspense } from 'react'
import TopicDetail from './TopicDetail'

const Slow = lazy(() => new Promise(resolve => {
  setTimeout(() => {
    // a very small component to show delay
    resolve({ default: () => <div style={{ padding: 12 }}>Slow loaded content (simulating network).</div> })
  }, 1200)
}))

export default function SuspenseDemo() {
  return (
    <div>
      <h3>Suspense Demo</h3>
      <p>This demonstrates `React.Suspense` with a lazy-loaded component and a fallback while loading.</p>

      <div className="card">
        <Suspense fallback={<div>Loading slow content...</div>}>
          <Slow />
        </Suspense>
      </div>

      <TopicDetail topicKey={'Suspense'} />
    </div>
  )
}
