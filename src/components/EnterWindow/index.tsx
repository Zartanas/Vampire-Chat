import styles from './EnterWindow.module.scss'
import React from 'react'
import { EnterWindowContext } from '../../App'

const EnterWindow = () => {
  const context = React.useContext(EnterWindowContext)
  if (!context) return null
  const { setUserName, setIsEntered, setUsersList, userName } = context


  const EnterHandler = () => {
    setIsEntered(true)
    setUsersList((prev) => [...prev, {userName}])
    console.log(userName);
  }
  return (
    <div className={styles.wrapper}>
      <span>What is your name, Kindred?</span>
      <input
        value={userName}
        type="text"
        onChange={event => setUserName(event.target.value)} />
      <button onClick={EnterHandler}>Enter to chat</button>
      <img src="/src/assets/vampsmile.jpg" alt="" />
    </div>
  )
}

export default EnterWindow
