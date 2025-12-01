import React from 'react'
import styles from './CssModulesDemo.module.css'
import TopicDetail from './TopicDetail'

export default function CssModulesDemo() {
  return (
    <div>
      <h3>CSS Modules Demo</h3>
      <div className={styles.container}>
        <div className={styles.title}>Scoped Styles with CSS Modules</div>
        <div className={styles.text}>Class names are local by default. This avoids collisions with global CSS.</div>
      </div>
      <TopicDetail topicKey={'CSS Modules'} />
    </div>
  )
}
