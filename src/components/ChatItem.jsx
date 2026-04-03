function ChatItem({ chat, isActive, onSelect }) {
  return (
    <div
      className={`chat-item ${isActive ? 'active' : ''}`}
      onClick={() => onSelect(chat)}
    >
      <div className="avatar">{chat.avatar}</div>

      <div className="chat-details">
        <div className="chat-top-row">
          <h4>{chat.name}</h4>
          <span>{chat.time}</span>
        </div>
        <p>{chat.lastMessage}</p>
      </div>
    </div>
  )
}

export default ChatItem