import React from 'react'
import styles from './MessageInputField.module.scss'
import { ChatWindowContext } from '../../../App'

const MessageInputField = () => {
  const context = React.useContext(ChatWindowContext)
  if (!context) return null
  const { setIsEntered, setUserName } = context

  const exitHandler = () => {
    setIsEntered(false)
    setUserName('')
  }
  
  return (
    <div className={styles.root}>
      <span>Your message:</span>
      <input type="text" />
      <button>Send</button>
      <img src="/src/assets/chatimg.jpg" alt="" />
      <button onClick={exitHandler}>Leave the chat</button>

    </div>
  )
}

export default MessageInputField
