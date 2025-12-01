import React, { useState } from 'react'
import TopicDetail from './TopicDetail'

export default function FormDemo() {
  const [form, setForm] = useState({ name: '', email: '', country: '', message: '' })
  const [checkboxes, setCheckboxes] = useState({ js: false, react: false, css: false })
  const [radio, setRadio] = useState('option1')
  const [submitted, setSubmitted] = useState(null)

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleCheckboxChange(e) {
    const { name, checked } = e.target
    setCheckboxes(prev => ({ ...prev, [name]: checked }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const interests = Object.keys(checkboxes).filter(k => checkboxes[k])
    setSubmitted({ ...form, interests, radio })
  }

  function clear() {
    setForm({ name: '', email: '', country: '', message: '' })
    setCheckboxes({ js: false, react: false, css: false })
    setRadio('option1')
    setSubmitted(null)
  }

  return (
    <div>
      <h3>Forms Demo</h3>
      <p>This demo shows controlled components for a form with text inputs, textarea, select, checkboxes and radio inputs.</p>
      <form onSubmit={handleSubmit} className="card" style={{ display: 'grid', gap: 8 }}>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} />
        </label>
        <label>
          Email
          <input name="email" value={form.email} onChange={handleChange} />
        </label>
        <label>
          Country
          <select name="country" value={form.country} onChange={handleChange}>
            <option value="">(select)</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
          </select>
        </label>
        <label>
          Message
          <textarea name="message" value={form.message} onChange={handleChange} rows={4} />
        </label>
        <div>
          <div>Interests</div>
          <label><input type="checkbox" name="js" checked={checkboxes.js} onChange={handleCheckboxChange} /> JS</label>
          <label><input type="checkbox" name="react" checked={checkboxes.react} onChange={handleCheckboxChange} /> React</label>
          <label><input type="checkbox" name="css" checked={checkboxes.css} onChange={handleCheckboxChange} /> CSS</label>
        </div>
        <div>
          <div>Pick one</div>
          <label><input type="radio" name="radioGroup" value="option1" checked={radio === 'option1'} onChange={(e) => setRadio(e.target.value)} /> Option 1</label>
          <label><input type="radio" name="radioGroup" value="option2" checked={radio === 'option2'} onChange={(e) => setRadio(e.target.value)} /> Option 2</label>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="submit" style={{ background: '#1e88e5', color: '#fff' }}>Submit</button>
          <button type="button" onClick={clear}>Reset</button>
        </div>
      </form>

      {submitted && (
        <div className="card" style={{ marginTop: 12 }}>
          <h4>Submitted Data</h4>
          <pre style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}

      <div className="card" style={{ marginTop: 12 }}>
        <h4>Study Tips & Exercises</h4>
        <ul>
          <li>Practice controlled vs uncontrolled inputs using refs.</li>
          <li>Use `onBlur` for validation to avoid re-rendering on each keystroke if necessary.</li>
        </ul>
      </div>
      <TopicDetail topicKey={'Forms'} />
    </div>
  )
}
