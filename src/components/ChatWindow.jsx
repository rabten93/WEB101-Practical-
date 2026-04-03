import MessageBubble from './MessageBubble'
import MessageInput from './MessageInput'

function ChatWindow({ chat, onSendMessage }) {
  return (
    <section className="chat-window">
      <div className="chat-window-header">
        <div className="chat-user">
          <div className="avatar large">{chat.avatar}</div>
          <div>
            <h3>{chat.name}</h3>
            <p>{chat.status}</p>
          </div>
        </div>

        <div className="chat-actions">
          <button>📞</button>
          <button>🎥</button>
          <button>⋮</button>
        </div>
      </div>

      <div className="messages-area">
        {chat.messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>

      <MessageInput onSend={onSendMessage} />
    </section>
  )
}

export default ChatWindow