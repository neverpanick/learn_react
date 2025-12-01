import React from 'react'
import topicData from '../data/topicData'

export default function IndexPage({ topics, onOpen }) {
  const [filter, setFilter] = React.useState('')
  const filtered = topics.filter(t => (topicData[t]?.title || t).toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h3>React Tutorial Index</h3>
      <p>Browse topics by serial number and click to open a topic demo or the study details.</p>
      <div style={{ marginTop: 8, marginBottom: 8 }}>
        <input placeholder="Search topics…" value={filter} onChange={(e) => setFilter(e.target.value)} style={{ width: '100%', padding: 8 }} />
      </div>
      <div className="card" style={{ marginTop: 12 }}>
        <div style={{ display: 'grid', gap: 8 }}>
          {filtered.map((t) => (
            <div key={t} className="index-item" style={{ display: 'flex', gap: 8, justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <div className="serial" style={{ width: 34, textAlign: 'right', color: '#9db3ff' }}>{topics.indexOf(t) + 1}.</div>
                <div className="index-content" style={{ minWidth: 260 }}>
                  <div className="index-title" style={{ fontWeight: 600 }}>{topicData[t]?.title || t}</div>
                  <div className="index-sub" style={{ fontSize: 13, color: '#bfeaff' }}>{(topicData[t]?.explanation || '').slice(0, 120)}{(topicData[t]?.explanation || '').length > 120 ? '…' : ''}</div>
                </div>
              </div>
              <div>
                <button onClick={() => onOpen(t)} style={{ marginRight: 8 }}>Open</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
