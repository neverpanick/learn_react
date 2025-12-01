import React, { useRef } from 'react'
import TopicDetail from './TopicDetail'

const FancyInput = React.forwardRef(function FancyInput(props, ref) {
  return <input ref={ref} {...props} />
})

export default function ForwardRefDemo() {
  const ref = useRef(null)

  function focusIt() {
    ref.current?.focus()
  }

  return (
    <div>
      <h3>Forward Ref Demo</h3>
      <p>Forward refs allow parent components to pass refs to child components and access DOM methods.</p>
      <div className="card">
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <FancyInput ref={ref} placeholder="Click the button to focus me" />
          <button onClick={focusIt}>Focus</button>
        </div>
      </div>
      <TopicDetail topicKey={'Forward Ref'} />
    </div>
  )
}
