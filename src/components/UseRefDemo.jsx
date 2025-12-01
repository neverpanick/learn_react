import React, { useRef, useState, useEffect } from 'react'
import TopicDetail from './TopicDetail'

export default function UseRefDemo() {
  const inputRef = useRef(null)
  const renderCount = useRef(0)
  useEffect(() => {
    // run after every render to update the renderCount (internal only) — don't read it during render to avoid lint warnings
    renderCount.current += 1
  })
  const [value, setValue] = useState('')

  return (
    <div>
      <h3>useRef Demo</h3>
      <p>useRef keeps a mutable value that doesn’t trigger re-render when updated; it's also used for DOM refs.</p>
      <div className="card" style={{ marginTop: 12 }}>
        <label>
          Type & focus
          <input ref={inputRef} value={value} onChange={e => setValue(e.target.value)} />
        </label>
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <button onClick={() => inputRef.current?.focus()}>Focus input</button>
          <button onClick={() => { if (inputRef.current) inputRef.current.value = ''; setValue('') }}>Clear</button>
        </div>
        <div style={{ marginTop: 8 }}>Render count is tracked (use devtools to inspect)</div>
      </div>
      <TopicDetail topicKey={'useRef'} index={null} />
    </div>
  )
}
