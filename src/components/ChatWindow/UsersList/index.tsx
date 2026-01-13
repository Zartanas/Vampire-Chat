import React from 'react'
import styles from './UsersList.module.scss'
import { ChatWindowContext } from '../../../App'

const UsersList = () => {
  const context = React.useContext(ChatWindowContext)
  if (!context) return null
  const { usersList } = context

  return (
    <div className={styles.userListWrapper}>
      <span>Online:</span>
    
      {
        usersList.map((userName, index) => {
          return (
            <a key={index}>{userName.userName}</a>
          )
        })
      }

    </div>
  )
}

export default UsersList
