import React from 'react'
import styles from './MainChatWindow.module.scss'


const MainChatWindow = () => {
  return (
    <div className={styles.chatWindowWrapper}>
      <div className={styles.message}>
        <h3>Bloodsucker3000lol:</h3>
        <span>Hello everyone, how are you? </span>
      </div>
      <div className={styles.message}>
        <h3>Zombie:</h3>
        <span>Yo! Long time no see! </span>
      </div>
    </div>
  )
}

export default MainChatWindow
