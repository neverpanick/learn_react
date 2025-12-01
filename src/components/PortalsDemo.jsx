import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import TopicDetail from './TopicDetail'

export default function PortalsDemo() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <h3>Portals Demo (Modal)</h3>
      <p>Portals render children to a DOM node outside the parent hierarchy — useful for modals or overlays.</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => setOpen(true)} style={{ background: '#1976d2', color: '#fff' }}>Open Modal</button>
      </div>

      {open && typeof document !== 'undefined' && createPortal(
        <div className="modal-overlay" style={{ position: 'fixed', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.6)' }}>
          <div className="card" style={{ width: 480 }}>
            <h4>Modal Title</h4>
            <p>This is rendered using a portal which mounts the element outside the component tree.</p>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>
        </div>,
        document.body
      )}

      <div className="card" style={{ marginTop: 12 }}>
        <h4>Tips</h4>
        <ul>
          <li>Use portals for modals, tooltips, or overlays to avoid z-index and stacking problems.</li>
          <li>Manage focus and keyboard accessibility — trap focus inside modals.</li>
        </ul>
      </div>

      <TopicDetail topicKey={'Portals'} />
    </div>
  )
}
