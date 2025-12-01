import React, { useEffect, useState } from 'react'
import TopicDetail from './TopicDetail'

function HashLink({ to, children }) {
  return (
    <a href={`#${to}`} onClick={(e) => { e.preventDefault(); window.location.hash = to; }} style={{ marginRight: 8 }}>{children}</a>
  )
}

export default function RouterDemo() {
  const [route, setRoute] = useState(window.location.hash.replace('#', '') || 'home')

  useEffect(() => {
    function onHashChange() {
      setRoute(window.location.hash.replace('#', '') || 'home')
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <div>
      <h3>Router Demo (lightweight hash-based router)</h3>
      <p>This demo shows basic client-side routing using the URL hash and `window.location.hash` listeners.</p>
      <div className="card">
        <div style={{ marginBottom: 8 }}>
          <HashLink to="home">Home</HashLink>
          <HashLink to="about">About</HashLink>
          <HashLink to="contact">Contact</HashLink>
        </div>
        <div style={{ paddingTop: 8 }}>
          {route === 'home' && <div>🎯 Home — basic landing</div>}
          {route === 'about' && <div>ℹ️ About — additional info</div>}
          {route === 'contact' && <div>📞 Contact — fake contact info</div>}
        </div>
      </div>
      <TopicDetail topicKey={'Router'} />
    </div>
  )
}
