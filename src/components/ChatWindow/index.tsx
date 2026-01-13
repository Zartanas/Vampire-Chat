import styles from './ChatWindow.module.scss'
import React from 'react'
import UsersList from './UsersList'
import MainChatWindow from './MainChatWindow'
import MessageInputField from './MessageInputField'

const ChatWindow = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.topBlockWrapper}>
        <MainChatWindow />
        <UsersList />
      </div>
      <div>
        <MessageInputField />
      </div>

    </div>
  )
}

export default ChatWindow
