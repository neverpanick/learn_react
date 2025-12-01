import React, { useRef, useEffect } from 'react'

export default function TutorialNav({ topics, current, onSelect, topicsStatus = {} }) {
  const refs = useRef([])

  useEffect(() => {
    // Ensure the current button is in focus when selected programmatically
    const idx = topics.indexOf(current)
    if (idx >= 0 && refs.current[idx]) refs.current[idx].focus()
  }, [current, topics])

  function onKeyDown(e, idx) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = (idx + 1) % topics.length
      refs.current[next]?.focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const prev = (idx - 1 + topics.length) % topics.length
      refs.current[prev]?.focus()
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onSelect(topics[idx])
    }
  }

  return (
    <nav className="tutorial-nav" aria-label="Tutorial topics">
      {topics.map((topic, idx) => (
        <button
          ref={(el) => (refs.current[idx] = el)}
          key={topic}
          className={topic === current ? 'active' : ''}
          onClick={() => onSelect(topic)}
          onKeyDown={(e) => onKeyDown(e, idx)}
          aria-current={topic === current ? 'true' : undefined}
        >
          <span className={`serial`}>{idx + 1}.</span>
          <span className={`status-dot ${topicsStatus[topic] || 'not-started'}`}></span>
          {topic}
        </button>
      ))}
    </nav>
  )
}
