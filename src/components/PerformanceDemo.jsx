import React from 'react'
import topicData from '../data/topicData'
import TopicDetail from './TopicDetail'

export default function PerformanceDemo() {
  const data = topicData['Performance']
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.explanation}</p>
      <div className="card" style={{ marginTop: 12 }}>
        <h4>Quick tips</h4>
        <ul>
          <li>Profile your app using React DevTools profiler</li>
          <li>Use memoization (useMemo/useCallback) where appropriate</li>
          <li>Use lazy-loading and code-splitting for large dependencies</li>
        </ul>
      </div>
      <TopicDetail topicKey={'Performance'} />
    </div>
  )
}
