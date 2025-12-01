import React from 'react'
import topicData from '../data/topicData'
import TopicDetail from './TopicDetail'

export default function TestingDemo() {
  const data = topicData['Testing']
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.explanation}</p>
      <div className="card" style={{ marginTop: 12 }}>
        <h4>Common tools</h4>
        <ul>
          <li>Jest for unit testing and snapshot testing</li>
          <li>React Testing Library for DOM-focused component tests</li>
          <li>Mock network requests using msw (Mock Service Worker)</li>
        </ul>
      </div>
      <TopicDetail topicKey={'Testing'} />
    </div>
  )
}
