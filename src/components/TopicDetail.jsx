import React from 'react'
import topicData from '../data/topicData'

export default function TopicDetail({ topicKey, index }) {
  const data = topicData[topicKey]
  if (!data) return null
  return (
    <div className="card" style={{ marginTop: 16 }}>
      <h4>Detailed Explanation</h4>
      <p><strong>{index ? `${index}. ` : ''}{data.title}</strong></p>
      <p>{data.explanation}</p>
      {data.tips && (
        <div style={{ marginTop: 8 }}>
          <h5>Tips</h5>
          <ul>
            {data.tips.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </div>
      )}
      {data.interview && (
        <div style={{ marginTop: 8 }}>
          <h5>Interview Questions</h5>
          <ul>
            {data.interview.map((q, i) => (
              <li key={i}><strong>Q:</strong> {q.q}<br/><strong>A:</strong> {q.a}</li>
            ))}
          </ul>
        </div>
      )}
      {data.exercises && (
        <div style={{ marginTop: 8 }}>
          <h5>Exercises</h5>
          <ul>
            {data.exercises.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </div>
      )}
    </div>
  )
}
