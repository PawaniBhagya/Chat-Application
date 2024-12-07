import React from 'react'
import './Chat.css'
import LeftSideBar from '../../../components/LeftSideBar/LeftSideBar'
import ChatBox from '../../../components/ChatBox/ChatBox'
import RightSideBar from '../../../components/RightSideBar/RightSideBar'

const Chat = () => {
  return (
    <div className='Chat'>
      <div className="Chat-container">
        <LeftSideBar />
        <ChatBox />
        <RightSideBar />
      </div>
    </div>

  )
}

export default Chat;
