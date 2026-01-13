import React from 'react'
import styles from './MainChatWindow.module.scss'


const MainChatWindow = () => {
  return (
    <div className={styles.chatWindowWrapper}>
      <div className={styles.message}>
        <h3>Bloodsucker3000lol:</h3>
        <span>Всем привет, как дела? </span>
      </div>
      <div className={styles.message}>
        <h3>Zombie:</h3>
        <span>Йо! Давно не виделись! </span>
      </div>
    </div>
  )
}

export default MainChatWindow
