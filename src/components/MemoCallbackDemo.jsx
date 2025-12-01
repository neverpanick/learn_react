import React, { useState, useCallback, useMemo } from 'react'
import TopicDetail from './TopicDetail'

function Child({ value, onClick }) {
  console.log('Child render')
  return (
    <div style={{ padding: 8 }}>
      <div>Child value: {value}</div>
      <button onClick={onClick}>Child Trigger</button>
    </div>
  )
}

export default function MemoCallbackDemo() {
  const [count, setCount] = useState(0)
  const [letters, setLetters] = useState('')

  const onChildClick = useCallback(() => {
    setCount((c) => c + 1)
  }, [])

  const computed = useMemo(() => {
    // pretend expensive operation
    let sum = 0
    for (let i = 0; i < 40000; i++) sum += i
    return `${count} (${sum})`
  }, [count])

  return (
    <div>
      <h3>useMemo & useCallback Demo</h3>
      <p>useCallback memoizes functions, useMemo memoizes computed values; both help avoid unnecessary renders.</p>
      <div className="card">
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div>Count: {count}</div>
          <div>Computed: {computed}</div>
          <button onClick={() => setCount(c => c + 1)}>Inc</button>
        </div>
        <div style={{ marginTop: 8 }}>
          <Child value={letters} onClick={onChildClick} />
          <input value={letters} onChange={(e) => setLetters(e.target.value)} placeholder="Type to test memoization" />
        </div>
      </div>
      <TopicDetail topicKey={'useCallback'} />
    </div>
  )
}
