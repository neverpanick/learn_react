import React from 'react'
import { createPortal } from 'react-dom'

export default function HelpModal({ onClose }) {
  if (typeof document === 'undefined') return null

  return createPortal(
    <div style={{ position: 'fixed', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999 }}>
      <div style={{ background: '#011', padding: 20, borderRadius: 8, width: 580, color: '#fff' }}>
        <h3>How to use the learning app</h3>
        <ul>
          <li>Use the left nav (arrow keys supported) to pick topics.</li>
          <li>Open the Index to search topics quickly.</li>
          <li>Click Share to copy a link to the current topic that you can share or bookmark.</li>
          <li>Use the Notes panel to capture per-topic notes that export to your PDF.</li>
        </ul>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>,
    document.body
  )
}
