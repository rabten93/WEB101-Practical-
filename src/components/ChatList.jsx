import ChatItem from './ChatItem'

function ChatList({ chats, selectedChat, onSelect }) {
  return (
    <section className="chat-list-panel">
      <div className="chat-list-header">
        <h2>Chats</h2>
        <input type="text" placeholder="Search or start new chat" />
      </div>

      <div className="chat-list">
        {chats.map((chat) => (
          <ChatItem
            key={chat.id}
            chat={chat}
            isActive={selectedChat.id === chat.id}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  )
}

export default ChatList