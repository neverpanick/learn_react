import React, { useState } from 'react'
import { jsPDF } from 'jspdf'

const statuses = [
  { key: 'not-started', label: 'Not Started' },
  { key: 'in-progress', label: 'In Progress' },
  { key: 'completed', label: 'Completed' },
]

export default function ProgressControls({ userName, topic, status, setStatus, allStatus, setAllStatus, allNotes = {}, allContents = {} }) {
  const [message, setMessage] = useState('')

  function update(statusKey) {
    setStatus(statusKey)
    const next = { ...allStatus, [topic]: statusKey }
    setAllStatus(next)
    // Persist to localStorage
    if (userName) window.localStorage.setItem(`learn_progress_${userName}`, JSON.stringify(next))
    setMessage('Status saved locally')
    setTimeout(() => setMessage(''), 2000)
  }

  function resetProgress() {
    const cleared = Object.fromEntries(Object.keys(allStatus).map(k => [k, 'not-started']))
    setAllStatus(cleared)
    if (userName) window.localStorage.setItem(`learn_progress_${userName}`, JSON.stringify(cleared))
    setMessage('All progress reset')
    setTimeout(() => setMessage(''), 2000)
  }

  function exportPDF() {
    const doc = new jsPDF()
    doc.setFontSize(18)
    doc.text('Learning Progress Report', 16, 20)
    doc.setFontSize(12)
    const date = new Date()
    doc.text(`Name: ${userName}`, 16, 30)
    doc.text(`Date: ${date.toLocaleString()}`, 16, 36)

    let y = 48
    Object.entries(allStatus).forEach(([t, s], idx) => {
      doc.setFontSize(12)
      doc.text(`${idx + 1}. ${t} — ${s.replace('-', ' ')}`, 16, y)
      y += 8
      if (y > 270) {
        doc.addPage(); y = 20
      }
    })

    // Add study tips and interview Q&A to the PDF from allContents
    if (allContents && Object.keys(allContents).length) {
      y += 10
      doc.setFontSize(14)
      doc.text('Study Guide', 16, y)
      y += 6
      Object.entries(allContents).forEach(([t, contents]) => {
        doc.setFontSize(12)
        doc.setFont(undefined, 'bold')
        doc.text(`${t}`, 16, y)
        doc.setFont(undefined, 'normal')
        y += 6
        if (contents.explanation) {
          const lines0 = doc.splitTextToSize(contents.explanation, 170)
          doc.setFontSize(11)
          doc.text(lines0, 18, y)
          y += 6 * lines0.length
        }
        if (contents.tips) {
          const tipsText = `Tips: ${contents.tips.join('; ')}`
          const lines = doc.splitTextToSize(tipsText, 170)
          doc.text(lines, 18, y)
          y += 6 * lines.length
        }
        if (contents.interview) {
          const iv = contents.interview.map(q => `Q: ${q.q} — A: ${q.a}`).join('\n')
          const lines2 = doc.splitTextToSize(iv, 170)
          doc.text(lines2, 18, y)
          y += 6 * lines2.length
        }
        if (y > 270) { doc.addPage(); y = 20 }
      })
    }

    // Add study tips and notes to PDF - we use static study content if available from props (allNotes)
    y += 10
    doc.setFontSize(14)
    doc.text('Notes', 16, y)
    y += 6
    Object.entries(allNotes).forEach(([t, note], idx) => {
      const header = `${idx + 1}. ${t}`
      doc.setFontSize(12)
      doc.setFont(undefined, 'bold')
      doc.text(header, 16, y)
      doc.setFont(undefined, 'normal')
      y += 6
      const lines = doc.splitTextToSize(note || '(no notes)', 170)
      doc.text(lines, 18, y)
      y += 6 * lines.length
      if (y > 270) { doc.addPage(); y = 20 }
    })

    doc.save(`learning_progress_${(userName || 'user').replace(/\s+/g, '_')}.pdf`)
    setMessage('PDF saved to your downloads folder')
    setTimeout(() => setMessage(''), 2000)
  }

  return (
    <div style={{ marginTop: '1rem' }}>
      <div style={{ fontSize: 13, color: '#bbb', marginBottom: 6 }}>Current status: <strong style={{ color: '#fff' }}>{(status || 'not-started').replace('-', ' ')}</strong></div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        {statuses.map(s => (
          <button
            key={s.key}
            className={`progress-btn ${s.key === status ? 'active' : ''}`}
            onClick={() => update(s.key)}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '8px' }}>
        <button onClick={exportPDF} style={{ background: '#1e88e5', color: '#fff' }}>Save & Export PDF</button>
        <button onClick={resetProgress}>Reset</button>
      </div>
      {message && <p style={{ marginTop: '0.5rem', color: '#8f8' }}>{message}</p>}
    </div>
  )
}
