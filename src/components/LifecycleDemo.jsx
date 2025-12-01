import React, { useEffect, useState } from 'react'
import TopicDetail from './TopicDetail'

export default function LifecycleDemo() {
  const [time, setTime] = useState(() => Date.now())

  useEffect(() => {
    // Equivalent to componentDidMount -> set up interval
    const id = setInterval(() => setTime(Date.now()), 1000)
    return () => clearInterval(id) // Clean up => componentWillUnmount
  }, [])

  return (
    <div>
      <h3>Lifecycle Example (useEffect)</h3>
      <p>This component shows the current timestamp and updates every second.</p>
      <p>Timestamp: <strong>{new Date(time).toLocaleTimeString()}</strong></p>
      <div className="card" style={{ marginTop: 16 }}>
        <h4>Study Tips & Interview Questions</h4>
        <ul>
          <li><code>useEffect</code> runs after the component renders. Use the dependency array to control when it runs.</li>
          <li>Cleanup functions run when the component unmounts or before the effect runs again.</li>
          <li>Common mistakes: adding a dependency that changes every render or not cleaning up timers/intervals.</li>
        </ul>
        <h5>Common interview questions</h5>
        <ul>
          <li>Q: How do you replace lifecycle methods like componentDidMount with hooks? A: Use useEffect with an empty dependency array to simulate mount.</li>
          <li>Q: How do you avoid infinite loops with useEffect? A: Ensure dependencies are stable or memoize functions used in the effect.</li>
        </ul>
      </div>
      <TopicDetail topicKey={'Lifecycle'} />
    </div>
  )
}
