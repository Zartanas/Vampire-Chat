import './App.css'
import React, { useState } from 'react'
import EnterWindow from './components/EnterWindow'
import ChatWindow from './components/ChatWindow'

type UserListPropsType = {
  userName: string
}

type EnterWindowContextPropsType = {
  setUserName: React.Dispatch<React.SetStateAction<string>>
  setIsEntered: React.Dispatch<React.SetStateAction<boolean>>
  setUsersList: React.Dispatch<React.SetStateAction<UserListPropsType[]>>
  userName: string
  isEntered: boolean
}

type ChatWindowContextPropsType = {
  setUserName: React.Dispatch<React.SetStateAction<string>>
  setUsersList: React.Dispatch<React.SetStateAction<UserListPropsType[]>>
  setIsEntered: React.Dispatch<React.SetStateAction<boolean>>
  usersList: Array<UserListPropsType>
  
}

export const EnterWindowContext = React.createContext<EnterWindowContextPropsType | null>(null)
export const ChatWindowContext = React.createContext<ChatWindowContextPropsType | null>(null)

function App() {
  const [userName, setUserName] = useState('')
  const [isEntered, setIsEntered] = useState(false)
  const [usersList, setUsersList] = useState<UserListPropsType[]>([])
  console.log(usersList);
  
  return (
    <div>
      <EnterWindowContext.Provider value={{ setUserName, setIsEntered, setUsersList, isEntered, userName }}>
        {!isEntered && <EnterWindow />}
      </EnterWindowContext.Provider>
      <ChatWindowContext.Provider value={{ setUsersList, setIsEntered, setUserName, usersList }}>
        {isEntered && <ChatWindow />}
      </ChatWindowContext.Provider>
    </div>
  )
}

export default App
