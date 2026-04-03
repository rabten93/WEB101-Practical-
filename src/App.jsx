import { useState } from 'react'
import Sidebar from './components/Sidebar'
import ChatList from './components/ChatList'
import ChatWindow from './components/ChatWindow'
import { chats as initialChats } from './data/chats'

function App() {
  const [chatData, setChatData] = useState(initialChats)
  const [selectedChatId, setSelectedChatId] = useState(initialChats[0].id)

  const selectedChat = chatData.find((chat) => chat.id === selectedChatId)

  const handleSelectChat = (chat) => {
    setSelectedChatId(chat.id)
  }

  const handleSendMessage = (text) => {
    setChatData((prevChats) =>
      prevChats.map((chat) => {
        if (chat.id === selectedChatId) {
          const newMessage = {
            id: chat.messages.length + 1,
            text,
            sent: true,
            time: "Now"
          }

          return {
            ...chat,
            lastMessage: text,
            time: "Now",
            messages: [...chat.messages, newMessage]
          }
        }
        return chat
      })
    )
  }

  return (
    <div className="app">
      <Sidebar />
      <ChatList
        chats={chatData}
        selectedChat={selectedChat}
        onSelect={handleSelectChat}
      />
      <ChatWindow chat={selectedChat} onSendMessage={handleSendMessage} />
    </div>
  )
}

export default App