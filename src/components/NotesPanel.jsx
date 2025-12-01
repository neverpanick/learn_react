import React, { useState, useEffect } from 'react'

export default function NotesPanel({ topic, notes, setNotes }) {
  const [draft, setDraft] = useState(notes || '')

  useEffect(() => {
    // Keep the draft sync but update asynchronously to avoid triggering a synchronous setState
    if (notes !== draft) {
      const id = setTimeout(() => setDraft(notes || ''), 0)
      return () => clearTimeout(id)
    }
    return undefined
  }, [notes, topic, draft])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNotes(draft)
      // store is handled in App (centralized), so we just call setNotes
    }, 500)
    return () => clearTimeout(timeout)
  }, [draft, setNotes])

  function clearNote() {
    setDraft('')
    setNotes('')
  }

  return (
    <div className="card" style={{ marginTop: 18 }}>
      <h4>Notes for: {topic}</h4>
      <textarea
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder={`Write your notes for ${topic} — these will be saved and included in your PDF`}
        rows={8}
        style={{ width: '100%', padding: 10, borderRadius: 8, background: 'transparent', color: '#ddd', border: '1px solid rgba(255,255,255,0.04)' }}
      />
      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 8 }}>
        <button onClick={() => { navigator.clipboard?.writeText(draft); }} title="Copy to clipboard">Copy</button>
        <button onClick={clearNote} style={{ background: '#c62828', color: '#fff' }}>Clear</button>
      </div>
    </div>
  )
}
