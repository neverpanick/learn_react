import React, { useReducer } from 'react'
import TopicDetail from './TopicDetail'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: 0 }
    default:
      return state
  }
}

export default function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div>
      <h3>useReducer Demo</h3>
      <p>useReducer is useful for complex state transitions; here we implement a counter.</p>
      <div className="card">
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
          <div style={{ minWidth: 40, textAlign: 'center' }}>{state.count}</div>
          <button onClick={() => dispatch({ type: 'increment' })}>+</button>
          <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
      </div>
      <TopicDetail topicKey={'useReducer'} />
    </div>
  )
}
